## script
```bash
At the end of the last video, I said we were going to move on to our next feature.

There actually is one last very quick thing I want to mention around our controller and our service.

So specifically, some of the areas that we are throwing inside of our user service, down side of our

update method and remove, we are currently throwing some plain errors.

Now, ideally, we would not throw a plain air object because Nest doesn't really know how to extract

any information from that.

Instead, we should be throwing exceptions that are implemented or created by NEST, such as the not

found exception, the bad request exception, all those other ones we looked at previously when we were

working on our messages application.

So we should probably update these ER objects we are throwing, but before we do, there's just one

very small consideration I want to mention.

You might recall that back on our messages application, we were throwing errors directly from the controller.

So the controller was in charge of throwing errors.

We threw exceptions like not found exception and so on.

But in this case, we have our user service that is currently throwing some errors around, not being

able to find a user or update and remove.

So in this case, errors are coming from our service instead.

So a very obvious solution here or something we should probably do would be to update these plain er

objects to not found exceptions.

Instead, if we throw a not found exception, then our controller or nest itself is really going to

capture that er extract some information from the air and send back a 404 response to whoever made the

request to us.

But that's kind of the issue here.

The issue is that we are throwing errors from the user's service now.

So here's why this is such a problem.

OK, so here's our user service, we're saying that we probably wanted to throw in not found exception,

if we throw an exception like that, it's going to flow back up right now to our users controller,

which communicates over.

But remember, Nest itself is designed assuming that you might eventually handle communication protocols

besides besides HTTP requests.

So, for example, we might eventually have another kind of controller inside application designed to

handle WebSocket traffic.

We also might have a totally different controller designed to handle Group C. requests.

Not found exceptions are not compatible with any other kind of communication protocol, so if we throw

an error like not found exception from the user service and that user service is being used by these

other kinds of controllers, these controllers are not going to properly capture that error, extract

information from it and send a response back to whoever made the request to us.

So all I want you to understand here is that if we start throwing http specific errors from our user

service, we start to have a kind of tough time reusing this service on future controllers that make

use of different communication protocols.

This is a very small thing.

I just want you to understand up front, because if you start to introduce additional communication

protocols into your application, well, you just got to keep this a limitation in mind.

A very easy thing to do here would be to implement your own exceptions filter.

That's not something we're going to do inside this course.

Exception filters for our purposes are very well implemented by NEST itself.

But you can implement your own custom exceptions filter and add it into these other kinds of controllers

to capture exceptions like this one, like a not found exception.

So again, just a very small side topic to something I want you to be aware of.

So we're not going to worry about this problem too much because we're not going to really try to reuse

our user service with these other communication protocols.

So for you and I, just throwing a knock down exception is going to work out.

OK.

All right, so then mind.

Let's go back over to our service.

At the very top, I'm going to find our next common import, I'm going to get the not found exception.

Well, then go down to our update method right here, and rather than throwing a new air, we'll throw

a not bound exception.

I'm also going to do the same thing for remove as well.

Now, the last place where we might want to throw an air is around our find one method and usually whenever

you call find one, it's totally fine to just return null if you're not able to find a particular record.

So we kind of have to make a decision here.

If we can find one.

We're not able to find a particular user.

Should we throw in air or just return null?

It's kind of a question that I leave up to you which way you want to take it personally.

I like to call, find one and get back a just plain null value as opposed to throwing an error.

That's my particular preference.

So rather than throwing an error directly from this method, I'm going to go back over to our controller.

And inside of our controller, I'm going to find our find user Routt handler right there.

So this is where we call find one.

So if I can't find one, I want to get back null.

But in this very particular case, if I get back null, then I want to throw a not found exception to

make sure that I return a 404 response back to the user.

This is once again just kind of very specific semantics.

You can very easily decide to throw a not found exception back inside the service if you want to, but

I choose to implement this inside my controller instead.

The only reason I'm not doing this for the update and delete route handlers is that it's kind of more

challenging for us to kind of get a little hook in there and say, oh, well, capture or return null

or something like that, if no update or removal was applied.

All right, so inside the controller.

At the very top are going to find the common imports and I will import not found exception.

Then down inside of our gate handler, rather than immediately returning the results of that, I'm going

to assign the result to the user.

Find one itself is an asynchronous call.

So we need to await that.

That means I also have to mark this function as async.

Well, then check to see if we were able to find a user.

So say if there is not a user, then let's throw a new not found exception and I'll put in a message

of user not found.

And then if we were able to find a user, let's just go ahead and return it.

OK, so one last test here, let's open up our API client, I'm going to try to find a user that definitely

does not exist.

So I'll make a request to offer some ID.

If I send that request off, I should get back a forum for very good.

And then if I tried to delete or update a user that definitely does not exist, I should get it for

a four.

And for the patch.

Send that off, get a A for OK, so that looks pretty good.

All right, so now we're all done finally with this user service and users controller.

So now we can start to move on to some other features around our project in just a moment.
```
