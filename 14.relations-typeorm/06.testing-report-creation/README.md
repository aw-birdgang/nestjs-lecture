## script
```bash
Let's test out this new route handler.

So to actually test this, we need to create a new API client file.

Remember our old API client file if you are using the rest HTTP extension site of code like I am.

We created the request on file inside of the user's directory, and the intent was to put only requests

related to users inside that file because now we are working on reports.

I'm going to create a new requested FTP file inside of the reports folder.

Now, quick note here.

This is not really an established pattern that you're going to see anywhere online.

In other words, creating this request file inside of some associated directory.

So if you don't like this, if you want to put these kind of API client documenting files inside of

our related module folders, totally fine.

You can always create one single request file inside of our project directory.

That's totally fine as well.

Totally up to you.

So inside of this file, we're going to make a post request.

To localhost three thousand reports, we need to apply that header of content.

Type application, Jason.

I'll then put in that new line right there and we'll put in the body of the request.

So first, let's try to just make an invalid request.

I'm going to leave an empty body in here and I'm going to make the request as is.

And let's just see what happens.

Oh, let me also make sure my server is actually running because I might have stopped it.

I stopped it when I was running some of those different tests.

It's also start my server back up with start dev.

OK, looks good.

So now I'm going to make that request.

It's going to send it off and sure enough, yep, looks like our validation is kicking in.

We're getting a lot of errors here, telling us exactly how we must modify that body.

You might also notice that it looks like there are some duplicate validation rules here that just because

we are making use of multiple different decorators, so we're seeing all three different validations

that we applied to the mileage property.

OK, so let's update this request.

We're going to add in all these different required properties.

It's going to put in a make.

Toyota.

A model of Corolla.

I'm going to have a year of how about 1980, very old car.

Do we also need milage?

We'll say I've got about 100000 miles and we're not really going to distinguish here between kilometers

or miles, so if you want to just pretend that this is kilometers, totally fine.

Go for it.

And we need a longitude.

I'm going to put in a longitude of zero and a latitude of zero, and I think that should be at a low

price.

I need a price as well.

I'm going to say that I sold my car for a very optimistic half a million dollars.

I don't think anyone's going to pay that much money, but who knows, maybe in 1980s, Kuryla is a collector's

item and I just don't know it.

So now if we make this followup request.

Let's send it off and yep, looks like it was successful.

Now, remember, your request might fail if you are not currently signed into the application.

So if you are not signed in, then you need to go back over to your API client and make a request to

first sign in to our application.

So for me, I would go back over to request inside the user's directory and I would make a request to

either sign up as a brand new user or sign in as an existing user.

But overall, I'd say that our request handler is definitely working as expected, so I got back a record

right here.

It looks like I got all my different properties along with the ID as well.

Now, one quick follow up I want to do I want to try to create a report while I am not signed into the

application, so I'm going to sign out.

By making a post request to sign out, it's going to send that, hey, I'm now signed out in theory.

And now if I tried to create another report.

I'm going to get a four or three forbidden, which is exactly what we want.

So this looks pretty good.

All right.

Not bad.

So let's take a pause right here.

We've now got the ability to create a brand new report.

Let's take a pause and continue in just a moment.
```
