## script
```bash
In the last video, we established that when we are running the type of Seelie, we need to somehow

figure out some connection options.

In other words, we need to tell the Seelie how to connect to our database and eventually run some migrations.

And we established that right now that's a big issue because all of our connection settings are embedded

inside of our app module.

When the type of program Seelie executes, it does not execute anything related to Nest itself.

So we cannot right now tell type Aughrim how to connect to our database using options we wrote out inside

of our app module.

That's the issue.

OK, now, before I go any further, I won't take a very quick pause, I want to tell you that this

video is 100 percent optional.

This is going to be a very long video.

And in this video, I'm going to show you why configuring nest and type of room together is an absolute

nightmare.

This is an optional video because it's going to be so long.

So if you don't want to hear about a rather that long rant coming from me, that's going to help you

understand some problems you might run into in the future on your own, then just pause video right

here and go on to the next one where I'll give you a lot of code that we're going to use to properly

configure type of run.

And that's together.

OK, so if you're still here, fantastic, let's get through this.

We can try to make it as quickly as I can or so first I want to do is show you a little bit of documentation

around type of crime itself.

We're going to take a look at a page that tells us how we can load up some connection options into type

crime.

So here's that page right here.

This page will tell you that there are several different ways to get some connection settings into type

Aughrim.

Either one is running inside of our next project or when we are running type of and by itself through

the CLI.

So here are all the different options we can define a Orham configuration file inside of our project

directory that tells type arem exactly how to connect to our database.

So if you create this file with some information like this inside of it, then type erm is going to

automatically load it up whenever our project starts.

So whenever Nest starts up, type erm is going to automatically look for this file.

Whenever we run to type or as well, it will also look for this file.

So in other words, if we make a file like this, it will be automatically followed up by type of and

this file will tell type how to connect to our database.

Now, there are other ways to encode the exact same information, for example, we scroll down.

We can also define a Orham config file.

We can also define these connection settings using plain environment variables like the ones you see

right here.

We could either define those as normal environment variables or we can define them inside of a dot in

the file.

We can also.

ENCODE all these settings in a YAML file or an XML file and elsewhere on this page, you'll also see

it says we can put all this stuff inside of a typescript file as well.

So, again, this page tells you all the different ways you can feed connection settings into type of

yet as it is running inside of our nest application or when is running by itself through the CLI.

The one thing that this page does not show you or does not tell you how to do is how to load connection

settings directly into type arm itself through your code, in other words, as your application is running.

So the last way in which you can really configure type Aughrim is to give it some connection settings

directly when you make use of it.

So that's what's really going on right here inside of our app module.

So this is where we set up all that stuff around for root async and then return this configuration object.

OK, so now we've established that let's take a look at a diagram that's going to show you why things

are going to be a little bit crazy here.

So in this diagram, at the very bottom, I've got all the different ways in which we can load up some

connection settings into type Aughrim.

So these are pretty much all the different options that were listed on the documentation page.

We can set some plain enviornment variables, set environment variables inside of the file, make a

JSON file as file typescript file, YAML file and also an XML.

But I'm just not going to show XML.

Now, right from the get go, we need to somehow figure out some way to find some connection settings

that will be fed into type Aughrim and remember, type of crime is being executed in a variety of different

environments.

We need to figure to put in some configuration options to type arem when we are running it inside of

our application during development, when we are running inside of our application during testing and

when we run type and by itself through the Seelie.

So we need to pick one of these options so we have all of our configuration in one place.

And all that configuration needs to be fed into type arem in these three different scenarios.

At present, our application is doing this, we are running our application either in development or

testing, and when our app runs, we generate some connection options and feed it directly into type

Aughrim.

So this green box right here really corresponds to this object.

Back inside of our app module, we are generating these connection options and feeding them directly

into type Boram.

So it's very clear that this is not going to work anymore because we cannot get access to those connection

options from the type or CLI.

So not feasible.

Someone's going to delete that right away.

So we need to now pick one of these other different ways of feeding in all this config and that exactly

all these different options right here.

This is why getting type of RAM and Nesto work together is a real nightmare for one reason or another.

It turns out that just about all these different methods are does not work very well to get the best

and type them to work.

So we're going to go through these one by one and we're going to disqualify each of them.

And that, again, is why this video is going to end up being really long.

So the first thing we need to keep in mind is that during development and testing and production, for

that matter, we need to be able to to feed in very different connection settings to type Aughrim.

So that almost immediately starts to disqualify something like loading up environment variables from

a fixed file, like a Orham config based on file inside of a plane JSON file, we have no scripting

abilities.

We don't have any way to change what database URL we connect to or what username or what password or

what database name we make use of inside of a plain static file, like a JSON file or a YAML file.

So right off the bat, these things are not options because we cannot configure type arem in a slightly

different way during development, testing or production.

So that leaves these other options.

So first off, to for these remaining ones, can we make use of environment variables to feed in some

connection settings to type arem?

During us running the Seelie or us running it directly in development or testing, unfortunately not

really, we can make use of environment variables to set up type of them correctly during dev and testing,

but for some reasons you're going to see very shortly.

We cannot really make use of environmental variables directly to feed in connection settings to type

of room when we deploy our application to production.

The reason for that, just to be really clear here, I can tell you why just immediately.

The reason is that type of RAM expects us to feed in some environment variables with very specific names.

So if we go back to the documentation.

Type of wants to see environment variables with explicitly these names, but the hosting provider that

you and I are going to be using, so the place we're actually going to deploy our app to gives us our

connection settings.

We're going to be getting a database through them.

Just be clear.

So our hosting provider will give us a database and to tell us how to connect to that database, they're

going to give us an environment variable immediately set inside of our environment automatically.

And that environment variable is going to have a very different name than any of these.

And there's no easy way to kind of redirect type arem until it hey uses different environment variable

to figure out how to connect to the database.

So even though we can make use of environment variables to correctly tell type erm how to behave during

development testing and with the Seelie in either environment, it's not going to work very well in

production.

So unfortunately those options are out as well.

That leaves the Aurum config file or the config file as our only options to very easily load up configuration

settings into type arem in all these different environments, including production as well.

And this is where things get really weird and really frustrating.

So you might think, hey, no problem, let's define a file called Over in Conflicts, we'll put all

of our configuration settings inside there.

We can change very easily depending upon whether we are running our application and dev testing or production.

You might think that I'm sorry you thought wrong.

So we're now at a point where let's go back over to our code editor and we're going to try to create

this Orham config file.

And I'm going to show you, unfortunately, this thing does not work as expected.

OK, now, I would encourage you not to make these changes to your project, I'm going to make the changes

very quickly and then undo them, because, like I said, unfortunately, making this file is not going

to work as expected.

All right.

I'm going to run through the changes very quickly.

First off, inside my app module, I'm going to come out all that stuff around for root async.

And replace it with a single Farrukh call, so by putting this in here, it tells type Aughrim as it

is running inside of our project that we're not going to give it any configuration settings anymore.

Instead, it needs to figure out how to connect to our database by opening up a form config file or

reading environment variables.

So if I now go back over to my terminal and I try to run my project all very quickly, get some error

messages that say no connection options because there are no configuration sources available for type

or anymore, I didn't give it any environmental variables.

I didn't give it any direct connection settings.

I didn't give it any Orham config file.

So I'm not going to fix this by making an interim config file.

So instead, my project directory will make a file called Aughrim Config Daugherty's, and then inside

of here, in order to give or provide some configuration settings, we need to export.

A plain object that has some familiar properties, like the type of database.

The database name.

And then we also have to provide a list of entities.

Or at least the where they are located inside of our project, so we're not going to import these into

this file, instead we're going to provide a path to find all the different entities such as our user

entity and the report entity.

So I'm going to put in here star, star, star entity dots.

So just go and find those files.

And then finally going to put in a synchronized.

False.

OK, so now in theory, whenever our project starts up, Taipan is going to say, I need to figure out

how to connect to the database.

It was not given any connection settings directly.

It's going to start looking for all these different variations of the Orham config file and hopefully

it's going to find Aughrim config dates.

So that means I'm going to go back over to my terminal after saving both these files and let's see if

our project is now running.

And sure enough, I get an error.

This is bizarre.

I can't tell you how unexpected an error this is.

OK, so let's walk through what is going on here.

Once again, whenever our project starts up doing development type ERM is going to start looking for

some configuration sources, it's going to find that erm config file and so it's going to load it up

and try to pass everything inside there and use that file to get some connection settings.

It looks like we were getting an unexpected, unexpected token.

Er well you know we did write out that expert statement a little bit strange.

Maybe there's something wrong with the syntax of this file.

So let's just comment out this entire thing and I'm going to put in some very basic code that should

definitely work no matter what.

I'm just going to put in just a little bit of typescript code just for typescript sake.

So I'll say let some variable is type string.

So this is definitely some valid typescript right here, so I'm going to say this, go back over to

my terminal.

And sure enough, I end up with another er so what's going on here, why do I keep on getting ears coming

from the typescript file?

The reason is simple.

Inside of our project directory, we need to think about how our project is actually being executed

in the development environment, whenever you run a nest project, here's what happens behind the scenes.

NASA's going to take all of the typescript files inside of your SAAC directory.

It's going to transport all them into JavaScript and then place the output into the desert directory.

Nest is then going to start up node and run the main JS file inside of here.

So when we are running our application, we are running it as plain JavaScript.

That means that when type arem starts up and starts looking around for all these Orham config files,

it's going to find Aughrim config dots.

But we are already the past the point of trying to turn TypeScript into JavaScript, so.

Type of room is going to load up the armed conflicts file and try to execute everything inside of here

as though it were JavaScript and lo and behold, we have some amount of typescript.

So execution is going to fail because type are expected to find JavaScript code inside of here, even

though we are really sure that we made a dot file.

So, again, this is bizarre, very unexpected.

So, in short, using Narced and HyperMED together, we cannot really make Inforum config file.

It's not an option because when our application starts up during development, the expectation is that

we are only going to be running JavaScript code.

So unfortunately, not an option.

So that leaves out of all these supposed different ways of feeding in configuration to type of ram,

that leaves nothing but the AUM config file, but even that has its own set of issues.

So here's where things get really, really fun.

This is an easier problem to solve, but just want to walk you through it very quickly.

OK, so without a doubt, we cannot make an armed conflicts vile, so let's try turning it into a JavaScript

file instead.

So I'll change the extension to.

I'm going to.

Uncommon that code, and because this is a plain JavaScript file that is not can be passed by Babille

or anything like that, we have to use common JS exports.

So I have to change this to a module exports like so.

OK, so now, in theory, this should work whenever our application starts up in development mode,

it should try to load up the Aurum config file.

This is after transponding everything into JavaScript.

So a JavaScript file should load up successfully.

There should not be any issues, right?

Well, naturally, something is going to go wrong.

Of course, it will still go back over here now and now we see a really bizarre error.

Now we're told cannot use import statement outside a module and it's pointing at our report entity file.

So what's this one about?

OK, so here's where it's just so great.

Unbelievable.

So in inside of here, we've got our list of entities.

So we have to provide here are all the different entities that are going to exist inside of application.

Remember, this file is being executed after we have transpired everything into plain JavaScript.

So type is going to look at this list of entities, it's going to try to find all the different files

that match this pattern right here.

In this case, it's going to find some different typescript files that we have written out inside of

our SIRC directory.

And once again, we run into the same issue type.

Aughrim tries to load up these files, but they are, TypeScript.

So we're going to fail to load and execute these entity files.

And that's why we're seeing this error over here.

So to solve this, we're going to tell him, hey, OK, we get it.

You can't read typescript files even though your name of type and would make you think different differently.

And we're going to tell type arem.

OK, tell you what, just go inside the disk directly and find the transpired version of all of our

entity files.

So I'm going to change this to JS instead.

I'm going to save that look back over.

And now if I do a hard restart just to save some time.

Finally.

Stuff is going to work.

Hey, it actually worked.

We got some configuration settings inside their.

Now, at this point, you're probably thinking, OK, hey, we get it, we need to make an awesome config

duchesses file and there's an oddity or two around the file extension on there.

And I know you think that's it.

No, of course not.

That's not it.

No, we're not done yet.

Remember, our application is running in multiple different environments in a development environment

using the type of Seelie directly and in a test environment as well.

So here's where things get just really fantastic.

Just really good.

OK, I'm going to go back over to my terminal.

I'm going to stop my running server and I'm going to try to run my end to end test suite, remember,

we can run that with an NPM run test.

Colen E to E!

So this is going to presumably run all the different tests inside of a project, specifically the end

to end once, and sure enough, they all fail.

Well, why are they failing?

We can scroll back up and we're going to notice some errors up here is er say that we are trying to

load a JavaScript file.

So what's going on now?

OK, so here's where things get really, really strange.

When we are running our application in development mode, Narced is going to first transpire over all

of our code into typescript using typescript itself and then it runs the resulting JavaScript.

I say transplanted typescript is a long video that is going to transpire all of our code into JavaScript

and then execute it.

But how are applications executed during testing is a little bit different when we are running our application

in a test environment.

Next is going to use a tool called T just.

This is a tool that allows us to kind of somewhat directly execute a typescript file.

Not really.

It loads up the typescript file, immediately converts into JavaScript and then executes the result.

But the point is that with Ts just running, we can directly load up typescript files.

So that means that we could safely win.

Our tests are running only only when our tests are running.

We actually could use a Orham config dots file, but that does not work when we are running our application

in a development environment.

And that's why we initially went over to saying, OK, we'll do a warm config file, but now the problem

is that when we are running our application in the test environment, TSA just does not expect to receive

any plane JavaScript files.

So at this point, it kind of seems like we're in a catch 22.

We can't make a worm config dodgiest file because it can't be used in the testing environment.

But we also cannot use a test file because that cannot be used in a dev environment.

Well, to get around this, here's a fix we're going to tell TSA.

Just look, don't worry about it.

It's OK.

If you get a JavaScript file, just go ahead and execute it.

I'm going to do that using the exact note they put right here.

So I'm going to open up my config file.

At the bottom, I'm going to put in a setting of allow James.

Of true.

I'm going to save this.

And then restart my tests.

And I bet you think, hey, we're all done now, right?

Everything should work as expected.

Let's see what happens.

Wrong, wrong, no, not done yet.

OK, so what's going on now?

So we are now getting an error message that says no repository for user.

So that seems like we are for some reason not loading up our entities correctly.

So what could be going on now?

Trust me, this is the very last step.

So here's the issue back inside of our config file.

We just had to fix an issue around running our project in a development mode by putting in entity JS

right here.

So now we are in the exact opposite scenario.

When our tests are running, we can only run tight script files.

We're not going to find any JavaScript files.

So now the issue is that in our test environment, the test runner is not going to find all the JavaScript

files that were placed inside the disk directorate.

It's only going to find different files or any kind of type of file that's placed inside the SC directory.

So in other words, depending upon our environment, we need to either load up entities from JavaScript

files or typescript files.

So to fix this last year, here's how I'm going to do.

I'm going to say if.

Process envy, node envy is equal to development.

I'll put in a ternary right here, so if we are running in development mode, try to load up the JavaScript

version of all of our different entities.

Otherwise we must be in a test environment.

In that case, load up the typescript version instead.

Now, this is not going to work when we eventually go to production.

We're going to put in something a little bit more robust.

But right now, this is good enough.

So I'm not going to save this file.

Look back over, restart my tests.

And now, finally, hopefully, anyways, everything should finally run.

Hey, it actually worked.

Believe it or not, so now, at long last, after a little bit troubleshooting, we can run our tests

and we can also run our application normally as well.

So I'm just going to start the application and, yep, looks like the application actually started up.

So is that a lot of headache?

Yes, it was.

And finally, at the very end, the result is we have to use a form config, dodgiest file to load in

connection settings properly to nest application during development or during testing.

And this config file is also going to work correctly when we are using the type Hermosilla as well.

And it's also going to work correctly when we are running our application in production as well.

Huh?

OK, long video, if you watch this whole thing, I'm very impressed, hopefully you've got an idea

of, yes, this stuff is kind of a nightmare, kind of hard to put all these configuration settings

again.

And hopefully now earlier on inside the course, when I was kind of complaining about nest configuration

setting management stuff, this is pretty much why, because Nest put a lot of effort into making that

config module and that config service.

And it turns out it really doesn't work that well because we can't take any settings that exist inside

of our nest application and pass them off to the type or Kly.

OK, so I think that's good enough.

So at the very end here, just to be very clear, the result is we need to make an awesome config file

inside there.

We need to return multiple different versions of our config object depending upon what environment we

are in.

Now, last thing I'm going to do is undo everything I just did in this video because, of course, this

was an optional video and want to make sure anyone who skipped it doesn't miss out on this code.

So I do want you to see me undo all these changes.

I'm going to undo the or delete the awesome config dodgiest file.

I'm going to remove the allowed us from TEUs config and then finally back inside of the app module.

I'm going to delete that or root right there in uncommented, all the stuff we had before.

OK, there we go.

Now, finally pause right here, come back in just a moment, we're going to read you those exact settings

for everyone who is not watching.

And we're going to just dress them up a little bit more to handle these different environments.

Slightly better.
```
