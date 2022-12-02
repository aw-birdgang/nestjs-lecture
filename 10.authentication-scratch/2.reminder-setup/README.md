## script
```bash
Let's get started creating this brand new authentication service.

First thing I want to do is get a quick reminder on what's going on inside of our users module and just

think about the dependence hierarchy between all of our different classes inside there.

We are going to add the authentication service inside this existing module because it is very closely

related to the idea of exactly what a user is so inside of here.

We're now going to have four different classes.

I just want to think about the hierarchy once again between these different things.

Our controller is still going to need to get access to our users service so that the controller can

attempt to remove users, fetch a user, delete users, update users, all that kind of good stuff.

Our controller is also going to need to make use of this new authentication service for signing up and

signing in users, the authentication service is going to eventually need to create and query users.

So that thing is going to need the user service.

And then the authentication service is not going to reach out to the users repository directly.

Instead, it's going to make use of functionality we exposed inside of the service.

So the users repository is still only going to be used directly by that service.

So that's it, that's our hierarchy, so this means that when we start to create our authentication

service, we need to wired up to the dependency injection system in Nest, specifically the dish system

inside of our users module.

Remember, that's the only way that we connect different classes together inside of a single module.

So quick reminder on how we make use of dependency injection.

The first thing we have to do during the dye container startup flow, we went over this diagram previously

when we were talking about dependency injection.

We're going to create our class.

We're going to market as injectable.

And we're also going to add that class to our module's list of providers.

These are steps we already did previously when we originally put together our first our users service.

So let's go back over to our code editor and just get a quick reminder on how we set everything up with

the dependency injection system, because it has been a while since we discussed that.

All right.

So back over inside my editor, I'm going to find the users service file.

So first, remember, we're going to mark our classes as injectable.

And then if we ever need to get access to some other dependency, we're going to add it into our list

of constructor arguments.

Then finally, we're going to take our service and inside of our module so users module right here,

we will add that service to our list of providers.

OK, so now we've got all these reminders, let's actually create our authentication service and add

it into that list of providers.

So inside of my user's directory, I'm going to make another new file called off that service.

That's.

Then inside, if you're at the very top, I will immediately import injectable from Nest James Common.

I'll use the injectable decorator and export.

A class called off service.

Well, then save this file, go back over to our users module.

We're going to import that new service at the top.

And add it into our list of providers.

Yeah, that looks good.

So then finally, inside of our off service file, let's immediately wire up the dependency of our authentication

service for this thing to work correctly, it needs a copy of the user's service.

So we are going to import into this file.

The users service.

From users service.

Will define our constructor.

But in private users service, and that's going to be of type users service, and that should be it.

Now, we are going to, of course, have to eventually import this thing and make use of it inside of

our controller, but we're not going worry about that just yet.

Let's first put together some basic functionality together around the authentication service and then

we'll test that stuff out inside the controller eventually.

So quick pause right here and we'll get started on some of our authentication logic in just a moment.
```
