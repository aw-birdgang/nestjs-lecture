## script
```bash
Now we've got our search criteria inside of our request handler, we need to actually take this criteria

and generate some kind of estimate for the value of a user's car and then eventually return it.

All the logic for this is going to be placed inside of our reports service.

So let's take a look at a diagram and just understand exactly how we're going to execute the logic that's

going to give us an estimate.

OK, so here's the general idea, the first thing I want you to understand here is that in generating

an estimate, we're going to use a methodology that is not super precise.

In other words, our estimates are not going to be the most accurate thing in the world.

The real goal here is, of course, not really to help you estimate the value of a car, but I want

to show you some innerworkings of type Overeem and how to make interesting queries with it.

So I'm much more interested in how we're going to actually execute this query than the validity of the

query itself in the real world.

OK, so at that moment, here's what we are going to do.

We are going to take the estimate criteria.

So that is essentially the information that we just pulled out of our query string.

We've got make model longitude latitude here in mileage.

Using that information, we're then going to do a search over all of our different reports we have inside

of our database, our search is going to go through the following steps.

We're going to find all the reports with the exact same make and model.

So we want to find all existing reports for, say, a Toyota Corolla.

We're then going to find all the reports that were made within plus or minus five degrees of the estimate,

longitude and latitude.

So in other words, if a user is looking to sell their car at these coordinates on the planet, we want

to find all reports that are within plus or minus five degrees of that point, which is roughly about

six hundred miles or so.

Personally, I think it's three hundred miles, yeah, I think it's close to three hundred miles of

that location.

We're then going to find all the reports that were made on vehicles within three years of manufacture,

some of the words we're going to consider if the value that is provided to us where we're trying to

generate the estimate for is nineteen eighty.

We're going to find all reports for Toyota Corollas that were created between 1977 and nineteen eighty

three.

Finally, we're then going to subtract the difference of each of the reports mileage against our estimate

mileage, and then we're going to order by that difference.

So we're going to find all the vehicles with the closest mileage possible.

We're going to order by that closest mileage.

And then eventually after this entire query, we're going to be hopefully left with a series of different

reports.

So these should be reports that are very similar nature to the car that the user is trying to sell.

We're going to take the top three closest reports and we're going to average their value.

So how much ever these cars sold for?

We're then going to take that average value and send it back to whoever made the request to us.

And that's how we're going to generate our estimate.

So, again, not super great way of estimating the value of a car, because we are really assuming that

we've got a tremendous amount of data already inside of our database.

We would need to have a tremendous number of cars in order to always be able to apply this search criteria

and get back at least three reports.

So perhaps not the most realistic thing in the world.

But again, the real goal here is to show you how to write an interesting query with all these different

filters and sorting logic on it.

OK, so with all this in mind, let's take a pause right here and come back to the next video.

We're going to get started on our reports service and we're going to add in a new method that is going

to generate this estimate.
```
