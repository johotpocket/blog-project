var express = require('express');
var Router = new express.Router();
var Post = require ('../models/post')

Router.route('/')
  .get(function(req, res){
    Post.find(function(err, postData){
      if(err){
        console.log("error finding your posts!")
      } else {
        res.json(postData);
      }
    })
  })

  .post(function(req, res){
    var newPost = new Post();
    newPost.content = req.body.content;
    newPost.title = req.body.title;

    console.log(newPost, "ABOUT TO SAVE NEW POST");

    newPost.save(function(err, data){
      if(err){
        console.log(err);
      } else {
        res.json(data);
      }
    })
  })




module.exports = Router;
