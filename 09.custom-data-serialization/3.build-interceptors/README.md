## script
```bash
Let's start to put together our own custom interceptor now in this video, we're not going to worry

about any stuff around serialisation or dittos or anything like that.

I want to first begin by just understanding how to create an interceptor and how we actually use them

inside of our project.

So just interceptors right now, then we'll come back to this idea of serializing users and all that

kind of good stuff.

All right, so a couple of diagrams, so the first thing to understand is that interceptors can be used

to intercept outgoing responses and or incoming requests.

So we can really think of interceptors as being very similar to Middlebury's in many other frameworks

or languages.

If you're at all familiar with Middlebury's, we can have as many interceptors, intercept incoming

requests or ALGUIEN responses as we want.

Whenever we create an interceptor, we can apply that interceptor either to individual route handlers.

So, like so or we can apply the interceptor to the entire controller, so if we apply to the controller,

that will make sure that we run this interceptor on every handler inside the controller or alternatively,

we can apply an interceptor globally.

So, in other words, for every request or response that comes into or goes out of our project, we

can run our interceptor.

In our case, for the one you and I are putting together, we probably are going to want to wire up

this interceptor, either at the controller level or on the root handler level.

Now, for the interceptor itself to create one, we are going to create a class, we can call it anything

we want, but we're going to follow our general naming conventions, which is going to be pretty much

some name.

And then the word interceptor just indicate that this is a class that serves as an interceptor.

Then inside of our class, the only requirement is that you and I define a method called specifically

intercept.

This method is going to be called automatically any time our interceptor needs to run.

So handle some incoming request or outgoing response.

The two arguments to this method are going to be something that we refer to as context and something

called next context is essentially a wrapper around some information on the incoming request.

And then next is kind of and I use the term kind of here very lightly because it's a pretty fancy object.

But you can really think of this next thing as being somewhat like our actual root handler inside of

our controller.

It is not exactly the root handler.

It's actually a are observable if you're familiar with RSJ US at all.

But for the purposes of discussion, you can really kind of imagine this next argument is kind of like

our root handler itself.

All right, so now that we got this high level overview, let's go back over to our ED.

We're going to first do a little bit of code cleanup.

In particular, we're going to remove that includes decorator or excludes decorator from our entity,

will then start putting together our custom interceptor.

So back inside my editor, I'm going to first find my user entity.

Remember, inside of here, we had imported that exclude decorator.

I don't really want this anymore, so I'm going to take that out and I'll remove the use of the exclude

decorator on the password property.

So that is not strictly required as a part of the interceptor creation process.

I just want to make sure that we cleaned up that little bit of code.

Next up inside of my SIRC directory, I'm going to create a new folder called Interceptors.

I'm creating this folder inside the SIRC directory because I want to eventually use this interceptor

that you and I are going to create across all of our different modules, not just the user module.

Then inside that folder, I'll create a new file called Serialize.

Interceptor sports, so that's going to be the name of our custom interceptor.

We're going to call it the Serialize Interceptor because it's going to take a object and then serialize

it eventually into Jason.

Then inside, if you're at the very top, we're going to add in immediately a whole bunch of imports,

so a little bit of typing, we're going to first get use interceptors.

We will get nest.

Interceptor.

Execution context, call handler and all those are going to come from Nest, James Coman.

After that, we're going to get observable from our SJS.

Something called map from our SJS operators.

And then finally, we're going to get lane to class from class Tranz former like so.

Then after that, we'll go ahead and define our interceptor, so I'm going to create a class and let's

export it right away called Civilise Interceptor.

Now, the next step, next thing we're going to do is optional.

This is a little feature of TypeScript.

We're going to use just to make putting our interceptor together a little bit easier.

So after a class name, we're going to add in implements.

Nest interceptor, it's a quick reminder on what the implements key does for us implements is not the

same as extends.

We make use of extends.

Whenever we are subclassing an existing class, we make use of implements any time that we want to create

a new class that satisfies all the requirements of either an abstract class or an interface, in this

case, an interface.

So by adding on implements, Nest Interceptor TypeScript is going to check all the methods that exist

in this interface is then going to make sure that our class properly implements all those different

methods.

So in this case, if we hover over our class name right now, we are told that in order to create an

interceptor, we must define a method called intercept.

So let's do that right away.

So define a method called intercept.

And as soon as we do that, well, then get another air and we're going to be told that if we want you

to find this method, then it must receive two different arguments.

We must receive that context thing and that next thing.

So let's make sure we receive those two arguments.

I'm going to put in context.

Of execution context.

And then handler of type call handler.

Even then, we're still getting an error here because in order to properly implement this intercept

method, we must also make sure that we return something of type either observable or a promise.

The last thing we're going to do here just to help guide us along.

Right at the very end of the argument list, I'm going to put in a return type annotation, I'm going

to put in a colon observable any like so.

So remember, by putting in a type invitation that's not strictly required, it just helps TypeScript

understand what we are trying to really do inside of this method, and TypeScript is going to make sure

that we eventually return something of type observable.

So, again, just a little bit of help coming from typescript here to make sure we put together everything

as expected.

OK, so that's a lot of kind of crazy code, a lot of stuff going on, and then inside this intercept

method, it's going to get a little bit crazier.

So I want to kind of cut to the chase here.

I want to tell you exactly what you need to know about this intercept method.

So here's what you really, truly need to know.

If you ever want to run some code before a request goes into a request handler, you're going to place

that code right here.

It's going to put in a comment that says run something before a request is handled.

By the request handler.

Right now, I'll do just a simple log of how about that context thing?

And just to be really clear on that, let's also put in a string right before it that says I'm running

before the handler.

Then if we ever want to run some code after we have ran our request handler, so if we want to somehow

mess around with the outgoing response, that's going to involve a little bit more code down here.

So are going to put in a rather long statement.

I'm going to say return next dot handle, dot pipe.

I'm going to open up the parentheses for pipe right there.

And we're going to add in map, we're going to call it with a function.

We're going to receive an argument that referred to as simply data with a type of any.

Then inside of here, I'm going to put in another comment that says Run something.

Before the.

Response is sent.

Out.

This data argument right here is the data that we're going to send back in the outgoing response.

So I'm going to do a console log and say I'm running before response is sent out and I'll log whatever

that data argument is.

I've also got a very small typo right here I put in next right there, that's supposed to be a reference

to our handler.

So tooltip on my side, I think I was saying next at the time I type that that should be handler like

so.

OK, so that's kind of the cut to the chase, that's what you really need to know.

Everything around this and inside this file is kind of just extra fluff at the end the day.

What's really important for you to understand is that if you want to do something before a request is

handled, put that code right here.

If you want to do something before the response is sent out with the outgoing data, put your code right

there and that's pretty much it.

Now, let's save this file and we're going to go back over to our controller, we're going to make use

of our interceptor.

We're going to test it out very quickly and just make sure we get these console logs when we expect

to see them, and then we'll start to worry about doing all that serialization, logic and whatnot.

So back inside of our controller.

I'm going to find my users controller.

Inside of that controller at the very top, I will import the Serialize interceptor.

From up on directory interceptors, Serialize Interceptor.

Then to make use of that interceptor, we're going to go down to where we were making use of the use

interceptors decorator just a moment ago, I'm going to take out the existing class serializer interceptor

and I'm going to replace it with the one that we just imported.

So say Serialize Interceptor.

And that's it.

So let's now save this, we're then going to make a request to our request, Tandler right here, and

we're going to just make sure that we see those two council logs also to make sure that we can actually

ensure that we are getting the first council log before the handler and the second one after the handler.

I'm going to also add in a very quick log into the handler itself.

So I'll put in a log of handler is running.

So now we should see it.

Three council logs come out and they should be in the order of number one.

Number two.

And number three, OK, so now time to test this I to open up my API client.

We'll make a request to our request handler, because that's where we just wired up the interceptor

two, I'm going to send that off.

Looks like something good happened.

We didn't actually get a response.

So maybe stuff is not working quite as expected, but it looks like our code generally worked.

So I'm not going to go back over to my terminal and just make sure I see those three consulates.

And sure enough, back over at my terminal, I see one console log up here with I'm running before the

handler and we've got this execution context thing that has a lot of information about the incoming

requests.

Then down here, I see that the handlers running and then I see I'm running before the response is sent

out and there is the response that we're trying to send back to whoever made the request to us.

OK, so that's it, that's the basics of an interceptor.

So now if we ever want to do once again just about anything with the incoming request or the outgoing

response, that's where we would place the code now that we've got the basics of interceptors put together.

Let's take a quick pause right here.

We're going to come back in the next video and start to actually do all this fancy serialisation logic

with all that stuff we spoke about in that diagram before I tore it apart.

Yeah, there we go, that's what we want, all this stuff, make sure we actually handle serialisation

of the user entity and so on.
```
