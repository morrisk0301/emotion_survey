const LocalStrategy = require('passport-local').Strategy;

module.exports = new LocalStrategy({
    usernameField : 'name',
    passwordField : 'password',
    passReqToCallback : true   // 이 옵션을 설정하면 아래 콜백 함수의 첫번째 파라미터로 req 객체 전달됨
}, function(req, userID, password, done) {
    console.log('passport의 local-login 호출됨 : ' + userID);

    const database = req.app.get('database');
    const paramBelong = req.body.belong;
    const paramPosition = req.body.position;
    const paramName = req.body.name;

    database.UserModel.findOne({
        user_belong: paramBelong,
        user_position: paramPosition,
        user_name: paramName,
    }, function(err, user) {
        if (err)
            throw err;

        const authenticated = user.authenticate(password, user._doc.salt, user._doc.pwd_hashed);

        if (!authenticated)
            return done(null, null, "비밀번호 에러");
        else
            return done(null, user, "로그인 성공");
    });
});

