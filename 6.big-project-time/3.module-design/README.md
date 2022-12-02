## script
```bash
Let's do just one last video on some high level design of our application.

Now, we've seen all these different routes.

Let's think about the different controllers, services and repositories we're probably going to have

to create.

As I read through all these different routes right here and their purposes, it looks like we've got

to kind of general goals inside of rap right now.

We've got some routes related to handling users and authentication, and we have some routes related

to handling and creating reports.

So I think that a good place to get started would be to assume that we have one controller related to

handling users.

Maybe we need a single service.

To handle data access and business logic around those users, we should probably have a repository.

That will handle the storage of these users in some kind of database, and then we're going to have

a very similar structure for handling all of our different ports as well.

So we probably want to have a reports controller, a reports service and a reports repository whenever

you are starting off your own nest application.

This is a pretty safe way to get started, identify the different kinds of resources that you have inside

your application.

So in our case, we definitely have a resource like users and a resource of reports.

Once you've identified those different resources, we can generally assume that we probably want to

have a controller, a service and a repository for each of them.

Once we've identified these different controllers, services and repositories, we're then going to

very frequently group these different things together into their own separate modules.

So we are going to have a user's module.

And a reports.

Module as well, we haven't really gone too much into modules just yet at this point, the course I've

set around them is that we use them to kind of wrap up different things we create inside of application.

So one of the big focuses on this application is going to be why we create modules, how we share a

code between them and stuff like that.

So when I put on these modules on here, if you're saying why do these modules exist, don't sweat it.

We're going to go into great detail around that.

So once again, this is a great place to get started.

When you were beginning your own application, just assume that you're going to create a module for

each separate resource and each module can have a controller, a service and repository to manage that

kind of data or that resource that you're dealing with.

Now, as I mentioned, as we start building this application, we are going to realize that there are

some different routes that we need to create and there are some other kinds of data that we need to

add into our application as well.

So we are going to have to come back and tweak this set up a little bit.

But once again, it's a good place to get started.

All right.

So now we've got a little bit of a place to get started here, at least some idea.

Let's take up one last pause.

We're going to come back to the next video and we're going to start generating some code to implement

these different pieces.

We're also going to start to take a look at how we're going to implement our different repositories,

because this time around, we're not going to store data inside of a plain file.

We're going to instead use a very real database.

So a lot of stuff to come.

Let's start writing some code in the next video.
```
