## script
```bash
All right, onto our last function, thank goodness, remove so this function is going to be similar

nature to update as an argument, we're going to take in the idea of the user that we want to delete

out of our database.

But then inside of here, we're going to once again run into an identical issue to what we just discussed

a moment ago in the last video.

So on our repository, we have two very similar methods.

One is delete, one is remove.

Remove is designed to work with an entity.

Delete is designed to work with just a plain ID or some kind of search criteria.

So, for example, we could say delete all the users with an email of blah.

If we make use of delete.

And we just pass in and it directly, this will take just one trip to our database, so one query that

we send off that says find all the users with this ID and just delete them.

So it's very quick.

The downside is that if we make use of delete, any hooks that we have associated with our entity will

not be executed.

And remember, in our case, we do have a hook associated with deletion.

So back over inside of our user entity file at the very bottom we put together after remove right here,

or we may use the app to remove decorator.

So if we call delete to delete a user, this hook right here will not be called.

If we want this thing to be executed, then we have to make use.

Of the remove method instead, and that means we need to first go into our database, we need to fetch

that entity and then move on it.

So that means two round trips to the database, one to get the user and the one to actually delete it.

So twice the work just to get these hooks to run again.

If you want to use hooks and you probably do, this is what you have to do.

OK, so with that in mind, let's give this a shot back inside of my user service, we're going to have

some code that looks just about identical to what we have up here inside of updates.

So I'm going to say find the user.

Either ID.

We're making use of the 08 keyword, I'm going to mark that thing with async.

Then inside of your interesting question for you to decide on your own, do you want to throw an air

if a user was not found, if we didn't find a user at the given ID, well, that implies that they've

already been removed.

So we're kind of fulfilling the expectation here.

It's up to you if you want to throw an error.

If the user was not found, I personally probably think that we probably should throw an error because

if we try to remove a user with a given ID, I kind of want to be told if a user without ID was not

found, because that indicates that I thought a user existed when they really didn't begin as totally

up to you.

In my case, I'm not going to say, you know what?

If we don't find a user, let's throw in our.

Then after that, we're going to return this rebo, remove the user entity, and again, that is a user

entity instance, which means all of our hooks associated with that entity will be called they'll be

executed.

All right, so that is it, we've got our service put together now, I just want repeat one more time.

The service actually turned out to be kind of beefy with the exception of find one and find we've got

some decent amount of logic associated with each of these different methods.

So hopefully now you're starting to see why services, although they kind of start to look identical

to repositories in the beginning, eventually start to have a fair amount of logic inside them, even

if you've got the most basic of operations, such as just updating and removing without any additional

logic or checks around them.

OK, so our service is in a good spot.

I like it now all we have to do is go back over to our controller.

We have to define a couple of root handlers inside of here and then call the associated methods we just

defined inside of our service.

Well, then do some manual testing and just make sure everything works as expected.
```
