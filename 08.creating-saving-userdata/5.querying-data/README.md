## script
```bash
We've got our first round handler put together, so now we're going to start to work on these other

ones, and I'll be honest with you, the different handlers we need to put together are all very similar

to some handlers.

We already assembled back on our messages application.

So to keep things interesting here, I've got a little bit of an idea.

Let's first focus on just putting together all the different methods of our service, because then we

can focus on just understanding how type of works and how we can interact with that.

Users repository in the efficient way.

Once we get all the service methods put together, will then very quickly go back and put together all

of our different route handlers inside of our controller, which is something that we kind of already

know how to do.

So we can go over that entire process really quickly.

This will in general be a lot faster than trying to go through each route handler one by one, which

would be a lot slower.

So that means we're going to start to focus on putting together find one find update and remove inside

of our service.

We're going to assume some of these different methods are called with different arguments and then we

eventually try to call them from our controller.

We're going to make sure that we provide the correct arguments to each of these different methods.

So without further ado, let's get to it.

Let's go into our service and define these four different methods.

OK, so here's my user service, I'm going to first begin inside of here by just writing out a quick

scaffolding for those four different methods.

So I will add in, find one.

Find updates and remove now once again and just about all these different methods, or pretty much is

going to take in some argument and then turn right around to a repository and call some very identical

looking function on the repository itself.

That's a very common thing that we're going to see with more basic services.

And again, it's totally fine to have methods between your service and a repository that look pretty

similar in nature.

All right, so now for each of these different methods, let's take a guess at what arguments they should

receive and then use those arguments to access a repository and retrieve data, find data update or

whatever else to first find one with find one.

We probably want to find one particular user inside of a repository given their ID.

So I'm going to assume that we're going to receive an argument of ID.

There will be some kind of number.

So then we need to take that ID and run a query on our repository, looking back to our list of methods

on a repository.

So remember this diagram.

We've got a couple of different methods that are defined on the repository automatically.

One method we have access to is find one we can use, find one to find a particular record, given either

some search criteria or just a plain ID.

So in this case, we're going to return.

This report find one and put in the idea of the user we are looking for, other ways we can make use

of find.

One is to put in an object with some search criteria.

So, for example, if we wanted to find all the users or really just one user with a very particular

email address, we can put in an object right here and say, find the first user with an email of ASDF

at asdf dot com.

To find one is pretty flexible, we can either look up one particular record with a given ID or use

some search criteria.

But in this case, we, of course, want just the ID.

OK, let's move on to find so with find, we're really just going to take in an email, so some email

that we're looking for, we're then going to use the find method built into the repository A.I. API.

So in this case, we will receive an email that's going to be a string.

And then return this boat find and I want to find all the different users with an email of the email

that was passed in to this function.

We can collapse that down to be just email like so.

So this kind of implies that different users inside of application can have an identical email address.

We're going to eventually enforce some uniqueness around email addresses, but right now, users can

have identical emails, will say that's totally OK.

Now, just be really clear.

The difference between find one and find is that find is always going to return one record or null if

no user is found with that given criteria.

Find, on the other hand, is going to return an array of all the different records that match that

search criteria if no records are found with that given criteria.

So let's say we ask for all the users with an email of some really uncommon email address.

If we find no results.

We'll get back an empty array.

It's that looks good.

Now, updating remove are going to be just a little bit more complicated, so let's take a quick break

here and then take care of those two in just a moment.
```
