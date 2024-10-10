const db = require("../db/queries");

async function submitPost(req, res) {
  console.log(req.body.username, req.body.user_id, req.body.content);
  await db.insertPost(req.body.username, req.body.user_id, req.body.content);
  res.redirect("/");
}

module.exports = { submitPost };
