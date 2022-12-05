## script
```bash
All right.

Time to actually deploy our application, so to do so, we're going to run a couple of different commands

at our terminal and interact with the Roku Seelye step number one inside of our project directory.

We're going to commit all of our work that we have done to our project, to our git repository that

was created inside this project when we first generated it.

So I'm going to run Git add dots.

I'll then commit that with the message of.

Free production.

Commit.

Once I've committed all these changes and I'm going to create a new Heroku project by running Heroku

Create.

After a very short pause will then be given the URL of our project, so that's where we are going to

eventually access our project at and before we push any of our code off.

We're going to make sure that we create a post-credit database inside this project as well.

So to create the database, we will run Heroku add ons colon creates.

Heroku, Dash, PostgreSQL.

Then a colon, Hobie Dash Dev.

Now this database is entirely free to run, so we are specifically using the hobby tier, which costs

no money whatsoever.

So run that commands.

And then after a little bit, we will be told, OK, we are now we've now carried the database.

And right now it is completely empty.

Then a environment variable is going to set be set up inside of our project of database underscore URL.

So remember, we already wired that up back inside of our own config file.

Finally, very last step before we do the deployment, we're going to set up some different environment

variables.

The first one we're going to set up is going to be our cookie key to be used by that cookie session

middleware.

So I'm going to set up that environment variable with Heroku config colon set cookie underscore cookie

equals and then we can put in any random string of characters who want to write here.

So I'll set that investment variable.

And they're going to set up one other environment variable.

Which will be A. underscore E and V equals production, just be a hundred percent clear.

We are running our application in production mode.

And that should be it.

So now it's time to actually deploy our application to deploy our app.

All we have to do is run, get, push, Heroku Master.

That's going to take all the changes inside of our local repository and push it off to the git repository

that now exists on Heroku.

So run that command.

And we'll see a lot of information about stuff being pushed off.

And we'll see some scripts or some feedback right here from our project being built.
```
