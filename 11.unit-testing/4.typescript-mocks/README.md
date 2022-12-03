## script
```bash
I want to give you a couple more notes on this subject.

Some things are going to tell you in this video are a repeat of what we discussed in the last video.

But I want to repeat a couple of really important ideas around this object, because it is, again,

just really challenging stuff.

So first thing I want to remind you on is why did we only create the find and create methods on this

object?

The real user service has several other functions tied to it.

So the reason that we are only defining finding it here is that those are the only methods that are

actually made use of the authentication service.

So the service inside of the sign up method calls, creates and find and the sign in method only calls

find.

That means that we only have to create those two functions on our fake service.

We could define all the other functions that exist on the real user service, but they're never going

to be used.

They're never going to be called.

Next, I want to mention.

What is going on with the promised resolve calls?

Well, remember, find in create our asynchronous in nature, it takes some amount of time to read or

write data into the SQLite database.

So we have to return a promise from find and create promise to resolve is a little helper function that

creates a promise and then immediately resolves it with a given value.

So if we now did something like a weight fake users service find, we would get back.

An empty array.

So that's all promised our resolve is doing is essentially making sure we get the same exact API that

exists on the real user service.

Finally, one other thing I want to mention here, and this one is a little bit of a gotcha.

I'm going to show you how to fix this up, at least get a better implementation in here.

One thing that you might notice is that we are trying to pass off the fake user service as the user

service, like the real one.

The real user service has a couple of different functions and properties assigned to it.

It has find find, one creates update.

It also has a repo property as well.

So we are providing an object and trying to pass it off as a users service.

Right now, TypeScript is not helping us and making sure that we are providing the correct type signature

on fake user service in any way.

In other words, when you provide this object right here and you say instead or whenever someone asks

for this, give them this instead, you can put in any value that you want to write here for use value.

So, for example, I put in a number one, two, three, so now whenever we create an instance of the

authentication service, it's going to be given the number one, two, three in place of an instance

of the user service.

Our application would definitely not work as expected because naturally the number one, two, three

doesn't have a find method or a method and all those other things.

So, again, when we use this object right here, TypeScript is not helping us out in any way, shape

or form.

But of course, we might want to help TypeScript or have TypeScript give us an help and make sure that

we are putting together our fake user service correctly.

It's going to undo that change right there really quickly.

So what I mean by that is you and I are trying to define, find and create right here.

Those two methods are going to be called by our authentication service when our test run.

So we need to make sure that our fake implementation of Finder here returns whatever value or whatever

type of value it is actually supposed to return.

In this case.

We know that find is supposed to return an array of users, which is why I'm returning an empty array

right here.

But again, I could just arbitrarily return, say, a number or something like that, and that would

definitely make all my code break horribly.

So ideally, we would have TypeScript jump in and try to help make sure that we are defining the find

and create methods correctly.

To do so, I'm going to put in a type invitation to fake user service.

So put in a colon and then users service like so.

I'm also going to wrap that with partial.

So by adding this in, TypeScript understands that we are trying to create a partial version of the

user service.

The key word of partial right there or that type helper is going to make sure that our object, if it

defines any of the properties of the user Civis, then it defines them correctly.

So by using partial, we're not required to define every method that user service has.

TypeScript is just going to check the ones that we define.

So now if we tried to say define the find method, but return an invalid value from it, let's say resolved

with the number, then we're going to get an error in.

TypeScript is going to tell us, hey, your find method, which you said was supposed to be identical

in nature to the user service find method, yours is returning a promise that resolves with the number,

but it's supposed to be resolving with an array of users.

So by adding in this type annotation, TypeScript is just going to give us a little bit of help and

make sure we are implementing the fake version correctly.

We can see that right away, we are also implementing it incorrectly now in this case, this is a much

harder one to fix.

So our method is supposed to resolve or return with a user entity instance.

And we kind of are right now.

We've got a object with an ID and email and a password.

But if we mouseover create, we are told that in order to implement a user, we also have to implement

log inserts, log updates and log remove.

You might recall if you open up your user entity file, here's mine right here.

We had to find those a couple of different hook functions just to provide some login statements.

So I don't really want to have to define all these different functions just for the purposes of my test,

so to fix this up, I'm going to find this object right here, which I want to be treated like a user

entity.

I was going to say as a user and then I'm going to import the user entity at the top.

So now we're just telling TypeScript, look, just treat this like it was a user entity.

So now our function is properly implementing the correct function that exists on the user's service.

So, again, the step right here is just on to make sure that all these fake methods we are putting

together have the correct type signature.

OK, so that's pretty much enough, I think, on this basic testing set up right now, I think we've

gone over some of these more kind of core concepts enough.

And to actually understand any more around it, we need to actually write some tests so you can see

a lot of different variations of creating these kind of fake services and how they work.

So let's continue on with some more actual testing in the next video.
```
