## script
```bash
Let's move on to our next road handler, so we're going to implement the idea of approving or rejecting

a report that has been submitted by a user that's going to be this Patra handler down here at the bottom.

Remember, we eventually want to allow a report to be created in an unapproved state and we're going

to require some kind of administrator to review this report before it gets approved.

And only then will it be used inside of our car value estimate calculations.

The entire idea behind having a report start off as unapproved is to just prevent abuse of our platform.

We want to make sure that some malicious user does not create a bunch of reports where they either say

that their car is worth way more than it should be or weigh less in order to manipulate all the different

estimates that we spit out.

So we're going to eventually have the concept of administrative users and these admin users are going

to be responsible for reviewing all these different reports and approving them.

We're not going to worry about these administrative users for right now, for right now, for the first

time to take through this little feature.

We're going to say that anyone can approve any reports once we get the base functionality put together,

will then come back through and adding the idea of authorization and administrative users.

So right now, all we need to do is open up our report entity.

We're going to add in a new property that we'll call approved or something like that.

By default, every report is going to be unapproved.

We're then going to make sure that whenever someone makes a request to patch reports ID, we're going

to find that report with a given ID and we're going to change its approved property to true.

And that's it.

So let's get to it back over inside my editor.

I'm going to first begin by opening up my report entity file.

Then inside the report entity, I'm going to add in a new property that I'll call approved, so it's

going to be a boolean, I'll add in my column decorator.

And whenever a report is first created, I really do not want it to be approved.

I want a approved value of false or something like that.

So to make sure that's always the case, I'm going to add in an option to the column decorator.

I'm going to put in an object with a default property of false choice.

That means that by default, if we do not set approved to some value, when we create a brand new report

approved, we'll be given a default value of false.

If that looks good now, we're going to go over to our controller.

We're going to put together our new patch root handler.

We're going to find the ID that the request is looking for.

So that wild card of idea right there.

We're going to fetch that report and change the approved property to true.

So back inside my controller.

At the very top, I'm going to find my import statement for Nessa's Common.

We're going to add in a couple more imports in a first put in a couple of new lines here.

And I'm going to add in an import for the patch decorator and the Hyram decorator as well, we're using

the perfume decorator, remember, to extract this kind of wild card ID right there.

Now, let's put together the handler itself with these two decorator's.

Down at the bottom of the controller, I'm going to add in the new root handler called something like

approve reports.

A market with the patch decorator, and I'm going to say that this is going to receive some wild card

ID inside of the URL.

So now in total, our route is going to be reports slash wild card ID.

Then inside the handler itself, I'm going to read in that parameter called ID.

I'm also going to receive the body of the request, which is going to have this approved property.

So I've said that, yeah, we're going to allow someone make a request to approve a report, but we're

also going to allow this root handler to approve a report as well.

So in the body of the request, we're going to have this object that's going to be approved property

and it's going to be either true or false.

So we'll be able to use this route handler to either approve or unapproved a report.

In order to receive that body, we're going to have to create a DTL, so for right now, let's just

add in this body.

We call it body and we'll say that it is of type about approve report.

DTL.

Let's go and define this.

Well, then import it into this file.

All right, so inside of our dittos directory, I'm going to make a new file called Approve Report Stoddart's.

Inside of here, I'm going to import.

Let's see what validator should we make use of here?

We really just want to make sure that we have a property that is neither true or false.

So I'm going to use the is boolean.

Validator from class validator.

Well, then export a class called Approve, reports Dito.

So the body of the incoming requests, we're going to say this has an approved property that's going

to be a billion and I want to validate that and make sure that it is actually a boolean.

Now we can import this DTO back inside of our controller, so back inside the controller at the very

top.

I'm going to import.

Approve report, DTL.

And now our handler, we should not have an air around that type annotation right there anymore.

OK, so this looks good.

We've got the robot handler put together, so now we just need to take in that ID, take in the body

and pull off just the approved property.

We're going to pass that information off to the report service, which will be responsible for actually

finding the appropriate report, changing the property over to whatever it should be, and then saving

the updated record.

So let's take a pause right here and continue on in just a moment.
```
