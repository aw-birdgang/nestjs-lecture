## script
```bash
We set up our connection inside the module, so now we're going to go into our users module and the

reports module inside both those, we're going to create an entity file.

When we create the entity file, we're then going to do some kind of wire up with it.

And behind the scenes, as I mentioned, type Aughrim and Nest are going to automatically create repositories

for both these entities.

Remember, all these steps are around making use of some database.

So by going through all these hoops type, erm is going to do a lot of set up for us and allow us to

write in persist data into some database of our choosing.

In this case, we're making use of SQLite.

So this entire process of creating an entity unfortunately is just a little bit confusing because there

are a couple of different steps to it.

So to create one entity which is going to model some kind of resource inside of application, we got

three different steps.

First, we're going to create an entity file and create a class inside of it.

This class is going to list out all the different properties that we expect our entity to have.

So, for example, a user is probably going to have an ID, an email and a password.

And the report will probably have something like an ID and maybe the price at which a car was sold at.

So let's get started with step number one for our user entity.

We're going to create an entity file, create a class in there and list out a couple of different properties

inside of it.

So back inside my editor, I'm going to find the user's directory, well, then create a new file inside.

They're manually called user entity.

That's.

Then inside this file, I'm going to add in an import statement at the very top for entity column and

primary generated column.

I'm going to import of these from the type Aughrim package.

And I might have primary generated Mr. D there at the very end.

That's better.

All three of these things are decorator's these decorators are going to help them understand some of

the different properties that we are going to add to our entity.

We're going to go into great detail on exactly what these decorators do, how we can configure them

and so on over time.

Next up, inside this file, we're going to create an expert, a class.

Called simply yuzu, now, you might recall earlier on inside the course, I made a really big deal

around naming conventions and I said that for every every class we create inside of Nest, we're always

going to label the class with a name of the thing that this is tied to and then the type of class that

it is.

So if we were following that naming convention, we would call this something like user entity.

However, by community convention, this is the one time that we're going to leave off the type of class

from the name.

So we're not going to call it user entity.

We're going to call it simply user.

And again, this is by convention, so it's not a strict requirement, you can call this thing user

entity if you want to, it is totally up to you.

Next up, inside this class, we're going to list out all the different properties that we expect a

user to have and all the different properties around a user that we want to store inside of our database

eventually.

So as I mentioned just a moment ago, all of our different users are probably going to have an ID.

That is a number.

They're probably going to have an email that is a string and a password that is a string as well.

Now, to be clear, I'm just kind of making these properties up.

So based on my experience, I know based on applications I've built in the past, that a user, if restoring

one inside of application, should probably have these three properties tied to them.

So it's not just a given that every user is always going to have an ID, email and password, it really

comes down to the kind of application you are building.

But in this case, I think these properties are very reasonable to store inside of our database.

Next up, we're going to play these three different decorators to the class, so I'm going to mark the

overall class as an entity.

I'm going to mark it as primary generated column.

And then I will mark email as a column and password with column.

Now, as I mentioned just a moment ago, we will come back and go into great detail on what these decorator's

are doing for us right now.

Let's continue with the set up of our entity.

So we are now done with step number one.

We've got that entity file.

We created the class inside of it.

It's now up to step number two.

We need to connect this entity to the parent module.

So to connect the entity to the parent module.

I'm going to find our users module, so here's the user's module, that's.

Inside of here, we're going to add in and import at the very top for type o r m module from at Narced

James type Aughrim, we're also going to import the user entity that we just created inside of the user

entity file.

This is the same model we used back inside of our app module, so we're going to use that same model

again, but we're going to call a different method on it this time.

Inside the model decorator, we're going to add in a new property here of imports.

I'm going to put in an array.

And inside that array, we are going to call type Aughrim module DOT for feature.

We're going to call that, put in an array and inside that array, we're going to list the user entity.

So this step right here is what creates that repository for us.

And finally, on to step number three, it's a role dance number two, step number three, we're going

to connect the entity to the root connection.

So that's going to occur back inside of our app module.

So back inside of our module, I know these are a lot lot of files going on here.

We're almost done back inside of our app module.

At the very top, we are going to import the user entity that we just created, so I will import user

from.

Users slash user dot entity.

And then in our array of entities right here, which is currently an empty array, we're going to add

in the user entity that we just created.

And that should be it.

So now if we save all this stuff, we should be able to go back over to our terminal.

And we should not see any errors over here, if you see any errors at your terminal right now, then

you likely made a mistake as we went through this process, maybe a very small typo somewhere.

So try to hunt down that very small typo.

OK, so now in theory.

Type of and nest working together should have created this user's repository for us, so this is a class

that we can use in the same way that we use the messages repository inside of our last application.

We should be able to use this class to store data inside of our database, retrieve data updates, change

query, whatever else we want to do inside of our database.

All that stuff is going to occur through this repository.

Now, before we take a look at that repository directly, let's repeat this entire process very quickly

in the next video and set up our report entity as well.

So Quickparts will go to the same thing once again for the report and we'll move on from there.
```
