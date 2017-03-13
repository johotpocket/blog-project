var express = require('express');
var Router = new express.Router();

Router.route('/')
  .get(function(req, res){
    res.json({message: "I am so proud of you!"})
});

module.exports = Router;
