## script
```bash
We've now wired up the validation pipe and now we need to give the validation pipe a very special set

of validation rules and make sure that it uses these validation rules any time a request comes into

our create message.

Root handler right here.

So to do so, we're going to go through a little series of steps.

So this is everything we have to do to set up automatic validation for a particular request handler.

We already did.

Step number one in the last video we told, needs to use global validation by wiring up the validation

pipe itself.

So, again, only if do step number one just one single time, we're then going to repeat steps two

through four every single time that we want to use that validation pipe on a very particular route handler.

So you are going to be doing steps two or three and four quite a bit on your own whenever you start

to do validation on the bodies of incoming requests.

So for two, three and four, these steps are going to be just a little bit confusing, the actual code

we have to write is going to be very small and very compact.

But how this code is used by Northwest is a little bit of magic.

So for right now, we're just going to write out all the code that is required, will then come back,

take a look at a couple of diagrams and understand what these steps are really doing behind the scenes.

OK, so let's get to it.

Step number two, we're going to create a brand new file and create a new class inside there.

This class is going to describe all the different properties that we expect this incoming request to

have.

And we're also going to apply some validation rules to that class as well.

The class that we're going to create is referred to as a data transfer object, that's what we refer

to this class as, rather than saying data transfer object, because it's a really long term, we very

frequently abbreviate this simply as DTA.

So whenever you see the letters DTO that stands for data transfer object, we will go into more detail

on dittos very shortly.

But right now, let's create this new class and add some validation rules to it.

So back over inside my editor, inside my messages directory, I'm going to create a new folder called

Deo's.

Then inside there, I'm going to create a new file called Create Dash Message dot d teoh o dots.

Then inside this file, we are going to create our brand new class that describes all the different

properties that we expect our post request handler to receive.

So I'm going to export a class called Create Message Dito.

We expect the body of request coming in to our request handler to have a content property that is going

to be a string.

So that's pretty much it for step two, we have created the class and we lizelle all the different properties

we expect to receive.

So now step number three, we're going to use a library called Class Validator to add a couple of validation

rules to the class itself.

It's a four step number three at the very top of this file I'm going to import.

Is string.

From a library called Class Dasch Validator.

We do get an air around class validator right away, so this is a additional library we have to install

into our project to install it.

I'm going to go back over to my terminal.

I'm going to stop my running server.

And do a quick NPM install class validator, and we're also going to get one other library very quickly

called Class Transformer as well.

Once the installation is complete, will then start up our server once again with another NPM run start

Colen Deve.

All right, then back over inside of our Ed, this is string thing, right here is another one of these

decorator's.

We're going to apply this decorator to the string property inside of our message class.

So right above I'm going to put in is string like so.

So that is our validator, this is going to make sure that whenever we create an instance of great message

DTO, we can make sure that the content property actually is a string as opposed to, say, a no undefined

null or anything like that.

OK, so that's step number three, all done, I know that step is a little bit strange.

Don't worry, we're going to come back to each of these steps in great detail in just a moment.

Now, the very last step.

We're going to apply that class to our request handler.

So just one more strange step.

We're going to go back over to our controller at the very top of the file.

I'm going to import the DTO that we just created, so create a message DTO from Dittos creates Dasch

message DTL.

Now that we've got that class, we're going to go down to our post request handler where we want to

do some validation.

And here's the crazy part.

If you've got some strong knowledge of TypeScript, this is going to seem very strange and it's going

to seem like it should not work as well as it's going to work.

But once again, don't worry, we're going to go over all the stuff in great detail.

I'm going to find the type of any that we've applied to body right there.

And I'm going to replace that type with create message Dito.

OK, that's it, we have now set up validation, so we went through steps two, three and four.

Let's now go back over to our API client.

We're going to try to make a post request once again with a couple of different varieties of data for

the content property.

We're going to make a request.

Where the content property is a string, when it's not a string, when it's not present and so on,

and we're going to see what happens inside of our application now.

So, again, I'm at my API client, remember, if you're not using the rest client inside of US code,

you should be using Posman or something equivalent.

We're going to make a post request, this time with a content property that is a string.

So this is, in theory, a valid property right here.

We should be able to make this request and not get back some kind of error or anything like that.

So if I send the request, sure enough, I do appear to get back some kind of successful status code.

So now let's try to change the content property, I'm going to change that string to a number instead.

Now, if I send off the request, I very quickly get back a big air.

In this case, the air says that content must be a string, so it's very clear now that validation is

taking place inside of application.

That's awesome.

We've got some automatic validation and all we had to do was create that class and use a decorator on

it.

If we tried to provide a content of say no, we're going to get the same error.

If we don't provide content at all, we're still going to get air, if we misspell content, we're still

going to air.

It's only when we provide a content property that is definitely a string that the request works as expected.

All right, so without a doubt, validation is now working correctly instead of application, but as

I mentioned, these steps are a little bit strange.

What does this thing all about?

What are those decorators coming from that class validation package all about?

And when we applied that class to the request handler, we wired it up only as a typewrite there.

That's pretty strange as well.

Once again, if you're very familiar with TypeScript, you might kind of think that's a little bit strange,

because we've always been told, right, that when we make use of typescript, no type information is

actually preserved in our JavaScript code.

So let's take a pause right here and start to do a deeper dive on this entire validation process and

understand what is going on.
```
