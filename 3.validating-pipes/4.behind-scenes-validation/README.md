## script
```bash
Let's take a look at a couple of diagrams and start to understand what's going on behind the scenes

with steps two, three and four.

So first off, data transfer objects or dittos dittos are not exclusive to NASA.

So there are many other languages and frameworks out there that make use of dittos or data transfer

objects quite a bit.

The goal of a DTA is to carry information or carry data between two places, frequently in the form

of network requests.

Data transfer objects usually do not have any kind of functionality tied to them.

They are simple classes.

The list out a couple of different properties.

So you can really think of a data transfer object as being a very clear description of what some form

of data looks like as it is being sent along inside of a request.

Next up.

Three and four.

So first off, three, when we started to add some validation rules to our DTO, so this is dring thing

right here, we had very quickly installed the class validator package and another package called a

class transformer.

So I'm going to show you some information around those two packages very quickly.

First, we're going to take a look at some documentation around the class transformer package.

You can find a link to the GitHub page for a class transformer right there.

I'm going to pull that up inside my browser very quickly.

Last transformer is a simple package that takes a plain object and converts it into an instance of a

class.

So let's take a look at some code inside of here in the read me to help you understand what's going

on.

Now, if you want to pause a video right here and take a look at the first section, the read me that

says, what is class transformer?

That would be very helpful.

I recommend you do that.

Otherwise, we're going to take a look at a code snippet.

So inside this code snippet right here, you can see it.

They've got some plain JSON data.

These are plain objects inside of an array.

There are no methods, no functionality tied with these objects.

The goal of this class transformer package is to take those objects and turn them into instances of

a class or example.

Each of these objects right here might be turned into an instance of class user.

And once we have instances of class user, we would then have some methods associated with each of those

things as well.

So Class Transformer is all about automating the process of turning these plain JSON objects or plain

JavaScript objects into a much more fully featured instance of a class.

Secondly, we've got class validator, so once again, I'm going to pull up the documentation for that

right here.

Class validator is a package by the same people, same project that handles validation of end of properties

on a class by using decorator's.

On this, read me, we're going to scroll down a little bit to the table of contents section and then

go down towards the bottom of the list of all these links.

And we want to find a link right here called Validation Decorator's.

So these are a variety of different decorator's that we can use to validate very particular properties

inside of a class, so we made use of one called is string here it is right here.

But there are other decorators that allow us to make sure that a property is a date, is a boolean,

is an integer array.

We can make sure that a number is positive, negative.

We can make sure that a date has a minimum date or a maximum date.

You can see that there are just a wide variety of different validation options inside this package.

So, again, this library is all about doing validation of properties on an instance of a class through

the use of decorator's.

All right, so now that we've got these two libraries in mind, let's now take a look at the entire

full flow, or at least most of it for right now.

So here's how everything works, together with the validation pipe.

So our server is receiving a request, that request is now going to flow automatically into the validation

pipe, the validation pipe goes through three different steps.

First, the validation pipe is going to use that class transformer package automatically to turn the

body of that incoming request into an instance of the class.

So this body right here is turned into an instance of create message DTO and that has a ton of validation

information attached to it through the use of these decorator's.

Now that we've got an instance of the class, the validation pipe is then going to make use of class

validator to actually validate that instance.

So that step is where the validation pipe is going to take a look at these decorator's.

It's going to use these decorator's to validate the different properties we have on the instance of

our create message, DTL.

Once that validation is executed, the validation pipe is going to see if any validation errors occurred,

if there were any validation errors.

It's going to immediately send back response to whoever made this request.

Otherwise, the request will be passed on to our request handler to find inside of our controller.

So that's what's going on behind the scenes with the validation pipe internally validation pipe makes

use of class transformer and class validator to do all this validation stuff for you automatically.

In turn, Class Transformer is responsible for taking this plane.

Jason, body of our request.

So this plane, JSON object right here and turning it into an instance of our create message, DTL,

that has all that validation information attached.

And once again, Class Validator is responsible for actually taking that instance, validating it,

using information from those decorator's and providing the validation result back to validation pipe.

Now, a lot of stuff you don't really need to know, the reason I'm telling you all the stuff inside

this course is that you can start to understand some of the stuff that kind of seems like magic that's

going on behind the scenes with Nest.

There's a lot of functionality in Nest that really is very dissimilar from many other typescript or

JavaScript frameworks.

A lot of stuff really is kind of magic.

There's no kind of very obvious connection between exactly what is defined inside this message right

here and the actual validation process.

OK, so now there's one thing I want to go over.

We're going to take a quick pause and then discuss it.

But one thing we didn't really discuss is how.

We added in the type of message right here and how the validation pipe understood at that time, because

remember, during the validation process, class transformer is going to turn the body into an instance

of specifically the DTO class.

So in this case, an instance of create message DTO.

And the question is, how did the validation pipe know to turn the body into an instance of great message?

Because we have only put in a great message right here.

This is the only place we have made use of that class.

We've applied it as a type annotation on a function.

And remember, when we write TypeScript, our application first gets turned into JavaScript and then

it gets executed.

And when we do that process of converting from typescript over to JavaScript, in theory, what we are

always told is that all type information is lost at that point in time.

So in theory, this little type piece of information right here doesn't really exist when our application

is executed.

So, again, how does the validation pipe know that it's supposed to turn the incoming body into specifically

a message instance?

That's the big question.

Let's take one more pause right here and start to investigate that in just a moment.
```
