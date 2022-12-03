## script
```bash
We were just able to run our test successfully one time, but then the second time we ended up with

another failure and the failure in this case says got 400 bad request.

So let's figure out what is going wrong here.

All right, so once I described this issue, I think you're going to say very quickly, oh, of course,

that's what's happening.

So here's what's going on in our test suite right now.

We have a test where we are attempting to sign up the very first time we tried to run this test.

We are saying sending a request off to our application, which is going to write some information into

our SQLite database.

And remember, that SQLite database is the.

DB SQLite file inside of our project directory, so we're going to end up creating a new record inside

of here with some email and some password like so.

Now that information is persisted inside of that Debe secret file and it does not automatically get

deleted or anything like that during our test run, so the net result is that the next time we run these

exact same tests, we are going to create a new instance of our application because that is what occurs

inside a bar before each statement.

But we're going to rerun the exact same test with the same email and the same password.

So we're going to try to add in a brand new user with the exact same email to the exact same database.

And naturally, that email is already in use.

So we're going to end up getting an error message saying sorry, but this email is and use.

You cannot sign up to users with the exact same email.

That's the issue.

We can run our test accessibly one time with a unique email, but then after that, the tests are going

to fail.

So how are we going to fix this?

Well, one obvious way might be to just randomize the e-mail we try to sign up with.

That's not super, maybe not the best approach.

Let's take a look at a slightly different way of fixing this.

OK, so here's the idea, every time we run any single test inside of a test suite, so every one of

those it functions right before that, inside of our before each statement or something like it, we

are going to both create a new instance of our application, which is already happening.

But we are also going to either wipe our database or just create a brand new one.

So that's going to allow each of our test run in total isolation so we can run one request right here

that's going to handle a request to sign up, that's going to make a request to our app, which is still

going to write that information into our database.

Then immediately after that test succeeds or fails, we're then going to create another instance of

crap and again, either wipe the existing database or just create a brand new one.

So then we might have another test called something like handles a request to maybe sign in.

And in this case, we are now working with a totally empty database.

So we would have to first maybe sign up a user and then attempt to sign in as them.

So this is going to prevent us from leaking data between our different tests, which might cause one

to pass and the other to fail or might cause a test one time to pass, but then every subsequent time

cause it to fail.

So that's pretty much it.

In addition to creating a new instance of our app, which is already occurring inside that before each

statement.

We're also going to either wipe or recreate the database.

Now, even though that might sound kind of simple, it turns out there are a couple of things we need

to be aware of.

First one.

I want you to be aware of is that it might really be worth us trying to have two copies of our database,

one for our development mode, or as you and I are trying to manually test our application and then

maybe a completely separate database, which is only used when we are running our application in testing

mode.

The reason we might want to do this is that as you and I are actively testing our application, using

our API client, we would probably want to have one or two user accounts sitting around so that we can

very easily log in as and then make requests using those credentials.

If we were to only be using one single database that got wiped entirely with every single time we ran

our tests, doing any active development of application would get really tedious really quickly, because

every single time we run our tests, we would wipe all of our data.

We would then have to sign up to our application every single time we wanted to manually test our app.

So we're going to solve that by just having these two separate databases, one that will be used for

us just actively running our application from the terminal, and then a totally separate database that

will be used when we are testing our application, using the end to end test suites so we can delete

this testing one over here, wipe it as many times as we want, but we're not going to do the same for

our development database.

OK, so that's the general idea, that's how we're going to fix up this problem, we're going to first

make sure we wipe or recreate our database right before every single test we run.

We're also going to make sure that we have two separate databases, one for development and one for

testing.

So let's start to implement all this in just a moment.
```
