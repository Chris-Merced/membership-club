const passport = require("passport");

function DisplayHome(req, res) {
    res.render("index");
}

function handleLogin(req, res, next) {
    console.log("handleLogin");
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/"
    })(req, res, next);
}


module.exports = { DisplayHome, handleLogin };