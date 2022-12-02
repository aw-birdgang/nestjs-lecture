## script
```bash
Next up, let's take care of find all so as you'd guess, the goal of this function is to open up that

messages Dodgson file, we're going to pull out the big object of all of our different messages and

then we're going to just return the entire object.

That's pretty much it.

So it should be pretty straightforward.

So to get started inside a find, all I'm going to first basically do exactly what we did just a moment

ago.

We're going to open up the entire contents of that file and read everything inside of it.

So we'll say contents is a weight read file.

Messages that Jason and UTF eight.

Well, then, say CONSED messages, so this is our big object with messages inside of it is Jason purse

contents.

And then finally, we will return messages and that's all.

So then finally onto creates this one's going to be a little bit more intense, so we're going to have

to once again open up the file, read the contents on side there.

We're then going to randomly generate an ID.

And for us, a randomly generated ID is just going to be a plain integer number.

We're then going to add in this new message into our list of messages or the entire big object of messages,

so let's just put together the implementation.

OK, once again, we're going to first read the entire contents.

Of the messages that Jason file.

I'll get my big object full of messages.

We're then going to randomly generate a brand new ID plus say const ID is going to be MAFF random times,

nine hundred and ninety nine.

We're then going to round that down because that will give us a decimal number, we don't want a decimal,

we want an integer, really a whole number here.

So I'm going to wrap all that instead of parentheses and then do a math dot or.

Now, technically, we might get a idea of zero out of this, not super conventional, but it's totally

fine.

Now that we've got that random ID, we're going to take that ID and add in a new object into our list

of messages or that big messages object.

So to just make sure it's super clear what operation we currently need to do, I'm going to give you

a very quick example right here.

I'm going to write out what the messages object looks like.

Remember, it looks something like a big object with some keys.

And the values are objects that have an ID and a content property like so.

So our goal is to take this ID and add it in as a new property inside this object.

So let's imagine for a second that we randomly generate an ID of 50.

I want to add in a Newquay of 50 and I want to assign to that an object with an idea 50 and a content

of whatever message was just passed in to this function.

So content of message, that's the goal.

We want to add in that record right there.

So to do so.

We'll say messages at Idy equals.

ID, comma, and then content of message.

You know, now that I am reading this, an argument, name of message is a little bit misleading because

it's really the content of a message, I think it might be a little bit more clear if we change that

argument name to just be content instead.

Because then we can also use the shortened syntax on this object right here and end up with just ID

and content.

So I think that's probably a little bit more clear as to what's going on here.

It's now our entire messages, objects should be updated, so we are now going to turn this entire thing

back into a string and write it back into our messages JSON file.

So to do so, we will call a wait right file.

Messages that Jason, we want to write into that file, Jason, that string of FYE messages.

And once again, that should be it.

OK, so we've now got these three different methods put together, in theory, they all work, we haven't

really tested them yet, but hopefully they're going to work as expected.

Just be clear, everything we've done inside of here so far is not really nest related code.

This is just some general JavaScript or type script.

So if you are confused about what's going on inside of, you're totally fine, not really related to

what's going on inside this course.

Now that we've got this repository put together, there's just one or two other things I want to mention

about the repository.

And we're going to start to work on our service very quickly after that.

So once again, let's take a pause right here and continue in just a moment.
```
