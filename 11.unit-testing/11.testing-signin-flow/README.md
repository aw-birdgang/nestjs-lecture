## script
```bash
We've got two tests around the sign up process, so let's now start to add in some tests around these

sign in method of our authentication service.

So here's the method right here at the very top.

We've got one block of logic where we take a look at our user service and try to find a user with the

email matching the one that is provided to this function.

Now, unlike the sign up method, in this case, we do want to find a user because if there's no user

inside of our database with that matching email, and that means that the user has given us an invalid

email address.

So let's put in a test right away to make sure that if we do not find any users matching that email,

we immediately throw an error message.

So back inside my test file at the very bottom, I'm going to add in another IT statement will say it

throws if a or how about it throws if I sign in is called with an unused email.

Once again, we're going to put an async and done right there.

So then inside of here, in this case, we don't need to mess around with the find function in any way,

as we did with the last test, because in this case, we want to use the default implementation of the

find function where we return an empty array, because that's what we're trying to make sure of here.

We want to get back an empty array.

So we fail to find a user and we throw in error.

So for this test, all we have to do is the same kind of try catch set up.

Inside the trial, we'll do an await service sign in with any email address, doesn't matter any password.

And we'll call Dunn inside to catch.

So let's save this back over to our terminal.

And it looks like we are good to go.

Awesome.

OK, so that's one test down for at least that handling that no email found case.

So let's take another quick pause and take a look at how we're going to test out the password comparison

process, because this is actually going to be a little bit more challenging.
```
