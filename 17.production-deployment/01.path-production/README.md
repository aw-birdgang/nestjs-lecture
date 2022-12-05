## script
```bash
Our application is now pretty much feature complete, so moving forward, we're going to take this up

and start to deploy it into a production environment.

So preparing our app for production is going to be a little bit of an ordeal because we're going to

very quickly realize that some of the recommendations made to us by the best documentation itself don't

always work out quite so nicely.

So let me first begin by just telling you exactly what we really need to be concerned with here.

So inside of our development and test environments, we are connecting to a SQLite database.

In our production environment, we're going to be connecting to a slightly different database, a copy

of Postgrads instead.

The only reason we've made use of SQLite is just because it's so easy to get started with and you don't

have to install any additional software on your machine.

When we move from the dev environment over to production, we're going to have to change out some of

our configuration as well.

So you might recall that we went to all that environment config file stuff a little bit ago, specifically

to make sure that we connected to a different database during development versus test.

We're going to have to do something very similar.

We move over to production as well.

So we need to load up some environment variables, telling our application how to connect to a postcard

database.

Finally, very small thing over here, you might recall that we set up a cookie key for cookie session

a while ago.

This was a very special string that was used for encrypting our cookie.

Right now, we have that cookie or that that key itself in plain text inside of our project, which

is generally pretty poor form, not something we really want to do.

So we're going to make sure that we extract that cookie to be an environment variable instead.

And we need to set that environment variable inside of our dev and test environments and inside of our

production environment as well.

OK, so that's kind of what's coming up, we need to do a database swap when we go to production, we

need to extract some configuration, we need to update the cookie key and then eventually do the deployment.

Like I said along the way, we're going to run into a lot of kind of nasty problems.

I'm not going to lie some stuff that's going to be not quite so nice, but we'll get through it step

by step.

Let's take a pause right here.

We're going to come back in just a moment and we're going to work on the easiest step first, this cookie

key issue.
```
