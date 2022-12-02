## script
```bash
We still have a couple of things to fix up, so let's get to it.

The first thing I'd like to address is the fact that if we ever tried to make a request to fetch a message

with an ID that does not exist, we get back a request or a response with a status code of 200.

We should be sending back a status code of 404 and say sorry, but we were not able to find a message

with that particular ID.

So to do so, we're going to go back to our comptroller file.

So here's my messages, controller notes file.

Then at the very top, I'm going to find our import statement from SJS Common and in addition to all

these other things we are importing, we're going to import one last thing called not found exception.

Now, we'll discuss what this thing is in just a second.

First, let's go back to down to the very bottom of this file and find our root handler that deals with

a get request that's looking for a very particular message.

So inside this root handler, instead of always returning the result of calling find one immediately,

we're going to instead assign the result to a new variable called message as soon as we do so, remember

that find one is returning a promise to us because it takes some amount of time to open up that messages

Dodgson on file and read its contents.

So we need to make sure that we await find one.

As soon as we put in that awaits, we need to also make sure we add in async to the method itself.

So now message is going to be either a message that we found inside of our file or it's going to be

undefined if the user asked for a message that does not exist.

So we're going to add in a check to see if we actually found a message.

We're going to say if there is not a message or if that value is false, then we're going to immediately

throw a new not found exception.

And I'm going to give this thing a string describing exactly what went wrong.

I'm going to say message not found.

Then after that check, we will assuming that we did find a message, we will return the message that

we found.

OK, so let's save this file now, go test this out, see what happens, and we try to request a message

that does not exist and see what is going to happen.

So I'll go back over to my API client.

I'm going to try to make a request for a message that definitely doesn't exist, and now when we do

that, I get back much more appropriately, a status code of 404, along with a really nice response

that describes exactly what occurred.

So we've got a distinct error message of not found and a message that says sorry, but we were not able

to find that particular thing.

So this is a much better response to send back if we are not able to find a particular message.

So it looks like everything is working much better.

So now let's figure out what this not found exception thing is, this is a kind of air that is defined

inside of Nest itself.

There are a couple of areas that Nest defines.

And if you ever throw them during a request cycle, then Nest is going to automatically capture that

air and turn it into a very nice looking response to send back to the user.

So Nest captured the air that we just threw right here captures that air and it's going to take some

information out of the air, specifically the status code, which ends up being for a for it's also

going to get the message that we put in as a string right there.

In addition to not found exception, there are a couple of other exceptions that are defined inside

the common library.

You can either take a look at the documentation to get a full list or a much better trick for this.

If you go back up to the very top and find our import statement, do a command or control.

If you're on windows, click on not found exception.

That will take you to the definition of this class.

If you then, right, click on that file or that tab right there and go to reveal in sidebar, it will

take you to a folder where all these different kinds of exceptions are defined.

So these are all the different kinds of exceptions that Nest defines for us.

You can throw any of these exceptions and Nest will automatically convert them into a appropriate status

code, an appropriate error message to send back to the user.

Each of these different exceptions are kind of following the pattern set up by the HTP standard, so

all the different common exceptions or all the different kind of errors that we get around HTTP requests,

such as for or for not found or bad request that for a one or four or three forbidden five hundred internal

error, five or three timeout, I think it is all these very common http status codes are wrapped up

inside these different exceptions.

The ones we're probably in use the most are not found.

Exception.

The bad request exception.

A gateway time out in some rare cases, and then also I frequently end up using what is it?

Unauthorised, there we go, unauthorized and unprocessed entity.

So these are all exceptions we're going to use rather frequently when we're trying to return some kind

of error to the user.

All right, so this looks pretty good, we're now handling the case in which a user asked for a message

that does not exist in a slightly better fashion.

So let's pause right here.

And in the next video, we're going to start to get into the topic of dependency injection and solve

all this stuff inside the constructor that I said specifically, don't do.

So this will be a lot of fun.

Kind of let's give it a shot in the next video.
```
