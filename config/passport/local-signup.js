const LocalStrategy = require('passport-local').Strategy;

module.exports = new LocalStrategy({
    usernameField: 'name',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, userID, password, done) {
    const paramBelong = req.body.belong;
    const paramPosition = req.body.position;
    const paramName = req.body.name;

    process.nextTick(function () {
        const database = req.app.get('database');

        database.UserModel.findOne({
            user_belong: paramBelong,
            user_position: paramPosition,
            user_name: paramName,
        }, async function (err, user) {
            // 에러 발생 시
            if (err)
                return done(err, null, null);
            if (user) {
                const authenticated = user.authenticate(password, user._doc.salt, user._doc.pwd_hashed);
                if (!authenticated)
                    return done(null, "비밀번호 에러", null);
                else
                    return done(null, "로그인 성공", user);
            } else {
                const newUser = new database.UserModel({
                    password: password,
                    user_belong: paramBelong,
                    user_position: paramPosition,
                    user_name: paramName,
                });

                newUser.save(function (err, result) {
                    if(err)
                        return done(err, null, null);
                    return done(null, '회원가입 완료!', result);
                })
            }
        })
    })
});
