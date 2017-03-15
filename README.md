___Blog Project___

the goal of this project is to create a basic blogging website.

- CRUD: implementing modifiable entries for the blog

- Multiple pages: About me, Home, Blog, View One Blog, Create new entry for Blog

- index.js is what our html page renders

- using gomockingbird, we created a rough wireframe for what we want the site to look like.

- our blog page should have submit functionality, as well as as a comments section

___

We'll Be following an IRL path of sticky notes for our worklog. We will be attempting to avoid:

- Feature Creep

- Adding tasks that our too large to do within a few hours at a time

- "Going down the rabbit hole": jumping from one problem to the next, to the next, to the next, without ever really solving anything

---

After some construction, we refactored: files of similar function went into folders. This makes things much cleaner.

---

Some file paths of note:

- PostCard is exported to PostList

- PostList is exported to AllPostsContainer

-AllPostsContainer is exported to index.js, along with just about everything else. index.js shows our routes.

---
