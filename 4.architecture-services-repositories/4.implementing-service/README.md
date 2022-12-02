## script
```bash
A repository is now just about all complete, they're still, as I mentioned, one or two things I want

to mention around it.

But right now, I think it's good enough that we can start to work on our messages.

Service to remember the entire goal of this service is to essentially sit in front of the repository.

Our controller is going to use the service to access data instead of the repository.

Once again, I want to repeat that the service is going to look just about identical to the repository.

It's going to seem like the service is pointless.

But again, there is a point to it.

So let's open up our messages, service dots file, and we're going to start to put together our service

implementation.

This will be pretty quick and pretty fast.

So to get started, I'm going to first create an expert, a class called Messages Service.

This class is definitely going to need a copy of the repository because we need a repository where we

can actually store data and retrieve data from.

So let's import.

The messages repository at the very top from messages data repository.

And then inside of our class constructor, we're going to make sure that we create a new instance of

messages repository and assign it to a property on this class.

So we're going to say this dot repo, how about the stop messages?

Repo short for repository is going to be a new messages repository.

As soon as I do that, we will get a little air here that just because we need to make sure we say that

this class is going to have a messages property to write about the constructor, say messages repo will

be of type messages repository.

Now, in a pause right here, I want to point out something extremely important to you in the service.

We have written in some code where the service is creating its own dependencies.

Messages Repository is a dependency of this service.

In other words, the service cannot work correctly unless it has a repository.

So we have set up a dependency between these two classes.

And the service is creating the dependency on its own, this is something that we do not do in Nest.

So I put a comment right here that says don't do this on real apps.

We do not have any class create its own dependencies inside of a constructor.

Instead, we're going to use a very special system in Nest referred to as dependency injection to set

up dependencies between different classes.

The reason that we're not doing that just yet is I want to have a real deep dive on dependency injection

and the help you really understand what it's all about.

So this right here is a very temporary line of code that we're going to remove in very short order.

Like in the next couple of videos, we're going to remove that and rely upon the dependency injection

system instead to set up all the different dependencies between our different classes to just keep in

mind.

Going to remove that in just a moment.

OK, so now inside of our service, we can start put together to put together all these different methods,

they're all going to look very similar to the message repository and inside of each one, we're going

to call the essentially equivalent method on the repository itself.

So let's just take a look at what this looks like.

So inside my service, I'm going to first make an async function called find one that takes an ID,

that's going to be a string, and then inside of here there's going to be look like it's totally pointless,

look like it's totally boring.

We're going to return this dot messages repo not find one ID.

And in this case, you know, I put on the async right there, we actually do not need that at all.

It can be just find one with a return.

So this is what I was talking about when I said it's going to seem like services are pointless, all

the service does is turn around and call the identical method on the repo.

So this is where you're going to probably start to say, why are we making a service at all?

What is the point of this thing, as I mentioned, four or five times now?

Trust me, it's all going to come clear on why these services exist over time.

Let's now repeat that process or oil and create its I'll do a find all inside of you.

We're going to return this messages repo find all.

Oop, no semicolon right there.

And create so create will take in some content that will be a string.

And then we will return this dot messages, repo create content.

And that's pretty much it, that is our service, with the one exception of this kind of little shortcut

right here inside the constructor.

This is what a service very commonly will look like.

All right, so now that we've got our service put together, the last thing we have to do is connect

the service to our controller and inside the controller will then call some appropriate method whenever

someone makes a request to find a very particular message or call them or add a new one in.

Let's take care of that last step in the next video.

And I think we'll be able to do a manual test of our entire application.
```
