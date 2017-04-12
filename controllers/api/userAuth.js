var User = require('../../models/user');

module.exports = function(app, passport){

//our login and signup functions

app.post('/api/signup', function(req, res, next) {
      passport.authenticate('local-signup', function(err, user, info) {
        if (err) {
          console.log(err, "IN FIRST ERR");
          return next(err);
        } else {
          if(!user){
            console.log("Email already taken error");
            res.json({message: "That email is already taken"})
          } else {
            user.save(function(e) {
              if(e){
                console.log("inside the throw error");
                throw e;
              }
              console.log(user, "inside save user success");
              res.json(user);
            })
          }
        }

      })(req, res, next);
    });
app.post('/api/login', function(req, res, next) {
  console.log("trying to find api/login")
      passport.authenticate('local-login', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.json(info); }
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          console.log("succesfully logged!", user)
          return res.json(user);
       });
     })(req, res, next);
   });
app.get('/api/get_user', function(req, res) {
    if (req.user) {
      console.log("user logged in");
      res.json (req.user)
    }else{
      res.json({message: "no logged in"})
    }
  })
};
