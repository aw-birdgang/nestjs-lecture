## script
```bash
Just a moment ago, I said that getting type of ram and nest to work together is really simple and straightforward,

but even then it turns out that we have to write out a pretty good amount of code to get type Aughrim

and Nest to cooperate.

It's not really the issue being that we have to write a lot of code is that we have to place a lot of

code in some different locations.

And it can be kind of confusing about what all this different these different pieces of code are really

doing for us.

So before we start to integrate Type Aughrim into our project at all, I want to show you one very important

diagram.

So this is what's going to be happening behind the scenes inside of our application right now.

As we generated our app, we automatically got one module created for us that was called the app module.

We then generated two other modules called Users and Reports.

So as we start to integrate Type Aughrim, we're going to do a couple of different things between these

three different modules.

First, inside of our app module, you and I are going to create a connection to a skylight database.

As a quick note, if you are not familiar with SQLite at all, totally fine.

Don't sweat it.

We're going to create this connection to this database inside of the app module, when we do so, that

connection is going to be automatically shared down into the user's module and the reports module.

So when we start up our application, this single connection to our database is going to be automatically

shared and spread throughout all the different modules of our project.

Then inside both of our users module and our reports module, you and I are going to create two very

special files.

We refer to these as entity files.

An entity is very similar to a model in just about any other framework or language with a couple of

very small exceptions.

An entity files, defines a single kind of resource or a single kind of thing that we want to store

inside our application.

So these entity files are going to say that there is a user entity, there's a user resource, there's

a user kind of thing we want to store inside of a database.

And these entity files are going to list out all the different properties that a user or a report is

supposed to have.

So, for example, a user probably should have, say, an email and a password or something like that.

So inside the entity file, we're going to say that a user should have a email that is going to be a

string and a password.

There's probably going to be a string as well.

We're going to do the same thing inside of our report and file as well.

Once we create these two entity files, we're going to feed them into Nest and behind the scenes nest

and type of them are going to work together to create a repository or a user's repository for us and

a reports repository.

So this is very important.

When we are using type Aughrim, you and I do not have to create repository files manually as we did

on our last application.

Instead, these repositories are going to be created for us automatically behind the scenes.

We don't even end up seeing a generated file or anything like that.

These are two classes that will be created for us.

OK, so at the end of the day, what we really have to do here is do a little bit of connection set

up inside that module.

We then have to create a user entity inside the user's module and a report entity inside the reports

module, and that's it.

So let's start right away by creating this connection inside the app module.

Back inside my editor, I'll find the SC directory and go to the app module, file that inside of you

at the very top, I'm going to import type O.

R.M. module from.

Nest James, type Aughrim.

Notice that right here is lowercase, so make sure you do not have capital R.M..

We're then going to add in type Aughrim to the list of imports on this module, so type R.M. module,

we're then going to call the four root method on it and into foru we're going to pass the configuration

object.

So what we are doing right now is this step right here.

We are setting up that connection to the SQLite database.

And as you might be able to kind of guess by that Farouk's method name, that connection is going to

be automatically Sheardown into the all the other modules inside of our project.

Inside this configuration object, we're going to add in a couple of different properties.

The first one is going to be type SQLite.

So type Aughrim, as I mentioned, can work with many different kinds of databases with this type property,

we are saying that we want type R.M. to create a SQLite database for us.

We're then going to provide a name for the database.

So I'm going to put in a database and put in DB SQLite.

Well, then add in an entities array that is going to start off as empty.

Right now, this entities array is going to eventually list out all the different entities or things

we want to store inside our application.

So we are going to eventually put in the user entity and the report entity.

And then finally, we'll add on synchronise.

Of true, like so we're going to go into a lot more detail on what synchronized means in just a little

bit.

OK, and that's it for right now, so I'm going to save this file now, as I was typing all that stuff

out, you'll notice I was getting a lot of errors popping up on the screen.

Once again, that's all coming from excellent.

And as I mentioned earlier on inside, of course, I personally really don't care for.

Excellent.

So it's a very quick aside, I'm going to go into my excellent RC James file right here and I'm going

to comment everything out inside that object because I really don't need all those extra errors coming

up when I know that I've got some invalid syntax or something like that.

All right, so now the last thing we're going to do is start up our application from the terminal,

so back over at my terminal.

I'm going to do a NPM run start Colen Watch.

And it looks like I might have missed a NPM install, OK, start dash dev by mistake.

Start coal in depth, not dash, that's better.

All right, so it looks like everything is starting up.

And now, very importantly, once the application finally starts out, there's just one last thing I

want to show you.

So eventually it will start up, I promise.

Come on, there we go, finally.

Now back over at my editor.

You might notice that inside of your group project directory, you now have a new file listed inside

of here, and it's called the DB Secret File.

So SQLite is a file based database.

That means it's going to store all the information related to your database inside of one single file.

So by putting in this database property right here of DB SQLite, that's going to cause type arem through

SQLite to automatically create a new database file inside the root directory of your project.

The really nice thing about this is that now you can open up this file and eventually we're going to

see the raw data of our database inside of.

You're obviously looking at raw data, which is going to be encoded and just about unreadable to you

and I.

We can at least get a variety of different tools that will allow us to very easily inspect the data

inside this file.

So as we are doing active development inside our application, we can take a look at the contents of

that file with a variety of different tools and see all the data for our application up here, inside

there.

So, again, making use of light in a little kind of development environment right now is going to end

up being really nice and really useful.

OK, so lot of stuff in this video.

So let's take a pause right here and move on with Type Aughrim in just a moment.
```
