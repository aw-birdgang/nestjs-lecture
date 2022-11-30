## script
```bash
That is it for our first project, I know this was a very small project, and so it might feel like

we created a lot of different files and just kind of threw it all away very quickly.

But there is a really good reason.

We started off with this project.

As soon as we make use of the Nest, Clyde, to generate a project for us, it is going to create many

different files and folders.

And all these files and folders are going to be a little bit confusing.

So I just want you to have one very simple project where you can see how little code it takes to get

nest up and running.

OK, so in this video, we're going to generate a new project using the nest.

Seelie will then discuss exactly what this project is going to do for us.

So to get started, I'm going to close out this code editor, go back to my terminal and I'm going to

stop that running server.

I'll then change back to any workspace directory on my computer, so this can be any folder on your

machine where you want to play some amount of code, we're then going to run the command that is going

to install the nest zeolite globally.

So I'm going to run and install Dadge at Nest, James Seelie.

If you run it this command and you get an error, I would recommend either pre pending pseudo.

Onto the command or alternatively, you could try to run the command through Northparkes.

OK, so I'm going to install that, and in my case, I sure enough, do you get an error here?

So I'm just going to rerun it very quickly with pseudo depended on.

All right.

Much better now that I have installed initially, I'm going to use it to generate a new project, to

generate a new project, we'll run Nest New and then the name of our project is first project is going

to be all about storing messages.

So it's going to be a pretty simple and straightforward app.

So I'm going to call this application simply messages.

I'm going to run that command will then be prompted with a couple of different questions.

If you have more than one package manager installed on your computer, you'll be prompted on which one

you want to use.

The purposes of this course, I'm going to use NPM, which is likely what you're going to want to use

as well.

Well, then go ahead and hit enter.

After that, it's going to take a couple of minutes to install a bunch of different dependencies.

So all that's going on, let's very quickly talk about the application we are going to build.

All right.

So here's the goal of our application.

As I mentioned, it's going to be pretty simple and straightforward.

We are going to store and retrieve messages that are stored inside of a plain JSON file inside of our

project directory.

Now, a message is really just a very simple string.

So we are storing strings and retrieving strings out of a plane JSON file, and that's pretty much it.

So in total, we're going to have three routes to find inside of our.

We're going to have one route to list all the messages that we have ever saved, will have one route

to retrieve a message by its ID and one route to create a message as well.

For each of these different routes.

We're going to go through a series of diagrams and we're going to try to think about what different

types of classes we need to create to service each of these different routes.

So let's go through one example of this, and I think you'll get the idea very quickly.

So the first route we're going to consider is a request that is a get type request to approve of something

like localhost three thousand messages.

And as you guess, if someone makes a request to that route, we probably want to get a list of messages

and send them back to whoever made that request.

So given a request like this, what are the different things that we were going to have to create?

In this case, we don't really have any data that we need to validate, there's no data inside this

request, so I don't think we need a pipe or anything like that.

We've also not said anything about handling user authentication or authorization, so I don't think

we need a guard.

But we do want to have something to root that request to a particular function, so I think we will

want to have a controller.

We probably also want to have some logic that will try to reach into the database or access the repository

and get a list of all these messages.

So we probably do need a service.

And then finally, although we don't have strictly a database per say, like a school type database

or a Mongo database or something like that, we are going to treat that file where we store all these

messages as our database.

So I think we need a repository to represent that file where we store all these messages.

So in total for this first request right here, we definitely need at least one controller service and

repository.

OK, let's repeat this process for our other two requests very quickly.

The request to create a message, I think that a request to create a message will look like this would

probably be a post request to send messages and it will probably be a body on the request as well that

has the content of the message that this user wants to add.

So in this case, we do have some incoming data.

It's the body of the request.

And we might want to validate this data right here and make sure that it has a content property that

is a string.

Maybe we also want to make sure that this string is not too long or anything like that.

So in this case, I think we do need a pipe.

However, we don't have any authentication still.

So I think we do not need a guard.

But we still need to have some routine logic.

We still need a service to actually try to create the message and we still need a repository where we

can store the message itself.

So in total, we definitely need a pipe, a controller, a service and a repository.

Now, there's something I want to clarify right away and be really clear between these two diagrams.

I have said that for this first request, we need a controller service and repository.

And for the second one, I said we need a pipe, controller service and repository.

This doesn't mean that we're going to create two controllers and two services and two repositories.

We're only going to make one controller, one service and repository to service all these different

requests.

My only goal right now is to say to you or convey the fact that we need to think about how we're going

to handle each of these different requests and what different parts or what different things we need

to create to handle them all.

So in total, we're only going to make one controller service and repository.

All right, onto the last one.

So if a user wants to get a message with a particular ID, we'll probably have them make a request like

this request to local three thousand messages.

And then whatever the ID is, it's now in this case, once again, I don't think we need a pipe.

I don't think we need a guard, but I think we do need a controller as a service and repository.

All right, so in total, between these three different requests, we've established that we definitely

do not need a guard in any case.

But we do need a pipe, we need a controller, we need a service and a repository.

We're going to name the controller, something like messages controller, because that's going to make

it very clear that this is a controller related to handling messages or requests around messages will

name the service something like messages service to make it very clear this is a service around handling

messages.

And finally for Repository will probably end up with the name like messages repository or something

very similar to it.

Finally, one more thing that we haven't really discussed yet.

A module.

We make you some modules to wrap up sets of functionality or kind of groups of different classes inside

of application.

So we're going to also create a module that's going to wrap up our controller service repository and

any pipe related stuff as well.

We'll call this either our app module or messages module if it will figure out what an appropriate name

is in just a moment.

All right, so that's it.

That's what we're going to create to build this application.

I know this has been a long video.

I apologize for that, but I just want to make sure is super crystal clear what each of these different

things are going to be doing for us.

Well, back over at my terminal, it looks like the application has been set up correctly and successfully.

So let's take a pause right here and then we'll start doing some development on our app in just a moment.
```
