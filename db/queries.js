const pool = require("./pool");

async function insertMember(username, password) {
  await pool.query("INSERT INTO members (username, password) VALUES($1, $2)", [
    username,
    password,
  ]);
}

async function memberSearch(username) {
  const { rows } = await pool.query(
    "SELECT * FROM members WHERE username = $1",
    [username]
  );
  const user = rows[0];
  return user;
}

async function memberSearchID(id) {
  const { rows } = await pool.query("SELECT * FROM members WHERE id = $1", [
    id,
  ]);
  const user = rows[0];
  return user;
}

async function insertPost(username, user_id, content) {
  pool.query("INSERT INTO posts (username, user_id, content) VALUES ($1, $2, $3)", [username, user_id, content]);
}

async function retrievePosts() {
    const { rows } = await pool.query("SELECT * FROM posts");
    return rows;
}

async function upgradeMember(id) {
  pool.query("UPDATE members SET member = TRUE WHERE id=($1)", [id])
}

module.exports = { insertMember, memberSearch, memberSearchID, insertPost, retrievePosts, upgradeMember };
