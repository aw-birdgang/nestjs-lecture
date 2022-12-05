## script
```bash
With a type of Seelie all set up, we can use it to generate a new migration and run it.

Remember, the entire purpose of migration is to give our database some structure.

So to generate and run migration, we are going to take a look at the official documentation.

This entire process is a little bit involved.

So I really want you to have a resource you can look at at some point in time in the future at the official

documentation.

I'm going to scroll down the left hand side and find the advanced topics section and then go to migration's.

So under the heading right here, how migrations work, they're pretty much going to tell you everything

I told you over the last couple of videos.

We're going to scroll down past that and we are going to be told how to create a new migration.

So step number one, we need to add in some additional options to our config file.

These options are going to tell typescript or type arem the CLI Antipov itself as its running cyber

application where all of our different migration files exist.

So we're going to add in just about exactly those two pieces of configuration into our R.M. config file.

So go backward, my editor.

I'm going to find Overeem configures, and this is some default configuration, so we're going to add

it to the DB config object up here at the top.

I'm going to add in migration's an array inside there, I'll put a string with migration's stargaze.

And then Seelie Migration's DYA.

Migration's.

Now, with that put together, we can now start to actually generate our different migration files,

but first one more gotcha.

And again, this is why you really need to look at the official documentation.

So there's a section here creating a new migration.

We're going to scroll on down past that a little bit.

And we're going to look for a section that says Running and reverting migration's.

So here's a very key thing and goes back to the same topic I've been harping on over the last couple

of videos.

Type of forum itself doesn't really know how to interpret typescript files.

And so it says right here that if you make use of the type where I'm Seelie to generate a migration

in any way, it's going to create a Dotty's file.

However, in order to actually run these things, to actually run a migration or to roll one back,

the type where I'm Seelie can only work on JavaScript files.

So something has to transpire.

All the typescript migrations before we actually tried to run the migration.

A very easy way to get around this is to just make use of this O flag so the flag will create a migration

inside of a plain JavaScript file and thus remove the requirement for US staff to transport all this

at any point along the way or have to worry about setting up any additional strange commands.

If you take a look at the generated migration section right there, so this is the section at the top

that we just scroll past, scroll down just a little bit and it will tell you what the flag does.

So always short four dash dash output.

It's going to generate all your migrations as plain JavaScript files.

So that's what you and I are going to do.

So at long last.

Having said all this, let's go over to our terminal.

We're going to generate a new migration and then make use of it to apply some structure to our database.

So back over at my terminal, I've stopped my running server and instead my project directory.

I'm going to run NPM Run type Aughrim.

Migration Colin generates.

Then dash, dash.

Then again, we're going to give this migration a name of initial dash schema.

And then finally, a dash at the very end to make sure we generate a JavaScript file.

I'm going to run a command.

And sure enough, I'm told that I've now generated a schema migration file, so it's now open up that

file and see what is contained inside of it.

OK, so inside the migration's directory, which was just created, I now have a file inside their building

number, you see right there is a time stamp, so it defines when this file was created.

As soon as we open the file up, you are going to get some errors coming from once again.

Excellent.

You can completely ignore these errors.

Esslin is very much in the wrong here.

So we just created a migration and inside, if you're even though I told you a little bit ago that we

frequently have to write out migrations from scratch by using the migration Colen generate command at

the terminal.

Type of has automatically taken a look at all of our different entities inside of our project, and

then it generated a migration file for us automatically to suit those different migrations.

So you'll notice that I've got some different tables here automatically being created for me.

And that's exactly what we want.

So inside the migration file, beyond that, we've also got the up function, which is going to advance

the structure of our database and the down function, which is going to remember, reverse the migration

or undo it completely.

So now to run our migration and give our secret file some structure, we can go back over to our terminal.

Let me just show you the documentation on where it says how to do is very quickly.

Just you understand?

So we want to go to.

Let's go the top and go to Running and Reverdy Migration's and all we have to do is run NPRM run type

of migration, Colin run.

So let's try that out right away.

So NPM run type Aughrim Migration, Colen Run.

We're then going to get back a lot of output like this right here and eventually at the very bottom,

it should say something has been executed successfully.

If you do not see a message like that, if you see something that says databased not found.

Make sure you start up your application at least one time to get the DB single file created.

Now, once you have ran that migration, now our secret file should have all the necessary tables created

inside of it for storing our users and storing our reports.

So now we should be able to start up our application once again and everything should work as expected.

So to test that out, we'll do it npm run, start calling Deve.

The is going to start up and then going to open up my API client, remember that we have now completely

deleted our database, which means we are definitely not signed into our application anymore.

So we don't have any users whatsoever.

So I'm going to go to my API client for manipulating users and I'm going to attempt to sign up to the

application.

I should be able to make the Sign-Up request and get back a response saying that I have signed up successfully.

Perfect.

So that's it.

That is how we generate and then execute a migration, as you can tell.

Yes, this is very advanced of a lot of topics going on at the same time.

And I really encourage you to take a look at the documentation and understand the full scope of what's

going on with these migrations.

We're not done yet.

We still have a little bit to do here.

So we need to make sure that we can apply migration like the one we just put together in our test environment

and then eventually go over to production and run migration over there as well.

So still a little bit to get through.

Let's start to tackle that in just a moment.
```
