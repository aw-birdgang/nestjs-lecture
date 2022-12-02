## script
```bash
All right, my friends, who does not love practice, right, practice is like the best thing in the

world.

So we're going to get some practice right now in creating an entity because we're going to do everything.

We just in the last video once again for our report entity.

So we have to go through the same three steps once again.

So let's get to it.

We're going to go through all these things much more quickly, of course, this time around.

So to get started, we will create our entity file.

That's going to be a class.

We're going to list out some properties in it that we would expect a report inside of our database to

have it.

Remember, a port or a report inside our application is meant to represent a user selling a car so it's

can have some facts around that sale, such as what car was sold, the mileage where it was sold, the

price and so on.

So to get started.

Back inside of our Ed, I'm going to find the reports directory, I will create a new file inside there

called Report Entity.

That's.

At the very top of this file, I will import.

Entity, column and primary.

Generated column.

And I'm going to import all that from type Aughrim.

Next up, we will create and export our class called report.

I'm going to just right away apply the entity decorator because we know we need it.

I'm going to add in the ID.

And I'm going to mark that as a primary.

Generated column.

And then right now, the only property that I definitely know that we want a report to have is the price

at which a car was sold.

As I mentioned, we're probably also going to have stuff around the location of the sale and what car

was sold and stuff like that.

We'll figure all those properties out later.

Right now, again, the only property that I know for 100 percent is going to exist or under-report

is the sale price.

So I'm going to say that every report is going to have a price that is a no.

And I'm going to mark this with that same column decorator.

OK, that looks good for our entity.

So now we need to connect that entity to the parent module.

So for that, we will find our reports module where it is right here.

Inside the reports module file, at the very top, we will first import type O R.M. module from NASA's

type Aughrim.

We will import our report entity.

We will then add in our list of imports on the module.

Inside that array type O m module or feature.

Put in an array into the array.

We will add in our actual entity of reports.

Hey, that is step number two.

So finally, on to step number three, we need to connect the entity to the root connection that's going

to occur inside of our app module.

So back inside of our app module, that's file.

At the very top, we will import the report from reports report entity.

And then finally add that entity right there to our array of entities inside of our root connection.

So we will put in a report right next to user, and that should be it.

So let's save this file.

And now if we save everything that we just change, we should once again be able to go back over to

our terminal and not see any errors ever here.

So for me, definitely looks good.

Now, the last thing I want to do for right now is go back into my file, explore on the left hand side

here.

And remember, I mentioned that when we set up that route connection.

Inside the app module.

Type Aughrim and sequel Lights are going to work together to create a database file for us because SQLite

stores information inside of a very plain file.

And it was this database property right here that dictated the name of that database.

So inside of our project directory, a file called DB SQLite was created.

If I now try to open that file, I now get an error around not being able to display the contents of

that file.

So just a little bit ago, when we first created that file, it opened up as just a plain empty file.

So now it looks like there's probably some data inside there.

So I would like to take a look at what is going on inside this file.

I want to do a little bit of debugging and understand what data is contained inside this database.

To do so, we can either install some kind of extension or some external program.

Should take a look at that SQLite extension.

Or alternatively, we can install a extension directly through voice code that will take us allow us

to take a look at the contents of this file.

So let's try that out.

I'm going to make use of an extension inside of code to look at the database inside of your.

So to install this extension, I'm going to go to the top bar and find a view and then go to Extension's.

We will search for SQLite.

Should be the first result right here and then go ahead and just click on install.

Once this is installed back at the main screen, I'm going to go to view.

And then command Palant the hockey for this, if you're on Mako's is command shift.

So either way, open up that command palette.

We will then search for sequel lights and we want to find an option that says open database.

So if you run that option, you should then be given an option to open up the SQLite database that is

stored inside of our project directory.

So I'm going to click on that.

And now on the very bottom left hand side of your editor, you should see a new little expandable bar

down here called SQLite Explorer.

If I expand, that will now see the DB SQLite file.

And if I expand that, I should now see our two collections of data.

So here is our list of reports in every report has an ID and a price.

And I should also see my user collection as well.

And every user should have an ID and email and a password.

So I'd say this looks pretty good.

It looks like we have now correctly set up a database.

We've connected to it.

We've created a couple of collections of data inside of it, and each of these collections have the

appropriate properties.

So without a doubt, type forum and Nest have collaborated to do a lot of heavy lifting and a lot of

work for us.

So that's definitely fantastic.

Now that we've done some initial setup, it's time for us to actually understand how to work with type

Aughrim and how we're going to use it to store and fetch data over time.

We're going to take a pause right here.

And in the coming videos, we're going to learn a lot more about type Aughrim.

We're going to learn more about these entities, the repositories that get created out of them and all

that kind of associated stuff.

It's a lot of content.

Let's get to it in just a moment.
```
