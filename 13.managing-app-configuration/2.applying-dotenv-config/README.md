## script
```bash
Back in my code editor inside of my root project directory, I'm going to create two different dot,

e and V files, so I'm going to create one.

That is called.

Dot N.V. dot development.

I'll then create another one called Envy Test.

So, again, I want to repeat, we are not strictly following rules set out by the Yemeni people, but

this is a solution that's going to work out reasonably well for you and I.

So then inside of each of these different files, we're going to specify some different database name

to be used inside of the development file.

I'm going to put in a DB name of DB SQLite.

And then inside the test file, I'm going to put in a name of test SQLite.

OK, so now back inside of our module, we're going to wire up the config module of the config library,

we install just a moment to go and we're going to specify which these two different EMV files to be

used based upon our current environment.

So at the very top.

I'm going to add in an import statement or config module and config service from NASA's.

Config.

At this point, I didn't really discuss the config module at all, the config module is what we're going

to use to specify which of these two different files we actually want to read.

The config service is what is going to expose the information inside those files to the rest of our

application.

We're going to first set up the config module by adding it into our list of imports, so at the very

top of our list of imports, I'll say config.

Module.

We're going to add on a four route to it and we're going to pass in a configuration object to the configuration

object, we're going to first say that we only want to set up this config module one time.

And then after we set it up, we want to use this config module throughout the rest of our application.

So anywhere else where we need any kind of environment information.

So essentially want to use this thing globally.

So to do so, we're going to add in a is global of true.

So this setting right here just means that we do not have to reimport the config module all over the

place into other modules inside of a project whenever we want to get some config information.

Then as a second property, we're going to put in exactly which these two files we want to use.

We're going to say N.V. File Path.

And I'm going to put in a template string right here, so we're going to read in N.V. and another DOT

and we're going to put in whatever our current environment is.

We'll put in process ENB note envy.

So if we are in a development environment, hopefully that environment variable right there will be

set to development and that will cause us to read in the development file.

Otherwise, if we are in a test environment, hopefully the node envy environment variable we set to

test and we should read in the N.V. test file instead.

OK, so that's step one we are now reading in hopefully the correct file and all the information from

it.

Now step two, we need to get that information which is shared to the rest of our after this config

service into our type Overeem module.

Now, unfortunately, this is one of the parts where I said, yeah, configuration stuff with Nest is

kind of nasty.

Unfortunately, we cannot just put in here something like config service dot.

DBI name or what have you.

Unfortunately, we have to do something a little bit more complicated.

So this is where dependency injection is going to come into play.

So we're going to do a slight refactor to this entire block of code right here.

The entire goal of the refactor is so that we can get access to this config service through the dependency

injection system.

So I'm going to comment out the entire type or a module block that we currently have.

And then right above it, I'm going to put in a very similar block with just a couple of changes to

it.

I'm going to say type O r m module dot for root async.

I'm then going to inject the config service so that right there, that's the magic part, that's what

tells the dependency injection system that we want to go and find the configuration service, which

should have all of our config info inside of it from our chosen file.

And we want to get access to that instance of the config service during the setup of our type or a module.

Then as a second argument or second property, instead of here, we're going to put in use factory.

This is going to be a function that is going to receive our instance of the config service.

So this is the dependency injection part.

This is where we are going to get our copy or the instance of the config service that, again, should

have all the information from our EMV file inside of it.

Then from this function, we're going to return the same kind of object that we were previously passing

directly into four routes down here, so I'm going to return an object that has a type of SQLite.

A database property and remember, that was the property that we wanted to change based upon our environment,

the four database right here, we're going to read the value from our config service.

So I'm going to put in config get.

I'm going to put in English brackets with string.

And I'm going to specify exactly what environment variable we want to read in from these two files or

one of these two files, so it's going to be DBI underscore name.

Well, then put in some options we had before of synchronise true and for entities, I'll put in user

and report.

And that's it, hopefully that hopefully should be it.

Now, the last thing we need to do is we need to make sure that whenever we start up our project, either

in development mode or in test mode, we need to make sure that the node v environment variable is actually

set.

Because if this is not set, if it is something like undefined or something unexpected, we're going

to try to read in the end of undefined environment, variable or environment file, which clearly does

not exist.

When we try to read that in, we're going to end up not failing.

An error is not thrown from it.

So it's only going to be later on down the road when we try to read in config information and then we

eventually get something like undefined back.

They're going to notice that something went wrong and that just makes that a little bit hard to troubleshoot.

So, again, we need to make sure that whenever we run our project now, this environment variable is

set so we know exactly which these two files we are going to use.

Let's take care of that last step in just a moment.
```
