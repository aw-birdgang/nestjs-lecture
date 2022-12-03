## script
```bash
The last thing we have to take care of is to make sure that we wipe out or somehow delete all the data

inside of our test database right before every single test runs.

So that's the last thing we're going to take care of inside this video.

Now, as far as clean up our data, we have two different options available.

Either go into our database, find all the different tables, and delete all the rows in each table.

That's option number one.

Option number two is to just delete the entire database and then right before the next test starts,

rely upon type ORM to automatically recreate the database for us.

So we're going to go with the latter.

We're going to delete the entire database in between every test type or IM once again is going to jump

in and recreate the database automatically for us.

Now to delete the database.

All we really have to do is, well, delete the test SQLite file.

That's pretty much it.

So we could write out some code for this inside of our different before each statements inside of all

of our different end to end test files.

But putting all this repetitive code inside of these before each is would well, it'd be repetitive.

So rather than writing out all this database deleting logic inside of every single before each, we're

going to instead define a global before each.

So this will be one single before each statement that is going to run before every single test in every

file of our end to end test suite.

So to build a global before each, we're going to first begin by opening up the just e to e JSON file

inside the test directory.

Inside of here, we're going to add in a new option at the very bottom.

This is called setup files after E and V.

But then going to put in an array with root dir.

And set up dates.

This defines a file that's going to be executed after all of our tests, or I should say, right before

all of our tests are just about to be executed.

So we are going to place this global before each inside the setup file.

The root dir right here is pretty much a reference to our test directory.

That's what the root dir is.

So inside of the test folder, I'm going to make a new file called setup dots.

Then inside of Europe to define a global B for each function.

I will add in global dot before each.

And mark that function as async.

So now this function right here is going to be executed before every single test across all of our different

spec files.

So once again, inside there, all we really have to do is go take a look at that test SQLite file inside

of our root directory and delete it.

So to do so, we'll just use a couple of different functions from the node standard library.

At the very top I'm going to import our M from FS promises.

And join from path.

Then inside of here we'll say a weight are m short for remove and we're going to join together.

Dir name.

So that's underscore underscore der.

That's going to be a reference to the test folder that this setup file is in.

We're then going to go up one directory.

And then inside their find the test that SQLite file.

And that's it.

Now, one little gotcha here.

If we try to remove a file that does not exist, this line of code is going to throw an error.

There might be some scenarios where, let's say maybe the very first time we run our test suite that

SQL light file, the test SQL might not exist.

So if it doesn't exist and we try to run this code right here, it's going to throw an error before

we ever run any test.

So if the file doesn't exist, I don't really care if an error is thrown, because that was the entire

point.

I wanted to delete the file and get rid of it.

So to make sure that we don't get an error coming from this, if the file doesn't exist, I'm just going

to wrap it with a try.

Catch statement.

And I'm not going to handle the air in any way because if an error does occur, totally fine by me.

No problem whatsoever.

And that should be it.

So now let's go back over to our terminal.

We're going to try to run our tests again.

So back over here, I'm going to run my test e to e.

And I should be able to run these tests one time, see everything pass.

And then here's the real question.

Here's the real test.

I should be able to run the tests again and have them execute successfully again.

Perfect.

Exactly what we wanted.

So now we are deleting that entire database in between every single test.

Well, this is fantastic.

All right.

So that's it for doing our end to end test setup.

So let's take a pause right here and add in a couple more tests to our spec file in just a moment.
```
