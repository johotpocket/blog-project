# Blog Project

the goal of this project is to create a basic blogging website.

__step one: building the basic skeleton (or wireframe) of our site__

for this step, we used a website called "gomockingbird" to throw together a mockup of what we wanted our site to look like. This isn't a functional version of our site, but it's very important to plan out a design before we start coding. Feature Creep is a scary thing.

our website will have:

- a home page
- an "about me" page
- a blog main view page (listing all the blog posts, each with an edit and a delete button. there will also be a "submit new post" button that leads to a submit page)
- a blog post single view page (showing just one post and its contents)
- a new post page (to submit a new entry)
- a blog post edit page (a new post form, but with the post's contents in the parameters for us to edit)


__step two: creating a react app__

if you haven't yet, install react through npm (Node Project Manager.

`npm install -g create-react-app`

the `-g` means global. if the above command doesn't work, you probably need to put `sudo` in front of your line and then enter your computer's password.

now, go to your desired directory and make a new react app.

`create-react-app my-app`

after that's done (it'll take a bit), go into the new folder it's made and `npm start`. This will launch a server that you can visit at http://localhost:3000


__step three: installing node packages__

`npm install --save "whatever the name of the package is"`

after you install each one, check your root folder's package.json to make sure it's there.

these are node modules that add certain functionalities to our project. We could make them ourselves, but others have already done the work for us. Countless hours of work avoided.


__step four: creating components__


Some file paths of note:

- PostCard is exported to PostList

- PostList is exported to AllPostsContainer

-AllPostsContainer is exported to index.js, along with just about everything else. index.js shows our routes.

-for posting blogs, we added markdown functionality. Our posts now display using markdown formatting, and accept markdown formatting in our edit page.

---
