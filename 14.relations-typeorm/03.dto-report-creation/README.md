## script
```bash
When we were working on our users feature just a little bit ago, we implemented everything around the

service and then everything around the controller.

This time around, we're going to take a slightly different approach.

Rather than implementing the entire controller and the entire service, we're going to implement one

line of functionality at a time.

So, for example, we're going to first worry about just having the entire ability to create a brand

new report.

So we're going to put together a root handler on our controller and then implement some supporting method

inside the service.

So we're going to implement everything around creating a report and then move on to our next route.

So that means let's first open up our reports controller.

We're going to add in a root handler that's going to receive a request that intends to create a brand

new report.

We're then going to implement the appropriate method on the report service.

OK, so back inside my editor, I'm going to find the reports controller.

At the very top, we're going to immediately add in a couple of imports from our imports.

So we're going to get our post request decorator, and I think that's probably all we need for right

now, I'm then going to define a new route.

With post, and we'll call this, how about to create reports?

Now, remember, the controller decorator already has a string right there of reports, so if we wanted

to make a request to this handler, we would make a post request to slash reports.

So then inside of here, we need to extract some information from the body of the request and we want

to validate that body against some detail.

Make sure that it has all the appropriate different values.

So let's immediately add in our body decorator.

I'm going to say that I want to extract some information out of the body.

The request.

I'm going to call that simply body and I'm going to give this a name or a type, I should say, so it

type imitation of create report.

So we need to create this DTL, something that describes exactly what a report body or the body of a

crate report request actually looks like.

So, as you can guess, it's going to have a lot of very familiar properties.

It's going to have probably the make model year mileage, longitude, latitude and price.

We're going to require all those different properties to be present to the body.

And we'll also make sure that they are safe strings and numbers and so on.

So let's open up our folder explorer over here, I'm going to create a new directory instead of reports

called DTAs, and then inside there I'm going to make a new file called Create Report DTO.

That's.

If you need a reminder on the goal of A, you can always go back over to our users directory, find

the details folder inside there and then look up, maybe create user.

So again, remember it.

All we do is define a class with a couple of different validation rules on it.

OK, so inside of Crate Report, I'm going to export a class called Create Report DTL and we're going

to list out all the different properties that we want this incoming requests to have.

So it's going to be pretty much what we just added into our report entity a moment ago.

We should have a make.

That's a string.

Muddle, that's a string a year, that's a no mileage, that's no LNG, that's no and a lattitude,

that's no.

And then finally, we also want to have a price that this vehicle has sold for.

And that's going to be a number as well.

Now we're going to add in a couple of different decorator's to validate each of these different properties.

The validation that we're going to do here is going to be a little bit more complicated or we're going

to use several different decorator's compared to what we've done on previous days.

So let's take a quick pause right here, because adding in all these different validators is going to

take just a little bit of time.

And I don't want this video to run terribly, terribly long.
```
