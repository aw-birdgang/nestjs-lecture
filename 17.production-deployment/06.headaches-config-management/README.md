## script
```bash
All right, my friends, now that we understand the idea behind migration files, we're going to take

a look at some well, a little bit of difficulty in getting these migrations to work.

I cannot understate how kind of and we ask the kind of frustrating the coming videos are going to be,

because it turns out that after all this time, unfortunately, nest in type Aughrim, although they

seem to integrate together so darn well, it turns out that Neston type Aughrim when really comes down

to these migrations, not the best thing in the world.

So let me tell you why there's going to be we're in for a wild ride.

Trust me.

Are you going to eventually have something that works, but it's going to be challenging?

OK, let's just dive in.

OK, so first off, how do we actually create and run immigration?

Well, when we are doing active development and when let's say we want to change the structure of our

database, here's what we would normally do.

We would stop our development server would use the type of Seelie.

Now, we have not used the type Hermosilla yet.

So this is a new tool we're going to use.

We're going to use it to generate an empty migration file.

This migration file is going to have inside of it and up function and a down function.

And inside there, we're going to add in some code that describes a change we want to make to our database.

Once we've created that, migration will then execute it by using the type of seal again and then at

that point in theory database is updated, we can now restart the development server and we are good

to go.

Now, it turns out that this process in actuality is really, really challenging, and especially not

only during development.

But remember, we're also running our application in a test environment and eventually a production

environment as well.

So that is what is going to make the set up of this entire flow rather challenging, really frustrating.

I can't tell you how frustrating it is for me personally, having gone through this entire process more

than one time on my own personal projects.

But again, we'll get through it.

So let me tell you why this entire flow is a little bit strange.

OK, so at some point in time, we're going to use the type or Seelie to open up our database or connect

to our database and make some changes to it.

That is the key, the type vermicelli needs to somehow connect to our database and somehow change the

structure of it.

Now, remember, where did we set up all of our different database configuration variables?

We set up all that stuff back inside of our app module.

So here's the app module right here.

Remember, we went through that entire process with type or module for async.

We made use of the config module and the config service.

So we are building up an object right here that describes how to connect to our database.

We then created those two N.V. files to say we either want to connect to a database called SQLite during

development or one called Test SQLite when we are running our application in a test mode.

So the problem is that the type or Seelie, whenever we run it to generate a migration file or to apply

immigration file, the Seelie only will run the code inside of our entity files and the migration files.

That's it.

The type of Gramsci has no idea what Nest is the type or I'm Seelie has no idea what the config module

is.

It doesn't know what the config services.

It has no idea what we have going on inside of the app module.

But the app module itself is what defines exactly how to connect to our database.

The Tykwer on Seelie just plain has no idea how to get that object right there and how to use it to

connect to our database and apply the migration.

That is the core issue here.

We have encoded all of our different connection settings directly into the nest site of application.

And now we cannot share these connection settings very easily with a type or a side of things.

Now, a very easy way to address this would be to simply copy paste, more or less that connection object

right there and somehow hand that off to type R.M. and say, hey, here you go.

Here's how you connect to our database and go ahead and apply the migration to it.

But obviously, copy pasting configuration settings like this around our application is a recipe for

disaster.

Definitely not something we want to do.

So what we really have to figure out here is how to define all of our configuration for connecting to

our database in one location so it can be used easily or equally well by either nest or the type of

CLY that is the challenge.

And then on top of that, the additional challenge is how our application is executed slightly differently

when we are running it in production versus development first test mode.

OK, so now they've kind of prepared you we're going to take a pause right here.

We're going to come back next video and I'm going to really, truly we're going to really dive into

why exactly this is so challenging.
```
