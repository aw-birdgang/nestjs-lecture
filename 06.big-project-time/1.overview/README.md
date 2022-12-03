## script
```bash
I think we're at a really good stopping point on this messages application, so in this video, we're

going to start to discuss the next app we're going to put together.

The next stop is going to be kind of similar in nature to this message is one where we are going to

put together a relatively small API and continue to explore some of the features around Nest.

So let's begin by discussing what this next application is going to be all about.

OK, so we're going to make a used car pricing API.

I don't know if you've ever tried to sell sell a car before, but if you've ever tried to sell a car,

it's kind of hard to figure out what you should sell your car for.

In other words, how much money?

So we're going to make an API that will allow a user to get an estimate on what they should probably

sell their car for inside of application.

A user is going to first sign up with email and password.

Once the user is logged into our application, they can then use our app to get an estimate on how much

their car is probably worth.

And we're going to create that estimate based upon the make the model the year and the mileage of their

vehicle.

After a user gets an estimate, hopefully they will go off and sell their car and once they have sold

their car, we're going to allow users to come back to our application and enter in what they sold their

car for the actual dollar amount.

We're then going to use this to further enhance our ability to estimate what cars are worth in the future.

Finally, to prevent abuse, we're also going to have administrator users inside of our application,

these administrators are going to review all the different reported sales.

So essentially all these reports from the step right here before actually adding them into our data

sets.

This is to make sure that users don't add in some carcel amount where they say that they sold a car

for like five million dollars or something like that, or zero dollars, for that matter.

So whenever a user reports a vehicle being sold, we're going to require that administrator reviews

that report and approves it before we add that data into our data dataset.

OK, so that's pretty much it feature wise or I should say, kind of like the flow of this entire application

is going to be relatively small, but you're going to very quickly start to see that there are a lot

of kind of side features we have to add in to put together an app like this.

So even though it might seem like it's small, there still is a pretty good amount of code we have to

write out.

Well, now that we've got a rough idea on what we're building, let's take a pause right here and then

start to investigate some kind of high level architecture for our app in the next video.
```
