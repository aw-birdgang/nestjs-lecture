## script
```bash
Inside of our sign up and sign and request handlers, we're not going to take the user that is returned

from either the sign up method right there or the sign in method right there.

We get back a user entity from both those.

We're going to take the idea of that user entity and then assign it to the session object.

And that's going to be our tool for deciding whether or not a user is signed in on follow up requests.

So let's update both his methods and put this into reality.

First, we're going to do on both of these methods.

We're going to receive the session object by using the session decorator.

I'm still going to annotate these as type any four right now.

Then on both, am I going to mark them with the async keyword?

From sign up and sign in, rather than immediately returning the value we're going to receive the user

entity that has created or returned from both them.

So I'm going to remove the return statements.

And we'll assign the results of both these to a variable that we'll call user, and don't forget the

awake, you were down there as well.

So then after we either successfully sign up or sign in, we're going to take the ID of the user and

assign it to the user ID property of our session object.

So we'll say session that user ID is user ID.

Same thing, on the other hand, as well.

And then in both cases, we're going to return the user because we still want to send back in the response

the user that was created.

OK, so that should be it.

Now, if we create a brand new user or sign up or if we sign in our session object and therefore our

cookie, it should be getting updated with the idea, the person that we just signed in as.

So we don't really have a good way of testing this out, but let's at least make a request to sign up

and sign in and just see what happens.

Back inside my API client, I'm going to find my first request right here at some point in time, I

have a comment on here called Create User, but I change this route to sign in, so I'm going to change

that back to sign up.

All then duplicate that entire block.

And paste it right underneath, so two copies of it now on the second copy, I'm going to change the

comma to, say, sign in as an existing user and I'll change the route right there to sign in.

OK, so let's now sign up as a brand new user and then immediately attempt to sign in as them as well.

And again, we don't really have anything to say whether or not this can be successful just yet.

I just want to make sure we don't get any errors or anything like that.

So to sign up, I'm going to change the email to something that I'll definitely remember.

So for me, I'm going to do email at test.

Dotcom ribeau test at test dotcom, nice and simple, I can definitely remember that, and they're going

to send my password to one, two, three, four or five.

So I'll send off that request and now the response, I get a much longer cookie right here.

So now you're taking the user's ID and setting it on that session object.

So then on sign in, I'm going to try to.

Sign in as test at test dotcom with the valid password, and now when we send this off, we're going

to get kind of a surprising response.

It's going to send it off.

And in this case, I do not have a headers property or I don't have any headers whatsoever.

I don't have anything.

Well, I do have headers.

I got content type and content link, but I don't have a set cookie header.

So here's an interesting little thing.

Whenever we try to make a change to that session, Object Cookie Session is going to take a look at

whatever change we just made.

And it's going to say, well, if you didn't actually change any properties, if they're all identical,

it's not going to send back any updated cookie in response.

So in our case, between sign up and sign in, in both cases, the session object is going to end up

being completely identical.

In both cases, we're going have a user I.D. property set to the user's ID.

So between these two different request handlers, because there have been no actual changes to the session

object, whenever we make a request to the second one, we're not going to see any updated cookie come

back because there is no updated cookie.

We have not made any changes to the session object.

And that's why we saw on the sign up we got back that set cookie header.

But then on the second one, we did not see anything of the sort.

OK, so like I said, it kind of looks like things are working, but we don't really have any good proof

of that just yet.

So let's take one more pause right here.

We're going to come back in just a moment.

We're going to make sure that we can put together a root handler that can only be accessed if a user

is signed in or something like that.
```
