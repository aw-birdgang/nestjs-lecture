## script
```bash
Let's move on to step number three.

So this is where we are going to associate our two records together, we need to make sure that whenever

we create a new report, we associate it with the user who is making a request to us.

So let me walk you through this process.

OK.

So you and I are going to receive a post request to slash reports we've already got a handler for this

group put together inside that root handler.

We are currently receiving our body and that is being validated by the create report.

So we need to take that detail right there, which we're going to use to create a new report.

And we need to associate it with some user to get our current user.

We're going to make use of the current user decorator so that we'll extract some information from the

cookie off that incoming request.

So inside of our request handler, we are going to eventually have our user entity instance and the

validated create report DTO.

So now we've got these two things, we're going to take that report, DTL, and turn it into a report

entity instant's.

So this is our report entity instance.

So all these properties are going to be copied over to this report entity instance, such as lunch,

you lattitude and so on, and then to associate our user with this report that we were about to create,

we're going to assign the entire user entity instance to the user property of our reports.

They're going to take this entire entity instance, an assignment to that user property.

Once we've created this report entity instance, we're then going to pass it off to the safe method

of our reports repository and then behind the scenes, the reports repository is going to take a look

at that user property.

It's going to see that we assign to it some user entity.

So it might be some object with an ID and an email and whatever other properties.

Behind the scenes, the repository is going to extract just the ID of that entire entity, and it's

going to save just the ID as the user field inside of our database.

So you might recall that we had said a little bit ago.

That eventually we want to save the user ID on our sports table, so the repository is going to take

care of that for us.

It's going to extract the idea of the user entity and save just the ID inside the reports table.

All you and I have to do is make sure that we assign our chosen user entity so the user we want to associate

with this report to that user property.

That's it.

We just need to make sure that we put that user entity instance right there before we hand this entire

thing off to our save method.

OK, so now we've got the general idea, let's go back over to our Ed.

We're going to first begin by opening up our controller.

We're going to make sure that whenever we receive a request to post reports, we not only get the body,

but we also get our current user as well through the use of the current user decorator.

So back inside my editor, I'm going to find my reports controller.

At the top, I'm going to import current user.

From your recall, we put together our current user decorator inside the user's decorator's folder.

So we're going to go up one directory into users decorator's current user dot decorator.

Let me show you that entire line.

Because that's pretty long.

OK, so then on our credit report, Route Handler right there, I'm going to make use of the current

user decorator, I can receive this argument as a variable that I would call user, and then we need

to annotate its type as well.

So for that, we need to also import our user entity.

So at the top, blat in another important.

Or user from.

Users, users, entity.

All right, very good.

So I'm going to add in that type invitation, not body, but user.

There we go.

So now inside of a endler, we've got both the body and our user.

Now, we need to take both these things, we need to turn that into an actual report entity instance

and then associate the user with it.

So for that, I'm going to decide to do all that association directly inside of our report service create

method.

So I'm going to say that I'm going to pass off to create not only this entire DTO, but is the second

argument.

I'm also going to pass off the user that I want to associate with this newly created report.

Now we'll go over to our service.

I'm going to find the create method here it is right here.

And I'm going to also receive that user as the second argument.

I'm going to make sure I import user.

And now it's time for us right after we create our report entity instant's, so here's the instanced

right here.

We're going to assign the user entity to that user property and that's what's going to set up this entire

association.

So we'll say right after we create the report entity instance report that user is user.

And that's it.

So that's how we set up our association when we now call save on the reports behind the scenes, the

repository is going to extract just the user ID from the entire user entity instance, and it's going

to save that for us automatically inside the reports table.

So we should be able to now test out all this code, it's going to save all these different files.

I'm then going to test this out by first, just making sure that I am signed into the application,

so I'm going to go back to my API client around our authentication stuff and I'm going to make sure

that I sign in as an existing user.

Once I'm signed in, I'll then pull up my API client for reports.

And I'm going to try to make a request to create a brand new report with whatever information, so I'll

send that off.

And now inside the response, I get back, I'm going to see our price, blah, blah, blah, all that

different stuff.

And then a user property as well.

So this is the user who is associated or he created this report, so we've now got all the information

about them tied to this report.

Perfect.

Now, the one downside here, as you will notice, we are unfortunately, including the entire password

property in there, which is almost definitely not what we want.

So let's take a pause right here.

The next video, we're going to come back, we're going to discuss a couple of issues around the setup

we currently have.

And we'll also make sure that we do not show that entire password property.
```
