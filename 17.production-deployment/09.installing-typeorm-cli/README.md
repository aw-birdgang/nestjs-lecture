## script
```bash
Now that we've got this database config file put together, we can start to focus on using the type

Aughrim to run a migration inside of our project.

Remember, these migrations are what are going to add some structure to our database.

So they will make sure that we get a table of users inside the secret file and a table of reports as

well.

In order to create and run a migration, we need to use the type of Seelie to use a Seelie.

We're going to do a little bit of setup, an installation inside this video.

Now, unfortunately, installing and setting up and making use of the Seelie is just a little bit confusing.

So let's take a look at the documentation and understand why that is.

I'm going to open up a new browser tab and navigate to that address right there.

And here it is.

OK, so I'm at the using Seelie.

We're going to scroll down a little bit and right away we are told that there are two ways to set up

the Seelie depending upon whether our entity files are in JavaScript or in typescript.

Well, we, of course, follow in the case of TypeScript, we wrote out all of our different entities

inside of typescript files.

So we have to go through a slightly more complicated set up process.

The reason this is complicated is that type Aughrim itself and it's really has no idea how to interpret

typescript files.

So we have to put together an extra little step to make sure that all of our different entity files

are first turned into JavaScript and then executed.

That's why this is a little bit of a pain.

Not to actually set all this stuff up, we're going to first install a module called T.S.A., T.S.A.

is what is going to allow us to eventually run some typescript files directly.

We're then going to make sure that whenever we try to run type Aughrim, we're going to first wire up

T.S.A., we're then going to execute the typographically.

So at the end of the day, this all comes down to just adding in a script to our packaged JSON file.

And then whenever we want to run the type vermicelli in any way, we're going to execute a command like

NPM Run Type Arem and then the command we actually want to run.

One nasty consequences of this is that if we ever want to pass some command line arguments to this run

command.

After putting an end run type program and then the man we want to execute, we have to put in a dash

dash and then any additional flags we have to add in after that.

So, again, a little bit confusing, a little bit nasty stuff all comes down to the fact that type

arem, unfortunately, doesn't really mesh super well with native typescript.

All right, enough lecturing.

Let's get started on the set up, so pretty much is going to take that script right there and toss it

into our packages on file.

Back inside my editor, I will find my packages on file.

I'm going to go down to the script section and at the very bottom of the script section, I'm going

to add in a new script.

We're going to call this type of in.

And whenever we run the script, we're going to actually execute.

Noad Dashty require.

She has a. register, then dot node module's.

Type Aughrim, Seelie, Dargis, likesome.

We're also going to make sure that whenever we run the type vermicelli in any way, shape or form,

we tell it that we are in a development mode because we're only going to run type RAM whenever we are

connecting to our application in development.

So to make sure that is the case, I'm also going to copy one of these cross ENB lines up here.

And put it right at the very start of that command, it's now in total I've got type of democracy and

B node, blah, blah, blah, development node require the node modules type of.

If you're looking at the official documentation a moment ago, you might have also noticed that it said

that we need to globally install T.S.A..

That is actually not the case for you and I.

When we installed all of our dependencies initially when we generated our project, Nest itself actually

depends upon T.S.A..

So if we go down to our dev dependency section, the Eurostep dependencies.

Inside this list, we should note, right there.

So it is actually already installed into our project and we don't have to install it globally.

That's kind of an oversight on the documentation itself.

That should be it now, if we want to ever generate a new migration or run immigration, we're going

to run a command just like what it shows in the documentation.

So something like NPRM run type of migration generate and then whatever other arguments we want to pass

along.

OK, so now we got this put together, we're going to take a pause right here.

We're going to come back in just a moment and we're going to use this new command to generate and run

immigration.
```
