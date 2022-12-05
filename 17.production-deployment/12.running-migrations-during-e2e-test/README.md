## script
```bash
Although our application works in the development environment, we need to also make sure that works

in the test environment as well.

Right now, if I stop my server and execute NPM run test Colleen E to E, my test will execute.

But I'm going to get a lot of different failures around some tables not existing.

So I get table or errors right here, such as no such table user.

And if I go up even further, you might have seen at the very start when I first ran that command,

I also got some errors around JavaScript files not being allowed or something like that.

We have to do a little bit of work, number one, to make sure that our program config JS file can be

safely read when our tests are actually running.

We also need to add in a little bit more configuration to make sure that our migrations are executed

when we start up our test suite as well.

Because remember, every single test we run, we completely delete our database.

So for every single test, we need to migrate the database.

All right, so step number one, we're going to make sure that we do not get that initial warning,

which you might have seen very briefly run this very quick.

We're going to see some text right here for just a second.

I'm not getting it now, but there are some text that eventually pops up and it says something like,

hey, you need to allow JavaScript files or something like that.

So to make sure that error goes away.

I'm going to open up my config JSON file.

And inside the compiler options object, I'm going to add in one property down here at the very bottom

of allow James.

True, and notice it is a lowercase s.

So that's going to fix the little warning that we sometimes get.

The next up to make sure that our migration's are round before every single test we execute, I'm going

to go back to the armed config file.

I'm going to find the section where we are putting together configuration for the test environment and

we're going to add in a new property here, a migration's Kolan.

I mean, migration's run, Colin, true.

So this property is going to make sure that all of our different migrations get ran when we are starting

up our database for each individual test.

So it's going to give our database and structure as soon as it gets created.

So let's now save this change.

I'm going to go and try to run my tests again.

Now, when I run my tests, I should see them passing now because we are creating the database and then

applying our migration to it, which creates the user's table and the reports table.

And so now everything is passing as it was before.

Definitely an improvement.

OK, so at this point in time, it appears we've just about got everything working in the development

and the test environments.

It's now finally at long last, we're going to start thinking about taking all of our application code

and deploying it somewhere online and making it actually available somewhere.

So let's start with the actual deployment process in just a moment.
```
