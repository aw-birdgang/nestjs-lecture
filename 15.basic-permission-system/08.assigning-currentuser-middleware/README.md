## script
```bash
All right, let's start to refactor our current user interceptor into a middleware instead, the middleware

version of this thing is going to be very similar in nature.

So inside of the middleware version, we're going to receive an incoming request.

We're going to take a look at the request on such an object, look at the user ID using the user service

and then assign the current user to the request current user property.

So very similar in nature.

The only difference is that now we are putting this together inside of a middleware rather than directly

refactoring our interceptor.

I would like to instead create a brand new file.

So I want to basically just start from scratch as opposed to trying to change out the current interceptor.

So instead of my user's directory, I'm going to make a new folder called Middlebury's.

And then inside there I'll make a new file called Current User Middleware.

That's.

Then inside of here at the very top, I'm going to first add in a couple of different imports from the

Northwest common package.

So we're going to get injectable and nest middleware from nest eggs common.

I'm then going to get requests, response and next function.

From Express.

And then finally, I'm going to also get our users service.

From up one directory, users got service.

Then to define the middle, where I'm going to export class, current user middleware.

This is going to implement next middleware.

So once again, we are only putting in the implements keyword, just so TypeScript will jump in and

help us to find this middleware.

So to define in middleware, we must define a use function inside of our class.

So I'll define that function right away.

This use function can be async, and in this case, we do want it to be async and it's going to receive

a couple of different arguments, it's going to receive the incoming request object.

The outgoing response object.

And the next function.

Next is a reference to the next middleware that we might have in the chain of middleware, so we need

to eventually call next when our middleware is all done running.

So then instead of here, we're going to do pretty much exactly what we did back inside of our interceptor.

There's one other thing we need to add into our middleware.

However, we need to get access to our users service because we need to eventually reach into our users

repository and find a user with a given ID coming out of our request session object.

So as usual, to get access to our user service, we are going to use dependency injection.

So remember how we use dependency injection.

We're going to mark this class with the injectable decorator.

Well, then add in our constructor.

And on the constructor argument list.

I'm going to add in private users, service is of type users service.

It's now inside of use, we should be able to freely get access to the user service and use it to look

up some particular user.

Now, inside of news itself, we're going to take a look at the incoming request object, we're going

to access the session, object from it and pull off the user ID property.

So Reck session, and just in case the user does not yet have a session object, I'm going to put in

an or empty object like so.

So if there is no such an object, no problem.

Just create an empty object that's going make sure that we do not try to structure user ID from what

might be an undefined value.

Then we'll see if user ID is defined, let's go ahead and look up that user inside of our user service,

so we'll say user.

Is a weight, this users' service, find one and pass in the user ID.

I'll then take that user.

And assign it to the request dot current user property, so rec dot current user is user.

We're going to get an answer from that right now, right above, I'm going to put in a comment that

says at times ignore.

We're going to come back to that address in just a little bit.

Right now, find we're going to ignore it.

So then after doing all that current user stuff, we've executed everything we need to inside of our

middleware, so we're going to tell our next middleware that it needs to now run.

So finally, at the very bottom, we're going to call next, which means, okay, that's it for this

use function.

That's it for this middleware.

Go ahead and run whatever other middleware might exist.

And that should be it.

So now we need to actually wire up our middleware and make sure that it gets executed at some point

in time.

So for that, we're going to use the exact same strategy that we used back inside of our app module.

So you might recall that back inside of our app module, we defined the configure function.

Configure gets called automatically, and that's where we can wire up some global middleware to be applied

to all the different routes of our project.

So we're gonna do the same thing.

But back inside of our users module.

So inside of our users module.

At the very top, I'm going to import.

Current user middleware.

From.

Middleware is current user DOT middleware.

We will delete the current user interceptor in just a moment.

I'm going to leave it there for right now.

Then from Nessus Common, I'm going to import middleware consumer.

And then finally, inside of our module itself, I'm going to define.

They can configure function, which is going to be called with our consumer.

And then we will wire up the middle where in the exact same way that we did back inside of our app modules

will say consumer dot apply.

Our current user middleware.

Not for routes, and we want to run this for all the different routes inside of application, because

for every single route, if the current user exists or the user is signed in, we want to figure out

who that user is and assign them to our request object.

So I'll put in a star like so.

OK, so that looks good.

So we've now wired up our middleware, I'm not going to go back through and delete all the stuff related

to our interceptor.

So right above inside of our list of providers right here, I'm going to delete that interceptor.

And I'll also delete the interceptor imports at the top.

And then finally, we'll delete the app interceptor global from NASA's core.

OK, so we should be good to go now whenever any request comes into our entire application, we're going

to run our current user middleware.

Hopefully this is going to run after the cookie session middleware will.

And to be honest with you, it is it's going to run after cookie session.

So cookie session is going to run first.

It's going to set that session object on the request.

We're then going to look up the current user, assign them to our request object, and then hopefully

our admin guard should run after that.

So let's now save everything, then go back over to our request.

API client around reports, and I'm going to attempt to approve an existing report once again, so I'll

send the request off and it looks like this time it actually worked perfect.

So I have approved a false right here, that's just because I put in and approved of false on the outgoing

request, I'm going to change it to approved of true send the request off again.

And now I see.

Approved.

True.

All right, so this looks great, so we've now refactored that interceptor to be a middle where instead

it's like I said, this is a little gocha around nowhere's guards and interceptors, something that

you might not quite expect because the next documentation really does not make the order in which these

things get executed super clear.

So now that we've got all this stuff put together, we're going to go back through, there's a couple

of things we kind of brushed over.

For example, you might have noticed that on the middleware itself, we put in that ignore comment right

there.

So just a couple of very small things I want to very quickly fix up.
```
