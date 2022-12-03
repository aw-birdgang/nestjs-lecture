## script
```bash
Onto our update, Ruth Handler.

So this will be a patch request coming in, it's going to have a body with the email and password that

we want to update a user with.

As I mentioned, this handler's give me just a little bit more complicated than the others for one simple

reason.

It's going to have a body to remember.

The other requests we have that has a body inside of it are post requests to create a user.

We have created a create user to validate that incoming body.

So we probably need a very similar step for the patch handler or the update handler as well.

There's just one little difficulty around it.

OK, so here is our request.

We're creating a user.

We've got an incoming request with an email and password.

We're going to validate it against the user and it goes into the user handler for updates.

The body of these requests is going to be very different in nature.

In some cases, a user might be trying to update just their email or just their password or both the

email and the password.

So you and I are going to have to create a brand new DETRO, and this is going to have some more complicated

validation logic inside of it that is going to allow an email or a password or both an email and a password.

So we're going to have to create this new update user Dito.

And then wired up to our update user handler, so let's get to it.

All right, back over inside my editor inside my directory.

I'm going to create a new file called update user Dito Dotts.

I'm then going to import.

Is email is string and then one other, and this is the key decorator we really need in this case is

optional.

All that's going to come from class validator.

The decorator is optional, does kind of what you would expect.

We can apply it to any property inside of a class and if it has any other decorators, such as is email

or is string, then that property will be marked as optional.

It does not have to be provided.

So inside of here will then define and export our class of update user Dito.

We're going to say that if you want to update a user, you have to provide or can provide, that's the

key.

It's going to be optional.

An email that's a string and a password.

That's a string.

The email lavae is email decorator, and then once again, the key here is, is optional.

So if you want to provide an email property, that's great, it will be validated with the IS email

decorator.

Otherwise, if you do not provide an email, no problem, you're still going to pass validation.

So we can do the same thing with password as well is string.

And is optional.

And that should be at.

Now we'll go back over to our users controller.

Is the controller at the very top, I'm going to import our other DTO, so update user DITO.

I'm then going to use our patch decorator to define a patch request handler down at the very bottom

of the controller will define patch.

We'll have a wild, wild card telling us what ID the user wants to update, we'll call this method update

user update user not update update.

We're then going to get two pieces of information from the incoming requests, so the first will be

the ID parameter and the second will be the body of the request.

So we'll do an rame ID or ID and that will be a string and then we'll get the entire body.

We'll call that body and that will be.

Validated against that update user DTL.

All right, so then inside this method, we'll return the results of this DOT user's service update,

we want to update the user with an ID of ID and once again, we have to pass that into a number.

And then as a second argument will provide the body.

All right, I think that's it, I think we're ready for a test, so once again, let's open up our request

client right here.

Here's the API client.

And I'm going to update a user, I'm going to send off a patch request.

The local owes 3000.

I'm going to try to update a user with ID, too, because remember, I deleted the one with an idea

of one and I'm going to try to change their email address.

Do you how about a at a dotcom?

Well, mistake here, I need to also apply that header of content.

AIP application, Jason.

OK, let's turn this off and see how we're doing.

So send it off and sure enough, I get back the updated user.

They've got that updated email and of course, if I want to, I can do a further update.

So I'll try changing the email address to BBB.

And if I send that off, yep, looks like that works and I should also be able to do an independent

update of just the password by itself as well.

So I tried to update just the password to a.

Yep, there's my updated password.

OK, so that is our update handler, and as a matter of fact, that's the last handler we have to put

together.

So we've now got all of our request handlers, not only for creating yuzu, but also finding, deleting,

updating and so on.

So this is now a pretty good example of a typical request or a typical controller in a typical service

inside of a nest application.

So this all looks pretty good.

Now, moving forward from here, we've got two options.

We can either start to work on actually handling authentication inside of rap because remember, that

was the entire original idea behind this user's controller.

We wanted to handle user sign up and sign in.

We can also go and take a look at the other feature we're going have inside our application, which

is the report stuff.

So let's take a pause right here and then decide what direction we want to go in in just a moment.
```
