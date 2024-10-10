const db = require('../db/queries')
const passport = require("passport");
const dayjs = require('dayjs')

async function DisplayHome(req, res) {
    const rows = await db.retrievePosts();
    const formmatedRows = rows.map((user) => {
        return {
            ...user, created_at: dayjs(user.created_at).format('MM/DD/YYYY hh:mm A')
        }
    })
    res.render("index", {user: req.user, rows: formmatedRows});
}

function handleLogin(req, res, next) {
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/"
    })(req, res, next);
}


module.exports = { DisplayHome, handleLogin };