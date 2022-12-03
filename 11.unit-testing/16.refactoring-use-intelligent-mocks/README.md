## script
```bash
As mentioned, we're going to go through our existing tests very quickly, rather than customizing the

find method on a per test basis.

We're going to just call our service directly and try to set up the different scenarios.

So the first one we're going to take a look at is where we throw in air if a user signs up with an email

that is already in use.

So to simulate this without changing our fine method implementation, all we have to do is call sign

up twice in a row with the same email.

So I'm going to go outside to try.

Do a service dot sign up.

With a password doesn't actually have to match, that doesn't make a difference.

All that matters is that we make use of the same password.

So now if we save this and run our test again.

They should still be passing at this point.

Oh, I've got to fix up that last one down at the bottom, I never change it back to the correct password.

There we go.

Machines that go back to one that we were just working on.

Here it is right here.

Run this test again.

There we go.

And the reason I put this first one outside of the tri statement is because I definitely expect this

call to succeed.

I want that first one to run successfully.

If I put it inside the tray and it failed, well, then I would have a tough time deciding whether this

test passed because the first call incorrectly through an error or the second call correctly through

an error.

So that's why the first one is just going outside.

Hey, that looks good, so let's keep on going down, looks like the next one here is throws off an

invalid password is provided.

So once again, this would be a very simple one to set up without having to redefine the find method.

So I'm going to first.

Sign up with a real email or the same email.

And a different password, so I'll put in a very different password right there.

So now the emails are the same, but the passwords are different.

So this will correctly simulate an invalid password being provided.

So let's save this, we're going to make sure it passes.

And yep, looks good.

So then finally, let's try making them making this pass.

I'm going to give the same password.

Excuse me, this would not pass.

This is going to fail because we're never going to get the done statement.

I'm going to make sure that we see a time out of this test after about five seconds or so.

And so wait, wait, wait, wait, wait, just as so slow, I got to be honest with you and yeah, there

we go.

So that failed because we were expecting to see a bear being thrown.

Now we can change the passwords to not be the same anymore, and it should be working again.

All right, so that is it.

That is testing of a single service by setting up a mock or fake service as a dependency.

Again, two ways to approach this for the mocking side either set up very simple static functions that

return static data or put together an actual implementation.

It might seem like putting together an actual implementation is a huge pain and takes extra time.

But honestly, at the end of the day, it's not the worst thing in the world and it allows you to pay

to practice some really basic logic or putting together some really basic functions.

So definitely not the worst thing, even though it does take some extra time.

OK, so that is it for our first test.

Let's take a pause here and continue in just a moment.
```
