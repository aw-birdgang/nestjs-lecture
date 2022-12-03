## script
```bash
As I mentioned at the end, the last video last we have do here is make sure that the note underscore

in the environment variable gets correctly set to either development or test whenever we are just running

our application normally or whenever we are running our application in a test environment to to set

this environment variable correctly, we're going to open up our packages on file.

We're then going to find our different start scripts and the different test scripts.

So in front of each of these different scripts, we're going to set up that environment variable.

If you are on anything besides Windows right now, you would normally be able to write out something

like Note N.V. equals development.

And that would just take care of it, but I want to accommodate for anyone who is on windows, of course.

So rather than setting our investment variables like this, we're going to make use of a very small

command line tool.

This is going to help us out with this process and work equally well across different environments.

Either Windows, Mac or whatever else.

So back over at my terminal, I'm going to stop my running server and do a quick and install for a library

called Cross Envy.

This library is all about allowing us to set up different environment variables very easily inside that

script section.

They're going to work across Windows or Mac or something else.

I'll then start my actually let's not start back up, let's update our script first, it's now back

over inside of our script section.

We're going to go to start, start dev and debug and on each of those three.

So just those three not start production.

We are going to add in Cross N.V..

Noad underscore inb equals development and then the rest of that entire command.

And then going to duplicate that little prefix right there, or I guess big prefix down to the dev command.

And the debug command as well.

Then down on all of our different test scripts, we'll put in Cross N.V. Noad ENB test.

And I'm going to duplicate that down to test watch.

Test coverage.

Test, debug and test end to end.

And that should be at.

So let's now save this, we're going to go back over to our terminal, we're going to start up our application

in its development mode and just make sure that everything runs as expected.

So back at my terminal, I'll do a NPM Ronstadt's DEVE.

And it looks like everything is good just to make sure it is, I'm going to try to make a request to

my application to maybe just sign in or sign up or something like that.

So I will very quickly open up my API client.

And just send off any request that has to read from the database in this case, I got an error saying

that the email is is in use, but that's actually good.

That's what we want, because that implies that we successfully read from our database.

So it definitely looks good.

So now I'm going to also attempt to run my tests inside of a second terminal window.

So in this case, I'll do A and run test E to E!

And we should still see the tests very first time, hopefully should work as expected, it looks like

it actually did.

I did get an air up here.

Databases locked.

OK, that's actually good, we kind of want that air right now, so that's totally OK.

OK, so overall, I'd say that this looks pretty good.

We do, of course, have this database is locked.

Don't sweat it.

We're going to fix that up in just a moment.

So now we have two different sets of of environment configuration, one for development and one for

test.

We are, of course, going to have to do something very similar when we move our application to production

and eventually deployed as well for production.

We're not going to actually create a file.

We're going to instead just manually create some different environment variables.

Now, the very last thing I want to do, I do not want to commit the development or the test environment

files.

I don't want to commit those to get I don't want to accidentally expose any information or secrets I

might have around my development environment to the outside world, just in case I ever posed this thing

up on GitHub.

So to make sure I do not commit those two files inside of my dot get ignore file.

We're going to list out those two file names, so I'm going to put in dot envy development and dot envy

test like so.

So now I can commit everything inside my project as much as I want, and I will not commit those two

files.

OK, so this looks good, we've now got different databases for our test, where's our diagram?

Here we go.

We got different databases for development and for testing.

Definitely a step forward.

We do still have that air we just saw moments ago around the locking of the database.

So let's take a quick break here and then fix that one up in just a moment.
```
