## script
```bash
We put together our users controller, so let's now go over to our service and we're going to create

a create method over there inside of our service.

The method is going to make use of the users repository.

That means we're going to have to hook up the repository to the service.

We're going to do that hook up using dependency injection, not hook up is going to be just a little

bit confusing, a little bit complicated, but we'll get through it.

To get started, let's go back over to our Ed on the user's directory and the users service file inside

there.

Here's my users service now at the very top.

I'm going to first begin with a couple of different imports.

We are going to get repository.

Rom type Aughrim.

We will get inject repository.

From Nest Eggs type Aughrim.

And we'll get to our user entity from user.

Entity.

Now, really want you think back to our messages service and the messages repository, remember, we

had a dependency between those two classes.

So we need to make sure that our messages service how to copy of the messages repository.

And we did that hook up using dependency injection.

Same thing is going to occur here.

The only difference is that this time around, the syntax is going to be just a slight, bit more complicated.

So here's what we're going to do.

I'm going to define a constructor method.

And then inside the constructor argument list, we're going to define all of our different dependencies

for our user service.

So without a doubt, our service needs a copy or needs to get access to the user's repository.

So we're going to list inside of here repo that's we're going to call our repository.

We're going to bring that simply as repo.

It's going to be a type repository.

And then we're going to apply a generic type of user.

Then inside the constructor, we're going to take that repo and assign it to a repo property.

We definitely have to set up a property inside the class and say that this class is going to have a

property of repo, so I'm going to say repo is of type.

Repository user.

Now, this point, this looks just about identical to what we had back on our messages application,

let's now do one very quick refactor so we don't have to put in this property definition and that assignment

inside the constructor.

So I'm going to refer to this to say private repo.

And now we can remove that assignment and remove the property definition.

All right, one last step, the very last step right in front of this argument, we're going to use

this inject repository thing.

This is yet another one of those decorator's.

So we are going to add in at inject repository.

And call that with user.

And that's it.

Now I say, that's it, but that's a lot of code there, that's a lot of stuff going on.

So it's going to break this apart and understand what is going on.

So first, our argument name is simple enough.

We have private inside there just so we can abbreviate that property definition and assignment, which

we saw just a moment ago.

The type meditation on this is repository, we've applied a generic type to it of user.

So this right here means that repo is going to be an instance of a type Overeem repository that deals

with instances of users.

That's what user right there is meant to say.

This repository is going to handle users.

So then the last part of this, that's definitely the weirdest part is in a repository with user.

So this is a little bit of an aid to the dependency injection system.

This is what is going to tell the dependency injection system that we need the user repository.

You might recall that when we spoke about dependency injection a little bit ago, we said that the dependency

injection system uses this type annotation right here to figure out what instance it needs to inject

into this class at runtime.

Unfortunately, the dependency injection system does not play nicely with generics, which is what this

is right here.

So this decorator is required simply because we have to use a generic type right here.

At the end of the day, if this line is confusing, don't sweat it, it's pretty much just memorize

the syntax, repeat it any time you need a type of repository.

OK, so now we've got our report story, we're going to find a method inside this class called Create.

And we'll have this method right now, we will manually pass through an email that is a string and a

password that is string.

We are going to refactor that argument list in just a moment and make it something a little bit easier

to use.

But this is good enough for right now.

So then inside of here, we need to take this email and password and use them along with our repository

to create and save a new user into our database.

Now, recall back on this diagram right here, our Repository API, I told you that we've got to kind

of similar looking methods that we use to create a new user and save it into the database.

So on a repository to create a new instance of a user inside of our application code, we use the create

method.

We then get back an instance of our user entity.

We're then going to pass off that entity to the safe method.

And a safe method is what is going to actually save our user to the database.

Now, yet another confusing thing right here.

I know what is the difference between create and save?

Well, once again, as usual, let's just write out the code for this and we'll figure out exactly what

the difference is between these two things in just a moment.

OK, so instead of creates, we're going to first create an instance of our user with this repo create,

we're going to put in an object with the email and password that was supplied to this method.

We're then going to call and return the results of this report, save user like so.

And that's it, believe it or not.

Now, before we discuss exactly what's going on with create and save, let's go hook up this service

back to our controller.

We're going to use the service to create a new user, will then test this all out from our API client.

And we'll come back to this method and do a deep discussion on what's going on with what's going on

and save and all that kind of stuff.

So to hook up our service to our controller once again, we're going to use dependency injection.

To use dependency injection at the very top of our controller, we will import our users service.

From users service.

Well, then define our constructor method.

Say private users service will be an instance of user service.

And now inside of our body.

I'm going to the body of this method, I'm going to replace that slug with this DOT users service.

We'll call it creates.

We're going to pass in the email and password from the incoming body of the request.

So Bottega email and body dot password.

And that should be at.

So now we see both these files, we can open up our API client again.

Here's my API client, I'm going to send off this post request with a valid email and a password.

Once again, we get back some supposed success right here, but how do we actually know if our data

was saved?

Well, if you installed that sequel light viewer tool that I showed you just a little bit ago, we can

use that SQLite explorer to take a look at all the different users we have inside of our database.

If you're not using the code right now and you do not install that SQLite Explorer extension with me

until we find we're going to eventually fetch a list of all of our different users that we saved inside

of one of these other requests.

And we are going to put together so specifically that one right there.

So if you don't have this extension installed, as I installed it, a couple of videos go totally fine.

You will be able to see all of your different users in just a little bit.

If you close this extension, remember, you can open it back up by opening your command pallet inside

of code, which you can do with a command shift, P or control should be on windows.

You'll then search for SQLite and find open database.

And remember, you'll only see this option right here if you installed the skylight extension.

So then we'll get this little panel.

I'm going to take a look at users by clicking that play button, and now I should see.

Yep, sure enough, I've got a user in here with an idea of one, the email and the password.

All right, so that's it.

We've actually saved some data into a real database or at least a somewhat real database, SQLite is

not super appropriate for a Web application, but remember, we're going to swap it out postgrads at

some point.

So, once again, we've written a lot of code inside of here.

We've also written a lot of kind of mysterious code.

So let's do a quick recap on everything we had to do to get to this point between our controller, the

service and the repository.

We're going to learn more about the repository itself.

Take care of all this stuff in just a moment.
```
