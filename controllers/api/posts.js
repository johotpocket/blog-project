//var express = require('express');
//var Router = new express.Router();
var Post = require ('../../models/post')

exports.all = function(req, res){
  Post.find(function(err, postData){
    if(!postData) return res.status(404).send("no posts found");
    if(err){
      res.status(500).send(err, "error finding all posts");
    } else {
      res.json(postData);
    }
  })
}

exports.create = function(req, res){
  var newPost = new Post();
  newPost.content = req.body.content;
  newPost.title = req.body.title;

  console.log(newPost, "ABOUT TO SAVE NEW POST");

  newPost.save(function(err, data){
    if(!data) return res.status(404).send("failure creating post");
    if(err){
      res.status(500).send(err, "error making a post");
    } else {
      res.json(data);
    }
  })
}

exports.getOne = function(req, res){
  Post.findById(req.params.post_id, function(err, data){
    if(!data) return res.status(404).send("failure finding post");
    if(err){
      res.status(500).send(err, "error finding that post");
    } else {
      res.json(data);
    }
  })
}

exports.adios = function(req, res){
  Post.remove({ _id: req.params.post_id }, function(err, data){
    if(!data) return res.status(404).send("failure to eradicate");
    if(err){
      res.status(500).send(err, "can't do it");
    } else {
      res.json({message: "successfully deleted the blog entry!"})
    }
  })
}

exports.edit = function(req, res){
  Post.findById(req.params.post_id, function(err, post){
    if(!post) {
      res.status(404).send("failure to edit");
    }
    if(err){
      res.status(500).send(err, "can't do it");
    } else {
      post.content = req.body.content ? req.body.content: post.content;
      post.title = req.body.title ? req.body.title: post.title;

      post.save(function(err, updatedPost){
        if(err){
          console.log(err)
        } else {
          res.json(updatedPost);
        }
      });

    }
  })
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
