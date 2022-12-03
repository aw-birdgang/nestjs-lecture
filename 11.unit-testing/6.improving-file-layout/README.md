## script
```bash
In this video, we're going to start to refactor our test file right now.

We have a single IT statement.

Usually whenever we set up a testing suite, each IT statement is going to try to test one aspect of

our code inside this test.

Right now, we're doing a tremendous amount of setup around creating a fake user service, creating

a module and then getting a copy of our service out of it.

This is all logic that is going to have to be repeated for every test we write inside this file because

every test is going to require a copy of our service.

So to make this file a little bit better organized, we're going to move some code around in the first

begin by cutting everything from the top of its statement, including that comment.

All the way down to CONSED service, so I'm going to cut all that out.

Then right above the statement, I'm going to put in a B for each.

I'm going to mark that function as async and then I will put that entire cut block inside of it before

each so paste.

It's now for every test we write inside this file, we're going to first create the fake service, create

our testing module and get an instance of these service.

So now for every single test we have inside of you, we're going to get a fresh brand new copy of our

authentication service.

That's exactly what we want.

Now, just one other very small problem.

We are defining the service variable inside this before each function.

So it's in a completely different scope than the statement down here.

So to fix this up, we can use a very common pattern that you're going to see in a lot of different

test files.

I'm going to define a variable called service at the top scope inside this file.

So at the very top, the file right before the before each, I will say let service is going to be of

type of service.

So now this variable is at the uppermost or top scope of the file, so it can be referenced or referred

to inside of any function inside of your.

So then inside the before each at the very bottom, rather than declaring the service variable right

here, I'm going to assign.

Module Dugit all service to the service variable we had already created at the very top, and now we

can reference that variable safely inside of all of our different tests.

All right, let's save this really quickly, I'm going to go back over to my terminal and just make

sure everything is still working as expected.

Yep, looks good.

The last change I'm going to make here, I'm going to wrap everything we've done so far except for the

import statements inside of eight describe Block.

It's going to say of service.

And then put in an arrow function, and this one does not need the async key word on it.

And then going to cut everything else inside the file and put it inside of that describe, so I'll highlight

everything.

I'm going to cut all of it.

And then paste it inside the describe.

The only thing that the described block does besides creating a new scope inside the file is really

just apply a further description to the test inside of you.

So if we now go back over to our test suite after saving this file, we're just going to see that now.

We've got the word service right there.

That's all the describe block really does.

It just helps us better kind of organize all of our different tests.

OK, so what you see inside of this test file is now going to be just about identical to what you're

going to see inside of every single next test file or at least for unit testing.

So, for example, if we take a look at how about user controlled or spec, which the recall was automatically

generated for us, you're going to notice that it pretty much looks identical to what we just put together.

They've got the describe, they've got a declaration on variable of before each and then a couple of

its statements in this case, just one.

But eventually we might have a couple more statements instead of here as well.

So, again, this is a pattern that you're going to see instead of a tremendous number of different

test files.

OK, so this looks good, we've got a good refactor, better organization outside of here, so now we

just need to add in some actual tests.

We need to make sure that the authentication service is doing what we expect.

So let's take care of that in just a moment.
```
