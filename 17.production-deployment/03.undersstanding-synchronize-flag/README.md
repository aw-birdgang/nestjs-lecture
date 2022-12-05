## script
```bash
Next, we're going to work on replacing our SQLite database with postgrads instead, just to be clear,

we are only going to use postgrads in our production environment.

We're still going to use SQLite in development and test.

OK, so making use of postgrads in production is going to have, like I said a little bit ago, a lot

of really interesting issues are going to come up along the way.

A lot of these issues are not really tied to nest eggs per say.

Instead, it's a lot of issues with Type Overeem itself.

So I want to give you a quick reminder on something that we discussed very briefly a while ago inside

of our app module down at our type of module right here.

You might recall that we set up all this configuration stuff and we eventually return an object that

configured our database.

And one property we put on there was synchronize.

True.

This is an incredibly important property.

And I can't tell you enough how important it is for you to understand exactly what this property does

for you.

So let's take a look at a couple of diagrams and understand what Synchronise is really doing for us.

OK.

So in this diagram, we've got our database here on the right hand side, I'm only going to consider

our table of users for right now, even though we also have a table of reports as well.

Now, inside of our application code, we defined a class called user, and that was supposed to be

our user entity on that class, we added a couple of different properties, along with some type annotations

as well.

So, for example, we had an ID of no email.

There was a string and password that was a string.

We also had a reference to reports that belonged to this user.

But right now, let's just consider these three properties.

So because of that synchronized true flag, specifically because this is set to true, whenever our

application starts up, type Aughrim is going to look at the user entity, it's going to look at all

the different properties that it has.

And there type type Aurum is then going to take a look at the current status of our table of users inside

the database and type.

Aughrim is going to make sure that this table has all the exact same properties with more or less the

exact same type as the user entity itself.

So, for example, if you and I went into our user entity file right now and deleted that password property

and then restarted our application when type Aughrim read our user entity, the next time it would notice

that there was no longer a password field.

So it would go into the database, find the table of users and automatically remove that password column.

So it delete the entire column along with all the data inside of it, if we were to add another prop..

So let's say we also put in something here like name that is a string as well.

Then the next time that type of room starts up, it's going to notice that there is a column here of

name.

It's going to take a look at the table of users and notice that the table does not have a name column.

Serotype Aughrim is going to modify that table.

An ad in a new column that's going to record the user's name.

So the entire purpose of that synchronized flag is to make sure that whenever type of crime starts up,

it's going to take a look at our different entities, it's going to look at the structure of them and

then modify our database to suit exactly the structure of your entities.

Now, I can't tell you enough.

This is extremely uncommon behavior.

There are very few skill frameworks out there, not only for TypeScript and JavaScript, but for other

languages as well that behave in this manner.

So let's take a pause right here.

We're going to come back to the next video and tell you exactly why that is going to make sure it's

really clear why this can be a very dangerous setting to have enabled inside of your application.
```
