const orm = require("../config/orm.js");

let burger = {
  selectAll: (cb)=>{
    orm.selectAll('burgers', (res)=>cb(res));
  },
  insertOne: (name, cb)=>{
    orm.insertOne('burgers', ['burger_name', 'devoured'], [name, false], cb);
  },
  updateOne: (id, cb)=>{
    let condition = 'id=' + id;
    orm.updateOne('burgers', { devoured: true}, condition, cb);
  }
};

module.exports = burger;
