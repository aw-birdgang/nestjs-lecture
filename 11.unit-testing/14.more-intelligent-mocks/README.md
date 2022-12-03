## script
```bash
Our password comparison test is definitely working, without a doubt, and we can leave our code as

is, and it would not break anytime soon, so long as we do not actually change our password hashing

implementation or comparison process.

Nonetheless, having a really strong, long string like this inside of any of our tests just really

doesn't feel that right, Persay?

I want to show you another way of setting up our fake users service to allow us to test stuff like exactly

this in a much more convenient and easy, straightforward way.

So here's what we're going to do back up at the very top of the file.

I'm going to find my fake user service, so remember this entire service right here really function

around the idea of having some different methods that are always going to return some fixed set of data.

So here's the plan.

Here's what we're going to do.

Rather than having find and create be just very static methods that don't change or don't return any

different data, no matter how many times they're called, we're going to actually put together a slightly

more realistic version of the fake user's service.

So whenever we call create, we're going to actually take the supplied email and password and store

it inside of an array.

And then whenever we call, find we're going to search through that array and try to find a list of

users with a matching email address.

So in other words, we're going to put together just a slightly more advanced version of fake user service.

Now, how is that going to help us at all?

Well, it's going to help us avoid having to do this kind of complicated set up down here if fake user

service actually work correctly.

Here's what we could do.

Instead, we could comment all that out.

And then.

If you're trying to sign in, we could simply.

I'll sign up as in some email address and some password now the sign up function is going to work as

it usually does, and it's going to make use of a slightly more realistic version of the user service.

So it's going to kind of temporarily in memory store a user and give us the ability to find that user.

So this will store a user in memory with the given email and a hash insulted password matching my password

so we can then call service dot in.

And assuming that we put together our fake service correctly, it should just plain work and we won't

have to worry about putting together these promised resolved statements or updating the implementation

of the fine method all the time.

So in other words, we can just use our service that we're trying to test in a slightly more realistic

way, which definitely, I think results in some more useful testing.

OK, so that's the plan, that's the goal we're going to put together a slightly more realistic version

of our fake user service.

So let's just go ahead and write some code.

I think you'll get an idea of what we're doing here very quickly.

So to get started right above that service, I'm going to create a new array called users, and I'm

going to annotate it as being of type array of user entities.

I'll have it start off as empty.

We're then going to update our fine function and the crede function to operate and store users inside

that array.

So first off, find.

Now, remember, our real fine function takes in an argument of an email address.

And since we are actually going to look through a list of real users here or semirural users, we definitely

want to receive that email and use it for our filtering logic.

So inside of here, I'm going to say filtered users will be users that filter, we're going take a look

at every user and then return true, where users email is equal to the supply.

Email.

I'll then return promised resolve filtered users, so why do we still have the promised result here?

Well, remember, find a supposed to be asynchronous, we're supposed to return a promise from it that

is going to eventually resolve with a list of users.

So we still have to have a promised result.

It looks good and we're going to do something very similar for creates as well, so I'm going to put

in a function body.

And inside of here, we're going to just create a new user entity and put it into our array of users

so we'll say users don't push.

With a given email and password, and we should probably supply an ID as well, so for an ID, I'll

just say, how about an ID of users?

Not length.

Now, that's not the best strategy right there, because if we start removing users, the idea is going

to break, we're going to eventually get some duplicate users.

But this is good enough for now.

You don't like that?

Well, let's just go ahead and put in a real solution here.

So how about something like math, dot random times, a really big number, and I'll do a math dot law

on that.

So that will give us our random randomized.

Our email and our password, and we're going to also mark that object as being a user.

Once we have created that new user, we need to return it from the create function.

So I guess I'm sorry, I actually kind of made a little mistake here.

Rather than calling users, stop, push with that whole object right away, let's first assign that

object to a user variable.

It's also a user is that big object, then push in that new user and then return the newly created user

and we're going to wrap that that promise dot result.

That's better.

OK, so we now have a slightly more realistic find and create function now, without doubt, making

this change might break some of our existing tests.

Who knows?

We'll see what happens.

But let's now go down to our sign and test that we were just working on and see how much easier it is

to right now, since we have a more realistic fake user service.

So no longer do we have to set up the find function in some very particular way.

So I can I can remove that entirely and instead I can first sign up my user.

And then attempt to sign in as them.

And that should be it.

So let's save this, even if some tests fail, I'm still going to expect our last test to pass.

So back here at the terminal.

Yep, looks like it past.

Very good.

As usual, let's try to get it to fail, because this is the one time where I do want to make sure everything

is working as expected, so I'll put in my password one.

So that's definitely an invalid password.

I say that in rerun, which now be told that we got a bad password.

Sure enough, there we go, so bad password.

OK, so I'd say this looks very good now why did we not just do this from the get go?

Why didn't we not just say, hey, here's our fake user service, we're going to store an actual list

of users in memory during our test?

The reason is very simple.

In some cases, you might be trying to mock or fake out a much more complex service that has functions

that do a lot more than just a simple find and create where you are essentially storing records inside

of an array.

So in some cases, it does make sense to put in a method like, say, find one.

That will always just immediately resolve with some fixed value in some cases, that's just going to

be a lot easier.

But in other cases, if the service that you're trying to mock or fake out is going to be a little bit

more simple in nature, such as just the simplified and create, well, then fantastic.

Just do that instead because it might make some other tests really easy and straightforward.

All right, so last thing I would like to do very quickly in the next video is now go around to our

different tests and rather than customizing the fine method, kind of tweaking it to be exactly as we

suspect, we're going to instead just make use of our service directly and call different methods on

it to simulate stuff like, say, an email already being in use.

So quick pause right here and we'll do that.

Lessel Refactor in just a moment.
```
