## script
```bash
Let's get started on this admin guard.

The first thing we're going to do is open up our user entity file so I can go and find my users user

antedates file.

So inside of here, very similar to what we did a moment ago around our report.

We're going to say that in addition to all the properties that a user user usually has, we're also

going to give them an admin property as well.

So this aband property, which is going to be either true or false, indicates whether or not this is

an administrative user.

I'm going to mark this with Culham.

And then for just right now, just for testing purposes, just to save a little bit of time, we're

going to say that by default, everyone is an administrator.

So now we signed up as a brand new user, they would have an admin of true value.

Obviously, that's not something we want to have in the final version of our application.

So we will come back eventually and fix this up.

But for right now, for testing purposes, this is good enough.

So if we went and created a brand new user, we would be an administrator and in theory, we should

be able to get past this admin guard.

Inside the Adnen guard itself to decide whether or not to allow a request through, we're going to take

a look at this admin property.

And if admin is true, naturally, they are going to be able to get through the admin guard.

Otherwise, if admin is false, we're going to reject the incoming request.

OK, so keep in mind, we do need to come back, we need to make sure that not everyone is an admin

by default, but we will take care of that in a little bit.

So now.

I'm going to find my SIRC guards folder and inside they are going to make a new guard called Admon Guard

Dotts.

So then instead of here, we're going to put together a guard that looks very similar to the off guard

that we already assembled.

So inside, if you're I'm going to import.

Can activate and execution context from Nest, James Common.

I'm then going to define and export a class called Admon Garde, and that's going to implement can activate.

All defined, they can activate method, which will be called with some execution context, and remember,

this execution context is like a wrapper around the incoming request.

Now, inside of here, we need to either return true or false to state simply whether or not the user

is authenticated or is an administrator and should be allowed to actually access a given route.

So I'm going to fill out the request.

We're then going to take a look at the request current user property, remember just a moment ago I

gave you a very fast reminder.

I told you that inside of our where do we put that thing?

Users interceptors, current user interceptor, this class or this interceptor right here is going to

make sure that we define our current user property on the request object with the user who is signed

into the application.

So we are going to first make sure that request current user is defined.

We're going make sure that there actually is a user.

So if there is not.

A current user, then we're going to immediately return false.

So that means if you're not signed in, obviously you are not in the mystery tour.

So we're going to reject your request if we get past that check.

Well, then take a look and see if.

Request current user.

Admen is true, so if there is a current user property and they are an administrator, fantastic, let's

go ahead and return.

True.

We're going to allow the request, otherwise we will return false.

Now, the second statement can be very easily simplified, rather than doing this complicated if statement,

we can simply return request, don't curtain user that admin and that would be equivalent to that really

long if statement.

And that's pretty much it, that's all we really need.

So if there's not a current user, definitely return false, otherwise we can just return whatever the

admin property is.

If admin is true, great, the user's going to be allowed through.

Otherwise, if admin is false, then the request will be rejected.

OK, so that is it for the guard itself.

That is pretty much the final implementation.

That's all we have to put together.

But as I mentioned, we are going to run into a very small bug around this.

So let's take a pause right here, we're going to come back to next video, we're going to test this

thing out.

It's not going to quite work as expected.

We're going to figure out what the air is.

And along the way, we're going to learn a lot around the internals of Nest itself.
```
