## script
```bash
Enough talking, let's get back to writing some code, so in this video, we're going to start to focus

on the entirety of this first right here.

So we are going to add in a new method to our controller called Great User.

We're going to make sure that it handles a post request or sign up that has a body with an email and

password will then start to work on our service, which will take in that email and password handed

from the controller and then use the repository to create and save a new user inside of our database.

So we're going to do the entire flow of this first route.

This will take one or two videos.

So without further ado, let's get to it.

First off, back inside my editor.

I'm going to find my users controller file inside this controller.

You'll notice that when we first generated this thing, we automatically got that controller decorator

added in.

And it has a string of users.

Remember what that string does for us.

It's used as a prefix for all the different root handlers we define inside this class.

So if we define any routes inside of here, the first part of the route will be users and then whatever

else for the rest of that particular route handler.

And we said back inside of our routing diagram over here that all of our different routes would be prefixed

with off.

So let's update that string right there to say off instead.

So now all of our different route handlers inside of here will have a prefix of off instead.

Much better.

That's exactly what we want.

Next up, we're going to import from the common package right here, the post request decorator to remember

we use this decorator to create a handler that will deal with incoming post requests.

Well, then, to find a new method inside the controller with a post decorator, we're going to say

any time someone makes a request to sign up, we want to call the method create user.

Whenever we call create user and we have this incoming post request, we definitely want to receive

and validate the incoming body of the request.

Remember that to set up validation inside the nest application, we're going to create a oh and to create

a DTA.

We're going to use that class validator package.

We also have to do some high level setup inside of our app, specifically inside of our main file.

Until now that we want it to do some validation on all incoming requests.

So a couple of different tasks here.

We have to create the data.

We have to set up some validation in the DTA.

We have to add in that detail to this post request handler right here.

And we also have to update our main points file and tell what we want to use that global validation

pipe.

Let's first start with the highest level task.

Let's do the configuration around test itself.

So inside of our main doctor's file.

At the very top, we will import.

Validation pipe.

From.

Nest eggs common.

Then right after we create our app, we'll do an app, use global pipes and provide new validation pipe.

We're going to once again put in a configuration object, just like we did last time with a white list

of true and I recall I think I said I was going to explain what that property was all about, but I

think I didn't.

So make sure that we clarify what this thing is for in just a little bit.

OK, that looks good.

So now next up, we can create a new profile.

I remember dittos are used to validate incoming request bodies inside my user's directory.

I'll create a new folder called Deo's.

And then inside that directory will make a new file called Create Dash User Detoxes.

So inside this file, we're going to write out a very simple class that lists all the different properties

that an income you request to create a user should have.

We're also going to define some validation rules around it.

Let's define the class first.

So we'll say expert class creates user.

Etto.

And we expect an incoming request that is intended to create a user to have an email that is probably

supposed to be an email or a string and a password, that should probably be a string as well.

So we'll say that the user will have an email that has a string and a password that is a string.

Recall that just adding these properties in doesn't really do a whole lot for us.

We also have to make use of that class validator package and to find some validation rules around these

different properties, let's first install that class validator package into our project and then we

can use those different validators to validate email and password.

So back at our terminal, I'm going to stop my running server.

And then do an install or class validator and the companion package of class transformer.

Well, then do another NPM run, start calling Dev to start her server back up.

Yeah.

Now, back over at our ED at the very top, we will imports from class validator, and we probably want

one validator that is going to make sure that our email actually looks like an email and we probably

want another that makes sure that our password actually looks like a password or is actually a string

or something like that.

So we're going to get the is email decorator and is string.

Remember that we looked at some documentation around class validator.

So these are two decorator's that are implemented by that package.

We just apply them to the properties that we want to validate.

So then apply the first decorator.

And the second one.

OK, so we got our deal, we have set up our pipe back inside the main points file.

It's now the last thing you have to do is go back over to our controller.

We're going to import the freezer.

We're going to tell Nest that we expect this root handler to receive a body and we want it to be validated

against the user.

So at the very top of this file, we will first import.

The create user.

All right, there we go.

From Dittos Riet user DTL.

And then to specifically tell Nest that we wanted to extract the body of the incoming request, we will

also import the body decorator from Nessus Common.

Remember, this is a very common theme.

We make use of decorators to tell Nest that we want to extract information from the incoming request.

So then we'll make use of the body decorator.

We're going to call this argument simply, buddy, and we're going to say that it should be of type

create user DTL.

Now, in theory, whenever we make this post request, NASA is going to validate the body, the incoming

request against that DTO and make sure that we have an email that looks like an email and a password

that is a string.

Finally, let's just do it right now.

A simple concept of body.

OK, so this all looks pretty good.

Now, this is a very long video, so let's take a quick pause right here.

We'll come back in just a moment and we'll make use of our API client to test out this root handler

and make sure that the validation and everything is working as expected.
```
