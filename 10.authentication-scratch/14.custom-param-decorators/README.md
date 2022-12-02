## script
```bash
In this video, we're going to focus on making an interceptor in a decorator that will tell a handler

very easily who the currently Sinden user is.

So let me first begin by giving you an example of what we're going to try to achieve here.

Here's an example of how I want to use this interceptor and decorator that we are going to create.

I'm going to comment about who am I very quickly and show you this example.

So eventually I want to be able to write out something like that same route with the same method name.

But then inside the method, rather than getting access to the session and then making use of the user

service, I instead want to have our own custom parameter decorator called current user.

So we're going to make a custom decorator called Current User, and if we ever make use of that inside

the argument list to a method, it should give us the currently Sinden user as an argument.

So then inside of here, I could return the user, I could console them.

I can make a query to the database without user anything I want to do.

But the point is we're going to make a custom decorator and making a custom decorator by itself is its

own interesting task.

So the first thing we're going to do is make a very simple, straightforward custom decorator.

We're still going to call it current user, but right now is just going to return some plain static

data, like a number or a string or something like that will then come back once we've got the very

basics of a decorator put together and actually worry about finding a user.

OK, so I'm going to leave this code right here for just a little bit, because we are eventually going

to make use of that.

But right now.

I'm going to go back to my users directory inside there, I'm going to make a new folder called Decorator's.

And then inside of that directory, I'll make a new file called Current User Dot Decorator Dots.

Inside this new file at the very top, we're going to add in one important statement right now, we're

going to get to create Param Decorator.

And execution context and both these are going to come from the common library.

Then inside of here, I'm going to export const.

Current user.

And the value of this is going to be Perram decorator.

We're going to pass in a function to this thing.

The arguments to this function are going to be something called data, we're going to get that a type

of any and actually we'll call it context.

That's actually what we call it elsewhere inside of our project.

And its type is going to be execution context.

OK, so inside this function, we're going to write out some amount of logic to inspect the incoming

request, that's what this context argument essentially is.

It is kind of a wrapper around the incoming request.

The reason it's referred to as an execution context as opposed to just simply request, is that this

thing, this object right here can be used to kind of abstract a WebSocket incoming message, a G.P.S.

request and HTTP request, a lot of different incoming kinds of requests.

So rather than specifically calling this thing requests, which would kind of imply that we're making

use of HTTP, it is instead called execution context, and that allows us to write some code that might

work equally well with WebSocket, http graphical or any other kind of communication protocol.

But effectively, at the end, the day, it is the incoming request.

The data argument we're not going to worry about just too much just yet.

So then inside this function, we're going to do some work on the incoming request.

We're going to produce some amount of data or some information, and we're going to return it whatever

we return from.

This function right here is going to show up as our user argument wherever we use that decorator.

So let's go through a very fast and very simple example right now.

Inside this function, I'm going to return simply hi there, and that's it.

Let's go back over to our controller now and make use of that decorator.

So inside the controller at the very top, I'm going to import that decorator.

From decorator's current user decorator.

And then down at this temporary who am I route that I put together, we're not actually returning a

user anymore, so I'm going to update the type of that thing to be string.

And they will still just return user.

Now, remember, in our case, user is not actually user.

It is going to be the string.

Hi there.

Right now, let's just go ahead and save this, go back over to our API clients and we'll make a request

to the Who am I route?

So I'll make my request to who am I?

And sure enough, we get back.

Hi there.

So that's it, that's the basics of putting together our own custom param decorator.

We're going to call create Param decorator.

We pass in a function and then whatever we return from that function is going to show up as the argument

to our root handler.

Now, we've seen the basics of a decorator.

Well, unfortunately, from here, it's only going to get a little bit more confusing.

The reason is that you might have noticed I said back on this diagram, we need both a decorator and

an interceptor.

So unfortunately, we cannot really put together this entire decorator with just the decorator by itself.

We're going to have to create an interceptor as well.

We'll tell you why that is in just a moment.
```
