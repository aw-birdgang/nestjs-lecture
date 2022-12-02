## script
```bash
All right, last two steps, so first thing will take care of is making sure that we apply this decorator

not just to this one request handler, but to all the handlers inside this controller.

So there are two ways we can do this.

We can either take serializer DTO and just copy paste it around to all these different request handlers.

Alternatively, we can apply that decorator to the entire controller.

If we apply this decorator to the whole controller, then it's going to intercept all outgoing responses

from all the request handlers inside of here, and it's going to format all the users that get returned

from each of them.

So I think that would be right now a little bit more convenient.

So I'm going to cut your user right there and I'm going to paste it right about the controller.

So if I save this and go back over to my API client now, we can make use of just about any of our different

request handlers.

And it should have no password in the response for any of them, so no password, I'm going to try to

find all users with a given email, no password.

Very good.

And if I tried to update a user password, very good.

All right, well, I'd say that definitely works now, although it works in this case.

The one thing I do want to mention, remember, we originally put together this serializer, the entire

interceptor, for that matter, so that we can have different format responses going out from different

request handlers.

So even though this is convenient in this case, remember, if you have two different request handlers

and you want to customize the response from each of them, no problem.

You would just move that to decorator to say some particular request handler.

And you can put in one detail or one set of serialization rules right there.

And then on your other handler, put in the same serialized decorator and then put in a different detail

right there.

And the other should have a different set of serialization rules inside of it.

Now, for right now, because all of our request handlers are all returning users, I am going to apply

the decorator to the entire controller.

But again, if you wanted to have her handler responses or serialisation, no problem.

Just use that on the individual request handlers.

OK, so this looks good.

Last little bit of cleanup here, I'm going to delete that big comment right there.

We don't need that anymore.

I'm also going to delete the console, log inside to find user.

And I think that's pretty much it.

The very last thing I would like to take care of besides maybe cleaning up a couple of imports in here

that we're not using.

Is the fact that back inside of our interceptor, we've got a type invitation of any just all over the

place inside of here, so ideally we do not make use of a type invitation of any as much as possible.

So I would like to at least put in a little bit of effort and see if we can't get a better type description

inside of all of these different locations.

So quick pause.

That's going to be the last thing around all this interceptor stuff.
```
