## script
```bash
Let's take care of the sign and method inside of our authentication service next door, remember, Sinon

is going to be just a little bit more complex than sign up, but ultimately it is going to be very similar

in nature.

So for CNN.

A user is going to give us an email and a password.

We first have to go into our database and try to find a user with that email, assuming we actually

find one.

We're going to take their stored password, which contains a salt and a hash.

We're going to split the two apart.

We're then going to take the salt and join it together with the user's password or the one that they

supplied, the one they're trying to sign in with, will then hash the result, take the output from

that and compare that hash against the stored hash that we have inside of our database.

So, again, a little bit complex logic, but as soon as we write out the code for it, I think you'll

have a reasonable idea of what's going on here.

Let's go back inside of our Sinon method.

We're going to first out in some arguments.

So I'm going to assume that this function will be coupled with an email that the user is trying to sign

in with and the password they are trying to sign with, sign in with as well.

So then the first thing is to look through our database and find a user with that particular email.

We can write out a query for that by using our users service, one little gotcha there, one very small

issue.

Remember that inside of our user service, if we pull it up very quickly.

We do have a find one method, but that attempts to find a user based on their ID, the only way we

can find a user based on their email is the find method.

But unfortunately, that's going to give us back a list of different emails or see a list of different

users.

So essentially an array of users in this case, we only want to find one single user.

So give us a user or don't.

But we don't really want a whole big array.

So just one little thing we have to work around to deal with that.

Back inside of Sinon, we're going to add in CONSED and then square brackets user.

And then await this dot user's service, find and pass in the email, also make sure you mark this function

as async.

I think I might have done that before this video by mistake.

So we're using a little bit of destruction here, we're saying let's take a look at all the different

users with this given email.

We're going to assume that we get back one user right here.

So we need to check and make sure that a user actually was found.

If we didn't find one, that means that the user gave us or the person who was trying to sign in, I

should say, give us an invalid email so we'll say if there is no user.

Then let's throw a new not found exception.

And we'll say user not found.

Let's also import that exception at the very top of this file, so the very top from SJS Common.

I'll get not found exception.

OK, so we've got a user and now it's time for us to do all this password comparison stuff, so the

first thing we need to do is take a look at their stored password, remember, inside of our database.

We're going to have the salt and then a period and then the hash.

So we need to take a look at that password property, split it based on that period and get back to

salt and the hash.

So for that will say.

Square brackets, once again, we'll do some already structuring here, salt and hash is going to be.

User password split on period.

OK.

Next up, we're going to do the same hashing process we did back up here with a script, so we're going

to rehash this thing once again using the supplied password and our stored sult.

We're then going to take the output from that and make sure the output is identical to the hash we had

stored.

And if it is identical, that means that the user did just sign and successfully.

So I'm going to first.

Say we have a variable called hash.

How about new?

Now, I don't want to call it new hash, let's call this hash right here.

Let's call it stored hash.

That makes a lot more sense.

So then the new hash will just call simply hash.

This will be a wait.

Script will pass in the supplied password.

And the salt, and it will get once again a length of 30 to.

Just like before, we're going to wrap that with a set of parentheses and then say as buffer.

And now we can finally do our comparison.

We're going to say if this hash right here after turning it into a hexadecimal string is identical to

the stored hash, that means the user gave us a valid password.

So we'll say if stored hash is equal to ashot to string hex, that means we have a good password.

The user is now considered to be logged in.

So in this case, let's just return the user that they signed in as it's going to return the user entity.

And we'll say else, so if they gave us a bad password, let's just throw an error and say forbidden

or something like that.

Or how about just bad request?

We've already imported that exception at the top.

So I will do a throw new bad request exception.

We'll say bad password.

Listing off a function with an if statement is something I personally just don't really care for.

So we're going to invert the logic here just a little bit.

We're going to say if the stored part of the stored hash is not equal to hash, not to string.

So if those things are not the same.

Then let's throw an exception and thanks to that, now we can remove our case and then just put return

user at the bottom to function.

So just a little bit easier to read and understand what's going on inside of your.

OK, so once again, that should be it, so I'm going to save this file and then we'll go back over

to our controller very quickly.

We're going to add in a brand new root handler that's going to call PSINet.

So back inside my controller.

Underneath our existing post request to sign up right there, I'm going to add in another post request

handler to sign in.

I call this method simply sign in.

We're going to have a body here.

We're going to reuse the create user DTO, not super appropriate, just because of the name, we're

not really trying to create a user here or anything like that, but the user DTA really just says that

our body is going to have an email and a password.

So it actually is kind of appropriate for Sinon, even though it doesn't have the best name we can use

it right now to define.

So then inside of Simon, we'll return this sort of service, sign in with email.

And password.

OK, looks good.

Let's go and do a test, so back inside of our API client.

I'm going to make a post request.

This time to offer a sign in and I'm going to make sure that I've got a valid email and password combination,

so I'm going to send this request off.

And it looks good to me.

I like it, so we've got an email and the ID, which means we did just sign in successfully or at least

we provided a valid email and password.

Now, if we change the password to something invalid, so if I put in a totally different string right

here.

And send the request, I'll get back at 400.

And if I try to put in an email address that does not exist, I should get back a 404 says user not

found.

Perfect.

Well, I'd say that this looks pretty good.

I think that we've got a reasonable solution that handles signing up and signing in.

Now the very last thing we have to do.

You might recall a couple diagrams go here we are right here, so we've handled the sign up process

last we really have to do here is all that logic around this cookie.

And then we need to make sure that whenever users make follow up requests, we retrieve information

out of that cookie and do some validation around it as well.

So we are almost all set with our authentication logic.

Let's start to wrap this stuff up in just a moment.
```
