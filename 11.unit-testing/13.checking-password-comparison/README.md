## script
```bash
There are two other tests I would like to right around our site and function.

So we've got one test where we do not find a user with a given email.

I would now like to write another test where the supplied password doesn't match up with the one that

is stored inside of our database.

Then like to write another test where the supplied password does match Zolt.

Let's take care of these further two tests back inside my test file.

At the very bottom, I'm going to add in its statement and say it rose if an invalid password is provided.

And once again, I'm going to use that done argument.

OK, so then inside of here, this time around, we need to make sure that we do, in fact, return

a user record from calling the find method so very similar to what we did earlier.

We need to mess around with the implementation of our fine method for just this one particular test.

So we're going to take a look at our fake user service and we're going to reassign the find property.

We're going to make sure that we return a user.

Whenever we run our sign and function, so inside of our new test will say fake users service find.

I'm going to put in a new line here just so you can very easily read the line.

And it will do a resolve or if you promise, not resolve.

An array with an object.

I'll give them an email of whatever and a password of whatever.

And I'm going to specifically tell TypeScript to consider that object as being a user record.

OK, that looks good.

So then I'm going to put in my tri.

In my couch.

I'll call service dot sign in and we can provide any email here that we want to provide because remember,

no matter what email we give, we are always going to return that user object so we can put in any email

here.

Doesn't really make a difference.

And I'm going to put in a password that will definitely not compare in any way, shape or form against

the password that gets returned.

So remember, this user right here inside of our fine method is going to show up inside of our site

and function as that user.

This user, we are assuming, has a password that is salted and hash.

And we're going to hash the provided password and then compare the two of them.

So without a doubt, if we just put in any random string of characters for the stored password and this

one right here, the password comparison is definitely not going to work as expected.

And without a doubt, we will be throwing a bad request exception.

OK, so all we need is the try.

We can pretty much call it with any password you can possibly imagine and the comparison is not going

to work as expected.

So then finally, inside of the couch, I'll put in a dozen.

All right, let's see this go back over to our terminal and see how we're doing.

Looks like it passed your good.

I'm going to make it fail very quickly and I'll make it fail.

How about by just.

Returning about will come out the done little work, so I'm not going to Khaldoun, they'll make the

test time out again, just making sure that the test is actually running.

And after about five seconds, yep, there we go.

OK, that looks good.

So we've got one test put together to make sure that an invalid password does not work.

Now, I'll put together another test and we'll say it returns a user if password.

Or how about if correct password is provided?

So put in my async function.

And then once again, we're going to want to update our fine method, so it does, in fact return a

user.

So I'm just going to copy that.

Find right there, paste it down here.

I'll then get my user.

By calling service, sign in and I'll provide once again, the email doesn't matter because no matter

what, we're always going to send back exactly that object right there.

They'll put in any email.

And any password as well.

OK, so then after we create that user, we might write out a test and say something like expect user

to be defined.

So it's going to say, yeah, we successfully compared the passwords, we found the user and we return

them from that function.

Now, here's where things start to get really interesting.

So another reminder on the sign in function.

So we are going to supply a password.

We're going to try to find a user with a matching supplied email address, so our user right here in

during our test suite running is going to be the user that we return from our FAQ find method.

We then take the stored password.

When the user user that is coming from the FAQ find method and we pull off that salt and the hash.

We then use the supplied password.

And the salt.

To generate a new hash, and we compared that against the stored hash, and that is our password comparison

process and this is all the logic that we were actually trying to test here.

So to correctly test all this stuff, we have to supply right here for the user coming from the find

method, we need to supply a password that is correctly salted and hash like a real salted and hash

password.

And whatever we call Sinon with it has to be a password that is going to correctly compare against that

salted and hash to password.

So in other words, we need a very real password and the very real salt and hash to go along with it.

So there are two ways we can go about this.

I'm going to first show you the kind of junkier way that is not always going to well, it's always going

to work correctly, but it's really maybe not just the best way to set everything up.

So I'll show you the kind of quick and dirty easy way first, and we'll take a look at a much more involved

way of making our code work as expected.

So here's what we are going to do.

I'm going to comment about everything inside this test right now.

I'm then going to.

Greater user.

With our sign up function.

In a password of my password, I'll then console log out the user that gets returned.

So remember this user right here?

They they're going to have an ID, an email and a password as well, because we are generating that

hash and whatnot.

So I'm going to oops, I'm going to save this and go back to my terminal and I'm going to take a look

at that console log.

So back over here.

Yep, there's the constant log, so here is a actual salt in hashed password.

Or my password, so it is a salt and a hash that works for my password.

Those two things are going to compare successfully inside of our sign in function.

So I'm going to take.

This salted and hashed password, I'm going to copy it.

I'm going to uncommented everything we just wrote for our test.

And I'm going to take that copy paste I just got and put it in for the password of the steroid user.

So there is my salted and hashed password.

I'm then going to clean up the sign up call down here.

And now if we run our test and we try to take my password and salt it and hash it and compare it against

the hash section of our password, that comparison should be done successfully.

So now our test should pass.

So I'm going to save this and go back to my terminal.

And everything should work now.

Hopefully we'll see what happens.

Yep, it looks good.

So now the downside to this approach is, of course, we've got a test with a really long password inside

of it, and this I don't know, just something about this just doesn't feel right.

If someone ever just accidentally changes that, it's no longer going to compare correctly against specifically

the string my password.

And so our test would start to fail.

In addition, there might be other locations inside of our project.

We might want to, I don't know, actually create a user with a real email, real password, hash it

and do all that stuff behind the scenes correctly.

So even though this works, it still doesn't really feel all that great.

So, as I mentioned, we're going take a pause right here.

Going come back in just a moment and I'm going to show you another way of setting up our fake user service

where we should not have to manually run our test once, get a password and then paste it in here.

So quick pause.

We'll take a look at that alternate solution in just a moment.
```
