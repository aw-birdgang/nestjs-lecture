## script
```bash
All right, my friends, in this video, we're going to make a new DTO that is going to format the outgoing

response that has the reports and the user inside of it.

So inside of my reports DTAs directory, I'm going to make a new file called Reports Dot.

Ditto dots.

Then inside of here, we're going to create a very similar to the user we had created previously, so

we are going to export a class called Report DTL.

I'm going to import two directives are to see me decorator's.

All the exposed and we're going to make use of a new one called Transform as well from Class Transformer.

I'm then going to also add in an important statement for our user entity as well.

So inside of our outgoing response, whenever we create a brand new report, we're going to include

all the different properties that a report normally has.

So let's just write them all out immediately so we'll have an I.D. That's going to be a number.

Rice year.

Longitude.

Lattitude.

A make.

A model.

And a milage.

We're then going to entertain each of these with the exposed decorator to make sure that they explicitly

get shared in the outgoing response so loud and expose right here.

And I was going to copy paste that down or all these different properties.

Now, let's save the file just right here, we're going to try to test out a response or making a brand

new report and just make sure that the outgoing response has only these properties listed, will then

worry about making sure that we get that user ID inside there as well.

So to make use of this report, DTO, we'll go back over to our reports comptroller.

At the very top, I'm going to import that Dito.

And the serialized decorator that we put together as well.

I'm then going to apply that decorator to our create report route handler.

And say that I want to serialize the outgoing response following the rules we set up inside of the report,

Dito.

And that should be it.

So I'm going to see this opened up my API client again and try to create another report.

OK, that looks good.

We are no longer sharing that entire user property.

Now we're going to make sure that we do just pluck off the user ID property by itself and include it

on the outgoing response.

So to do so, I'm going to go back over to my report and at the very bottom, I'm going to add in another

property that we're going to send in the outgoing response.

We're going to call this user ID.

It's going to be a number and I will immediately market with the Expos directive.

So let me help you understand what's going on here.

Remember, the entire purpose of the report is to take a report entity instance and convert it into

an object that has all these different properties.

During that conversion, we can choose to obviously exclude certain properties and we just do that by

not marking those properties of the exposed directive.

But we can also add in brand new properties as well to generate a new property that is going to pull

some information from the original report entity.

We're going to use the transform decorator.

The transformed decorator is going to be called with a function, we're going to d structure off the

argument list.

It's going to put in curly braces.

We're going to pull out something called OBJ.

OBJ is a reference to the original report entity.

So we're going to pull in that original report entity entity.

We're going to take a look at its user property and from the user, we're going to pull out the ID.

So this entire line right here says take the original report entity that we're currently trying to format

to using the ITOH.

Look at its user property and look at that users ID, so take that value and assign it to this brand

new property that you and I are adding in called user ID that's are going to get the users ID inside

of your.

OK, so let's save this, I'm going to go make my request again and now inside of our response, sure

enough, I do have my user I.D. right there.

Perfect.

So now we are creating reports we are associating a user with the report and in the ongoing response

we are including just the bare minimum amount of information around the report itself.

So it's ID price, blah, blah, blah, all that stuff.

And then for the association, just the idea of that association.

So we are not embedding a ton of additional information inside of here that is not necessarily required

that say this looks pretty good.

OK, so let's take a pause right here now that we have wired up this association and we'll continue

in just a moment.
```
