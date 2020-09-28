const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  port: 3306,
  user: "b5fc51ef35f10a",
  password: "c9da2d0c",
  database: "burgers_db"
});


connection.connect(function(err) {
  if(err)throw err;
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
