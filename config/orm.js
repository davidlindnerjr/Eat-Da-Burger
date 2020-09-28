let connection = require("./connection.js");

function questionMarks(num){
  let arr = [];

  for (let i = 0; i < num; i++){
    arr.push('?');
  }
  return arr.toString();
}

function objToSql(ob){
  let arr = [];

  for (let key in ob) {
    arr.push(key + "=" + ob[key]);
  }
  return arr.toString();
}

let orm = {
  selectAll: (tableInput, cb)=>{
    let queryString = 'SELECT * FROM ' + tableInput + ';';
    connection.query(queryString, (err, result)=>{
      if(err)throw err;
      cb(result);
    });
  },
  insertOne: (table, cols, vals, cb)=>{
    let queryString = "INSERT INTO " + table;

    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += questionMarks(vals.length);
    queryString += ') ';

    console.log(queryString);

    connection.query(queryString, vals, (err, result)=>{
      if(err)throw err;
      cb(result);
    });
  },

  updateOne: (table, objColVals, condition, cb)=>{
    let queryString = 'UPDATE ' + table;

    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, result)=>{
      if(err)throw err;
      cb(result);
    });
  }
};

module.exports = orm;