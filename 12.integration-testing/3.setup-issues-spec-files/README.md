## script
```bash
We just ran our tests, and it looks like they are already failing, so if we scroll up inside of our

terminal, we'll see.

The reason that the test failed was that we expected to get back a status of two to one, but instead

we got back a status of five hundred.

Now, that is just the reason that the test failed.

We were expecting to open.

We got back five hundred.

But that doesn't really describe why we got to five hundred to understand why we got back a status code

of 500.

We need to scroll up a little bit further and we're going to see the actual error that occurred when

we made the request.

So here's the actual error.

It says cannot set property user ID of undefined.

Now we're going to take a look at exactly what that means in just a moment.

But first, I won't give you kind of a quick reminder on how our application usually runs during development,

how our application runs during testing.

And we're going to very quickly notice that.

Well, there's a little piece missing when we are running our app in this testing environment that is

causing this error to be thrown.

So, in other words, a couple of quick diagrams and a quick reminder inside of our test file.

OK, so first diagram right here, this is what happens whenever we run our application directly from

the command line.

In other words, when we are doing active development on it, remember, we've got our users module,

the reports module, both those get imported into the app module.

We then import the app module into the main text file and we have a bootstrap function inside there.

The bootstrap function is going to create a new nest application out of the app module and then we manually

wire up a cookie session and the validation pipe and then after that we start listening for traffic

on PT. 3000.

So in short, when we are doing active development on our application inside of our main file, we are

creating an instance of our application and then wiring up these two middleware or really one middleware

and the pipe.

Now, let's take a look at another diagram that's going to explain what is going on with our application

during testing.

So during testing, we completely skip over the main doctor's file, no code inside the main doctor's

file is executed in any way.

Instead, our end to end test is importing the app module directly and then creating an app out of the

app module.

We can see that very easily back inside of our before each statement.

So if you go back over to your code editor.

Here is the test file.

I'm going to go to the before each.

So right here is where we make use of the app module, we then create a nest application out of that

app module and then eventually tell that application to start up and start listening for traffic.

So during testing, we completely skip over the main file and the configuration inside there that sets

up cookie session and the validation pipe.

So at present during testing, we have no concept of sessions and we have no concept of validating incoming

requests through the validation pipe just because that stuff does not get set up.

That kind of explains the error message we are seeing back over at our terminal, it says cannot set

property user I.D. of undefined.

This air is being thrown whenever we try to set the user ID property on the user's session object because

the cookie session will where is not running the session object just plain does not exist.

And instead we get undefined.

So when we try to set a property on undefined, this is a very classic error message that we get back.

So that's what's going on behind the scenes, we are getting this air simply because we are not doing

set up of cookie session and validation pipe when we are running our end to end test.

So to fix this, we have two possible solutions.

The first solution is going to be very quick and easy.

The second solution is much more involved, but it's also the kind of more next appropriate way of solving

the stuff.

So let's first take a look at the quick and easy way of solving this.

Back inside my code editor.

I'm going to find my main doctor's file, so here it is right here inside this man doctor's file, we've

got that bootstrap function and here's we wire up the cookie session middleware and apply our global

validation pipe as well.

So for our first solution, we're going to take a look at that's going to be very simple, very straightforward,

but not really the next appropriate way of doing things.

We're just going to take all the setup around applying these middleware and whatnot and move it out

to a separate helper function that we can then apply equally well whenever our application is running

in a development environment or during the testing process.

Now, we are not going to use a solution.

So I'm going to show you how to implement this.

But I encourage you, you to not write out this code because I'm going to undo it very quickly.

So as a very quick example, let's run through this as fast as possible.

First, I'm going to create a new file inside of my SIRC directory called Set Up App Daugherty's.

And inside of here, I'm going to export a function called set up app.

As an argument to this function, I'm going to expect to receive my application so an instance of our

app module, more or less, and for right now I'm just going to annotate its type as any.

Then inside of here, I'm going to go back to my main thoughts file and I'm going to cut all that application

setup code so where we wire up the cookie session middleware in the global pipe stuff as well.

So I'm going to cut all that out.

I'm going to paste it into the setup app function.

I'll then go back over to main points and I'm going to cut and paste over the import statements for

cookie session and validation pipe as well.

So back inside a validation pipe, I'll get import No.

One.

And import number two.

So now we've got this function right here that we can use in any location inside of our project, we

can import that function back into the main file and apply all of our different middleware stuff in

exactly the same way.

That would be very straightforward.

We would go back over to main parties at the very top.

I would import set up app from set up app, and then after creating the application inside the bootstrap

function, we would call set up app with the app and that's it.

So now our application is working just as it was before in the development mode.

But now since we have this nice set up application function, we can also imported into our testing

file as well.

So I'm going to go back over to my test file here it is right here at the very top, I will import.

Set up app.

And now I can make use of this function after we create an instance of our next application right there,

so I'm going to pass in set up app.

We're set up in passing the application that was created.

It's now our application weather is is being created for a development environment or our test environment

is going to have all the appropriate middleware attached to it no matter what.

I'm going to save this file and I'm going to try to rerun my test before I do, I'm going to change

the email right here, because otherwise we're going to get an error from this email already being in

use.

It's going to put in just some different email.

I'll then run my tests again.

And sure enough, they're going to, as you'll see, very quickly passed just fine, yeah, there we

go.

So this definitely appears to work, but as I mentioned, it's not really the next appropriate way of

fixing everything up.

Now, why did I show you all this solution then?

Well, I just want you to know that we're going to go through the more appropriate solution.

It is going to be a lot more effort than what we just did.

And I just want you to know that you don't always have to go with the next appropriate solution if you

don't want to.

We could very easily say, you know what, this works for our purposes.

Let's call it there.

We're done, we're good.

And just move on to the next thing inside of a project.

The only reason, really, the only reason I'm going to show you this more complicated solution is that

this is, of course, about Nest.

And so I want you to understand the nest appropriate or kind of the official way of handling problems

like this.

That's the only reason.

If I was working on my own project, I would definitely go with this very simple set up app function.

OK, so I'm going to undo everything I just did in this video, so I'm going to delete the set up app

function.

I'm going to undo all the changes I just made inside of me noctis.

So a bunch of underuse here.

There we go and then back inside my spek file, I'm going to remove the import for set up at the top.

And remove the call to set up shop right there as well.

OK, so now I'm back to how I was before now, if I tried to run my tests, I would probably get the

exact same error.

So let's take a pause right here, we'll come back in just a moment and understand what the once again

kind of next official way to fix this is.
```
