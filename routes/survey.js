const Excel = require('exceljs');

module.exports = function (router, passport) {

    router.get('/', function (req, res) {
        res.render('index');
    });

    router.post('/signup', function (req, res, next) {
        passport.authenticate('local_signup', {
            failureFlash: true
        }, function (err, message, user) {
            if(err)
                throw err;
            if (message === "회원가입 완료!" || message === "로그인 성공") {
                req.login(user, function (err) {
                    if (err)
                        throw err;
                    res.redirect("/survey/1");
                });
            } else {
                res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
                res.write('<script type="text/javascript">alert("비밀번호가 일치하지 않습니다.");window.location="/";</script>');
                res.end();
            }
        })(req, res, next);

    });

    router.get('/survey', function(req, res){
        if(!req.user)
            return res.redirect('/');
        return res.redirect('/survey/1');
    });

    router.get('/survey/:page', function(req, res){
        if(!req.user)
            return res.redirect('/');

        const database = req.app.get('database');
        database.SurveyModel.find({
            sv_user_id: req.user.user_id
        }, (err, result) => {
            const page = result.length+1;
            if(page >= 60)
                return res.render('done');
            res.render('survey', {page: page});
        });
    });

    router.get('/admin', function(req, res){
        const database = req.app.get('database');
        database.UserModel.find({}, (err, results) => {
            res.render('admin', {user: results});
        })
    });

    router.get('/download/:id', function(req, res){
        const database = req.app.get('database');
        const id = req.params.id;

        database.SurveyModel.find({
            'sv_user_id': id
        }).sort({sv_num: 1}).exec((err, result) => {
            const workbook = new Excel.Workbook();
            const worksheet = workbook.addWorksheet('설문 결과');
            worksheet.columns = [
                { header: 'SOUND_NUM', key: 'sv_num'},
                { header: 'Q1-AROUSAL', key: 'q1_1'},
                { header: 'Q1-VALENCE', key: 'q1_2'},
                { header: 'Q2', key: 'q2'},
                { header: 'Q3-1', key: 'q3_1'},
                { header: 'Q3-2', key: 'q3_2'},
                { header: 'Q3-3', key: 'q3_3'},
                { header: 'Q3-4', key: 'q3_4'},
                { header: 'Q3-5', key: 'q3_5'},
                { header: 'Q3-6', key: 'q3_6'},
                { header: 'Q4', key: 'q4' },
            ];
            result.reduce(function (total, item) {
                return total.then(async function () {
                    worksheet.addRow({
                        'sv_num': item.sv_num,
                        'q1_1': item.sv_arousal,
                        'q1_2': item.sv_valence,
                        'q2': item.sv_emotion,
                        'q3_1': parseInt(item.sv_question["1"]),
                        'q3_2': parseInt(item.sv_question["2"]),
                        'q3_3': parseInt(item.sv_question["3"]),
                        'q3_4': parseInt(item.sv_question["4"]),
                        'q3_5': parseInt(item.sv_question["5"]),
                        'q3_6': parseInt(item.sv_question["6"]),
                        'q4': item.sv_detail,
                    });
                })
            }, Promise.resolve()).then(function () {
                workbook.xlsx.writeBuffer().then((buffer) => {
                    res.json(new Buffer(buffer, 'array'));
                });
            });
        })
    });

    router.post('/survey', function (req, res) {
        if(!req.user)
            return res.redirect('/');

        const database = req.app.get('database');
        const page = req.body.page;
        const arousal = req.body.arousal.split("ar")[1];
        const valence = req.body.valence.split("va")[1];
        const emotion = req.body.emotion;
        const detail = req.body.detail;
        const question = JSON.parse(req.body.question);

        const newSurvey = new database.SurveyModel({
            sv_num: page,
            sv_user_id: req.user.user_id,
            sv_arousal: arousal,
            sv_valence: valence,
            sv_emotion: emotion,
            sv_question: question,
            sv_detail: detail,
        });

        newSurvey.save(function(err){
            res.json(parseInt(page)+1);
        })
    })
};