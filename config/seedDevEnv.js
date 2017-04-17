const faker = require('faker');
const Post  = require('../models/post')

exports.seed = () => {

  for (var i = 0; i < 10; i++) {
    var post = new Post ({ title: faker.lorem.words(), content: faker.lorem.paragraphs() })

    post.save((err, data) => {
      if(err){
        console.log(err)
      }else{
        console.log("successfully added a bunch of these things")
      }
    })
  }
}
