const pool = require('./pool')

async function insertMember(username, password) {
    await pool.query("INSERT INTO members (username, password) VALUES($1, $2)", [username, password])
}

async function memberSearch(username) {
    const { rows } = await pool.query("SELECT * FROM members WHERE username = $1", [username]);
    const user = rows[0];
    return user;
}

async function memberSearchID(id) {
    const { rows } = await pool.query("SELECT * FROM members WHERE id = $1", [id]);
    const user = rows[0];
    return user;
}
module.exports = { insertMember, memberSearch };