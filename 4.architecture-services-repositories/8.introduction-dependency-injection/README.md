## script
```bash
I've now made it seem like inversion of control is a fantastic technique and we should use it all the

time everywhere, but it turns out that inversion of control does have some really big downsides.

So I want to first begin this video by writing out a very quick code snippet for you.

You do not have to write out this code snippet.

I'm going to delete it very quickly.

It's just a very quick demonstration.

So let's imagine that we refactor our controller, our service and our repository to make use of inversion

of control.

Let's then think about what we would have to do to create a controller.

So to make a controller, we'd have to first create a service and to make a service, we first have

to create a repository.

So we would have to write out some code that looks like this.

We'd have to say repo is going to be a new messages repository.

Then have to create my service.

And passed in the repository, and then finally I can make my controller.

Impasse in the service.

So that is three lines of code to create one instance of a class that we actually need, this is three

times as many lines of code as what we would have to write at present to make a controller right now

inside of our current code base where we are not currently making use of inversion of control, we can

create a brand new controller with all the appropriate dependencies by just writing out that snippet

right there.

So, again, we have to write out about three times as much code to make a controller once we start

making use of inversion of control.

And this is for one of the most simple basic dependancy systems or hierarchies we can come up with in

an application.

It's entirely possible that we might eventually make a service that requires maybe two or three different

repositories, and each of those repositories might have their own dependencies and a controller might

have more than one service that it needs to work correctly.

So if we start to make a rather complex application to make one single controller, we might have to

write out some amount of code that looks like this just to get the required number of repositories and

services and whatnot created to satisfy all the different dependencies between these different classes.

So this is a tremendous amount of code to write just to make use of inversion of control.

So it's pretty clear that as our application starts to grow in complexity, strictly following inversion

of control, as it stands right now, as we've understood it in the last video, is probably not going

to work at all because we just have to write too much code.

So to solve this problem and still be able to use inversion of control, we're going to introduce a

technique referred to as dependency injection dependency injection is all about making use of inversion

of control, but not having to create a ton of different classes or a ton of different instances every

single time we want a controller.

So let's take a look at how inversion of control works.

All right, so the total linchpin of how dependency injection works is something called a container

will frequently call this a dye container, dye it being short for dependency injection.

You'll also sometimes see this referred to as an injector as well.

So either container or injector, this container or injector thing, whatever you want to call it,

I'm going to call it container is an object that has a couple of different properties in it.

For the sake of discussion, we're going to simplify these properties and say that it stores two sets

of information.

First, it's going to store a list of all the different classes that we've created inside of Iraq and

their dependencies.

And then second, it's going to store a list of all the different instances that this container has

created.

Don't worry about the second piece of data just yet.

Let's first focus on just this top one.

All right, so let's walk through a situation where we messed up or something when we create our nest

application, when we first put up our app and how this DIY container is actually going to be used.

So here's what's going to go on behind the scenes.

Whenever you create a new nest application, a dye container is created for us.

When we start up our application, we are going to take a look at all the different classes that we

have created inside of our application except for our controllers.

And we're going to attempt to register each of these different classes with our dye container.

So we're going to take, for example, our messaging service and feed it into the dye container, the

container is then going to analyze our class right here.

It's going to take a look at all the different dependencies that are required.

Specifically, it's going to take a look at all the different constructor arguments that we're seeing.

That message service needs to work correctly.

The dye container is then going to set up some internal records that say, OK, if we ever want to create

a copy of messages service.

Then we have to make sure that we first create a copy of messages repository because that is a dependency

of our service.

Well, then continue registering all of our other classes, as well as the next one we might register

will be our messages repository.

The messages repository does not have any dependencies.

So inside of our container, we would add in another class that exists inside our application.

We'd say that that thing does not have any dependencies at all.

So that then at some point in time, we're going to want to eventually create a controller, we want

to create an instance of our messages controller and use it to handle incoming requests.

So we are going to take our controller, we're going to feed it into the container and we're going to

say, hey, container, we want to create an instance of this controller, please create the instance

for us and create all of its required dependencies as well.

So internally, when we feed in our controller right here, the container is going to take a look at

that controller and take a look at the constructor arguments and it's going to take a look at all the

different dependencies that are controller requires.

So in our case, the container is going to notice that it needs to create a copy of messages service.

So containers then going to take a look at messages service and it's going to say, oh, well, before

I can create a service, I first have to create an instance of the repo.

It's going to take a look at the messages repo and say, OK, this thing doesn't have any dependencies.

So we can directly create the repo, then use that to create the service, then use that to create the

controller.

So internally.

A dye container is going to automatically create an instance of the messages repository and it's going

to add it into an internal list of all the different instances that this thing has created over time.

So it's now got internally stored one copy of the messages, repo bill, then use that instance to create

an instance of the messaging service.

The container will then use the service to create an instance of our controller and return it.

So we get back out of our container a fully initialized copy.

Of the messages controller with all the appropriate dependencies wired up to it and added in or assigned

to that instance of the controller.

So the entire goal of this container, we're going to first step one, register all of our different

classes, the container is going to record all these different classes.

Dependencies will then use the container to create a new instance of a controller.

And when we do so, the container is going to take a look at the controller dependencies, create all

the appropriate instances for us, and then feed those dependencies into the controller and eventually

give us a controller instance back.

The big upside to this approach is that we can continue to use this idea of inversion of control, but

we don't have to worry about creating all these dependencies ourselves.

The dye container is going to take care of that for us.

All right, so the last thing I want to go over this flow just one more time and spell it out in one

single diagram, crystal clear so we can easily refer back to this diagram, the future.

So here's the flow.

At Startup, we're going to register all of our different classes with the container.

The container is going to take a look at all these different classes and figure out which dependencies

each one has, then at some future point time after our application, kind initially does some registry

of these different classes.

This initial startup, we're then going to ask the container to create an instance of a class for us.

And this is almost always going to be a controller.

The containers then going to find all the different dependencies that the controller needs is going

to create an instance of those dependencies, it's then going to use those to create the controller

and then give us back the controller.

And last thing I want to mention here is a container also holds onto the created dependencies.

So the instances we had created and put into this little list right here.

And if we ever need to create another class in the future that has a similar dependency, so if we try

to create some other controller, maybe that also needs a message of service rather than creating an

additional instance of the messaging service, it's going to reuse the instance it already created.

Now, that last part where it's going to reduce instances that were already created, we're going to

see that in greater detail.

Don't worry about that too much just yet.

I just mentioned to be a little bit complete in this entire description.

All right, so now that we've got some kind of background on dependency injection here, I do know this

stuff is awfully complicated.

And at the end of the day, the only way to really understand it is to go and write some code out ourselves

and see all this stuff happen in action.

So let's take a pause right here.

In the next video, we're going to start to refactor code to make use of an inversion of control.

We're then going to make use of the system to automatically create all of our dependencies for us.
```
