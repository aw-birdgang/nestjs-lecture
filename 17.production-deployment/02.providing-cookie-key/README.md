## script
```bash
The first issue we're going to take care of is our cookie key, so as a quick reminder, back inside

of our app module file, I'm going to scroll down all the way to the bottom.

And you might recall that inside of here, we set up that global middleware of cookie session, so we

provided that Kei's property and this string right here was used to encrypt our outgoing cookie.

It's really important that this string does not fall into our users hands or any kind of malicious user,

because if anyone got access to the string, they would be able to modify their cookie and pretend to

be someone else.

So we need to make sure that in development and in production, we issue this string right here as an

environment variable so that it is not tied to our actual application code and make sure that we never

accidentally commit this key to get or GitHub or anything like that.

So to extract the key right there, we're going to open up our N.V. development file and our N.V. test

file, recall that both these files housed some different environment variables.

We want to load up at certain points in time.

Inside of the development file, we're going to add in a new property called Kookie Key.

I'm going to put into some random string inside their.

Well, then do something very similar inside the environment testifying as well, so cookie key is a

random string.

So we're going to use this kooky environment variable inside of our app module during the setup of this

middleware.

To get access to these different environment variables inside these two files, we need to use that

config service that we had put together previously.

Remember back inside of our app module towards the top?

Right here, we set up that config module and remember, this module gives us access to something called

the config service, which we can use to read out configuration from these two N.V. files.

So we need to get a copy of the config service inside of our app module class right there.

That's what we want to stick that key that we just wrote inside the file.

So in order to get access to the config service inside of our app module, we're going to use, you

guessed it, dependency injection.

So on the app module itself, I'm going to add in a constructor.

As an argument to the constructor allowed in private config service will be of type config service.

And now at Kei's right here, I'm going to delete the hard coded string and replace it with config service

Moorgate and then I want to look up Kookie Key, and that should be this dot config service.

And that's pretty much it.

So now if we save this and go back over to our terminal, we should not see any errors over here or

anything like that.

Now, whenever our application runs any development or test environment, our cookie key is going to

be coming from one of these two different files so we can repeat a very similar pattern when our application

starts to move over to production.

We can either somehow get a N.V. production file into our production deployment or we can just set environment

variable directly during our deployment.

We're going to take the latter approach.

We're going to eventually set an actual environment config, be an actual environment variable, as

opposed to writing out some kind of key inside of a N.V. file.

That's all we have to do is remember that when we go to deploy our application, we need to set up this

kooky environment variable.

OK, so that's step number one.

Now, fortunately, that was kind of the easy step.

So let's come back in just a moment.

We're going to start taking a look at all the database replacement stuff.

And unfortunately, that's where life is going to be a little bit more challenging.
```
