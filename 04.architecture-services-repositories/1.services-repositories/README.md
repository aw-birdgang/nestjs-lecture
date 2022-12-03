## script
```bash
Our controller is looking pretty good, but at this point in time, I don't think there's anything else

we can really do inside of here.

What we really need to do right now is have the ability to store and retrieve messages inside of application.

And remember, we had said that we were going to have a messages service and a messages repository to

implement these two things.

So in this video, we're going to start to focus on services and repositories.

First couple of notes on exactly what these things are and how they work together.

Now, one of the biggest challenges I can just about guarantee that you're going to run into in the

world of Nest is understanding why services exist and how they are different from a repository.

So we're going to spend a good amount of time to clarify exactly what these things are and why we might

use one over the other.

It's the first thing I want you to understand is that both services and repositories are always going

to be classes very similar to everything else we create next.

We're always creating classes here.

We're always going to create a service any time we want to write out some kind of business logic, so

something to run, some kind of calculation or stuff like that, we also make use of services anytime

that we want to fetch data from a repository.

Repositories themselves are where we are going to write out any kind of storage related logic, so if

we need to directly interact with the database, if we need to write information into a file, anything

like that, we're going to place it into a repository.

In our case, remember our messages repository that you and I are going to create, we are going to

eventually have a plain text file inside of our project that stores all of our different messages.

So in our case, our messages repository is going to manage that file.

It's going to read data out of the file and write data into the file.

The goal of the messaging service is to make use of the repository and get access to messages through

that repository.

A service is going to frequently use one or more repositories to find and store data.

So for right now, we only have one service and one repository.

But in the future, we might have a single service that makes use of multiple different repositories,

gets many different kinds of data and combines it together in a very interesting way.

Lastly, I want to mention is that repositories usually end up being kind of like a wrapper around some

other storage library, so it's very common instead of having a standalone repository to instead have

something called a type Aughrim entity, if you don't know what that is, totally fine.

Where Mangou schema again, if you don't know what, that is totally fine or something very similar.

So even though in this application you and I are going to build a repository from scratch, in many

cases we are going to be using libraries that give us repositories that are already set up, an already

configured for us.

So a lot of times we don't really have to worry about assembling nothing from scratch.

Now, the very last thing I want to say right now around the differences between these two things is

that it is extremely common, as we're going to see, to have very similar methods between services

and the repositories that they use.

Let me give you an example of that right away.

OK.

So I've got our messages service and our messages repository.

Remember, the goal of this repository over here is to store all of our different messages inside of

a plain text file and eventually fetch messages out of there as well.

The goal of the messages service is to retrieve information from the repository.

So in the context of the service and the repository, let's try to think of some different method names

or essentially what these two things are going to need to do.

Well, the messages repository is definitely going to need methods where we can maybe open up a file

and find a particular message based upon some ID.

So maybe having a method name like find one makes a lot of sense.

We probably are also going to need to open up that file and find all the different messages we have

stored inside of it.

So have you met the name like vinyl also makes sense.

Finally, we definitely need to open up that file and add a new message in.

So again, having a method name, something like create absolutely makes sense as well.

So here's where things start to get interesting.

Remember, we're not going to directly make use of repositories inside of a controller.

Instead, it is up to the service to interact with the repository.

And our controller is going to work with the service.

So our service needs to have a lot of functionality around finding, storing and retrieving different

messages that we store.

So let's think about some different methods that are messages service are is going to need, I think

that the service is probably going to need to have the ability to find one individual message through

the repository.

So we'd probably give it a at the name of something like find one.

The messaging service also probably needs to find all the different messages, so we probably need some

at the name like find oil and something for it create.

So at the end of the day, and this is why I said just a moment ago, it starts to get really confusing

why we create a service and how it's different from a repository.

And it's because we very frequently end up with methods on the service that look absolutely identical

to the underlying repository.

And you are going to end up in a scenario where you say, why are we creating the service at all?

Why does this thing exist?

Because many in many cases, all it's going to do is turn around and call identical methods on some

other class.

This is something, like I said, two or three times.

Now, it's going to be a little bit strange.

You're going to think that the service is just not needed.

But I'm here telling you right away, yes, we still want to make these services.

There are very good reasons for setting up these services and having them behave as sort of like a proxy

that sits in front of our repositories.

And it all comes down to as soon as we want to access multiple different kinds of data, any time we

want to combine together multiple different repositories, anytime we want to start doing testing.

At the end of the day, just take my word for it.

Right now, there are still very good reasons to create a service and have it sit inside or in front

of the repository, even though it seems like it's just duplicated or unnecessary code.

So at the very end, what I really mean to say here is that if we have identical methods between service

and a repository, totally common, totally OK, there is a reason for it.

All right, so now that we got all this preamble out of the way, let's take a pause right here and

then start to create our service and repository in the next video.
```
