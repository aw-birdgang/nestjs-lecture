## script
```bash
Let's add in a couple of different validators around all these different properties, so at the very

top, I'm going to import a couple of different decorators from the Class Validator Library.

So, as I mentioned, we're going to add in many more validators than our last ETAs had.

So in this case, for make and model, we're just going to check and make sure that those things are

strings.

So I'm going to get the is string decorator for a year.

I'm going to make sure that that is a number.

And we also probably want to make sure that the user gave us a reasonable value for a year.

So a user should probably not give us a year of something like five thousand because chances are they

don't have a vehicle that was made in the year five thousand.

We also should probably not get a year earlier than maybe 1930 or something like that, because if you

have a car from one hundred, well, I kind of doubt that.

So make sure that the user gives us some appropriate value for year.

We're going to get a validating decorator of Min and Max.

These are going to allow us to make sure that the value provided for year is within some minimum range

and maximum range.

Then for milage, we're going to do the exact same thing, we're going make sure the mileage is a number,

we are going to make sure that it's probably greater than zero and maybe less than something like a

million, because chances are you don't have a vehicle that has more than a million kilometers or a

million miles on it.

Then for longitude and latitude, we're going to make sure that those things are actually valid, longitude

and latitude values.

For that, there are is actually a built in decorator or two built in decorators called is longitude

and is latitude.

So those will make sure that the provided longitude and latitude are within an appropriate range.

And then finally, for the price, well, once again, we probably just want to make sure that it has

it is at least zero dollars or something like that, and it most probably nothing more than a million

dollars, because chances are people are not going to using our platform for vehicles that cost more

than a million dollars.

All right, so I think that's all the different validating decorator's we need.

So let's now apply them to all of our different properties.

So first off, make and model, we are just going to make sure that these are strings.

Four year, I'm going to make sure this is a number and I want to have a minimum year of how about nineteen

thirty?

So no vehicles older than 19, 30.

And I'm going to put in a year here, a maximum year, something like that, or we could just put in

2050 or something like that.

Obviously, no one right now is going to have a vehicle much newer than that or anywhere near that new.

But we'll just use some future proofing.

For milage.

I want to have a number.

Must be at least zero and at most will say one million.

So people might have a vehicle with more than a million miles or kilometers on it, so if you want to,

you can increase that value right there.

But for me, for the purposes of this application, one million miles or kilometers to find.

And for longitude and latitude, we'll use the is longitude and is latitude decorator's.

Then finally, for price, we'll make sure it's a no.

At least zero, and chances are you are not selling your vehicle on our platform for anything more than

maybe a million dollars.

And that should be it.

So remember how this is going to work any time someone makes a request to us, the validation pipe that

we had set up globally as we were working on our tests is going to apply the CTO to the body of the

incoming request and validate all these different properties.

Now, we can import this back over into our reports controller and it's can be used as a type invitation

right there.

So at the top, I'm going to import creates report Dito.

Very good.

All right, so now next up inside of our reports controller, we're going to wire in our reports service,

we're going to assume that our report service is eventually going to have a method that we can use to

add in or insert a new report into our reports repository.

So, of course, we have not yet worked on the report service, but we will very shortly.

So we're just going to assume that it's got some appropriate method on it.

To get access to that report service, we're going to add it into our controller using dependency injection

to remember how we do that, we're going to first at the very top, import your reports service.

From reports that service.

We will then define our constructor.

And we're going to add in private.

Reports service is of type, reports service.

Well, then go and double check and make sure that we had correctly wired up the report service to our

dependency injection system, so that means that on the service itself, we need to use that injectable

decorator.

So on the service.

Yep, looks like we use that decorator and we need to make sure that we also added the service to our

list of providers inside of our reports module.

So inside the reports module.

Yep.

Looks like we already added that in right there.

OK, that's very good.

So now finally inside of our reports controller.

Now that we've got access to an instance of the service we're going to call some kind of creates or

add or something like that method on the service, and we're going to pass in this body and assume that

it's going to create and save the report for us.

So I'm going to return this DOT's reports service.

We're going to assume that we're going to we have a method called something like create and we're going

to pass in that body.

The last thing we might want to do is make sure that only users who are authenticated are able to access

this route.

You might recall that we had previously put together something called a guard when we were dealing with

authentication.

So inside of our SIRC directory, we've got the guards folder.

Inside there is the off guard.

So we put this thing together specifically to make sure that only users who are authenticated are able

to access a certain route.

So we're going to use this off guard to only allow authenticated users to create a report to wire this

thing up at the very top.

I'm going to import.

The U.S.

Guard.

Use guards excuse me, decorator from that's just common, I'm then going to import the off guard itself.

Well, then apply the use guard's decorator to our request handler.

And we want to use the guard off guard.

So, again, that's just going to ensure that a user is actually signed in before they can create a

report.

All right, well, that's just about it for this first round handler, there is eventually going to

be some additional amount of code we put inside of here.

But right now, this is good enough.

So let's take a quick pause right here.

We're going to come back in just a moment and assemble this method on the reports service itself.
```
