const db = require('../db/queries')
const bcrypt = require('bcryptjs');

function displaySignup(req, res) {
    res.render('sign-up');
}

function insertMember(req, res, next) {    
    try {
        bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
            if (err) {
                throw new console.error("bad password");
            }

            db.insertMember(req.body.username, hashedPassword);
            res.redirect('/');
        })

    } catch (err) {
        next(err);
    }
}

module.exports = { displaySignup, insertMember };