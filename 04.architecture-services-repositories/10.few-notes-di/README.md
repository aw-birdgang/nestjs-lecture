## script
```bash
There are a couple of last minute things I want to mention around the system for right now, so the

first thing you might notice around our use of dye is that we followed this kind of better principle.

Remember, in this diagram, I laid out what we were originally doing.

I said that was bad.

I then said there was kind of a better approach and then a best approach.

And in the best approach, we would have defined all of our dependencies to be of types that were defined

by interfaces.

And this would allow us to very easily swap out different implementations.

However, we are making use of better instead.

So why is that?

Well, it turns out that making use of this kind of best system where all of our different interfaces

or all of our different dependencies are defined by interfaces is actually a little bit challenging

due to some limitations in typescript.

We can still kind of get around this using a couple of different tricks, and I'm going to show you

these tricks later on inside the course.

But right now, understand that just about everything inside of Nest is assuming that you are kind of

following this pattern right here.

It is assuming that all of your different services, repositories, controllers and whatnot are going

to have dependancy types that are direct references to some other class that exist inside of your project

as opposed to what would be ideal, which would be an interface.

So, again, ideally, we would make use of the best system.

But thanks to some limitations and typescript, we have to use better instead.

And finally, I will show you some workarounds to all this.

Next up, one other very small clarification I want to make, a little bit ago, I showed you this diagram

and I told you that whenever it was time to create a controller, Nest would take our controller class

and then asked the dye container to automatically create an instance of this controller for us.

And the container would then take a look at that things, dependencies and create a new instance out

of all the appropriate dependencies and wire everything up.

And as a part of that process, I had mentioned very briefly that the container is going to maintain

a list of all the instances that it has created.

So this is a very important thing to understand inside the world of dependency injection.

Whenever your container creates a dependency for you, whenever it creates an instance of messages,

service or repository or whatever else, it is going to store that instance internally and it's going

to reuse that instance over time if you ever ask for that same dependency again.

So if you have two different classes inside of your application that both ask for messages service,

only one instance of messages service will be created and that instance is going to be shared between

those two other classes.

I can show this to you very, very easily.

So back inside of our controller, I'm going to find our constructor right here.

And in addition to just asking for one dependency of messages service, I'm going to also ask for two

other copies as well.

The other copies, I'm going to give slightly different names, so messages, service two and three,

so I'm now asking for three copies of messages service.

But the dependency injection system is only going to create one instance of that dependency and it's

going to provide that same instance as all three different arguments.

I can very easily test this by doing a console log inside the constructor and compare messages.

Service with a equals equals equals to messages.

Service to.

And I'll do the same thing for messages, service to you, messages, service three, so if I see this

and go back to my terminal.

I'm going to scroll up just a little bit and I'll see to council logs of true.

So even though we asked for three copies of the messages service, the container only created one copy

and it passed that copy around all over the place, wherever it was requested.

This is going to have a pretty big impact on how you design some of your services.

We always design our services, assuming that the same instance of the service is being shared in multiple

locations inside of our project.

There are some ways to get around this limitation.

So if you ever have a service where you always want to have a brand new copy of it created, don't worry,

we can do that if it's something you want to do.

And that's another topic that will go over in due time.

Right now, I just want you to be aware of this interesting little kind of sidekick's.

I'm going to clean up that code.

Here we go.

All right, so last thing I want to touch on is the fact that as you start to look at this code, you

might really start to say, what is the benefit?

What have we really gained here?

What is the big benefit to all the stuff we've done?

Who cares about using dependency injection?

Well, to be honest with you, sometimes I kind of agree with you not going to lie.

Sometimes in invest making use of dependency injection feels like we are just kind of jumping through

extra hoops without really gaining a whole lot.

So if you feel that way, totally fine.

But I can't tell you without a doubt, is that testing your application when you're making use of dependency

injection and its entire inversion of control technique, testing your app is going to be far easier,

a lot easier.

So eventually when we start writing tests around our application, we're going to see that testing individual

classes inside of our app is going to be very simple and straightforward compared to if we were not

making use of inversion of control and dependency injection.

So just keep in mind that is really the payout.

The payout of all this stuff is once we start writing tests.

So that's kind of got a corollary to it, I'm assuming that you are interested in testing and you want

to do testing.

If you're someone who says I never test any code whatsoever, Lyndy might not really be that useful

to you.

So if you're not super into DIY and you don't want to do testing, maybe Nest is not the best framework

for you because otherwise you're going to be kind of having to work around this DIY system without really

getting the benefits from it.

OK, so that's my extra little a couple of side notes, so enough lecturing here, we've done a ton

of lecturing in the last couple of videos.

So let's pause right here and start writing more code in just a moment.
```
