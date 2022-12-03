## script
```bash
You know what, after all, let's go ahead and write a very quick test for how about sign in.

So this will again be a pretty straightforward test.

We're going to provide some body and some object as our session.

We're then going to provide a mock implementation for Sinon.

So you and I have to put that together.

That mock implementation needs to return an object that has an ID property, because our expectation

is that the ID is going to be assigned to the session object that we pass into this function.

So our test ultimately can really assert two different things, our task and make sure that the found

user gets returned, number one.

And number two, we can make sure that the user ID property is set on the session object that you and

I manually pass into this handler.

So this test is at least a little bit more effective than, say, the final users when we put together

just a moment ago.

All right.

So back over to our test file.

We're going to first put together a mock implementation for the service sign and method.

So back inside the controller test file, I'm going to find my fake out service, I'm going to uncommented

Sinon, so this will receive an email and a password.

We don't actually make use of that email and password, but you want let's just receive it anyways.

Just to be complete and then inside of you, we're going to make sure that we return a promise that's

going to resolve with a user.

So I will return promise to resolve.

And resolve with an object that's going to have an ID and a hardcoded to be an ID of one that can be

relevant in a little bit when we make sure that our session object gets assigned that user ID property.

Well, then just directly pass through the email and password.

And then once again, we're going to help TypeScript understand that, yes, this is a user entity by

putting in as user.

OK, that looks good, we've now got a working implementation for Sinon.

Let's go back down to the very bottom of our test file and put a new test together.

So I'll say it update's actually let's say it, sign in.

Update's session object and returns user.

So we're going to check those two things inside of one single test.

All right, so then instead of here, I'm going to first create a session object, so just a plain object,

nothing special about it.

And then going to call our controller method and assign the result to user, because, remember, our

method does eventually return the user that is found, they'll do an a wait controller dot sign in and

we'll pass in something to serve as the body.

And then something to serve as the session.

So for the body, we're going to put in an object that has any given email.

And any random password.

Then as the second argument, I'm going to put a new line in here, just you can read this entire line

as a second argument.

We'll put in our session object.

Now, the reason I said any old email and any old password is, remember, at no point on the email

and password are actually being used back inside of our controller method.

So here's what we are testing.

Although we pass off that email and password to the sign and method, we are calling our mocked version

of Sinon and our mock version of Sinon doesn't really operate on email and password in any way.

It returns them eventually inside of a user object.

But we are not operating on those values.

We don't pass them, compare them.

Nothing like that.

Let's go back over inside of our test.

We should now have a user and we should also have an updated session object so we can write out to expectations

around that.

First, I'm going to say that I expect user ID.

To equal one, so it's specifically one right here, because we hardcoded our mock at the very top of

this file.

To return a user entity that has an idea of one, so this is what is being returned from our method

right here, I'm going to make sure that we get back the correct user.

And then I will also make sure that we set the user ID property on that session object.

We're going to get a tiebreaker here because we had said that session is going to be an object without

any properties.

So I'm going to initialize user ID to maybe just have a starting value of negative 10 or something like

that.

So if we ever get negative 10, that means that we did not update the session property correctly, which

means the user ID property correctly.

If we did update it correctly, it should have been changed to a user idea of one.

All right, let's run this.

And it looks like we are good to go, as usual, quick test here, so how about we try to.

I don't know what would be a good way to break this thing.

How about let's go back up to sign in?

So here's our mock implementation, rather than returning a promise that resolves, let's just change

the ID.

Well, change the idea of five comparison should fail, yep, that works.

OK, so that is good, I think that we've now got kind of a reasonable idea of how to put a test together

around a controller, we could keep going, but all the other methods inside of here are extremely basic

in nature and kind of repetitive and repeats of the stuff we already put together.

So if you wanted to test, who am I?

OK, we're going to call who am I passin some fake user and just make sure we get back that exact same

object.

If you want to test sign out, you're going to pass in some object with a user ID property and just

make sure that the user I.D. property gets set to no great user, just about really effectively identical

to sign in the exact same thing going on there.

We did find yuzu, we did find all users remove user.

All we're doing is making sure that removed gets called.

Same thing with update as well.

OK, so that's pretty much it, just repeat one more time that as you start to test your own controllers,

it will seem like these tests are very basic and not super useful.

Yes, that is expected.

I expect them to be very basic and not super complex or anything like that, because usually our controllers

have pretty simple logic inside them.

All right, so we've now got examples of testing a controller and testing a.

Service as well.

So let's take a pause right here and move on in just a moment.
```
