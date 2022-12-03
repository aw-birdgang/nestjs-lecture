## script
```bash
Let's start the setup of this config service thing, so the config service, fortunately, you and I

do not have to create ourselves.

Instead, we are going to install a package that is going to create the config service for us.

So let's go over to our terminal right away and install that back over at my terminal.

I'm going to stop my running server and then do an install at Nest.

James config, once that is installed and then going to start my server back up with an open run start,

Colin Dev.

All right, so let's take a look at what is actually inside that package.

I'm going to show you a couple of different diagrams and help you understand what it really does for

us.

So internally, that package includes another package called Dotts Envy.

This is a plain JavaScript library that is very commonly used with a lot of different backend JavaScript

and typescript projects.

The only goal of this library is to put together a list of different environment.

Variables that exist on your machine is going to do so by taking a look at all the different normal

environment variables that are defined.

And it's also optionally going to read in the contents of some file inside of your project as well,

and try to pull some environment configuration from that file, too, usually by default.

We call this file the dot e and the file.

So this library is going to read in configuration information from both locations, assemble all that

information into a single object, and then give it back to you if there's ever any conflict between

the environment variables between these two locations.

So, for example, if they both define a DB name and variable, then the normal environment variable

on your machine is going to take precedence.

So in this case, our final DB name.

Would be ASDF.

So this object that is created by the end of library is then going to be exposed to the rest of your

application through the config service.

So we're going to use dependency injection to get access to that kind of service and then use that service

to read values out of this object right here.

So here's the first kind of little hang up I have with this entire config service thing.

Why don't we just use IMed directly?

That's pretty much it.

By making use of this extra library of Nisga'a config is just an extra layer of complexity.

And it's kind of hard to say that it really gives us any defined extra benefit to this entire system.

OK, so now there are a couple of other issues I want you to be aware of right away.

Specifically around the treatment of this N.V. file.

So if you go and read the official N.V. library documentation on that file and if you read the next

documentation on this file, they're going to tell you two very different things.

So the SJS documentation says that it is totally fine to have multiple different files naturally, as

long as they have different names.

But the library itself there, documentation says never, ever, under any circumstance ever create

more than one envy file.

So the documentation between these two libraries are giving you a very different opinions.

The other thing that is really not addressed here is how a file would ever get created in a production

environment.

Let me help you understand what I mean by that.

The people who put together this library strongly recommend that you never commit that EMV file to version

control, so we are not going to commit that file Ghiz or anything like it.

That means that when you go to deploy your application, presumably using a git based workflow in your

production environment, that dot EMV file will not exist.

So you still need to get all the information that would normally be inside that file into your production

environment.

But that's not really super well addressed by the people.

The other thing that's kind of mysterious and not really addressed by the envy's up is it doesn't really

give you any good way of having different configuration in just one single environment.

So, no, the entire idea behind this config module stuff you and I are putting together is that we

want to change that value right there based upon whether on our computer we are running in a development

environment or a test environment.

And we're going to read that config information, so the value for that string right there, hopefully

out of some kind of dot envy file, but if we can only have one of those files in any given environment,

how can we have some information inside the file to be used during testing and different during development?

So all this stuff is just nasty.

It's just not great.

Let me tell you what you and I are going to do.

We're going to kind of forget the rules set up by the people, we're not going to very strictly follow

their rules.

Instead, we're going to take the next recommendation.

We are going to have more than one different file.

We're going to have one specifically to be used during development of our application and one during

testing of our application.

So these different files are going to provide some different database names for this database property

right here.

We'll have one file.

It says use a database name of DB Light.

And then the other file will say use a database name of something like Test SQLite or something like

that.

So, again, we are not strictly following the recommendations of envy because I don't know, I'm just

not really a big fan of that library myself, as you can tell, with all this invariant configuration

stuff.

So let's take a pause right here.

We're going to come back and put a lot of stuff into practice, start creating these two different files

and then read information from both them.
```
