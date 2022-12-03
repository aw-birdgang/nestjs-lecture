## script
```bash
Let's get started on some tests for our authentication service to get started inside my user's directory,

I'm going to first create a new file with the name of of that service expects.

So, as you guessed, we're going to play some number of tests for the authentication service inside

this spec file.

At the very top, we will immediately add in a couple of different imports.

So I'm going to get test from Nest James testing.

Well, then get off service.

And then finally, users service as well.

Then inside of here, we're going to first right out the absolute minimum amount of code required to

test out our service will then start to refactored a little bit into something that's a little bit more

scalable, something that will allow us to write more complex tests a little bit more easily.

So in other words, our first test is not going to look like some of the tests that you might see inside

the other spec files that were generated inside of our project.

We are going to very quickly refactor all this stuff to look very similar to those other files.

So instead of your first thing we're going to do is write out a test block.

So we're going to say it can create an instance of of service.

So the goal of this test is to just say, hey, you know what?

We can create a copy of the service.

We can get one up and running.

We're going to put in a eral function as the second argument and we'll apply the async word to it.

So then instead of here, we're going to first create this temporary testing dye container where we

are going to load up some classes like, say, the off service and some fake implementations of some

other classes as well.

So we'll ride out module is a weight testing diet, create testing module.

We're going to put in a configuration object and I put testing right there, that should be just test

by itself, that's better.

We're going to put in a configuration object.

I'm going to add in providers of off service.

Then on this closing parenthesis right here, I'm going to call compile.

After we then create the module, I'm going to try to reach into this DYI container because that's what

we really just created.

We just made a container of sorts.

I'm going to try to reach into it and get a copy of the authentication service.

So I'm going to do that by writing service is module get off service.

So in theory, this right here is going to cause Ardai container to create a new instance of the authentication

service with all of its different dependencies already initialized.

Of course, we have not set up any dependencies for the service yet.

So if we were to run this code right now, I would expect to probably see an error message.

Finally, after recreate the service, I'm just going to say expect service to be defined, so it's

going to make sure that we successfully created the service right here and it is defined in some way

inside this test.

All right, once again, we have created a new dye container with this block of code, but if we try

to run this test right now and create an instance of the authentication service, we will get an error

because we are not providing anything for the services dependency.

I want you to see that er very quickly and will eventually fix here, of course, and make the error

go away.

So to run our tests, I'm going to go back over to my terminal.

And inside of a new terminal window inside of my project directory, I'm going to run NPM run test Colen

Watch.

There are several other spec files we have inside of our project, and those are currently all going

to be failing as well.

Right now, I want to only work on our authentication spec file.

So to make sure I just run that one single file, I'm going to press key verse me, pee on my keyboard

so I can press P, and then I'm going to write in just a partial snippet of the file name that we want

to run.

So in this case, I want to run my off service spec file.

So when I put this in, the test runner is going to find all the different files with that name in it

and run just those test files.

So now I've got just the one test while running and only the one test is failing.

OK, let's scroll up and take a look at this.

So at this point time, well, OK, the error is kind of what we'd expect here next.

Cannot figure out how to create a copy of the service because we have not provided all the different

dependencies of the authentication service in this case.

We said that the authentication service needs a copy of user service, but we just didn't provide it.

So we're going to go back over to Ed right now, we're going to update our test file and we're going

to solve this issue.

The code we're going to write, I can guarantee, is going to be challenging.

I can guarantee it.

So we're just going to write out the code for right now.

We'll then come back the next video and take a look at what we actually did.

OK, so back over inside my editor, right above that module line.

This is where we are going to create a fake copy of the user's service.

And then going to create a new object called Fake Users Service.

I'm going to give it to properties, the first one is going to be called Find, this will be a function

that is going to return, promise, dot, resolve.

And then inside there, I'm going to put in an empty array.

After that, I'll then define a create property, I'm going to give this a function as well.

It's going to take in an email and a password that are both of type string.

Going to make sure I imitate both those.

That's better.

And then inside that function, we're going to return promise to resolve.

I'm going to put in an object with an idea of one.

Email and password like so.

OK.

Now, to wrap this up, one last step I'm going to find the providers are right here.

I'm going to give myself a little bit of space.

And then as a second element inside that array, I'm going to put in an object with a provide property

of users service and a use value property of fake users service.

OK, so at this point, I got to ask you, please, double check all your code, I'm going to add in

a new line right here temperately just you can see that entire function.

So we've got find and create.

They should both be functions that return promise to our resolve and promise to resolve.

First one has the second one is an object with a couple of different properties.

Then also double check the object down here with provide and use value.

OK, finally, we're going to save this and remember, our tests were failing just a moment ago, so

let's now go back over to our terminal and see how our tests are doing now.

Sure enough, it looks like our tests are passing, which is kind of good and kind of bad.

It's good because, hey, our tests are passing, but it's kind of bad because what in the world is

going on with this code?

Well, like I mentioned, this is where Nasta gets just a little bit confusing.

So let's take a pause right here and come back in just a moment and really understand what this object

right here is doing and what that object right there is doing as well.
```
