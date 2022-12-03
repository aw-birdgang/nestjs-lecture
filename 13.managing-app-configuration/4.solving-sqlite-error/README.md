## script
```bash
In the last video, we were almost able to successfully run our tests, however, you might have gotten

an error like this one, something that says SQLite database is locked.

So in a very quickly explain what that means and how we can solve it, if you did not get that er,

no problem whatsoever.

Still, stick around.

Watch this video anyways.

So a little bit of backstory here on what goes on when we run our end to end tests by default.

Our test runner is just so just is going to read our two different spec files because remember we have

that app spec file and the spec file just tries to run all of your different tests at the exact same

time.

That means that we have one test running that's going to create an instance of our application and try

to access the Test SQLite database.

At the same time, we are also going to be running the app spec file and that is also going to be creating

an instance of our application and tried to connect to that exact same database.

In general, SQLite does not like to see multiple different connections to it.

It really just wants to see one single connection to that database that gets shared among all the different

things inside of application.

So the whole problem right now is just that just is trying to run multiple different tests at the exact

same time.

To solve this problem, we're going to tell just don't try to run our tests in parallel, just run one

test at a time.

Now, this might sound like it's going to significantly slow down our tests.

In fact, it's actually the opposite.

Turns out that when you're making use of typescript with just together having test run in parallel,

usually you get actually far, far worse performance.

So when we tell just to only run one test at a time, it's actually going to make our tests usually

run a lot faster.

You can actually see this effect very quickly.

So if you change behavior, we're going to go back to our packages on file.

I'm going to go to the test E to E script right there, and at the very end, I'm going to add on an

option of dash dash max workers.

Equals one, that means only tried to run one speck file at a time.

So now to test this out again, I'm going to delete the test secret file that was created inside of

our project directory.

I'm going to delete that.

Well, then go and run my tests again at the terminal.

It's another end to end test.

And now this time.

All my tests are going to pass and I don't see any errors coming from quite naturally, if I tried to

run the tests again, I will get an error this time.

That's just because, remember, we've already got a user making use of the email that we tried to sign

up as I didn't get any errors coming from SQLite or anything like that.

OK, this is a good improvement.

So now we've got our two separate databases.

Very good.

We've got one for development and one for testing.

Now, remember our original goal.

We want to make sure that right before we run each of our different tests, we wipe out that entire

database.

So let's take care of that in just a moment.
```
