//var express = require('express');
//var Router = new express.Router();
const Post = require ('../../models/post');
const Comment = require ('../../models/comments');

exports.all = (req, res) => {
  Post.find()
  .populate('comments')
  .exec((err, postData) =>{
    if(err){
      res.status(500).send(err, "error finding all posts");
    } else {
      res.json(postData);
    }
  })
}

exports.create = (req, res) =>{
  let newPost = new Post();
  newPost.content = req.body.content;
  newPost.title = req.body.title;

  console.log(newPost, "ABOUT TO SAVE NEW POST");

  newPost.save((err, data) =>{
    if(err){
      res.send(err);
    } else {
      res.json({data: data, message: "post successfully added!"});
    }
  })
}

exports.getOne = (req, res) => {
  Post.findById(req.params.post_id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
};

exports.adios = (req, res) =>{
  Post.remove({ _id: req.params.post_id }, (err, data) =>{
    if(err){
      res.send(err);
    } else {
      res.json({message: "successfully deleted the blog entry!"})
    }
  })
}

exports.edit = (req, res) =>{
  Post.findById(req.params.post_id, (err, post) =>{
    if(err){
      res.send(err);
    } else {
      post.content = req.body.content ? req.body.content: post.content;
      post.title = req.body.title ? req.body.title: post.title;

      post.save((err, updatedPost) =>{
        if(err){
            console.log(err);
        } else {
          res.json({updatedPost, message: "Post Updated!"});
        }
      });

    }
  })
};

exports.createComment = (req, res) => {
  var testUserId = '58f521e75398b79657ac58a1'
  var comment = new Comment();
  comment.content = req.body.content;
  comment.author = req.user ? req.user._id : testUserId;

  comment.save((err, comment) => {
    Post.findById(req.params.post_id, (err, post) => {
      if (err) {
        res.send(err);
      } else {
        post.comments.push(comment._id);
        post.save((err, post) => {
          if (err) {
            res.send(err);
          } else {
            res.json(post);
          }
        });
      }
    });
  });
};



//our CRUD functions. get, delete, and so on.
//we can chain call types together under a single thing here.
// Router.route('/')
//   .get(//function(req, res){
//     Post.find(function(err, postData){
//       if(err){
//         console.log("error finding your posts!")
//       } else {
//         res.json(postData);
//       }
//     })
//   })
//
//   .post(function(req, res){
//     var newPost = new Post();
//     newPost.content = req.body.content;
//     newPost.title = req.body.title;
//
//     console.log(newPost, "ABOUT TO SAVE NEW POST");
//
//     newPost.save(function(err, data){
//       if(err){
//         console.log(err);
//       } else {
//         res.json(data);
//       }
//     })
//   });
//
// Router.route('/:post_id')
//   .get(function(req, res){
//     Post.findById(req.params.post_id, function(err, data){
//       if(err){
//         console.log(err);
//       } else {
//         res.json(data);
//       }
//     })
//   })
//   .delete(function(req, res){
//     Post.remove({ _id: req.params.post_id }, function(err){
//       if(err){
//         console.log(err)
//       } else {
//         res.json({message: "successfully deleted the blog entry!"})
//       }
//     })
//   })
  //.put(function(req, res){
  //   Post.findById(req.params.post_id, function(err, post){
  //     if(err){
  //       console.log(err)
  //     } else {
  //       post.content = req.body.content ? req.body.content: post.content;
  //       post.title = req.body.title ? req.body.title: post.title;
  //
  //       post.save(function(err, updatedPost){
  //         if(err){
  //           console.log(err)
  //         } else {
  //           res.json(updatedPost);
  //         }
  //       });
  //
  //     }
  //   })
  // });
