## script
```bash
At the end of the last video, I did not clean up this obtuse global pipe statement inside of our main

doctor's file, so I'm going to clean that up right away.

OK, so now our next step is to take our cookie session middleware, and we want to apply this as a

global middleware as well.

We want to make sure that it gets applied to every single request that comes into our application.

So to do so, we're going to once again go back over to our app module.

And now inside of our module class, we're going to add in a function to it called Configure.

The arguments to this are going to be something called consumer.

And its type will be middleware consumer.

I'm going to then immediately import that type at the very top from NASA's common sense, I'll add in

that import right there.

OK, so this configure function is going to be called automatically whenever our application starts

listing for incoming traffic.

So instead of here, we can set up some middleware that will run on every single incoming request.

To do so, we're going to call or reference consumer.

We're going to call appli and we're going to pass in the middleware that we want to run right here.

So in our case, we want to make sure we run that cookie session middleware.

So just like we did a moment ago, I can come back over here to my main file.

I'm going to cut cookie session from right there.

And then paste it into that apply, Col.

I then need to make sure I add in our required statement for cookie session at the very top, so at

the very top I will add in.

Wiki's session.

Is require cookie session.

Then back inside my main doctor's file, I'm going to clean up the obtuse call and our two unused require

and import statements.

All right, finally back inside of the app module.

Down at the very bottom.

Right after calling applied right here, we're then going to chain on one more method call.

So we're going to chain on our roots and we're going to put in a star like.

So that means that we want to make use of this middleware on every single incoming request that flows

into our entire application.

That means it's essentially a global middleware.

OK, so we've now got a globally scoped middleware that's going to be applied whenever we start up our

application and we've got a globally scoped pipe as well.

You'll notice now the downside to this approach is that even though we are wiring stuff up and kind

of the official next way is that it's really a lot more challenging to take a glance and one location

and understand what pipes, what middleware is.

We are applying to every single request that flows into our app.

Previously, we could see all that stuff very easily from inside of our main file.

We could take a look at the bootstrap function and just immediately recognize that we are going to apply

the validation pipe and cookie session to every incoming request.

But now that code is tucked away inside the app module in a pretty confusing fashion.

It's a lot more challenging to now take a look at this file and understand every question is going to

have the validation applied to it or receiving the validation pipe applied to it and the cookie session

middleware as well.

I know you can see these two things on these few lines right here, but there's just a lot more noise

around it.

So it's just a little bit harder to actually see it.

OK, so that should be it, we should now still be applying our validation pipe and the cookie session

with the where to request.

So it's essentially equivalent to what we had before when we were doing all this set up inside the main

doctor's file.

The only big difference is that now these things are going to be wired up whenever we create our application

using the app module.

So let's now go back over to our test file.

Here's my spek file, the end to end test, I'm going to go down to the bottom, I'm going to change

out the email once again because remember, we always need a unique email address right now.

We're going to fix that up in just a moment.

So I'm going to make a change that email.

I'll then go back over to my terminal and run my tests again.

And after a small pause.

Yep, there we go, they're both now passing fantastic.

OK, so this looks good.

There are some obvious trade offs here.

Our code is more complicated to understand, but we don't have to deal with that separate set up app

function.

So it's really up to you which solution you want to take now that we've got this working.

We do have another small issue, although we can run our tests one time and have them pass.

If I try to run this test suite again the second time I run it, I am going to see an error.

And the reason for that is that I'm trying to sign up a user with an email that is already in use.

So that's the next thing we're going to fix up in just a moment.
```
