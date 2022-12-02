## script
```bash
Let's wrap up this example by taking a look at a diagram or two and just imagine how all this model

stuff relates to the dependency injection system.

OK, so we're going to focus on the power module and the CPU module and how they interact.

So we are creating the power module.

We list power service in the array of providers.

So that's going to create our container.

We've got our listing of all the different classes in this container and their dependencies.

The power service has no dependencies, of course.

So the big addition we've now added in is the idea of exports.

So with this exports field, we can kind of imagine the dye container now has an additional listing

inside of it.

It says here's a list of all the different classes that can be used in other containers or other modules.

So now whenever we decide to import the power module into some other modules, such as the CPU, we

can imagine that this is what is going on behind the scenes.

So we've still got all the same stuff up here, but now we've got our CPU module.

The CPU module lets out the CPU service as a provider, and it's also got a listing of imports as well.

So this important step we can kind of imagine means go into the power module and get that entire listing

of everything that was exported from it and make it available to all our different services inside this

container.

Now, the CPU service can correctly look up the power service.

Now, just, you know, there's not actually multiple different dye containers behind the scenes.

Instead, we have one dye container, but everything inside of it is scoped to limit what different

classes can see, other classes.

Nonetheless, from the perspective of a diagram, it's kind of helpful to just imagine that we have

multiple different dye containers.

OK, so that's pretty much it for module's right now, so let's take a pause right here and start working

on our next application in the next video.
```
