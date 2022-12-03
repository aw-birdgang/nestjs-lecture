## script
```bash
There's one last thing we have to do inside of our interceptor right now.

This thing is hard coded to always serialize outgoing information using the rules we had set up inside

the user.

This is not very appropriate, because if we ever are returning other kinds of resources inside of our

application from a request handler such as, say, photos or messages or blog posts or comments, we

would want to serialize those other resources using a different DTO.

So in other words, we need to be able to customize that argument right there.

So let me show you how we would do this.

First, I want to show you ideally what we would actually do or how we would customize it.

So ideally, inside of a controller such as our users controller, we would be able to import.

A detail that we want to use or formatting the outgoing response, so I'm going to import the user inside

of here from Dittos User.

And then on a per request handler basis, I would be able to tell this copy of Serialize Interceptor

that I wanted to use specifically this ditto for serialisation.

So in other words, I would ideally be able to do something like New Serializer Interceptor, and I

want this copy of the interceptor to use the user.

So that's ideal.

That's what I want to be able to do.

So to make this reality, all we have to do is define a constructor on our interceptor.

We're going to receive that DTO.

We're going to save it as a property to our class and we'll use that DTO any time that we need to run

our serialisation logic.

So let's go back over 20 interceptor.

Inside of here, I'm going to define a constructor.

I'm going to receive.

An argument I'm going to make as private.

We'll call it DTO, and right now it's type will be any.

Then, rather than using the hardcoded user right here, I'm going to call plane to class with a deal

that was passed in when we created an instance of the interceptor.

So now it's fully customized.

We should no longer have to import user at the top.

And that's pretty much it.

It's not going to save this file.

I'm going to save the controller and let's go and do a quick test back inside my API client.

I'm going to, again, try to make a request for user with a given ID and.

Yep, looks like everything works as expected.

Very good.

OK, so that is pretty much it for the interceptor itself, but now we got just one other problem inside

of our controller to set up all this interceptor stuff.

It requires a really long line of code, like that's a lot of stuff to have to worry about.

In addition, we also also have to add in three imports to the top.

This file, we have to import these interceptors thing.

We have to import our interceptor and the DTO itself.

So the last thing I want to do is try to refactor or create something new to allow us to set up this

interceptor without such a ridiculously long line of code.

So let's take care of that last step in just a moment.
```
