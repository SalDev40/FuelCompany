const mysql = require("mysql2");

const pool = mysql.createPool(
  (configs = {
    host: "localhost",
    user: "root",
    password: "",
  })
);

module.exports = pool.promise();
