## script
```bash
Let's add in all these different route handlers to our controller, so inside of a controller, we're

going to define all these different methods.

We're going to pull off some information from the incoming request and then pass that information along

to the relevant method that we just to find inside of our service.

Some of these are going to be really easy and straightforward.

Others are going to be just a little bit more complicated in nature.

So let's get to it.

Back inside of my users controller at the very top, I'm going to first import a bunch of different

things from the common package.

I'm going to import get how much ram and query these are all different decorator's that we're going

to use to implement these remaining root handlers.

The first handler we will put together is going to be the one to fetch a user with a very particular

ID.

So for that inside my controller, I'll add in the get decorator, I'm going to add in a wildcard of

ID, I'm going to call this thing find user.

Then inside of our argument list, we're going to make use of the Parum decorator that we just imported,

remember this Parum decorator?

It can be used to extract some information out of the incoming request route.

So we'll add in at Perram.

And I want to get the idea.

Wild card.

I'm going to call this thing ID and then give it a type of string.

Now, very important here, remember, inside of our application, we've said that IDs are going to

be numbers, that is how they are stored inside of our database.

They are numbers.

But whenever we receive a request, every single part of the URL is a string, even if we think that

it looks like a number.

So whenever Nest passes our incoming request, whenever it looks at that route, even if we have a number

on the incoming request, so something like off some number nest is not going to automatically pass

that thing into a number for you.

It is given to you as a string.

So we are given it a string.

We need to take that string and pass it into a number and then we can pass it off to our user service,

which you will recall is expecting an ID.

That is a number.

So in total.

We are going to return.

This DOT users service, we're going to find one and we're going to pass in the result of passing it

with ID like so.

And that should be at.

So let's save this.

Well, then go back over to our API client and try to test out that root handler.

OK, here's my API client, I'm going to add in a new comment inside of here, I'll say find a particular

user with a given ID will make a get request.

To off one, I know that I have a user with an idea of one by default numbering of IDs inside of SQLite

starts at one.

So chances are you have an idea of one as well.

I'm going to send that request off.

And hey, there we go.

We've got our user.

Fantastic.

So it looks like we get back the ID, email and password.

Naturally, we probably do not want to send back the password of a user.

Don't sweat it.

We're going to make sure we filter that field out eventually.

OK, so this is a good start.

Let's just continue on and take care of the next one, find all users right away.

So in this case, we're going to have a get request to slash off and that's going to have a query string

with the email that we want to find.

So we need to look into the query string, find that email property and then call on our service the

find method.

So all define our next drought handler of gett.

We'll call it binds all users.

Because we want to pull some information out of the query string, we're going to use the query decorator

that we imported at the top.

So we want to look into the query string and pull off the email out of that query string.

Will then receive the email as a string.

Then inside of here, we're going to return.

Users service.

Find and remember, find our expectations that we're going to call this thing with just an email, just

whatever string we're looking for, we'll pass in the email like so and that should be at.

So once again, we'll save this file, open up our API client.

I'm going to add in a new request inside of your.

Find all users with a given email.

I'll do a get request to localhost.

Three thousand slash off and I'll put a query string in, so questionmark email equals and whatever

email we're looking for.

In my case, I already created a user with an email of ASDF at Ask.com Dotcom.

I'm going to try to find all the users with an email of ASDF at Ask.com.

We'll send this off and there we go.

Now I get back three different users, and that is because I have recorded these videos a couple of

times and I've created a few different users, all of them have that same email address.

So if you get back just one user right now, totally fine.

That's probably what we expect.

If you have created any additional users, I would expect to see all the different users you have created.

With that, give an email address listed inside this array.

Naturally, if we try to find all the different users with an email address, that definitely does not

exist.

So no users from me right right now have an email like that.

I send that request off.

I'll get back an empty array instead.

All right, so let's say this looks pretty good, I'm going to revert that email right there to be just

asdf at asdf dot com.

Well, let's take a pause right here, rather than ending up with another very long video and we're

going to start to take care of updating and leading in just a moment.
```
