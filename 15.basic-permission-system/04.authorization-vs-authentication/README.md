## script
```bash
Now that we can approve or unapproved an existing report, we're going to add in some authorization

around this request handler, we're going to make sure that the idea of an administrative user exists

inside of application, and we can make sure that only admin users should be able to make a request

to this route.

So let me show you a quick diagram here to just help you understand what we really need to do here.

So first thing, a little bit of terminology.

We have already implemented authentication inside of wrap.

Authentication systems are all about figuring out who is making a request to our application.

So we are already put all the stuff together whenever someone makes a request.

HARRAP We are extracting some information out of the incoming kookie of the request and we're using

that information to figure out who is making requests to us.

So now we're going to start to work on authorization authorization as a reference to a system that helps

us figure out whether or not this particular user is allowed to do something inside or out.

So we are going to build out a very simple authorization system that we can use to forbid certain users

from making requests to some different route handlers.

Now, as a quick reminder, before I show you the next diagram, I want to show you two things that

we have already put together inside of application.

So the first thing I want to give you a quick reminder, John, is our users interceptors, current

user interceptor.

Remember, this is an interceptor we put together to intercept incoming requests into our application

for any incoming request.

We take a look at that request cookie through the request session property, and we use that cookie

or that session to figure out who the current user is or who the person that's making this request is.

We then fetch that person using our user service and assign that user to the request that current user

property.

So that means that inside of all of our different request handlers, we can very easily get access to

the entire user entity that represents the person who's making requests to our application.

So that's a reminder.

Number one.

Reminder number two.

Recall that we also put together something called an off guard that's inside of our SIRC guards offguard

file.

The off guard or authentication guard make sure that someone is signed into her application before they

are allowed to access a given route handler.

So in general, we make use of guards to forbid access to certain route handlers.

OK, so now that we got this reminder, let's understand how we're going to implement authorization

inside of our app.

All right, so here's the general idea, it's going to be pretty simple and straightforward, very similar

to the off guard we already put together, whenever someone makes a request, you patch reports wildcard

ID.

We're going to make sure that this route is guarded by a guard.

We're going to call this something like Admon Guard or something very similar.

This guard is going to have a very simple purpose.

It's going to look at the request current user property and figure out whether or not that person or

that user is an administrator.

And that's pretty much it.

If this person is an administrator, we're going to return true from the guard, which is going to allow

the request through.

Otherwise, if they are not an administrator, we're going to return false, which is going to reject

the request and send back an error immediately.

So that's pretty much it.

That's all we really have to do here.

We have to put together a new guard.

We also have to open up our user entity file, and we need to make sure that all users also have some

kind of admin property tied to them.

So that can be a very simple boolean that says, yes, this person is an admin or no, they are not.

So adding in this feature should be pretty straightforward.

Now, having said that, you are going to very quickly see that as soon as we put together our guard,

it's not quite going to work as expected.

So this is going to be another scenario where I've kind of introduced an air into our application,

a very, very small and subtle air that we added into our application a while back.

There were only going to start to see the result of.

Now, as we put this guard together and I specifically want you to see this air that we introduced on

purpose, because this is going to be an air that you are absolutely going to run into as you start

working on your own applications.

So just keep in mind on the first take of our admin guard, it's not going to quite work as expected,

but that is totally fine.

And we're going to fix it up very quickly after that.

OK, so with all this in mind, let's take a pause right here and get started on this admin guard in

just a moment.
```
