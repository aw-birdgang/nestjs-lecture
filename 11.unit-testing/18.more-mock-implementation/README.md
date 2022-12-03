## script
```bash
All right, let's take a stab at putting together a mock implementation for each of these different

methods.

Remember, right now we're getting an air from each of them because TypeScript is making sure that we

are correctly implementing the find one method as it is defined by the real user service.

So if we want to correctly implement these different methods, we can hover over each of them and will

tell us exactly what we need to do.

So on find one, we are being told that we have a function that takes no arguments and doesn't return

anything.

If we want to correctly implement find one, we need to receive an idea that's number and then return

a promise that eventually resolves with a user.

So to provide a possible mock implementation of find one, I would put in that I'm going to receive

an ID that is a number and then I'm going to return promise dot resolve and I'm going to resolve with

something that satisfies the user entity interface.

So I'm going to put in about just the ID that was actually passed into the function, I'll give it an

email.

And a password.

Once again, we're going to run into the same error here because our actual user entity has a couple

of methods attached to it as well.

I don't want to have to implement those different methods.

So I'm going to tell TypeScript to just treat this object right here as a real instance of a user entity.

We'll do that by putting in as user.

So we have now satisfied the find one function and so we don't get any error anymore, we have correctly

implemented that function.

Now, remember, it's totally up to you how you implement the function.

We are taking in an idea right here and presumably from something like a find one function, we would

find a user with exactly that ID.

But if you return a user that had a totally different ID, well then this function doesn't really make

a lot of sense or the mock implementation doesn't make a lot of sense.

So it's really up to you to take a look at the arguments that are coming in and decide how to return

some kind of value here.

That kind of makes sense in the context of a test.

Let's go through one or two more really quickly and then start to put a test or two together, so how

about find?

To implement fines, we're going to take in an email that's a string and then return an array of users,

so I'm going to provide a mock implementation.

Of an email that's a string I'm going to return promised to resolve.

I'm going to resolve within array.

That has an object in it, so one single user, I'm going to give it a made up number, I'm going to

give it the exact same email that was passed into the function.

And then just some random password.

And then once again, I'm going to tell TypeScript a treat this thing as though it were user.

It looks like that's good enough for faint, so at this point time, hopefully you might be getting

the idea of what we're doing inside these different mock functions right now.

However, I think that we've gone through enough of these.

Let's just run with find one and find right now, while providing an implementation for these two methods,

that means that we can successfully test inside of our controller.

The find use a route handler and the find all the users root handler so we can at least test these two

with just the partial marks we have put together, because those two handlers only make use of find

one and find.

So right now, I'm going to comment about.

Back inside of our test file, remove an update, I'm going to come out, sign up and sign in.

Now that we've got our Mock's set up, we need to add them into our dye container and we need to make

sure it's really clear to the dye container that any time that our users controller tries to find a

copy of the user service, we wanted to use this mug.

And any time our users control the users control, I say users or user service users, controller,

whenever our users controller tries to find a copy of the user service, we're going to use this mock.

Whenever the user's controller tries to find a copy of the service, we're going to use this mock.

So to set all that up inside of our testing module down here, we're going to add in a list of providers.

And remember, we're going to put in a set of objects here.

Each object is going to say whenever someone asks for the user's service, give them the value, make

users service.

And that should not be providers should be just provide.

So that's a little redirect or the little trick whenever the user's controller is created and we try

to pass it, something to use for its user service dependency, instead of giving it an actual copy

of user service, give it the object we just put together.

So then repeat the same process will say provide the other service and in place of it.

Use the value of service.

OK, so that should be good enough, good enough at least to get the first test up and running, the

first test that was created for us automatically, just make sure that the controller actually gets

created successfully.

Let's now save this file.

We'll go back over to our terminal and we're going to try to run just this user's controller spec tobacco

inside my terminal.

Right now, we are doing a filter test, so we're only running files with the name of off service.

So to change that out, I can press w I'm going to press E to do another filter and I'm going to run

all my different test files with users.

Dot controller in the name.

So that should only find our one single speck and sure enough, it looks like it's passing very good.

OK, so that means that we are now successfully creating a copy of our controller and it's making use

of these two mock objects we've put together.

So now we can start to put a couple of different tests together inside of here and make sure that at

least our final user and find all users methods are working as expected.

So let's give that a shot in just a moment.
```
