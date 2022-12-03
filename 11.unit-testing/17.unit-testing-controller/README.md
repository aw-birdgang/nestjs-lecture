## script
```bash
I think we have enough tests around our authentication service, so we're going to move on and take

a look at testing something else inside our application.

In particular, we're going to write a couple of tests around our users controller.

Now, the users controller is going to be very interesting to test for two different reasons.

First off, the user's controller has two different dependencies.

That means we're going to have to write out a fake copy of the user service and the service.

So that means twice the amount of Mac code.

Kind of like the same thing we did around the fake user service just a moment ago when we were testing

the authentication service, that the first thing that's going to be kind of interesting.

The second thing that's going to be very interesting is that you're going to very quickly see that we

are not really writing out a lot of code or really, I should say there's not really a lot of test stuff

to test inside this controller.

So, for example, if we take a look at the who am I root handler, all this thing does is take in an

argument of a user and returns that exact argument.

So there's really not a whole lot to test there.

Your immediate response to that might be.

Well, Stephen, what about all these decorators and whatnot?

It turns out that unit testing decorator's that are hooked up to a method is actually rather challenging

with nest type script in general as well.

So whenever we unit test controller, we're not really quite so much going to test out the different

decorator's that we were applying to a method.

Instead, we can almost imagine that we're going to test everything except those decorators.

So we're left with just this right here.

And when you look at this function, again, not a whole lot to test.

Nonetheless, we're going to give this a shot and just see how far we can get writing on some tests,

even though they aren't super, super useful.

So to get started on testing the users controller, we're going to open up the users controller spec

here it is right here.

This file was generated for us automatically.

You'll notice that the contents of the file look very similar to the test file we put together just

a moment ago.

So generally same exact structure to get started inside of here at the very top.

We are going to add in a couple of different imports.

First, the users service.

Then the off service.

And finally, the user entity.

OK, so now inside the testing module right here that is being created.

And remember, we can really think of this as being an isolated dye container.

We are trying to create an instance of a user's controller.

But when we try to create an instance of that controller, we're definitely going to get an error because

inside the dye container, we have not provided anything to be used for the dependencies of that class.

Again, the controller requires a copy of users and of service, and we are currently not providing

that inside this container.

So you and I have to make a fake or mock copy of these two services and then provide those fakes to

that dye container.

Then whenever the dye container tries to create an instance of the user's controller right here, it's

going to use the two Mock's or those two fakes that we put together.

So it's the exact same setup that we did inside of our service a moment ago.

So that means essentially same exact code we had before right outside of our before each statement,

we are going to declare two variables with the letter keyword.

First will be fake users service.

That's going to be of type users service just like before you and I probably don't want to have to implement

all the different methods of that user service if they're not actually being used.

So we are going to annotate this with partial.

Remember, that means that we're only going to implement a couple of different properties or a couple

of different methods on the user service, if we did not put in the word partial, then TypeScript would

want to make sure that we implement every single method on the service correctly.

And again, we don't want to have to write out all that code.

And then going to also create fake of service.

OK, next up, inside of our before each at the very top, that's where we are going to put together

a fake definition for these two things.

It's all for, say, fake users service and then fake off service.

So now inside both these objects, we're going to put together a set of methods that will eventually

be called by our controller as we are testing it.

So we only need to implement the methods in these services that are actually used by the controller.

So at this point, we'll go back over to the controller and see what methods are these two services

are actually used to inside the controller.

We're going to find every reference or every use of user service in service inside of who am I?

I don't see any none inside of sign out.

It looks like inside of user.

We are making use of sign up on the service and sign in on the sign in handler.

So that means that if we want to test that robot handler and that route handler, you and I need to

provide a mock implementation for sign up and sign in on our fake off service.

So right away I'm going to flip back over and just kind of leave myself a note here.

I'm going to say I need to implement sign up.

And sign in and I will come back very shortly and provide an implementation for those.

Back inside the controller, I'm going to keep going through, it looks like on user service, I make

use of find one down here on user service, I make use of find.

It's going to go put those two methods Dub's in.

So find one.

And find.

Back over Kiwi bond going through, so finally, it looks like we make use of remove and update.

It's on user service.

Remove.

And update.

OK, so just to repeat myself one more time, if you want to test every handler inside of our controller,

we would need to provide some kind of implementation for all these different methods because they're

all being used inside of one of those different handlers.

If we don't want to test every single handler.

That's really fine.

We don't have to implement all these methods if we're not going to test the handler that these methods

are used in.

So, for example, if we don't want to test, sign up or sign in inside the controller, they are right

here.

So the great user and sinon methods, if we don't want to test those, that means we do not need to

provide a mock implementation of all service sign up or service sign in.

So maybe we will eventually give up and not implement all these, but for right now, let's just say

we're going to do them all.

I think at some point we'll kind of get bored and want to move on to something more interesting.

OK, so now that we know what kind of fake implementation we need to provide, let's take a pause right

here.

We'll come back in just a moment and start putting in some mock implementation for each of these.
```
