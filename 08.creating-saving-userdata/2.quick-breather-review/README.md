## script
```bash
I don't know about you, but it sure seems like we had to write out a tremendous amount of code inside

of many different files, just put together some very basic functionality, and that's where we make

a post request and then save some data into a database.

So in this video, I want to very quickly get our bearings and just review all the different parts of

our application.

We're then going to focus on our users service and really understand what we did inside that create

method.

OK.

So here's what's going on inside of rap.

We've already gone over this flow more than once, specifically, we saw it back on our messages application.

But just one more time, I want to go over all these different parts because there's a lot of different

things going on here.

And it might be really confusing what is services and how it's different from the entity or repository

and so on.

So let's just trace out this entire flow one more time, very quickly.

So everything begins with the incoming request that has a body with hopefully an email and a password.

We want to validate that data.

So we set up a validation pipe inside the main notes file.

That validation pipe is going to validate the body of the income, your quest using validating information

inside of our user.

So the pipe is going to make sure that the body conforms with the validation we set up inside the.

If the body looks valid, then the body and the entire request will be sent on to our users controller

as a reminder, controllers are all about defining routes and picking interesting pieces of information

from incoming requests.

The controller itself doesn't implement any kind of business.

Logic instead is just going to take this interesting information and pass it along to a method that

we define it in some kind of service.

Services are where we are going to do all the real business logic around our application.

Once we get some information about the email and password inside of our service, we then take the email

and password, turn it into an instance of a user entity, and then make use of the users repository

to actually save this new user into our database.

Remember that the repository is created for us automatically by type Aughrim, and we can really view

this repository as being our interface to the SQLite database.

OK, so now we've got that quick review and I want to focus on our users service and understand what

we did inside the create method.

In particular, I want to really focus on why we are calling first create and then save.

So these are two different methods on the repository and they have very similar names.

Why are we using one and then the other?

Well, once again, let's take a look at a diagram.

OK.

So here's our application on the left hand side and then on the right hand side is the SQLite database.

So inside of our app, this diagram is really focused on what is going on inside of our service right

here.

So we are receiving as arguments an email and a password.

We then pass those arguments into the create function that is tied to the repository.

The create function does not persist or save any information inside of your database.

Instead, it takes in some information, creates a new instance of a user entity, and then assigns

that data, assigns the email password you supplied to create to that entity.

So if we feed in an email of at Baucom and a password of a to the create function, we're going to get

back a user entity instance with the assigned email and password.

We then passed the entity after the save method, the save method is what actually takes a entity and

saves it into our database.

So that's the big difference between create and save.

Create is used to create an instance of an entity.

Save is used for actual persistance.

Now, one interesting little bit of trivia here, the save method, we can call it with any kind of

object that has the properties that a user should have.

In other words, rather than creating an instance of the user entity first, we could just as well have

passed through email and password like so.

So we could have just taken that email right there in the past, right there created an object with

email and password properties and hand it off to save and everything would have worked as expected.

So the question becomes, why do we bother first creating an instance of the user entity?

The answer is very simple.

Inside of a user entity file.

As I as we've discussed around entities in the past, the entity file is going to define all the different

properties that a user entity has.

And we're usually not going to put in a lot of business logic inside of here, if any at all.

However, there are some scenarios in which we might want to put in some validation logic inside of

here.

So, for example, we might add in an import for that class validator package and then put a validator

on the email property and say, hey, let's make sure this thing is an email so we might tie our validation

logic directly to an entity as opposed to the incoming DTO.

If we did that, then we would want to make sure that before we saved our user off into our database,

so before we called safe, we would make sure we would want to make sure that we actually ran that validation.

So if we wanted to run that validation, we would first have to create an instance of our user.

And then right here we could do our actual validating step.

You might be kind of curious, why would we do validation that is tied to the entity as opposed to inside

of our DTO?

Well, there are a couple of scenarios where we would want to do that.

We're going to take a look at some of them later on inside this application right now.

Just understand that in general, we do want to first create an instance of our entity and then save

it off, as opposed to just passing off our data to be saved directly to the save method.

OK.

May undo that change.

There we go.

So now we've kind of got our bearings here and now that we've got a better idea of what's going on inside

of our method, let's take a quick pause.

We're going to come back in just a moment and start to implement some of these other methods.

And trust me, they're going to come together a lot more easily now that we've done the first one.
```
