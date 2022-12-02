## script
```bash
Let's get started on creating a guard.

So remember, this is going to be something that allows us to prevent access to certain controllers

or route handlers based upon whether or not the user is signed in.

A guard in general is implemented by creating a class.

This class must have a method called can activate.

This method is going to be called automatically any time there's an incoming request.

And our goal is to look at that request and either return a truth value or FLC value.

If we return a value that is truthy in nature, then the request can go through.

Otherwise, if returned something that is falsey, such as undefined, null, zero, empty, string,

false and so on, then the request will be automatically rejected.

Once we create a guard, there are several different locations, we can apply it so we can make use

of a guard to prevent any traffic or kind of guard traffic from coming into our entire application.

We can apply a guard to an individual controller, which would mean that it would limit access to all

the different handlers inside there.

And finally, we can also apply guards to individual handlers themselves.

So very similar to interceptors, three different locations.

We can apply these things.

Well, without further ado, let's go back over to our editor and get started on this authentication

guard.

Let's go back over inside my ed inside of my SIRC directory.

I'm going to make a new folder called Guards, and then inside there I'll make a new file called Off

Guard Notes.

At the very top, we will immediately add in some imports from Nessus Common in this case, we're going

to get can activate and execution context.

We will then export a new class called Off Guard.

Very similar to our interceptor, which we defined a little bit ago.

We're also going to add on the implements keyword on here and in this case, we're going to try to implement,

can activate.

Can activate is an interface once again, very similar to interfere to interceptors.

This is just going to make sure that we define all the appropriate functions on our class so that it

actually will behave as a guard correctly.

In this case, we mouseover the air and now it tells us that we have to define a can activate function.

So I'm going to define that function right away.

This function is going to be called with something we call context, and it will be of type execution

context.

This is the third time we've seen this argument type.

So remember, this is very similar to kind of like a request coming in to an HTTP based application.

The reason we've got this execution context, as opposed to a plain request, is because this off guard

in theory could be used with different communication protocols.

But we're not going worry about that too much for right now.

So now, instead of here, we need to take a look at that incoming request and then we can decide whether

or not to allow the request through.

So in our case, we want to reject the request if the user is not signed in.

So we're going to use the presence of a user I.D. property on the user's session to decide whether or

not they are signed in.

So inside of here, the first thing we're going to do is see if the user or we're going to get that

session property, so we will say request.

Is context dot switch to htp dot request.

Excuse me, I think that's get request that's better.

We'll then return request session user ID.

So if the idea exists, great, that is a Truthy value, we're going to return that from this function

and that means the user can access whatever route we've applied the GA to.

Otherwise, if user ID is false, null, undefined or anything like that, then that will be a false

value.

So that will prevent access to a given handler or controller.

And that's pretty much it for our guard.

That's all we have to add in now.

We need to go to some controller or some robot handler or remember even the entire application and actually

apply this card.

So let's go into our our users controller and we're going to try to apply this guard to one single handler

just to test it out.

Back inside of my users controller.

At the very top, I'm going to import.

Off guard.

From up on directory guards' off guard, and then we also have to add in an import statement from nest

eggs common as well.

So in this case, very similar to what we did back on interceptors.

We're going to import something called Use Guards'.

This is a decorator that allows us to say run some guard before sending a request off either to the

entire controller or to a particular handler.

Now, just to test out our Ostergaard, let's try restricting access to who am I?

So we're going to say that you can only access this robot handler if you are signed into our application.

So I'm going to apply use guards and I'm going to pass to it our off guard.

And that should be it now, if a user is not signed in, they won't be able to access this route handler

and we're going to send them back automatically, a response with a status up for 03, which means sorry,

but you can access this route.

Otherwise, if they are signed in, then we're going to allow them access to the route and we're going

to send back the user that they are currently signed.

And as.

Well, let's open up our API client and do a quick test.

So I'm going to first sign into my application, OK, definitely signed in and then going to try to

do the.

Who am I root?

So it looks like that work just fine, just to show you for sure.

Yep, definitely making that request just fine.

But if I then sign out of my application.

OK, I'm now signed out, and if I try to go to who am I again, I'm going to get a four or three.

Perfect, that is exactly what we want.

Well, believe it or not, at long last, after a lot of work inside this section, we've now got our

full authentication service put together.

So we've got the ability to handle.

Let's go back to this diagram right here.

No, not that one where to go?

OK, that one will work just fine.

So we've now got the ability to sign up, sign in, sign out, get whoever is currently signed in.

And we've also got some tools to be used inside of other controllers as well so we can reject incoming

request if a user is not signed in.

And we've also got a very handy little decorator to figure out exactly who is signed and very easily

inside of a handler.

So that is pretty much it for our authentication system in terms of new features.

I do want to take a look very quickly at adding in some tests, some automated tests around our system.

So let's take a stab at that in just a moment.
```
