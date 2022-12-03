## script
```bash
We have two big challenges ahead of us.

The first big challenge is to make sure that we use a separate database between development and testing.

The second challenge after that is to make sure that we wipe out all the data inside of our testing

database in between each test.

So we're going to first focus on just making sure that we have two different databases.

That's it.

Now, to start off this project, I first want to give you a very quick reminder on how we decide what

database we are going to use right now.

So if you open up your app module once again inside of here, you will find that type or module right

here.

One of the properties we passed off to it was this database string.

That string determines what database we're going to use when we are running our application.

So in order to use a different database during development and testing, all we really have to do is

change out that string depending upon whether we are running in development or test mode.

A very simple way to do this would be to read in an environment variable into your application, and

depending upon whether that environment variable says we are running a test or development, we can

change out that string.

Now, usually reading in environment variables into a node application is very easy and very straightforward,

so our issue right now could be solved with some very simple code.

Here's what we could potentially write to solve this problem and have two separate databases.

We could say something like If No or Process N.V..

Node ENB is.

Test, then I want to use a database called Test SQLite.

You know, Colin, right, there should be a question mark and then otherwise I want to use a database

called Debe SQLite so we could use a very simple turnier expression like this.

So if running a test great.

Right.

Every everything inside of this file.

Otherwise, write everything inside that file.

Now, of course, this doesn't really handle the production case, but the point still stands.

We could have some logic like this, very simple and very basic.

But unfortunately, well, we're going to do something a little bit more complicated.

And let me tell you why.

OK.

So at the end of the day, what we really need to do here is read in some environment, variable configuration

and then change out that Debe name property based upon what environment we are in.

In order to read in environmental configuration, we are going to use Nesse recommended way of doing

this.

Now, in my personal opinion.

This is just my opinion.

Mishandling of environment variables is really way too complicated.

It is very much over the top.

Now, normally, I would not put in a disclaimer like this inside, of course, because I want you to

remain, like, excited about the stuff we're learning.

But in this particular case, handling environment configuration is just so complicated.

And as soon as we start it, you're going to say this seems ridiculous.

And I just want you to understand.

Yes, I agree with you.

It is a little bit over the top.

So why are we still going to do it the recommended way?

Well, as I mentioned just a little bit ago in a previous video, I want you to learn Nest as Nest recommends

it.

So I want you to understand what the documentation says you should do when you are looking to handle

environment variables.

So that's why we were going to follow nest recommendation, even though, again, in my opinion, it's

a little bit overly complicated.

So let me tell you how we're going to read in some environment variables that are going to specify what

database we should use.

OK, so here's the general idea.

So we've got our app module.

And remember, whenever we create a module that creates a container in a container, allows us to list

out some different classes and what their dependencies are.

So we are going to create a new service called the config service.

The only goal, the config service, is to read in some environment variables and make those environment

variables available to the rest of our application, then to make use of that service rather than just

directly referencing it or something like that, we are going to use dependency injection to read all

these different environment variables.

So we are going to slightly change our type or module code.

So really, this block right here, we're going to change that block and we're going to say that in

order to make use of the type or a module, it needs to have a copy of the config service.

So then the type or a module is going to make use that config service to read in some environment variables

and set up some properties such as this database field right here.

So once again, this is really, really over the top, considering how easy environment variables can

be to read in, there are reasons that Nest chooses to do things like this.

Personally, I just I'm not going to say any more about it.

I do think it's over the top.

I'm going to leave it there.

Let's just pause right here, come back in just a moment.

We're going to start to set up this config service and provide some configuration to that type or a

module.
```
