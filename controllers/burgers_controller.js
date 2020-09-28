const express = require('express');

const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req, res)=>{
  res.redirect('/burgers');
});

router.get('/burgers', (req, res)=>{
  burger.selectAll((data)=>{
    res.render('index', { burgers: data });
  });
});

router.post('/api/burgers/', (req, res)=>{
  burger.insertOne(req.body.burger_name, (result)=>{
    console.log(result);
    res.redirect('/');
  });
});

router.put('/api/burgers/:id', (req, res)=>{
  burger.updateOne(req.params.id, (result)=>{
    console.log(result);
    res.sendStatus(200);
  });
});

module.exports = router;