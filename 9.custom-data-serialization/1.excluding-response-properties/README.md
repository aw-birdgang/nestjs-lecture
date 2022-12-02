## script
```bash
I'm so sorry, I am such a liar.

I've said twice now that we're going to move on to our next feature, but there is still a little bit

more.

I want to go over around all this user's related stuff.

These are some topics I was going to cover later on, set the course.

But I realized that it just made a lot more sense to cover them right now, because these are some concepts

and ideas that are going to use for all the different services, controllers and so on that we put together.

So let me show you what we're going to fix up in this video.

I've got my API client open.

I can make a get request to fetch a very particular user, so I'll send off the request.

And our response right here includes the password of our user.

Definitely not a property that we want to include inside the response.

Remember, we are going to eventually encrypt our passwords before we stored them inside the database.

We just haven't done that yet.

Nonetheless, even after encrypting these passwords, we still don't want to send them back inside response.

So we need to make sure that whenever we send a user back, we edit out that password property.

We just want to totally remove it.

So to do so, we are going to follow first.

A recommendation on how to do this based on some recommendations from the Northwest documentation,

so we're going to essentially do exactly what the next documentation, unseemliness documentation says

you should do.

We're going to take a look at some downsides with this recommended approach.

And we'll take a look at a slightly more customized, slightly more complicated solution that's, I

think, definitely a lot better and much, much more flexible.

And I think you'll eventually want to use this custom solution on your own projects as well.

So first, we're going to focus on what Nest says you should do to remove that password property.

OK, so first, a quick review on what's going on behind the scenes, inside of a request handlers right

now.

So I just sent in a request that was a get to off to that's going to flow into our users controller

users, controller will turn around to the service service, will make use the repository and eventually

get and return a user entity instance.

We then return that back to the controller and that instance gets returned from the controller itself

and the nest takes that entity instance and turns it into JSON for us.

When it turns that entity incents into JSON, it will include the ID property, the password and the

email as well.

So that's what's going on right now.

So to fix everything up using the nest recommended solution, here's what we're going to do.

First, inside of our user entity instance, we're going to make use of a library that's going to attach

a very small set of rules on how to take an instance of a user entity and turn it into a plain object

and then into JSON.

So inside the entity instance, just a very small set of rules.

Then at our controller, specifically the user root handler, we're going to set up a decorator that

is called a class serializer interceptor, an interceptor interceptor as a tool inside of nest that

allows us to intercept incoming requests or outgoing responses and mess around with them in some way.

So in this case, we are going to intercept the outgoing response.

We're going to take the user entity inside there, and we're going to turn that user entity into a plain

object based upon the rules that we set up inside the entity itself.

So that's it.

Now, if this seems complicated, at the end of the day, the amount of code we have to write for this

is actually very, very small.

So let's just go ahead and update our project and implement all this stuff right away.

So step number one, we're going to set up some rules inside of our user entity instant's.

Back over inside my editor, I'm going to find my user entity file.

Then at the very top, we are going to import exclude from class transformer.

Remember that we installed this package a little bit ago.

It is the companion package to the class validator which we've been making use of quite a bit.

So exclude is a decorator and this is a decorator that's going to create this little little set of rules

that describe how do you take an instance of a user and turn it into a plain object.

We're going to apply that exclude decorator to the password property, so as you guessed, that means

whenever you take an instance of a user and turn them into a plain object and then into JSON, just

exclude the password.

That's pretty much it.

OK, so I'm going to say this, we're then going to go back over to our controller, we're going to

import a couple of things inside there, and then we're going to wire up an interceptor to our users

controller, find user, root handler.

So back inside the controller at the very top, we're going to find our import from that's just common.

We've already imported a lot of stuff from it, but we still have a couple more things to import.

So in this case, we want to get a decorator called use interceptors.

And then something else called a class serializer interceptor.

So these are two tools that we're going to use to intercept the outgoing response and mess around with

it in some way.

Well, then go on down to our find user root handler and then right above it.

We're going to wire up use interceptors.

And then inside their class serializer interceptor like so.

And that should be it.

So let's now save this, we're going to save both files, I'm going to go back over to my API client,

I'm going to make that same request and now our password is no longer included.

All right, so that definitely looks good, definitely solved the issue, but as we're going to very

quickly realize, even though it's solved the issue, there are some, well, kind of small downsides

to this approach.

So Quick falls right here.

And we'll take a look at why this recommended solution is not really the best thing in the world.
```
