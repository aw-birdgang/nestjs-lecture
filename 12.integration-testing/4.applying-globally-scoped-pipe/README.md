## script
```bash
In this video, we're going to take a look at the second way of solving this issue, of having some

set up only run during the bootstrap function, which does not get executed when artists are ran.

So the second solution we're going to take a look at is at first glance going to seem very similar to

what I showed you in the last video.

But as soon as we start actually writing some code, you're going to see that this is, in fact, just

a little bit different.

OK.

So we are still going to apply our validation pipe and this cookie session middleware as a global pipe

and a global middleware.

That means that these two things are going to run on every single request that comes into our application.

The only difference here is that we're going to set these things up globally from within the app module

itself.

So when the app module is executed, when we create an application out of it, the app module is going

to automatically set up this validation pipe and the cookie session middleware.

So this is a very small and very subtle difference between doing it inside us and inside the app module

directly, effectively.

It's kind of like almost the same thing.

Either way, these things are going to run on every single incoming request.

The only difference is where we are setting them up.

So, again, this might seem very similar to what I showed you in the last video, but there are some

very, very subtle differences around it.

First, the big, subtle, first big subtle difference is that setting these things up from directly

inside the app module is going to be a little bit more confusing, a little bit more complicated.

The other big difference is that by using this approach, we are now going to be able to use dependency

injection on the setup of that pipe and the setup of the cookie session middleware itself.

Now, that is a very small secondary concern.

So don't worry about that fact just yet.

I only mention it as one reason that you might set up these things from inside the module itself as

opposed to from directly inside the main Dotts file.

Now, he might be a little bit curious, why did we not just do this from the get go?

Why did we not just wire up the pipe and the middle where from inside that module?

Well, the reason for that is that if you look at the official documentation, they're going to make

it seem like wiring up stuff from inside the main parts file is just totally fine and there's no issues

with it whatsoever.

And as we've seen, that's not really true.

If you set up stuff from inside the main parts file, these things are not going to be set up for you

when you are running end to end tests.

So that's why I want to show you setting everything up inside the main file, because that's what the

documentation says.

And I want you to see why we would move it over to inside the module again is to make sure that we can

run our tests successfully.

OK, so we're going to set up our validation pipe from inside that module that's going to be pretty

easy and straightforward, will then come back in the next video and start to set up the cookie session

globally, which is going to be a little bit more involved.

So let's get to it.

First off, the validation pipe.

All right, so to get started, I'm going to go back over to my editor and I'm going to find my app

module right here.

Inside the module at the very top and then going to import.

That exact same validation type thing right there, and as you'll recall, we're going to get the validation

pipe from NASA's common, they'll put in validation.

I'm also going to import.

Something called App Pipe from NASA's core noticed right there, it's not common, it's core instead.

And then going to go down to my list of providers.

So here's our list of providers right here and inside of this array, I'm going to add in a brand new

object.

We're going to say provide app type.

And then use.

Value.

And we're going to put in our entire custom pipe right there, we're not really custom, but we're going

to put our pipe in right there.

So to just save a little bit of time, I'll go back over to my main doctor's file.

I'm going to cut that pipe right there.

And then paste it in for use value like so.

And that's it, that's how we set up a global pipe from inside of our app module.

Now you'll notice right away that this kind of looks very similar to some code that we wrote out inside

of a test a little bit ago.

So what does this really do?

Lewis says whenever we create an instance of our app module, automatically make use of this thing or

take this value right here and apply it to every incoming request that flows into our application.

That's kind of what's going on behind the scenes.

We're seeing specifically every single request that comes into the application, run it through this

class right here in this instance of a class right here.

That's how we set up a global pipe.

Once again, kind of seems vaguely similar to what we did back inside the main ports file, because

either way, we're just creating an instance of validation pipe and, well, telling the application

to use it in some fashion.

So this is kind of straightforward, like I said, setting up the middleware is going to be a little

bit more involved.

So let's take a pause right here and then see how we turn our cookie session middleware into a global

middleware in the next video as well.
```
