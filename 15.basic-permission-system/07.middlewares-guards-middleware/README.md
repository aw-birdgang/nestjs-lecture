## script
```bash
We just put our admin guard together and tested it, but unfortunately, we were not able to update

a report.

So in this video, we're going to take a look at a couple of different diagrams and understand why that

is and then eventually fix things up.

So, as I mentioned, this area that we are seeing is related to a very fundamental or core concept

in the world of nest.

All right.

So a couple of diagrams.

Here we go.

So you might recall that over this course, we've worked with many different tools that are going to

operate on a request before it gets handled inside of request handler.

So we have an incoming request.

That request is then going to be processed by any middleware.

So we've hooked up to our application, then by any guards and then finally by any interceptors.

And remember, an interceptor is very special in that it can work on a request before or after or both

for that matter.

It is handled by a request handler.

So here's the issue that we are running into.

At present, you and I have the cookie session middleware, we have our admin guard and we have our

current user interceptor.

So the problem is that our incoming request is going to flow through the cookie session middleware,

which will place the session object on that incoming request.

The request then goes directly off to the admin guard and here's the problem, it is processed by the

admin guard before the current user interceptor ever runs.

So we are trying to look at the current user property on that request before we have ever set the current

user property on the request itself.

So inside the admin guard, we take a look at current user, so right here.

We check to see if that thing is defined and in every scenario, in every case, current user will not

be defined because we never set that property until the request goes into our current user interceptor.

So that's the issue we are running into now.

We have made use of middleware guards and interceptor interceptors, but we haven't really considered

the order in which they execute.

So to fix this up, we need to take our current user interceptor and we need to turn it into something

else.

We need to turn this thing into a middleware instead.

If we turn this into a middleware that's going to guarantee that it runs before our request ever goes

off into the avant garde.

So by the time the request is inside the avant garde, we will have already set the current user property

on the request object.

Now, the reason that I wanted you to see this air is that this is something you are almost definitely

going to run into on your own projects if you start making use of interceptors.

So if you want to use an interceptor, fantastic.

I highly recommend you do.

But you have to be aware of when interceptors run.

They are always going to execute after any metal wears in after any guards.

So your middle wears and your guards cannot rely upon any information that is created or assigned to

request object inside of the interceptor.

That's pretty much it.

That's why we were running into this issue and that's how we were going to fix it up.

We're going to go back to our current user interceptor.

Which is inside of our users interceptors folder.

We're going to turn this thing into a middleware and we're going to wire it up as a global middleware

inside of our project.

You might recall that we've already created a global middleware before when we created the what do we

create?

I don't remember off the top my head was that the current user decorate now that maybe it was well,

we've definitely created a global middleware oh cookie session.

That's where we did it.

That's right.

So I think we wired that up inside of our app module right here, somewhere inside of here.

There's our global there we are, there it is, OK, so there's our global middleware.

I knew we had done that once before, so we essentially just have to repeat the exact same process.

So we're going to take our current user interceptor.

We're going to turn it into a middleware and then wired up globally across all the different route handlers

inside of our project.

So let's get started on this in just a moment.
```
