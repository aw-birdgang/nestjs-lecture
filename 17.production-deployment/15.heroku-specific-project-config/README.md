## script
```bash
In a lecture right before this one, you should find some directions on how to install the Hiroku Seelie,

so make sure you get that signed up and make sure you log into Roku as well.

You might have to create a Hiroku account if you have not created one before to make sure everything

is set up correctly.

Run Hiroku off Colden.

Who am I at your terminal and you should see your login email up your right there.

Once you got the Seelie installed, we're then going to do a couple of last minute configuration changes

inside of our project just to make sure that our app builds itself correctly and runs correctly once

we deployed off to Hiroku.

OK, so a couple of very quick changes.

The first change we're going to make is inside of our main doctor's file.

Inside of here, our application is always trying to listen by default to Port three thousand on Hiroku.

We're going to be given a port to run our application on or a port to listen to.

So to make sure that we listen to the provided port, we're going to change that three thousand right

there to process envy dot port in all capitals.

Then if that environment variable is not provided, we'll default to Port 3000 instead.

Once they make that change, I'll then save the file.

Yes, that's the first change, the next change we're going to make inside of our group project directory.

We are going to make a brand new file called Proc File.

So this file has a capital P on it and no extension whatsoever inside of your.

We're going to list out the command to tell Hiroku how to actually run our application.

So I'm going to put in web choline and then to actually run our application inside of a production environment.

We can actually take a look at the packages on file and there's a command called Start Colin Prod to

run our application before running that command.

However, we first have to build our app.

Heroku is going to run that build command for us automatically, so all we have to do is say start and

prod and that's pretty much it.

So back inside that profile, I will put in npm run start Colin brought.

Finally, inside of our project directory, we're going to find the config build JSON file, so make

sure you get the billed version inside this list of exclude right here.

We're going to make sure that typescript does not attempt to compile the Orham config JS file or any

of the files inside that migration's directory.

So on the excluder, I'm going to add in our IMG config dogs and migration's like, so.

OK, that looks good, let's just about all the changes we need to make to our project itself.

So quick pause right here and we'll do a little bit of setup around Hiroku itself in just a moment.
```
