## script
```bash
Let's start working on the authentication service, so inside of here, we're going to eventually have

two different methods.

We're going to call one sign up and the other sign in.

I do want to say right away that I'm not super happy with these method names because the method name

of sign in kind of implies that once we call this thing, a user will kind of intrinsically be signed

into our system.

And that's not actually the case.

Sinon is going to make sure that a user provided the correct email and password.

So it's more like an authentication step as opposed to actually signing the user in.

So if you're not happy with these method names, I kind of agree with you.

I'm not a really big fan of them either, but I think they're good enough right now.

So we're going to focus first, focus on sign up so our arguments to sign up are going to be some email

supplied by the user and some password also supplied by the user.

Then inside of here, we're going to go through all the steps we had mentioned right here.

So first thing we have to do is take a look at the email that the user supplied that they're trying

to sign up with.

We're going to use our users service and see if there's already a user inside of our application who

has the same email.

And if they do, we'll throw an error, will then do the encryption store, the record, all that kind

of stuff.

So inside of sign up, let's first just put in a couple of different comments just to guide ourselves.

So first see if email is in use.

Second, we're going to.

The user's password.

Well, then create a new user and save it, and then finally, we are going to return the user.

As a reminder, the sign up method is going to be called from our controller, so once the controller

calls sign up, we're going to send them back.

Either an error if something went wrong or the newly signed up user, it will then be up to our controller

to take that newly signed up user and set up all this cookie stuff.

So inside of the method we're working on, we are really just concerned with these three steps right

here.

OK, so first, see if the emails and use let's take care of that.

So for this, you might recall that inside of our users service, which we've already wired up to this

thing, we had put together a find method.

Let's go take a look at that service very quickly as a reminder.

So here's the user service.

Inside of here, we've got the fine method and that will give us a list of all the different users with

a given email so we can really just call this find method.

We'll get back an array.

And if the array has any length to it, that means that someone is already using this email address

and we should probably just immediately throw an error and say sorry, but this email is taken.

So inside of authentication service.

We're going to use.

Our users service, we're going to call, find and pass in the email.

When we call Fynes, we're going to get back a promise.

So we need to await that.

And we'll need to mark the inclosing function as async Casswell.

So then we can check and see if there are any users in this race will say if users length, did we find

any users?

If so, well, then we'll throw an error right away.

In this case, we will throw a new bad request exception.

And we'll give it a message of email in use.

I'm then going to go up to the top, will make sure we import that exception.

Very good.

OK, so let's get no ones now onto hashing the user's password.

Now, this entire hashing process is going to require just a little bit of back story and explanation

of what we have to do here.

So let's discuss hashing or encrypting user's password in just a moment.
```
