## script
```bash
Let's get started creating that repository and that service nest does have commands we can use to automatically

generate a service and we can also use another very similar command to kind of somewhat generate a repository

as well.

But on this first go around, we're going to create all the necessary files from scratch on our own.

So let's get to it back inside my editor.

I'm going to find the messages folder inside of our Sarsae directory.

I'm going to create a new file called Messages Dot Service Dots.

And then another file called messages dot repository reports.

Now, just about everything inside of our service file is going to end up depending upon code that exists

inside of our repository.

So I think we should put together the repository first and then we'll put together this service.

So I'm going to open up my messages, repository TS file inside of here.

We're going to create a class because remember, there are always classes and we're going to start to

add in these three different methods to it.

Each of these methods are going to work on some file that is stored on our hard drive.

So inside of here, I'm going to export a class called Messages Repository double check your spelling

on repository, please.

And then going to add in three different methods called Find One, Find All and create.

So find one, this thing is going to take in an argument of an ID that is a string, we're definitely

going to have some asynchronous code inside of here because we need to read a file off the hard drive.

So I'm also going to mark that method as async.

Next up, I'll do you find all.

And again, I'm going to mark that as a sink and then finally create or do we actually call it out on

this diagram?

I called it good enough.

And we're going to receive an argument of some message that will be a string that we want to store inside

that vile.

Next up, let's import some helper functions from the node jazz standard library.

We're going to use these functions to read and write contents to a file.

So at the very top, I'm going to import, read, file and write file from AIFS Promises.

So, again, files built into the notes in the library, we're going to use these to read and write

contents to the file that's going to store all of our different messages right away.

We probably need to think about what format we're going to store these messages in.

So instead of my route project directory, I'm going to create a new file right now that is going to

serve as our little storage of all of our different messages.

I'm going to call this file messages, dot JSON.

Then inside this file, I'm going to write out a quick example to show you how I would like to format

all the different messages that get stored inside of here.

So I would like to store all these messages inside of an object where the keys are going to be the idea

of a message.

So maybe if we store a message with ID 12, we'll have a key of 12.

And then the value will be a message object, a message object is going to have a content property that

is a string, so maybe something like hi there, and it's also going to have the ID as well.

So the idea is being somewhat duplicated here.

That's totally fine, we can live with it.

So this is the general format of this file.

We've got one big overall object, and then we're going to have a variety of different keys inside of

here that are IDs.

And then for each key will have a value that is a message object.

It's over time.

As we start to add in additional messages, I would expect this file to eventually look something like

this.

And of course, each ID will probably be slightly different.

So this is what I want this child to eventually look like.

So we need to make sure that we write out all of our storage code to store and retrieve data in this

format.

So just keep that in mind as we start to write this storage and retrieval code.

I'm going to kind of go over it pretty quickly.

We're not going to spend a lot of time on it because a lot of this reading to a file right into a file

stuff is not super specific to nest.

This is just kind of some general JavaScript or typescript stuff.

So I'm going to assume that you can probably figure out what's going on here on your own.

OK, now, last thing we're going to do, we are not going to automatically generate this file, so

we're not going to generate messages, Jason, automatically instead of a code.

Instead, we're going to assume that this file already, always exists.

So I'm going to delete everything inside the file, but I'm not going to delete the file.

If the file doesn't exist when our code starts up, then all of our reading and writing logic is going

to throw an error because it's going to say that the messages that Jason file doesn't exist at all and

we definitely would not want that.

OK, so now that we've got some reasonable idea of what's going to go inside that pile, let's start

to put together some implementation for each of these different methods.

The implementation for each of them is going to end up being pretty similar in just about every single

case.

We're going to read the contents of that file.

It's going to be given to us as a plain string.

We're gonna have to take all that, Jason, pass it into an object and then work with that object in

some way.

So let's first begin with the find one implementation inside of here.

The first thing we need to do is read the contents of that file.

So its contents is.

A weight read file.

Messages, Jason, and then as a second argument, I'm going to put in a string of UTF eight, UTF eight,

Telx read file, exactly what format or what encoding this file uses.

So we're going to get contents as a string.

That is just the plain contents of that whole file.

Remember, that is JSON is a plain string.

So we then need to parse that string into an object, so to parse it.

I'm going to say messages is Jason that pass contents like so?

Now, messages, as a very quick example, don't write out this code, this is just an example.

I would expect messages at this point in time to be an object with some keys that are ID's.

And then the values are going to be a message object that has an ID and a content property.

So something like that.

That's my expectation.

It's now that we've got that big object of all of our different messages, we're going to look up the

very particular ID that the user was looking for inside, that messages object and return whatever object

is there.

So we will return messages at ID.

All right, so that's pretty much it for the find one implementation.

Let's take a pause right here and start to work on find oil and create in just a moment.
```
