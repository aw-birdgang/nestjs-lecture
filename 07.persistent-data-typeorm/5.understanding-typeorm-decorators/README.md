## script
```bash
Got a ton of type of code set up inside of our project, so now we can go back over everything we just

did and take a look at some of this type of related code and understand what it is really doing for

us.

The first thing I want to focus on is some code that we wrote inside of our app module file.

So here's the app module dots file.

And inside of your recall, we had set up this type of module.

So we spoke about some of these different settings.

We said that we can make use of type Aughrim with many kinds of different databases.

So in this case, we said specifically we want to use SQLite for right now as our database.

We then specified the file that we want to save all of our data into, and then we loaded up our list

of entities.

And then finally, the first option right here that I really want to focus on and help you understand

what a very significant setting this is right here.

We said synchronize true.

So let me give you a little bit of backstory on sequel type databases and help you understand why that

is a very important setting.

All right, so inside this diagram, I've got a database example up here at the very top, so we're

going to imagine that maybe inside of our database we have a table of users.

So that is a listing or a collection of different user records.

A table has many different columns inside of it.

So in this case, I've got a ID column, email and password.

Whenever we create a skilled database, we always enforce a very rigid structure.

So a table is always going to have the exact same number of columns with the same exact names, with

the same types of data inside them.

Any time that we want to change the structure of our database in any way, we run something called a

migration.

Immigration is a very carefully designed little piece of code that somehow changes the structure of

our database.

So this might rename a column.

It might change the type of data in a column, I might add, or remove a column it might even add or

remove a brand new table.

So, for example, if we wanted to go to our list of users and add in a new piece of data around them,

maybe if we wanted to record the user name of every user, normally in just about any typical application

out there that uses a single database, we would do this by writing a migration.

And again, this migration would be a little snippet of configuration or really skill code.

And this migration would tell our database to look at the table of users and automatically add in this

new column right here.

Though you might notice that inside of our project right now, we have not really done anything like

that, we have not ridden out any migration.

We have not manually created our database.

We have not really set up any rigid structure around our data.

That is because Type Aughrim has a very special feature in it, referred to as the synchronization feature.

This synchronized true feature right here is only for use in the development environment.

This option, when set to true, is going to cause type Aughrim to take a look at the structure of all

your different entities and then automatically update the structure of your database.

It's going to create and remove tables.

It will add and remove columns, and it will change the type of data stored in these columns as well.

And this is all done automatically through type arem with the use of those entities and all those different

decorator's.

So as an example of this, let's take a look at our user entity file.

Let's take a look at some of the different decorator's we used in here and understand how type Aughrim

use those decorator's to build a new table definition for us inside of our skill like database.

All right, so here's our class right here.

So the first thing we did was we marked the entire class with the entity decorator that tells type Aughrim

that it needs to take a look at this class and it needs to create a new table to model this class or

really a collection of instances of users.

So by just putting on that entity decorator right there that tells type Aughrim to reach out to our

SQL database at Startup and make sure that there is a table inside their.

Old users.

So that's why we saw inside of our SQLite viewer just a moment ago that there was a table of users in

their.

Next up, the primary generated column decorator is going to be read in by type Aughrim and it's going

to cause type Arem to take a look at the table of users and add a new column into it called IDX.

That column is going to serve as the idea of every user that we add into this table and as I mentioned,

this idea is going to be automatically generated for us.

So it's going to be marked as a no, we never have to put in an ID if we're trying to create a new record,

one will be assigned to a user for us automatically.

Type crime is then going to take a look at our two column decorator's and as you guess, it's going

to create two columns inside this table.

One will be named email, and it's going to hold strings.

The other is going to be named password, and it's going to hold strings as well.

So we would get an email column that holds strings technically inside of SQLite.

It's called Örvar Char Barkha.

You can really think of just meaning string, so I'm going to label it string on this diagram.

And then we get the password column that's going to have a string inside of it as well.

So all this updating of the structure of our SQLite database is done for us automatically by type Orham

at Startup.

And it's all thanks to this synchronized true flag right here.

So that means that if we go back over to our entity and we start to add in some additional properties

and mark them with that column decorator, or if we start to even change the type of these different

columns, maybe if we change email to number or something like that, when our application next starts

up or when it next runs at our terminal type, Aughrim is going to see that update.

It's going to reach out to the users table and update that email column or password or whatever else

in some particular way.

I want to highlight just one more time that this is very atypical.

Most SQL OEMs, which is what we're using right now, don't really behave in this fashion.

Normally, you and I have to write out these migration files that we're going to change the structure

of our database.

And lastly, want to mention is that we only are going to make use of the Synchronoss feature in a development

environment, it is extremely important that we never run that micro or that synchronised feature of

true in a production environment, because it's very easy for that synchronise flag to accidentally

say, delete a column so we could accidentally delete all the user emails in our production database,

which would obviously be very bad.

So when we start to move our application into a production environment, we're not going to rely upon

that synchronise flag anymore.

Instead, you and I are going to ride out these migration files instead.

So eventually, yes, you and I are going to understand more about these migrations, how we create

them with type of crime and how we run them as well.

But when we are strictly doing development of our application and we're not really sure about the structure

of our database just yet, well, making use of that synchronise feature is really, really nice because

it saves us that entire task of having to write out those migrations, which can sometimes be just a

little bit tedious.

OK, so now we understand the purpose of these decorator's a little bit more, and we have a better

idea of what type of crime is doing for us.

Let's kind of start to focus on the repositories that were created for us, as we discussed in great

detail over the last couple of videos and understand how to use these repositories in the next video.
```
