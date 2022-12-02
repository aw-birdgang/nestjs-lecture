## script
```bash
We've now connected the power service to our CPU service.

It's now just to kind of finish up this example or at least the CPU part, I want to define a little

compute method on the CPU, a service that will make use of power in some way.

So inside of my CPU service, I'm going to define a method called compute.

And the compute method is very simple.

We're going to imagine that we're going to just take in two numbers.

We're going to add them together and return them, and that's pretty much it also inside of you.

I'm going to put together a console log and I'm going to say drawing 10 watts of power from power service.

And then going to call the power services supply power function and I'm going to pass in number 10,

so this, again, doesn't really do anything right here.

Just an example to say, hey, we're actually making use of that service in some way.

OK, so that is it for the CPU service.

So now we're going to backtrack a little bit.

We're going to go over to our disk module, the disk service inside there also needs to get access to

our service so we have another dependency.

So we're going to go through this exact same series of steps to import the power module into the disk

module so that we can get access to the power service inside of the disk service.

So same series of steps.

We are trying to share some code between two different modules.

So step number one, we're going to open up our power module and add the power service to the power

modules list of exports.

What we did that just a moment ago.

So we don't have to do it again.

Here's the power module right here.

We already added inpower service to the list of exports.

Remember, by default, anything we list inside the array of providers right here is going to be accessible

only inside the module unless we added to the list of exports.

Now we can move on to step number two, we're going to import the power module into this case now,

the disk module.

So I'll find my desk module.

At the top, I'm going to import.

Our module.

Well, then add in a list of imports input power module in their.

It's now anything inside of our disk module can import anything that gets exported from power module.

Now, let's open up our disk service.

At the top, we are going to import our service.

Well, then define our constructor method.

And add the power service into the list of arguments.

There we go.

So we've now connected these two different services together, so same exact series of steps any time

we want to share code between different modules.

Now, on the disc module itself, let's define just some kind of imaginary function again, not really

going to do anything, we'll just call it getData.

So on the disservice all defined getData, I'll do another council log here and I'll say drawing 20

watts of power from power service.

I'll call power service.

Supply power.

With 20.

There we go.

And then for getData, I'm going to return how about a string that says data?

That's the data that we're fetching.

OK, so now that we've connected these two modules together, we've got one more step we need to now

connect the CPU module and the disk module to the computer module.

So the computer controller right here needs a copy of the CPU service.

And the disk service.

So we're going to use the exact same steps that we just went through twice over.

So these same steps right here.

When we use these two steps or we can go through these three different steps and we connect the CPU

module and disk module up to computer, we do not have to also import the power module.

So we don't have to import all this power stuff up to the computer module because we have already imported

the dependencies into CPU and disk.

So we only have to connect the CPU module and the disk module to computer and that's it.

So let's take care of this last step in just a moment.
```
