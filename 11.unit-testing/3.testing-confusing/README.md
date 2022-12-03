## script
```bash
Let's take a look at some of this weird code we put together in the last video, we're going to first

focus on the provider's array inside of our testing module right here.

So what is going on with the provider's array in general?

We might recall back when we were first discussing dependency injection, the provider's array is a

listing of all the different classes that we might want to inject into our container.

So once we add these providers in or this list of classes, the dye container can then figure out how

to create any instance we want.

Whenever we create an instance of one of those classes, the dye container will create instances of

all the dependencies of that class as well.

So essentially the list of providers is a list of classes we want registered inside the dye container.

So the first line right here is going to behave very similarly to how other classes we've taken a look

out before are going to behave.

Our service is going to tell the dye container that at some point in time we are going to want to create

an instance of the service.

The dye container is going to take a look at that class and understand all that class's dependencies

when it looks at the service.

Its going to understand by looking at that constructor argument that one of the dependencies of this

class is the user's service.

So that is business as usual.

With the first entry in the provider's array.

Where things get really interesting is the second element inside that array.

So this is an object that is going to slightly trick or kind of reroute the dye system is going to change

how different classes or different things get resolved whenever we ask for a copy of specifically the

service.

This object, we can really kind of read it in plain English, it says if anyone asks for a copy of

the user service, then give them the value fake users service.

So that is what that object means.

The key of providing there is a little bit confusing because the word provide makes it seem like this

is something we're providing to the rest of the classes inside of our container.

That is not the case.

The property name of provide means if anyone asks for this.

So if anyone asks for user service, give them the value.

Fake user service.

So then we can start to think about what happens inside of our container when we ask the container to

create an instance of the service.

Here's what goes on behind the scenes.

When we ask for a copy of the service, the container is going to go find the service and figure out

all the dependencies of that class.

So naturally at first, oh, OK.

To create a instance of the service, I first need an instance of the user's service.

So the container then says, how do I create a copy of the user service?

And it's going to take a look at a list of all the other rules it has inside the container.

There's going to find this rule right here, and that rule says if anyone asks for the user's service,

if anyone asks for that thing, then just give them this object, the object we created that has a find

and create method on it.

So we can almost imagine.

That these steps kind of fade away, and whenever we ask for a copy of the service, the dye container

is going to automatically create an instance of the service for us using this plain object as the user's

service.

So right here, this service object, which is a copy or an instance of our authentication service,

if we took a look at its reports, its user service property, because remember, that's what we assign

it to inside the class definition.

If we took a look at its users service property, it would be this object right here.

So what does that mean?

Well, remember, inside of our authentication service, whenever we call, say, sign up right here.

Then the service or the up method internally is can have some amount of logic inside of it, and one

of the things that it does is it calls the user service find method.

It also later on calls the user service create method.

So now, rather than reaching out and calling the real find and the real create, which required the

use of the users repository and SQLite, we're going to instead run these very fake implemented methods

instead.

So this fake version of FIND and this fake version of CREATE.

So whenever we call sign up first line of code right here, when we call, find this is what actually

gets executed.

So we're going to return a promise that resolves with an empty array.

We're then going to run some logic on the results, blah, blah, blah, a bunch of stuff.

We eventually then try to create a new user.

What actually gets invoked there is the create method inside of our fake user service.

So this entire technique allows us to create a working copy of the authentication service that can make

use of other classes, other objects.

But we don't have to actually create those other objects or anything like that.

Instead, we create these fake objects and put them into the container.

And because you and I are creating these fake implementations of find and create, we can very easily

control their behavior.

So if you and I wanted to write a test where maybe an email address was in use because remember, that

was the entire point of this block right here.

So if we want to see what happens when an email address is in use, then you and I could go and tweak

our implementation of find inside of our tests.

So maybe rather than returning an empty array right here, we could return an array with a user inside

of it and say, oh, yeah, there actually is someone who is already using this email address.

And that would cause our sign up method right here to throw an error.

So, again, by changing the implementation of these kind of dependency methods, we can change what

happens inside of our test suite when we call sign up or sign in or anything else.

OK, so I want to repeat one more time that this really is the hardest thing to understand in all of

nest, the real hard part, because it's really like two or three different things going on here.

First, we've got dependency injection, which is already kind of hard to understand.

We've then got the idea that we're kind of going to override the actual dependency of user service with

this fake object.

And then on top of that, we have to understand, well, we have to kind of reimplement these methods

in a very simple and basic way that are going to cause our original methods of sign up and sign in on

the service to do what we want them to do inside of our kind of testing environment.

So once again, if this stuff is feeling pretty crazy or pretty hard, don't sweat it.

This really is tough stuff.

So at this point, let's take a pause right here.

We're going to come back to next video.

We're going to take a look at why we specifically only implemented, find and create, even though there

are many other methods to find on our user service.

So remember the user service itself as other methods like update and remove and stuff like that, we're

going to understand why we only implemented a subset.

We're then going to make a couple of changes to this little block right here just for kind of ease of

use and whatnot and just continue on from there.
```
