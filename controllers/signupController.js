const db = require("../db/queries");
const bcrypt = require("bcryptjs");

function displaySignup(req, res) {
  res.render("sign-up", {errorMessage: null});
}

async function insertMember(req, res, next) {
  try {
    const user = await db.memberSearch(req.body.username);
    if (user) {
      return res.render("sign-up", { errorMessage: "Sorry that username is taken!" });
    }
    if (req.body.password === "") {
      return res.render("sign-up", { errorMessage: "Insufficient Password" });
    }

    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      if (err) {
        throw new console.error("bad password");
      }

      db.insertMember(req.body.username, hashedPassword);
      res.redirect("/");
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { displaySignup, insertMember };
