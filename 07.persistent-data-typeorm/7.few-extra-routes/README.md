## script
```bash
All right, let's get back to writing some code and actually putting together our application, so in

theory, at this point in time, we've got our repository set up.

We haven't really seen how to use them just yet, but in theory, they exist and in theory they are

working.

So we're going to start to put together our controllers and our services.

And these services are going to make use of the repositories that were created for us automatically.

And remember, for our users in particular, we had said that we were going to have two different routes.

You're going to have one route to sign up and one to sign in.

However, we're going to do a very quick little diversion here.

Rather than doing a sign up and signing route, we're going to instead put together a slightly different

set of routes around our user resource.

So here's what we're going to do in total.

So just as a very temporary thing for this application to help you better understand type of and how

it works, we're going to put together a couple of other routes around dealing with users.

So we're going to have a route dedicated to finding a user with a particular ID.

We're going to put together another for finding all the different users with a given email address for

updating user and deleting a user.

So these are routes that are not really required for the final version of our application.

Again, we're just going to put them together to help you better understand type Aughrim.

So for each of these different routes, we're going to put together a method on our controller that's

going to serve as a root handler.

So, for example, for this user creation root handler, we're going to have a method called create

user.

We're finding a very particular user, we're going have a method called find user and so on.

Then to service or help implement each of these different methods on the controller, we're going to

have some matching methods on our service.

So whenever a request comes in to post office, sign up, the goal of that request is to create a new

user.

So that's going to call a method on our controller called create user.

And the controller in turn is going to turn around to the service and create an the service in turn

is going to turn around to the users repository and use the repository to actually make a new user.

And once again, I just want to repeat, yes, it probably seems like we've got multiple layers here

of kind of duplicated code.

I totally understand that.

But this is the application where you're going to see how nice it is to kind of spread out all this

functionality over a couple of different classes.

This really is where it's going to start to become more clear why the service exists at all.

OK, so that's the idea we're going to put together these couple of extra root handlers just to better

understand type Aughrim and then we're going to eventually either commit these things out or delete

them or maybe just leave them in place.

The final version of our application, last thing I want to mention is that we are going to be storing

passwords here.

We are going to eventually encrypt these passwords when we put them into the database.

But we're not going to read about that just yet as we're putting together these kind of initial root

handlers.

So we will add in some really good security, but we won't worry about that more complicated stuff just

right now.

OK, so enough of all this setup.

I know in the last video I said we were just about to write some code.

I think we've had enough lecturing for right now.

So let's start to work on some of these different controller methods and service method methods, tongue

twister service methods in just a moment.
```
