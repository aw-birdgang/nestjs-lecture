## script
```bash
All right.

Our friends in this video, we're going to work on this current user interceptor, so again, its entire

goal is to just take in that session object, find the user ID and then find a user out of our database

using the user's service.

And we've already put together an interceptor once before instead of our SIRC directory.

The interceptors folder we call this thing Serialize Interceptor.

So the new interceptor we are going to put together is going to be very similar nature to this one.

But the code inside of it is specifically inside the intercept function won't be quite as bad.

The new interceptor we're going to put together is going to be created inside of our users folder rather

than the parent interceptors directory, and I'll show you why in just a little bit.

So instead of users, I'm going to create a new folder called Interceptors.

And then inside of there will make a new file called current dash user dot interceptor, that's.

Then inside this file at the very top, I'm going to import.

Nest interceptor.

Execution context.

And call handler, and I think that's all we need for right now, one more.

You need injectable.

And this is all going to come from nest eggs coming.

Then in addition, we're also going to get our users service, because remember, that's we're going

to use to actually find the user we care about a in import users service.

From up on directory users, not service.

So then finally, we will export a class called Current User Interceptor.

Just as we did with our last interceptor, we're also going to add in.

Implements.

Nest interceptor and remember, the entire goal of that is to make sure that we've got that kind of

guide that tells us through TypeScript exactly how to put an interceptor together.

So if we now mouseover current user interceptor, we're told we have to add in and intercept method

if we want to use this thing as an interceptor at some point in time.

So then instead of here, we're going to first make use of dependency injection to get access to a copy

of the user's service, that in constructor.

Private.

User service is going to be an instance of users service.

To make use of dependency injection at all, we also have to mark the class as injectable.

So right above we'll put in injectable.

So then we can define our asynchronous intercept method.

This will be called with context.

And our handler.

So quick reminder on interceptors context right here, that's very similar to the decorator context,

it's like a wrapper around the incoming request.

We've also got handler, and that's a reference to the actual root handler that is going to run at some

point in time.

It's now inside of here between context and user service.

We're going to find our user.

We're going to write out some code that looks very similar to what we just did inside of our decorator.

I'll say request is context.

Switch to HTP.

Yet request.

And then going to find the user ID from inside the session, objects will say user ID is request dot

session.

We're then going to check and make sure that the user ID is actually defined.

So if the user ID is not defined, if it's false or null or undefined or something like that, we don't

even need to make a query with the user service because the user is definitely not signed in.

So we're going to say if user ID does exist, if it is defined, let's go ahead and make a query with

the user service.

Otherwise, just continue on.

So in the continuum case down here outside the IF statement, we will return and handle and remember,

that essentially means just go ahead and run the actual root handler.

So if we did have a user ID.

Let's go ahead and try to find our user.

With the user's service, so I'll find one and pass in the user ID.

So now we've got the user what what are we going to actually do with it?

Well, here's the kind of trick.

Here's where I just mentioned a moment ago.

We need to somehow communicate the user we found down into the decorator.

So the little trick we're going to use is to just take the user we found and assign it to the request

object because the request object can be retrieved or we can get access to that object inside of our

decorator is a matter of fact, we already did right there.

So we're going to take the user we just found inside of our interceptor.

And we will assign it to request dot current user like so.

So then later on down the line when our decorator actually runs, so here's the decorator.

We're going to take that request object and we're going to return from it.

Request that Kernen user.

And that's the key, that's the secret.

So inside the interceptor, do all the dependency injection stuff, pull out the session, get the user

ID, find the user using the service, sign it to the request, and then inside the decorator, just

look up the request to find her user and return it, that's all.

So now, at this point in time, you might be curious, why are we making use of this interceptor?

Why are we making use of the decorator?

Couldn't we just use the interceptor by itself?

Well, yes, we absolutely could.

But remember, one of the requirements of our controller, one, one of the things that I said was that

I want to specifically have a decorator called Current User, and that thing should give us our user.

If we did not have the decorator and if we only had the interceptor, then we would have to write out

some code that looks like this.

Instead, we'd have to say at request that would give us access to the incoming request object.

And then inside of here, we could say request that current user, so it's just a little bit more tedious,

we have to make use of this kind of mysterious decorator.

We have to access current user on the request object.

There's just a little bit more going on here.

So personally, I think that making use of the extra decorator just makes it super crystal clear what

this argument is.

It is the current user.

That's it.

OK, so this interceptor is now good, it is ready to go, but before we make use of it, we have to

wired up to our application.

You might recall that we previously made use of our Serialize interceptor back inside of our controller.

By wiring it up at the very top through the use of a serialize decorator.

In this case, we have an interceptor that is making use of dependency injection, so we're going to

wired up to our application in a slightly different way than we did the last time around.

So let's take a pause right here.

We're going to wire up this interceptor to the rest of our app in just a moment.
```
