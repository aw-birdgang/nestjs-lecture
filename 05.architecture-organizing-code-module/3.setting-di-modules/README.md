## script
```bash
Now they've generated all these different files, we're going to start to hook these different modules

together, so we're going to first focus on connecting the power module and the power service inside

of it to the CPU module and the disk module.

Remember, we're imagining that we are modeling a computer here.

So presumably our CPU service needs a instance of the power service to work correctly.

Right now, we're only going to worry about the relationship between the power module and the CPU module.

So just this part right now.

And then very quickly after that, we will expand our example and add in the disk and computer modules

as well.

OK, so in total, we've got two modules, one service inside of each.

And we know that we need to get an instance of the power service into the CPU service.

That means that we are going to share code between different modules.

Now, sharing services between different modules is going to work a little bit differently than sharing

code within a module.

So let me give you a quick reminder on what we have discussed around dependency injection so far.

So at this point time on the messages application, we made use of the dependency injection system inside

of one single module, so let's just review how that works.

Let's imagine for just a moment that inside of our power module, we actually had two different services,

maybe a power service and a regulator service.

And for some reason, maybe this regulator service needs an instance of power to work correctly.

So if we wanted to share the power service with regulator using the dependency injection system, we

would go through these three steps right here.

These are the same three steps we learned about just a little bit ago.

So we're going to add on the injectable decorator to power service.

We would add power service to the power modules list of providers.

And then on the regulator service, we would define our constructor method and we would list the power

service inside the argument list.

So again, that is sharing code inside of a module.

So now we are in a slightly different scenario.

We are now trying to share a code between different modules, so we're still going to have roughly three

different steps, but the entire process is going to be just a little bit different.

So in our case, we want to get an instance of power service over to CPU service.

So here are the three different steps we're going to go through.

First, we're going to open up our power module.

We're going to add in a new property to the power modules decorator.

Let's go and find the power modules decorator right now.

So back inside my editor, I'm going to find power module.

Here's the power module decorator, when we generated all these different files, power service was

automatically added into the list of providers.

So we are not going to add in a new property on that decorator.

We're going to explicitly tell the dependency injection system that we want to export the power service.

We want to make a copy of the power service available for import into other modules by default.

All the different services that we wire up to a module and list inside this provider's array are private.

In other words, by default, the power service cannot be accessed by any other module.

So to change that behavior, we're going to add in a new property to the module decorator called exports.

And then inside there, we're going to put an NRA and list power service, so that means that we now

explicitly want to make this class available to other modules within our project.

So that's step one.

We're not going to move on to step two, so in step two, we're going to open up our power module,

find its modules decorator, and we are going to import the entire power module into the CPU module.

So let's use step number two.

I'm going to find the CPU module.

At the top, I'm going to import.

The power module.

And then on a model decorator, I'm going to add in imports, an array, and I'm going to list out power

module like so.

So that's step number two, we have now connected together the power module and the CPU module, when

we add in that import statement, the CPU module and all the different services inside of it now have

access to all of our exported services from the power module.

It's now finally we can make use of the power service inside of the CPU's service.

We're going to do so with step number three, will define a constructor method on CPU service, and

we're going to add in the power service into its argument list.

So I'm going to find.

CPU module.

There's a folder I'm going to find the service inside of, you're at the very top.

I'm going to import the power service.

On the CPU service of the the constructor method.

And just the same way as we did previously, I'm going to put in private.

Power service and then the type annotations will be power service.

So now behind the scenes, whenever Nasta creates an instance of the CPU service, it's going to make

sure that it first creates an instance of the power service and provides it to the CPU constructor.

So now inside of our CPU service, we can define a couple of different methods that make use of the

power service in some way.

OK, so that's it, that's how we set up dependency injection between different modules.

This is how we share services between different modules.

So the series of steps are here somewhat similar to what we do when we are trying to share code inside

of a module.

The only difference is that now we are a little bit more concerned with the module list of exports and

the module list of imports as well.

Let's take a pause right here and continue in just a moment.
```
