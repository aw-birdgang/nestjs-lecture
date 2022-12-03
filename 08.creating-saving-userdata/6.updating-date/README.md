## script
```bash
Let's start to work on our update and remove Method's the first update we need to first think about

the different arguments that this function will take.

I think that a very reasonable first argument will probably be the idea of the user that we want to

update.

So then what other arguments should we provide here?

One approach would be to say that we should maybe pass in the email address that we want to update the

user with or their password or something like that.

So one possible approach that I do not recommend is to do something like this.

We could say they were going to pass in some new email address that we want to assign to the user and

maybe a new password to assign to the user as well.

But this is not a really good design.

The reason is that if we ever want to update only the password for this user, what would we provide

for the new email argument?

Would we give it an empty string when we give it undefined or null or what?

In addition, this argument list would start to get really confusing if we had a lot of other properties

associated with the user that we might want to update.

So, for example, if we also have a user with a maybe an age.

And also a name.

And so on, this argument list would start to get very, very long and really hard to read.

So without a doubt, housing in each property update one by one is probably not a good idea.

So we need to think of a different way of calling update.

The best way to think about how to implement this update method is to think about how you would want

to call it.

So let me show you a little trick, little example.

I'm going to, as a very quick example, create an instance of this user service at the bottom.

The file.

I'm going to think about how I would want to call the update function so you don't have to write this

code at the very bottom is just a quick example.

And I'm going to delete it very quickly down here.

I'm going to try to create an instance of the user service.

Or the argument to the constructor we are supposed to pass in a repository.

I'm going to just trick TypeScript because we're not going actually run this code.

This is just a quick example.

I'm going to put in an empty object and say object as any.

And that's just going to trick TypeScript into thinking that we just gave it a valid repository.

I'll then try to call user's service and call the update method on it.

So, again, let's think about how we would want to call the update function, let's imagine that we

want to call, update and update the user with an idea of one.

And then give them maybe just a new email address, so ideally I want to give them maybe some kind of

object that says I want to update only the email property and update that email address to something

like this.

As soon as I put that in, we're going to get a nasty air here because we need to update our type invitation

on the update function, we need to receive that additional argument.

But here's the challenge.

We need to put in a type annotation that's going to be very flexible and allow us to put in any property

that is tied to a user.

So I should be able to provide an object with an email or an object with an email or some object with

a password, or I should be able to update both the email and the password at the same time by doing

something like that.

So we need a type definition applied right there that's going to be very flexible and allow us to update

either the email or the password or both.

So to do so, here's a little trick we're going to use.

I'm going to put in an argument right here called ATRs short for attributes and then going to annotate

it as partial user.

OK, so what's going on here or user?

First off, remember is a reference to our user entity.

So if we go back over to our user entity file, we've got a class right here that says a user is going

to have an ID, an email and a password.

We then made use of this partial this is a type Helberg defined in typescript itself, it is not something

we have to import into this file or anything like that.

This partial type helper tells us that ATRs can be any object that has at least or none some of the

properties of the user class.

So if we provide any object that has no properties, has at least one property, or has all the properties

of a user, that will be considered to be a valid argument.

So now we can put in an object that has an email and a password that's going to work just fine.

We can put in an object that has just a password.

We can put in an object that has just an email where you can put in an object that has nothing at all.

If we try to put in an object that has properties that don't belong to a user, so let's say color,

we will get an error because color is not a property of user.

So this is a pretty good way of putting together our update function, we've now got some type checking

with TypeScript.

It's going to make sure that we only try to update properties that actually belong to a user.

All right, so now that we've got our arguments put together, I'm going to clean up all this code down

here now we're going to figure out how we're going to actually apply this update.

How are we going to find a user with that given ID and update some attributes tied to them?

So to understand this.

Unfortunately, we're gonna have to write some kind of involved code inside of here.

So let me show you a diagram or two and help you understand what we're going to do.

The first thing I want you to understand is something we just spoke about two seconds ago.

Remember, any time that we tried to save a user entity instance, folks that are associated with that

user entity will be executed.

And that's just about always what we want to have happen inside of rap.

If we ever tried to save a plain object, hooks will not be executed, which is generally probably not

good because it will lead to some tough to debug errors.

So then mind.

I now want to give you another reminder, so a little bit ago, when we first discussed a repository,

I told you that a repository has some methods that really look kind of identical in nature.

So, for example, on a repository, we have a save method and this will either insert or update data

inside of a database.

And at the same time, we have two other methods called insert and update.

Same thing for removing and delete.

All these different methods really look identical in nature.

So what is the difference between them?

Well, this kind of goes back to the same thing we just discussed a little bit ago around this save

method and how we can optionally call it with a plain object.

So insert and updates are made to be used with plain objects.

If we make use of insert in updates, then these plain objects, we're going to update them.

We're going to insert or update inside the database.

But no hooks associated with them will be executed because we are not working with a entity instance.

So if we want to make use of hooks and again we usually do, we're going to rely upon save and remove

because save and remove are designed to work with entity instances.

So in general, we want to go save and remove wherever possible.

But there's kind of a downside to this approach in order to call, save and apply an update to some

record that implies that we first have to fetch out of our database the user that we are trying to update.

Let me show you a diagram just to explain.

OK, so here's how we are going to apply an update inside application and again, it's a little bit

inefficient.

So in order to apply an update, we first need a user entity instance.

We need to understand what we're trying to update.

And we need to have an entity instance so we can run all the associated hooks and whatnot.

So to get this user entity instance, we first have to go into our database and run a query to find

a user with the ID we are looking for.

Once we get that user entity instance will then apply the update.

So we'll update the user's email or the password or whatever else.

And then once we apply, that update will then call save with that instance.

The save method is used not only for inserting new records as we've seen already, it's also used for

updating records as well.

So Type Aughrim is going to look at the changes we just made to that user entity instance and then save

all those updates back into our list of users.

So in this case, we would go and find the user with idee.

One, it looks like we change their email to be at Buy.com.

So we would expect to see the user with one with an email of B at TV.com.

The reason this is inefficient is that it requires two trips to our database, one trip just to find

the user in the first place, and then the second trip to save the changes we just made.

If we were making use of the update method directly, that would require just one single trip to our

database.

We can apply just one update.

Update a single row.

That's it.

We're done.

No additional round trips are required.

So again, we're kind of paying in performance here for having some fancy functionality that we probably

want.

Again, you probably want Hooke's not required.

You can definitely build applications without them.

But I just want to show you the kind of full featured approach here.

OK, so those in mind, let's finish up updates.

So here's what we need to do inside of here.

We're going to first attempt to find a user with a given ID.

We've already got a function that's going to do that right here.

So I'm going to call.

Await this dot, find one, we're going to make use the function that we already define inside of here,

we're going to try to find a user with the idea that was just passed into this function.

Finding a user out of the database is an asynchronous operation, so that's why we're using the await

keyword right there.

Let's make sure that we mark the inclosing function as async.

Whenever we try to find a user, it is entirely possible that we're going to try to find a user that

does not exist.

So maybe we call update with an ID that is just not valid.

So we need to take a look at what comes back right here.

And if a user was not found, we should probably throw an error or something like that.

So I'll say, if we do not find a user, let's just throw a plain air for right now and say user not

found.

If we did find a user, then let's go ahead and make an update to them to do the updates, will they

use the built in function object dot assign?

We're going to put in the user we just found and then an object describing all the updates we want to

copy over to that object.

So that's going to be ATRs.

So I'll put in ATRs as a second argument.

If you're not familiar with the object, a sign we're going to take all the properties and values off

of ATRs and just copy them directly over to user overwriting any properties that are already there.

And finally, to actually save our updates, we will return this repo safe and we're going to save the

updated user entity and that should be it.

OK.

A lot of stuff going on here around update, a lot of stuff to understand, but hopefully once we put

together this method right here and well, for that matter, even kind of one up here, you might start

to understand why creating these services are really is really useful, because we've now got a fair

amount of code right here that I would not really want to tuck away inside of a controller.

This is kind of involves stuff and we might want to make use of this code again at some point in the

future.

So little blocks of code like this.

This is exactly why we create services.

So we have a location to put together some more complicated logic just like this.

All right.

I apologize, as usual, for the very long video, but I really just wanted one single video where we

discussed everything related to updates.

So let's take one more quick pause.

We'll deal with remove and we'll be able to start testing these things by implementing some handlers

inside of our controller.
```
