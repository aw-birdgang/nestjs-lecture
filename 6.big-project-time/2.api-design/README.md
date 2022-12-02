## script
```bash
Now that we've got an idea of what our application is going to do, let's go back over to our terminal

and generate a new nest project to back over at my terminal.

I'm going to stop my running server.

I'm going to go back to a workspace directory, so essentially anywhere on your computer and we're going

to generate another project with Nest New.

And then remember, it's the name of our project.

I'm going to call my project my CV, which is short for my car value.

If you want to name your project something else, totally fine.

Go for it.

All right, I'm going to start the installation.

We will be prompted on what package manager we want to use.

If you have both NPM and yarn installed, I'm going to use NPM once again.

All right, now that the installation is going, let's go back over to our sort of design document over

here.

I first want to begin with the design of our application by thinking about some of the different routes

that we probably need to implement.

So I went through each of these different line items and I thought about some of the different API routes

that you and I probably have to put together.

And here's what I came up with.

So I think in total, we need at least five route's or so to implement this application in this diagram.

I've got the method and route.

Some information that might be contained inside the body or query string of the request and then a description

of the purpose of this route.

So the first two are all related to sign up of users and sign it.

So we're going to allow a user to sign up or sign in using a post request that includes the email and

password of the user will then, of course, either create a new user and sign them in or we will sign

in the user as an existing user.

Once a user is authenticated, we're then going to allow them to do two very specific things, they

can either get a list of reports or essentially try to get an estimate for the value of their car.

If a user makes a request to reports, we're going to require them to also add in some information in

the query string of that request.

And that can specify the make and the model the year, the mileage and longitude and latitude for an

estimate of a vehicle.

So we're going to use all that information.

So the make model year mileage and the physical location in the world to generate an estimate for the

users value of their car.

Well, then send that back as a very simple response, so pretty much just a simple number that says

your car is worth X dollars.

We will also allow a user to submit a report, remember a submitted report as essentially users saying,

hey, I sold my vehicle for this amount of money and here's some information about the vehicle so user

can make a post request to reports.

Including the make mileage model year, longitude, latitude and the price of the vehicle that they

just sold and as I mentioned in the last video, this is going to add in to our data set.

It's going to give us some more information about what the current state of the market looks like.

And then finally, remember that whenever a user submits a report, we're not just going to immediately

add that into our data set because a user might give us some fake or phony data.

So we're going to make sure that before we ever add in a report to our data set immediately, we're

going to first require an administrator user to make a request, which is going to be attached to reports.

And we also want to know the idea of the report that they're going to approve and then the user is going

to where the admin is going to include whether or not that report is approved.

So approved of true means.

Yes, this looks like a valid report.

Let's allow it into our data set and approved a false means.

No, this is probably an invalid or phony report.

Let's just go ahead and delete it or something like that.

All right, so that's it, five different routes now along the way, I want you to know right away here

a lot as we were building this application, we're going to realize that we probably need to tweak some

of these different routes and we're probably going to need to add some different routes as well.

But let's start to kind of figure out what those different ads or tweaks or deletions are going to be

once we start putting together.

Well, now that we've got a better idea of what we need to do for all of our different routes, let's

start to think about what different comptrollers, models, entities, stuff like that, services as

well.

We need to build inside of application as well.

So let's take care of the kind of innards of our server in just a moment.
```
