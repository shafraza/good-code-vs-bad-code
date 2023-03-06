function getUser(id) {
  const query = `SELECT * FROM users WHERE id = ${id}`;
  return db.query(query);
}


function getUser(id) {
  const query = 'SELECT * FROM users WHERE id = ?';
  return db.query(query, [id]);
}

//The bad code is vulnerable to SQL injection attacks, as it directly interpolates user input into the SQL query. The good code uses parameterized queries to prevent SQL injection attacks.

