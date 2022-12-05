## script
```bash
Finally, time to start deploying our application, so here's the general idea, we're going to deploy

our app to a service called Hiroku.

Roku is a free hosting provider and is extremely easy to use.

So to deploy our application, we are going to wrap up our next application inside of a git repository.

It actually turns out that we first generated our project.

A git repo was created for us.

So all we have to do is commit our code.

We're then going to push this entire git repository with all of our applications code off to Hiroku.

Once our applications there, Hiroku or Nest is going to automatically build itself from the typescript

code that it is into plain JavaScript, our servers then going to start itself up and listing for incoming

traffic.

To actually get access to a database, we're going to also ask Hiroku to create a copy of Postgrads

for us, the postgrads copy or instance that is created is going to have some authentication credentials

associated with it.

So a username, a password and so on.

To get those authentication credentials over to our application, Hiroku assigns a environment variable

to our application as it is running.

This is called the Environment Variable Database underscore URL.

So this will be set up for us automatically by Hiroku.

So we need to make sure that we take that environment variable and make use of it inside of our type

or config to tell type Aughrim how to connect to that Postgres database.

All right, so there's a couple of things we need to do to get all this entire process wired up and

put together, we have to commit all of our code with Git.

We have to make sure we read in this database you URL parameter inside of our our configures file.

We need to create a new project on Hiroku.

We need to create a database inside that project as well.

So a couple of different things to go.

The first thing we're going to take care of is making sure that we connect to the database correctly

in this production environment.

So we're going to open up our Emken config file again.

We're going to put in some production configuration.

So let's get to it.

Back inside my editor, I will find the grim config, dodgiest file.

I'm going to go down to the production section.

Under case production, put in another object out sign DB config.

And we're going to put in some very different configuration this time around, because we are no longer

connecting to SQLite, so I'm going to instead put in type of posterous.

We're going to put in a property that's been referred to Process ENB and we're going to refer to that

environment variable that is set for us by Hiroku, which is database.

You, Earl.

This database URL is going to have the name of the database.

The username to connect to it and the password to connect to it as well, all encoded inside that URL,

that's going to very much simplify this configuration object.

I'm going to also add in migration's run of true to make sure that we run our migrations whenever we

are about to launch our application in production.

We're going to tell Type R.M. where all of our different entities are.

So we'll put in star, star, star entity, not James, because when we are in production, we are running

plain JavaScript files as opposed to TypeScript as we were during test.

And I think the last property that we really need for right now is one property that's specifically

tailored to Hiroku.

So we're going to put in SSL, assign it an object and say reject unauthorized police, do double check

your spelling on the word unauthorized right there as well.

Next up, we need to make sure that we install the PostgreSQL driver that is going to be used by type

Orham into our project.

So back over at our terminal, I'm going to run and install.

CGY.

Pakistani border, and that's pretty much it.

OK, so the database side of our application is now production ready.

So we are going to go through a couple of other very small changes in the next video.
```
