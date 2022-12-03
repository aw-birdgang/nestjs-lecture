## script
```bash
With our mock implementation of the user service put together, we can now test all the different methods

inside of our controller that only use either find or find one.

So inside of our controller, it looks like find all users right here only makes use of the fine method,

which means we can now test this thing successfully.

Remember?

Quick reminder here, whenever we are testing methods inside of a controller, we don't get the ability

to run or make any use of the surrounding decorator's.

So we do not have the ability to make sure that something comes out the query string, or to make sure

that this is tied to a get request.

We are testing just the method by itself without any decorators present.

If you want to test the decorator's, then we have to write out an end to end test, which you'll recall

is a very different kind of test.

All right, so back inside of our test file at the very bottom, I'm going to add in a new statement.

And I'll say find all users, because that's the method we're going to test returns a list of users

with the given email.

I'm going to mark that function as a sync.

And then inside of here, all we have to do is call our method on the controller.

So finally, users, we're going to get back a list of users and just make sure that it has one entry

inside of it with a correct email.

Remember, ultimately, all we're really doing here is calling.

The mock function we just put together, so this really is a very simple test, all we're doing is saying,

yep, we're going to take that email, pass it off to the user service, find method and then get back

and return the results.

So this is about as basic and simple a test as we can really put together.

Gets down at the bottom inside the test, once again, I'm going to say users is a wait controller dot

find all users and I'm going to put in a string of ASDF at asdf dotcom.

Now we're going to take a look at the return value right there, and we're going to do is say it's got

one user inside of it, whatever we were returning from our mock function at the top.

So I will expect users at length to equal one and I will expect users at zero dot email to equal.

The email that we were looking for.

Let's save this flip back over to our terminal, looks like it's passing very good.

If I make this test fail in some way, let's say maybe I expect to get back to users now and save this.

Yep, it fails as expected.

All right, now, if this test seems pointless, it's because it kind of is we're not really doing a

whole lot here.

Our controller methods are so simple and basic and straightforward that if we are forgetting all the

decorator related stuff, there simply is not a lot of logic here.

And that is actually very desirable.

That's we want our controllers to look like we don't want to have controllers that are just stuffed

with tons of logic.

Instead, we want them to be as simple and basic as possible.

OK, let's do just one more test inside of here, so we'll test a method that makes use of the other

marked function we put together, which was find one.

So if we go back over to our comptroller, let's find a method on the controller that only makes use

of find one.

So back over here, it looks like find user only makes use of find one.

So we are going to call find user with some ID.

Well, then make sure that we just get back whatever user is found.

So this test is going to be very similar nature.

Not a lot of logic here to test.

We could do a second test, a little variant on it and make sure that if we update our moch to not return

any user, we could make sure that it is thrown.

That's definitely a second test we could write out here.

Let's first just begin and make sure that we can find one with some ID, get back user and ultimately

return it from the handler.

So at the very bottom of our test file.

I'll say it, find what we call that method find user.

Returns a single user with the given ID.

So then in this case, we'll say user is a weight controller, find user.

We're going to put in just any given idea, because remember, our mock of that should be a string.

Yep, there we go.

So our mock is going to just really take that ID and return some fake user with the exact same ID.

So we can.

Really just say that we expect how about user to be defined, and that's pretty much it, we're just

making sure that user makes use of the user service to find a user and return it, really nothing else.

So we can save this now back over to the terminal yet that's passing.

So let's now do one variant on this.

I'm going to put together another test will say fine user throws and er if user with given ID is not.

Found.

So inside of this case, we're going to mess around with our mock implementation of find one by default,

our mock is going to always return some user.

So we're going to replace this mark just for this one test and we're going to have our function return.

Just not to say sorry, but we did not find someone with that ID.

When our controller gets back Knowl for user right there, we should then enter the statement and end

up throwing a not found exception.

So very similar to what we did back on our off service spec just a moment ago.

We're going to rewrite to find one implementation for that one test return null and then just make sure

an exception is thrown.

So inside of our test, I'm going to first update the implementation of the fake users service.

Or find one.

And now it's going to be a function that returns null.

Well, then.

But in a try catch block.

Inside the try, I'll do in a weight control or find user with any given ID doesn't matter because we're

always going to return null no matter what.

I'm going to go to the inclosing function for the statement and receive that done callback, which we

call whenever our test is finished running, and then just like we did back on the service or khaldoun

inside of the catch.

OK, so now when this test runs, we're going to update the implementation, we're going to find user,

we should get back null when find one is executed, that's going to cause find user to throw a method.

We're going to catch that Khaldun and the test should end.

It's going to save this look back over.

Looks good.

And if we comment out that mock implementation or the updated implementation and we actually do return

a user now, in this case, the final user call is not going to throw an error.

So we're never going to get to done.

And our test should time out after about five seconds.

So one, two, three, four, five.

And there we go.

Yes, that looks good.

All right, so hopefully in these last two videos, as we wrote some tests around our controller methods,

you started to get the sense of these tests are not super productive, per say.

We're not really doing a whole lot of useful testing here, particularly on find all users.

In the case of Finisar, definitely effective because we're making sure that we throw an exception any

time user is not found, but certainly unfindable users.

Well, we didn't really get a lot of benefit out that test.

All we really tested was that we call some method and return the result.

That's it.

And nothing else.

Again, I want to repeat that this is not necessarily the worst thing in the world when we're making

use of nest.

We do want our controller methods to be very simple in nature.

So not terrible.

But at the same time, maybe we don't really need to test this thing all that much.

I would not mind, however, having a test run find user and more complicated methods like, say, maybe

Sinon would be a good one to test, make sure that such an object gets assigned a user I.D. and whatnot.

Let's take a pause right here.

Weather either do just one more test around, maybe sign in or create user.

Maybe we'll call it good.

I don't know.

We'll decide what to do in the next video.

All right.

See in a minute.
```
