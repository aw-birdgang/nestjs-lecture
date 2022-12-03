## script
```bash
We've now written out a tremendous amount of code inside of our project, and we've been doing only

manual testing along the way.

We're going to try to change that in this video.

We're going to start to take a look at automated testing inside of Nest.

I first want to begin by describing the different kinds of testing that we usually do inside of a nest

project.

So first we have unit testing.

This is where we take a look at just one class at a time and make sure that every method of that class

works as expected.

We also do integration or end to end testing as well.

Integration or end to end testing is where we launch a full copy of our application.

We make request to it and we ensure that we get the appropriate response back.

We're going to first focus on unit testing because you're going to understand a lot more around dependency

injection and why it exists in general once you see unit testing in action.

So with that in mind, let's go back over to our code, Ed..

A couple of things I want to show you.

The first, instead of our project directory, there is a test directory inside of this folder.

There are two different files.

Let's open up that app to ease backcourts file.

This is an example of an integration or end to end test.

So in this file, there are some code to start up a copy of our application.

So an actual Web server then make request to it and make sure we get the appropriate response back.

So we're not worried about end to end test just yet.

Instead, we're going to be writing out unit tests which are placed inside of files inside of our SAAC

directory.

A couple of unit test files have already been generated for us when we generated a couple of different

services and whatnot using the next Seelie.

So, for example, inside of the NRC user's folder, we've got the user's controller spec file.

And inside of here is a test to make sure that the controller is working as expected.

So we're going to write out a test very similar to the one that you see inside of here.

We're going to first be testing our authentication service.

So the service file right here.

Now, to test the OTT service, we're going to run into a little bit of a challenge here as soon as

we start putting together some code and whatnot, obviously, if we're going to test this thing at some

point in time, we need to create an instance of this class so we can call the different methods inside

of it.

So, for example, we need to build a call, sign up and sign in and then make sure that they return

some appropriate output.

The problem with testing this, however, is that we need to create a copy of the user service in order

to create a copy of the authentication service and in turn to make a copy of the user service.

That class right there depends upon our users repo and the users.

Repo, in turn, depends upon sequel light.

So to just test our authentication service, we start to get into this kind of dependency nightmare

once again.

So all we care about are these two methods right here.

But to just test those methods, presumably we have to create a copy of the user service and the user's

repo.

We have to worry about SQLite configuration, lot of stuff going on there.

So in order to make testing a lot more straightforward, we're going to use a little trick.

So this is a primary feature, a primary goal of dependency injection.

We're going to use the dependency injection system to avoid having to create all these different repositories,

I mean, these different dependencies.

So the trick is we are going to make a fake copy of the user's service.

So this will be a temporary class that we define inside of our test file that has only the methods we

care about defined on it.

Once we create that class, we're then going to create an instance of our authentication service using

that fake user service, or does a user service and an off service right there using the fake user service.

Now, what does that actually look like in practice?

Well, remember what goes on behind the scenes when our application runs normally when our application

normally runs, we put a bunch of classes in all their dependencies inside of our dye container.

So, for example, we've got our service and some listing says the service depends upon user service

and the user service in turn depends upon the users repo.

We are going to create a small kind of testing dye container where we kind of short circuit this entire

dependency list.

We are going to create a testing dye container.

And inside there, we're going to put in our authentication service and we're going to trick the dye

container into thinking that the service depends upon a class that you and I are going to put together.

And it's going to be a very simple, very basic implementation of the user's service.

OK, so as I start to discuss all this stuff, once again, Nest is a little bit complicated, not going

to lie.

So lot of stuff going on here at this testing setup.

And the best way to really approach this is really to just write some code.

So let's take a pause right here and start a test file for our off service in just a moment.
```
