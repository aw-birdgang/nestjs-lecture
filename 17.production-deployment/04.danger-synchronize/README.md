## script
```bash
We just spoke about what that synchronized flag does, so synchronized is going to cause type R.M. to

take a look at your different entities and then modify your database.

So what's the issue with that?

What kind of problem could ever possibly arise?

Well, I want you to imagine a scenario where maybe you are making some changes to your code and maybe

by mistake you delete some property off your user entity.

Let's imagine that you then saved your entire project and deployed it off to a production environment.

When your application starts up on that production server, it's going to connect to your production

database type forums, then going to see your updated user entity.

And it's going to notice that it no longer has a password property.

So type of RAM is going to automatically go into your production database and delete that entire password

column.

When that delete occurs, you have now lost data inside of your application.

That is obviously really, really bad and definitely not something we would ever want to do.

So the downside to using this synchronise flag of true is that you can very easily accidentally lose

data inside of your production database the next time you deploy your app.

So even though it can be really handy to use during development, because we can very quickly make changes

to our database just by changing our different entity files, I highly recommend that you do not make

use of synchronise true as soon as you start deploying your application to a production environment.

So just to make sure that super crystal clear, I'm going to put a diagram on the screen that repeats

exactly what I just said.

So when we are actively developing our application using Synchronizer true, it's fantastic because

we can just very easily make a change to our entity and see the updated structure inside of our database.

But as soon as you start deploying your application, I really very highly recommend you change synchronise

to false and never, ever change it back to Drew.

So at a certain point in time, you really want to lock down your database structure and not allow a

very simple property change inside of an entity file to modify your database.

So now with this having been said, how do we actually change our database structure, without a doubt,

at some point time after we first make our database and eventually decide upon its structure and all

the different tables and columns, we might want to change our structure in some way.

We might want to add a column or remove a column or even rename one.

So how are we going to do that?

We're going to use a tool called Migration's, and that's what we're going to start to discuss in just

a moment.
```
