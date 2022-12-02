## script
```bash
Let's start to kick off this refactor to make use of a dye container inside of our application to get

started.

We're going to go back over to our service and our controller, and we're going to refactor them to

accept their dependencies as arguments to the constructor.

Remember that we had a distinction between a better and best approach previously said ideally we would

have our constructor arguments, B of types that are interfaces.

We're not going to worry about that just yet.

Let's start first, start to refactor our messages service to refactor this thing.

I'm going to find the constructor.

I'm going to remove that comment.

Will then receive an already initialise copy of the messages repo as an argument, and it will be of

type messages repository.

We will then a sign that to this day that.

Messages repo like so.

Now, if you want to, we could use a little bit of typescript syntactic sugar to condense all these

lines of code right here, what you see on the screen right now is 100 percent equivalent to instead

writing public messages, repo and then deleting that assignment inside the constructor and deleting

the property initialization as well.

So we're going to use this pattern quite a bit throughout the course where we receive arguments in the

constructor, we mark them as public, and that means that these arguments are going to be automatic,

automatically assigned as properties to the class.

OK, now we finished up this first refactor.

Let's go over to our controller and refactor that one as well.

So here's the controller inside of our constructor argument list, we will add in public messages,

service will be of type messages service, and now once again, we can remove everything inside the

constructor and the property definition as well.

OK, so there's a factor we do not have to make any changes to our repository because that thing did

not have any dependencies inside of its constructor.

So we are now following the inversion of control of principle.

So now we need to make sure that we wire up all these different classes to our dye container.

To do so.

We have two separate steps we have to go through.

We're going to import another decorator into each of our different dependency files.

We're then going to apply that decorator to the class.

And then finally, we're going to add those classes to our module, these steps right here.

The words for them sound kind of confusing.

Effectively, what we have to do here is very simple and straightforward.

So let me show you back inside of our service.

We want to add this class to our DI container.

So at the very top, we are going to import.

Injectable from at SJS Common.

Then right above the class, I'm going to add in at injectable.

So this is marking this class for registration inside of the dye container, that registration process

is going to occur automatically now that we have apply the decorator.

Next up, we'll go back over to the repository.

We also want to add this class to our container, so we are going to also import injectable.

Into here as well.

And then apply the injectable decorator.

OK, so we've now registered these two different classes with our dye container, we do not have to

register the controller with our container directly because the controller is only consuming classes.

Remember, we're going to try to create an instance eventually or really NEST is automatically for us.

Nest is going to try to create an instance of our controller for us so we do not have to register controllers

with our dye containers.

We only have to register pretty much just about every other class generally services and repositories

that we create.

So now that we've applied that decorator, the last thing we have to do is add those two classes, the

service and the repository to our modules list of providers.

So to do so, we're going to open up our messages module.

Here it is right here.

At the very top, we are going to import.

The two classes we just marked as injectable, so that's the messages repository in the service, so

we will import messages service.

And messages.

Repository.

We're then going to add in a new property to the model decorator of providers.

The term providers right here, maybe a better term for this would be things that can be used as dependencies

or other classes, obviously not an ideal property name, but that's kind of a better way to think of

this than the term providers.

When you see provider or providers, it's really meaning to say things that can be used as dependencies

for other classes.

But inside the USGS world, we call it providers.

And we're going to add to that messages, service and messages.

Repository.

And that's it.

All right, so we've now completed the refactor, and you'll notice that in this refactor, at no point

in time did we ever have to touch anything called a container or an injector or anything like that.

At no point time did we have to worry about kind of explicitly doing any kind of registration beyond

obviously adding on that decorator and adding on each class to that list of providers.

So even though the container does exist inside of our application, we rarely directly interact with

it in any way.

Instead, we just make use of some decorators.

We add some things to the module and the nest is going to take care of everything else itself automatically.

Now, the very last thing we have to do is actually test out our application and make sure that everything

is still working as expected, the first thing I'm going to do is go back over to my terminal and make

sure that my server is still running without any kind of errors.

Looks good over here.

So then I'm going to open up my API client once again.

I'm going to try to get a list of all messages, OK, looks like that works, I'm going to try to create

a message, so I'll say message after adding DI.

Send that off, looks good.

And then finally, I'm going to try to get a very particular message, looks like a valid ID for me

as to thirty one, so I'll make a request to messages to thirty one.

And I can get a very particular message as well.

OK, so that is it, we have now set up the DI system inside of application and all we had to do was

go through this simple flow right here.

So in general, for every class we create, that is not a controller.

So generally services and repositories, we're going to add on that injectable decorator and then add

the class to our modules list of providers.

Then just about everything else is going to happen automatically.

Next is going to automatically create the container for us.

It will automatically create the controllers for us as well, and the controllers will get all the appropriate

dependencies.

Now, even though it seems like we didn't have to do a lot to make this stuff work, there's still an

incredible number of little tips and tricks and just odds and ends around this DII system that you need

to be aware of.

In addition, even though we are now using dependency, injection kind of seems like, well, what did

we gain?

It seems like we didn't really gain a whole lot at this point in time.

So there's still a couple of very small closing remarks I want to make around Dief right now.

So just one more video on the system and then we'll move on from there.
```
