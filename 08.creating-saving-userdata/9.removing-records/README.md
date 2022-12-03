## script
```bash
Just two more requests, so in this video, we're going to skip over Patch very quickly because that

one's going to be just a little bit more involved.

We'll take care of delete.

So with delete, we need to set up a delete root handler to off and then some ID.

We're going to define that using a controller method of remove user.

There's going to turn right around and call the remove method on our service.

So let's get to it.

All right, so back inside my editor, I'm going to make use of the delete decorator, which I think

we imported no, we did not got to import that decorator at the very top.

I'll do that right away.

Well, then say that we want to handle incoming delete requests to call in ID.

So we're going to call this method remove user.

We're going to make use of the Perram decorator once again to receive the ID wild card, we're going

to call that ID and once again, it's going to start off as a string.

We're going to have to convert that into a number.

Then we will just turn right around and return this dot user's service.

Will remove.

Our int ID, and that should be at.

One thing I should mention, remember that back inside of our users service, here it is right here.

We defined the remove method, and it is possible that remove is going to throw in air, we're not going

to re about handling these areas just yet.

So we're going to finish off this delete handler and the update one will come back and have a deeper

discussion around air handling.

So let's now go and test this.

When you test it, if you get an air saying air with the server or something like that, don't sweat

it.

You probably tried to delete a user that did not actually exist.

And the air is being caused by this line right here.

So, again, we're going to come back and fix that up.

So to test out that handler will again pull up my API client, I'll put in another comment and say delete

a user with a given ID.

Well, then make a delete request.

And try to delete a user with an idea of one.

I'll send it off and looks good.

So he deleted the appropriate user, hopefully, to make sure that deletion actually took place.

Let's now make a follow up request and find all the users with that email address of the one that we

just deleted.

So I'm going to send it off.

And now I no longer see a user with an ID of one.

I only see two and three in my case here.

And again, you might not have two and three.

You might have an empty array if you have not created any additional users.

So let's say that this looks pretty good right now.

But again, if we tried to call delete a second time here, you might end up with an error like this.

So we still have a little bit of error handling to take care of.

All right, so this looks good, just one last handler, so we're going to deal with this patch or the

update one, and we'll come back and have a discussion around that error handling stuff.
```
