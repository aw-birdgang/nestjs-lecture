## script
```bash
The next thing I would like to test in sidebar authentication service is to make sure that whenever

we call sign up, if someone is already using that email, we should throw in air.

So I want to test that.

I want to make sure that we correctly throw some kind of error message.

So let's go and write a test that's going to do so.

We're going to very quickly realize that writing a test like this is actually going to kind of conflict

with the one we already put together.

But let's just write out some code first.

I'm going to say it throws and er if user signs up with email, that is in use.

OK, so then inside of here, I'm going to try to call.

Service sign up with an email, hopefully, that is in use.

Now, here's a question, how do we actually make sure that email is in use, OK?

We need to trace through the execution of code inside of our test suite right now.

So whenever you and I call sign up, that is going to run this function right here.

The first thing we do is make use of the user service find method.

We're going to call it with the provided email and we're going to get back an array of users, then

if that array has any entries inside of it, then we're going to throw in air.

So for our test, we want to make sure that the find method returns an array with at least one record

inside of it that will allow us to finish up our test and make sure that an error actually is thrown.

So to change how the find method right here behaves, we need to go back to our fake implementation

of the user's service because remember, inside of our test suite, whenever we call this fine method

on the user service, what actually gets executed is the find function right here.

Now, here's the problem, here's the conflict, we now have two tests that are going to be calling

this find function.

So the first one is the test we wrote out in the last video.

And the second one is the one we just put together a second ago.

These two tests are both going to cause the find method to be called.

And in one case, we want to find method to return an empty array, because if it returns a user inside

that array, then this test is definitely going fail.

We're going to get an error during this test that says something like, sorry about that, emails and

use.

But the current implementation, the fine method which returns in A., is not going to allow for an

error to be thrown.

So essentially to test.

They each have different requirements of this find method, one has to make sure or in one test we want

to find method to return an empty array.

In the other test, we want to get back an array with at least one record inside of it.

So how are you gonna fix this?

Well, we're going to start to mess around with a fake user's service.

Here's what we're going to do.

At the very top of our described block, I'm going to declare another variable of fake users service

and I'm going to say that this is a type partial.

Users service.

Then inside of our before each rather than declaring a new variable right here, I'm going to assign

this entire object to the variable of a user service, which we declared right above.

So now we can access this object inside of all of our different tests in the same way that we can access

the service variable.

So I'm going to go down to the test where we want the find method to behave slightly differently, where

we want to make sure that find is going to return through a promise and array with at least one user

inside of it.

So that's the test you and I just put together.

So down here, before we call, sign up, we're going to take a look at the fake users service and we're

going to update how to find method on this thing works.

So I'm going to redefine the find function.

I'm going to say that find is now going to return from his DOT resolve.

With an array that does have one user inside of it and its user will have an ID, maybe an email.

And a password.

Once again, we're going to run into some type issues here, because this object right here technically

doesn't implement everything that a user object or user entity is supposed to, specifically those on,

save on or log insert log update library of functions.

So I'm going to also, after that object put in as user, which again just tells TypeScript, just trust

us, this is a user entity.

So now that we've redefined the fine method just for this single test, whenever we call, sign up.

So here, sign up, sign up is going to immediately call user service dot find and it's going to run

the new tweaked version of the find method you and I just put together.

So it's going to get back a promise, the results with an rate that has one object inside of it.

And that means that we are going to end up throwing an error and that behavior is going to apply to

only this test right here.

Every other test inside this file is going to use the original defined version of the find method.

Which is that one right there, which returns an empty array.

OK, so that's it.

So we've now got a modified version of fined just for this test.

Now the last thing we need to do is actually run this thing and make sure that an error is thrown when

we run the Sign-Up function.

Now, bad news, the actual testing framework behind the scenes here is just just historically doesn't

really work very well with asynchronous code that is supposed to throw in air.

So we're going to make use of just a little bit of a trickier to get just to understand what we're trying

to do.

So.

I'm going to inside of the async function right here, wrapping this test, I'm going to add in done.

That is a function we're going to call when our tests are complete and then going to wrap the sign up

call.

With a tri.

Patch statement.

I'm going to move the a weight into the tray and I'm going to put the couch inside the dun.

So now, whenever our sign up function is called, it's going to hopefully throw an error.

We're going to go into catch that's going to Khaldoun, which means our test suite is complete.

If sign up doesn't throw an error, then we're not going to go into the catch and we're going to end

up with execution down here if we do not call the Dunne function at any point time inside this test

after five seconds, just will assume that our test suite failed.

So if we don't, khaldoun test is going to just plain fail.

So with this setup, we're guaranteed to make sure that the sign up right here will throw in there.

So test this out.

Let's save go back over to our terminal.

And sure enough, it works.

So, as usual, to make sure it works and make sure that, say, this entire done mechanic is working

as expected, I'm going to come in, out, done.

I'm going to say this.

So now it's going to take a lot longer for a test to run.

After five seconds, that test is going to expire and we're going to be told, hey, you never actually

call that done function.

And that's exactly what this message right here says.

So that means that we are definitely or probably I should say, we're definitely throwing an error and

we are definitely correctly calling Dun.

And that means our test is working as expected.

OK, once again, I got to repeat, for probably the fifth time, I know this testing stuff in the past

is pretty crazy.

It's not just testing.

It is also testing with the idea of these basic services and having to understand how to make stuff

out and really kind of massage your code around.

So I just wanna repeat one more time.

I know this stuff is really hard, hopefully kind of getting the hang of it.

So take another pause right here and write a couple more tests in the coming videos.
```
