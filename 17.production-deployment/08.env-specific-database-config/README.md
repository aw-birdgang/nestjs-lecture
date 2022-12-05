## script
```bash
In the last video, we established that we need to define all of our database configuration inside of

our config file, this will allow us to share some database configuration for our application when it's

running in development or testing or when we are running the type or MCI by itself, which is going

to occur whenever we need to run some migration's or anything like that.

So we're going to extract a little bit of configuration out of our app module and we're going to put

it into this form config as file instead.

OK, so back inside my editor, I'm going to find the app module.

I'm going to go down to where we set up the type or a module right here.

We're going to delete that entire section and replace it with a program module for root instead.

Then inside of a group project directory, I'm going to make a new file called ARMM Config.

And once again, make sure that you create this file inside of your root project directory.

It's not going to be inside the Sarsae folder.

Then inside of here, we're going to define a variable we'll call about.

DBI config.

We're going to put in a couple of options on it, we're then going to adjust this option or this object

in a couple of different ways, depending upon what environment we are running in.

So development test or production, you might notice also right away that we are getting an air from

using the key word CONSED right here.

It's coming from excellent yet again.

Josslyn is causing a little bit of issues here.

If you want to make that word go away or that air go away, we can change that to Vah instead.

Again, Slint is kind of hampering our creative abilities here, but doesn't matter.

OK, so then after that we're going to take a look or figure out what environment we are running our

application in.

So I'm going to set up a switch statement.

We're going to switch over Process N.V., Node ENB.

And then we're going to handle the case in which we are in development.

The case in which we are in test.

The case in which we are in production.

And we'll also have a default case as well.

Then at the very bottom, we're going to export so module exports, that DB config object.

So, again, we're going to put in a little bit of configuration right here that is going to be true

for all these different cases, we're then going to modify that config object depending upon our different

environment.

So on the object for right now, we're going to add in no properties right away, but we are going to

come back very shortly and add in a couple of different properties to be used right now.

Instead, we're just going to worry about updating that object in these three different cases.

So if we are in development, I'm going to.

Do an object assign?

On top of Debe config, and we're going to add in a couple of different properties inside of here,

so if we are in development, then I'm going to specify my type of database as being SQLite.

The database that we're going to use is going to be SQLite.

The location of all of our different entities.

Is going to be star, star, star entity Dot James.

And then we are not going to do any synchronization anymore, so I'm going to put in a synchronized.

False, and you know what, we can actually that is one property we can extract the very top, so let's

just do that right away.

So I'm going to put that one up at the very top, because in no scenario do we ever want to run that

synchronise flag anymore.

After doing the object design and then going to break out of the case statement.

OK, now I'm going to copy that block down and put it in the test case.

When we are running our application test, we still want to use a SQLite database, but rather than

saving all of our data into a file called SQLite, we're going to instead write it into test SQLite.

And then for reasons that we saw in the last video, we're going to change entities right here to look

for any final ending with entity DOT teams instead.

We're going to deal with the production case in a little bit right now, I'll just put in a break and

then finally for default right here, we're only going to fall into the default case if process node

envy is not going to match development test or production.

So if we do not have a defined environment or if the environment is something we don't expect, well,

we don't really know how to handle a configuration for that.

So if we fall into the default case, I'm going to throw a new ER and say unknown.

Environment.

Like so.

OK, so that should be it now to test this out, I first I'm going to go again into my project directory

and I'm going to delete my DB SQLite file.

I'm also going to make sure I delete the test file as well, so I want to start entirely from scratch

right now so I don't have any more secret files inside my project directory.

Once I've ensured that on, then going to go back to my terminal and start up my application in development

mode by running the command npm run start dev.

OK, so back here at the terminal.

I'll do a NPM run start, Colin, Dev, now just you know, our application's not going to work as expected

simply because we are not doing the synchronized step anymore.

But I at least want to see some kind of message appear, something that says, hey, we do or we did

at least somewhat try or we at least got to some point where a database we attempted to create a database

or something like that.

It's going to stir up the server.

And it might start up we might get an air, it's probably only going to get an air when we start trying

to make a request, so it looks like we are able to start up.

That's good.

That also means that we probably are creating a SQLite database right there.

So that's good as well.

So, again, it's probably only going to be once we start making requests and trying to access data

inside that database, because right now, because we turned off synchronise, there is no structure

inside that database.

There is no users table.

There's no reports tabled or anything like that.

So if I go into my API client, let's say I go and try to sign up to the application, so I'll do a

sign up request, I probably will get an error.

Yep.

Looks like I get an error right there.

And if I flip back on my terminal, I'll probably see an error that says no such table user.

So that's totally fine.

That's good.

That is expected because our database no longer has any structure inside of it.

Now we've got this in config file put together and we can at least kind of connect to our application.

Let's take a pause right here.

We're going to come back next video and start putting together some logic around our database migration,

and that will allow us to actually put some structure into our database.
```
