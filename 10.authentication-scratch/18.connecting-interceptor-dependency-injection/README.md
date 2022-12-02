## script
```bash
Let's take a look at how we're going to use our interceptor in decorator together.

Now, the key thing to keep in mind here is that whenever we want to use that decorator, we first have

to run the interceptor.

So the interceptor has to run first to make sure that we assign the current user to the request object

after the interceptor runs.

Then our decorator can run and return request current user.

OK, so to make use of this thing, I'm going to show you two different methodologies, the first way

is going to be a little bit tedious to reuse throughout our project.

The second way is going to be a lot easier to use, but a little bit more confusing on what's going

on behind the scenes.

So to make use of our interceptor, I'm going to first go back over to our users module inside the user's

module.

We need to wire up that interceptor to our list of providers.

Remember, this is an integral step using dependency injection to use dependency injection.

We first market class as injectable with that decorator and then add the class to the list of providers

inside of a module.

So inside this file at the top, I'm going to import current user interceptor.

From interceptors current user interceptor.

Well, then add in that class to the list of providers, here we go.

OK, so now to make use of that interceptor, we're going to go into our users controller.

At the very top, I'm going to find our import from NJ is common an ad in use.

Interceptors, remember, we made use of this decorator a little bit ago when we were first putting

together all that session serialized stuff so we can apply this decorator to an entire controller and

that make sure that we're going to run a given interceptor before any handler inside of that controller.

Besides just that decorator, we're also going to imply or import our interceptor, so current user

interceptor.

From interceptors.

Current user.

Interceptor.

Then right above our controller, we will add in use interceptors and then current user intercept or.

And that's it.

So now whenever a request comes in to anything inside of our users controller, we're going to run that

interceptor, pull out the user ID from the session object, find the user from our database and assign

it to the request object.

The request is then going to go on to one of our request handlers inside the controller, and if we

are making use of the current user decorator, that decorator should pull off the current user and give

us give it to us as an argument in this case user.

I'm going to update the annotation of user right here because, well, it really is a user entity.

It's definitely not a string.

So let's mark this as being of type user.

So that's supposed to be a user entity to get a reference or to make use of that type, we do have to

import the user entity class into this file as well.

So let's take care of that very quickly at the top.

I will import.

User.

From entities or do we create an entities directory?

No, we did not.

So it's just user dot entity.

There we go.

OK, so that should be it, I think we're not ready for a test at long last, as usual, I'm going to

open up my API client.

I'm going to make sure that I am signed in, OK, definitely signed in.

And then going to attempt to get the currently signed user, so send the request.

And sure enough, I get my currently signed end user, that looks pretty good if I now sign out and

then try to get the currently signed end user.

Once again, I get back an empty response.

OK, let's say this looks pretty good, definitely works the way we expect.

However, there is a downside to it, and that downside is that now any time we want to use that decorator,

we have to import the current user interceptor.

We have to import use interceptors.

And we have to apply this entire thing onto our controller.

Now, if we eventually have, say, 10 or 15 controllers inside of application, that's a lot of duplicated

code all over the place because we're going have to add in the import and that call right there in every

one of our different controllers, wherever we want to figure out who the current user is, definitely

not ideal.

So let's take a pause right here when we come back.

Next video.

I'm going to show you the second way of wiring up this interceptor that I mentioned.

So it's going to make this entire process just a little bit more straightforward.

So let's pause right here and take a look at a better way of using Interceptor in just a moment.
```
