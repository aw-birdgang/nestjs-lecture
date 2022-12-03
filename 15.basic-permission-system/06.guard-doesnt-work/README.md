## script
```bash
Let's now wire up our admin guard to the reports controller, we're going to make sure that only users

who are administrators are allowed to make a request to approve a report.

I'm going to go back over to my reports controller at the very top, I'm going to import.

The guard we just assembled, so admin guard from upwind directory guards, admin guard.

And then as a quick reminder on how we wire up a guard or we have to do is make use of the use guards

decorator, so we've already done something very similar uncreate report right here.

OK, so I'm going to add in.

Use guards, admin guard, and that should be it.

So now only an administrative user will be able to approve a report.

To test this out, we do need to first create a brand new user because remember, we added in that default

of admin true into our user entity.

So we need to create a brand new user by default.

They will be marked as an administrator.

Once we do that, we can then test out this root handler.

It's going to open up my API client.

Around all of our users related stuff, I'm going to create a brand new user with some unique email

address.

I'm going to send that request off, OK?

I'm now signed in.

I've signed up to the application.

And in theory, this user that I just created should be an administrator.

So now I'm going to go to my API clients around reports.

So here's the patch request that we just put together to approve our reports, I'm going to first how

about first make a new report?

Just make sure I'm working with a fresh one that is definitely not approved.

So I'm going to create a new one really quickly.

This one is definitely not approved.

So now, if I attempt to approve that one and make sure I put in the correct ID right there, I'm going

to send this off.

And unfortunately, I end up with an error that's a little bit unexpected.

I really kind of expected that everything we put together would have worked by this point in time.

So this is the little issue I mentioned a little bit ago.

And as I mentioned, this is going to allow us to get a better idea of what's going on internally with

Nest, giving you an explanation around why this thing is failing.

So the admin guard is going to be just a little bit involved.

So let's take a quick pause right here.

Come back the next video and take a look at a series of diagrams and understand why the guard is not

quite working as expected.
```
