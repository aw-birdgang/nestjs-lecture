## script
```bash
We should probably allow users to sign out of our application, so let's add in another request handler

that will deal with allowing a user to sign out right above my sign up handler.

I'm going to add in a new post request handler to sign out.

This will be not create user, but sign out, just keep the name very simple, will then receive that

session object.

And then to a sunny user out, all we have to do is remove that user ID property, that's pretty much

it.

So I'm going to say session that user ID equals null.

So now whenever a user makes a followup request to us, they will send a user ID of note, which means

they are not signed in.

Now, unfortunately, it's give me a little bit more challenging than that, thanks to a little oddity

inside of SQLite.

But let's just try this out very quickly.

So first, I want to make sure that I am correctly signed in, so I'll sign in as a real user.

And then going to get my current user, that looks good, let's now add in another request helper,

so say sign out, that will be a get to localhost three thousand off, sign out.

So I'm going to send off that request.

Did I put in the wrong.

Why not save this file, sign out, sign out poster class.

My mistake should be a post.

There we go.

That's better.

And send that off, so there's our updated kookie right there, which hopefully inside there should

basically say, hey, this user is no longer signed in.

And if I now make a request to get the currently signed end user, as I mentioned, we're going to see

that this is a little bit more challenging.

It's going to send that off.

And unfortunately, I still get back a response here.

You'll notice that the user that I fetched is not the same user who I was signed in as.

So what's happening?

Well, we are updating the session object correctly.

So our sign up method is working as expected.

What is going wrong is the Who am I method.

So if we call find one with a ID of null right here, we're going to get back the very first user inside

of our list of users.

So that's what's going on right now, are find one method itself is just not working as expected.

So we should probably update the find one method to make sure that it handles being given a ID that

is null.

So let's go take care of that very quickly inside of our users service.

I'm going to find my user service, I'm going to find the find one method right here and I'm going to

say if there is no ID, so if it is false, if it's zero, if it's null, if it's undefined, whatever,

I'm going to just return null right away.

And I'm not going to try to find any user with that undefined or null ID.

OK, so let's go and test out our sign out functionality again.

So I'm going to sign out again, I'm going to try to get the currently signed in user and now I get

back a response of null or essentially just empty.

We might want to update the response code or the status quo to for for something like that.

I'll leave that as an exercise to you if you want to go through that process.

Otherwise, to test this out one more time, I'm going to sign in again.

OK, there we are.

I'm going to get my currently signed in user.

Looks good.

I'm going to sign out.

I'm going to get my currently signed in user again, and I get a. response perfect.

OK, so this looks fantastic, and I think our users controller is just about complete, we've now got

all the basic functionality around signing in, signing up, signing out and figuring out who the currently

Sinden user is as well.

So let's take a pause right here.

There are a little bit more or is a little bit more authentication I want to discuss with you, but

we'll take care of that in just a moment.
```
