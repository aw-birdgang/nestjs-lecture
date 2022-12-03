## script
```bash
Time to move on to our very last handler.

So in this video, we're going to focus on putting together the Gits reports about Handler.

And remember in this request, handler, we're going to receive some information.

So the query string of the request, someone could include the make model year and so on.

The goal of this handler is to generate an estimate for the value of a car.

So the car that is specified inside that query string.

So we're going to need to validate all the information.

So that query string, we're going to do this validation by creating a D2 in the exact same way that

we have previously validated the bodies of incoming post or patch requests.

So let's first get started by creating a team that's going to validate the query string on this incoming

request.

Let's go back inside my editor, I'm going to find the reports directory inside there, I'll find dittos

and I'm going to make a new file called Gett Estimate DTO Ts.

Now, one thing you might notice is that for gett estimate, all these different properties right here

are just about identical in nature to our request where we expect to receive a new report.

So we still want to have make model year mileage and so on.

So we've already created a DTA that is going to be very similar to the one that we need.

So just to save a little bit of time, let's copy the report over into this gets estimated Itoh.

So I'm going to find the Create report, DTL.

I'm going to copy everything inside there and paste it inside this new Ghiz estimate file.

Well, then go through this thing and remove one or two properties that we don't need.

So at the very top, I'm going to find the class with a name of Crete report.

We should probably change that, so I'll change it to get an estimate.

Etto.

So then whenever we are trying to get an estimate for a vehicle, we definitely need to know the make

the model the year mileage, longitude and latitude, but we definitely do not need to know the price

because that's what we are trying to return.

We are trying to estimate the value of a car.

So we are not going to receive a price property.

It's going to delete that entire thing.

OK, so that looks good, so we can go back over to our controller and define our root handler.

We're going to make sure that whenever we receive a request, we validate all the information inside

the query string using the gett estimate DTO.

So I'm going to close this, I'm going to go back over to my reports controller.

At the very top, I'm going to find my import from Netjes Common and I'm going to get the get decorator

and the query decorator as well.

So the get as we are very well established, we know we make use of that to declare a get request route

handler.

And then the query decorator is used to extract information out of a query string of a request.

I'm also going to make sure that I import.

The get estimate.

Ditto as well.

OK, so now down inside of our controller, I'm going to define a new route handler and we'll call this,

how about creates estimates?

Maybe a better name would be get estimates.

A market with the get decorator and then going to say that I want to get some information out of the

query string of the incoming request.

I'm going to call this query.

And I'm going to apply our type invitation, which is also going to be used as this set of validation,

rules of gett estimate DTL.

OK, I would like to test out our code as it stands right now.

I want to try to make a request that has a query string, and I want to make sure that we get some actual

validation done against that DTO.

We're going to very quickly see that we run into a very small issue that we're going to need to fix.

So I'm going to save this file and then going to open up my API client.

At the very bottom, I'm going to add in a new section.

And I'll say get an estimate for an existing.

Vehicle, so this will be a get request.

The localhost three thousand reports and I'm going to add on a query string with a question mark and

we'll add on all the different properties we need, such as make model year mileage and so on.

Each of these different properties are going to be a set of key value pairs.

We're going to separate each of them with an ampersand.

So let me just give you an example.

I'm going to put in a make of Toyota.

And so that's the ampersand right there.

Don't miss the end.

A model of Khairullah.

I'll then repeat the same pattern to add in the longitude and latitude, so I'll use a longitude of

zero.

A latitude of zero.

A mileage of about twenty thousand.

And a year of nineteen eighty.

So there's my entire query string, and as far as I can tell, all the values I have provided definitely

look valid.

They definitely satisfy all the different validation rules we put together inside the.

But as I mentioned, as soon as we send off this request, we are going to run it into a very small

error.

So I'm going to save this.

I'm going to send off the request and let's just see what happens.

Sure enough, we get back a response with a couple of errors inside of it.

So these errors are saying that I need to provide a year and it needs to be a no.

Sure seems to me like I provided a valid you're right here, but definitely there's some disagreement

by our validator, same thing for mileage as well.

So I definitely provided mileage, but unfortunately, I'm getting some validation errors around that

mileage property.

So what's going on here?

Well, just as a quick reminder, whenever you send a query string inside of request, all the information

side of here is treated as a string and it is received by our server as a string, even though this

really looks like a no to you.

And I know that doesn't necessarily know that it really is a number.

So it's not going to automatically pass it for you.

It's not going to turn it from a string into a number.

So you and I, at some point in time during our request lifecycle, we need to take a look at this query

string.

We need to look up very certain properties inside the query string and pass whatever values are given

from a string into a number.

You will notice that this validation requirement or this parsing requirement doesn't really seem to

apply to longitude and latitude.

The reason for that is that the validation decorator's we are using.

Back inside of our show, we made use of a is longitude and is latitude decorator, so these two decorators

are going to correctly handle any time that they receive a string.

Nonetheless, you will notice that inside of our DTA, we annotated longitude as being a number and

latitude as being a number, even though we are definitely receiving them through the query string as

a string.

So even though we are not getting any errors around longitude and latitude right now, we still might

want to pass these values as well because well, the rest of our application because of TypeScript and

because we have told TypeScript that these are going to be numbers, everything else inside of our app

is going to assume that these are numbers, even though when our application is actually running and

we receive a request, we are going to receive them as strings.

So long story short here, we need to do a little bit of a parsing step.

We need to make sure that a bunch of different properties inside of here are turned from a string as

they are inside the query string into a number.

So let's get on that in just a moment.
```
