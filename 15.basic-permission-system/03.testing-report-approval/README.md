## script
```bash
Inside of our handler, we're not going to take that ID and that body, specifically the approved property

off the body, and we're going to pass this information off to some method inside of our service.

The report service will then be in charge of finding the appropriate report and updating the approved

property.

OK, so inside the handler, I'm going to return this reports service and I'm going to just imagine

or assume that we're going to add in a new method to the service code, something like change approval.

So this method is going to be 100 percent dedicated to just finding a particular report and changing

its approval status.

So I'm going to pass in the ID and then off the body property or the body arguments we're going to pass

in whatever the value of approved is.

Let's go over to our service now and we're going to add in this new method that's going to receive the

ID and either the true or false value for whether this thing should be approved or not.

It's over inside of our service.

I'm going to find a new method we'll call change approval.

We're going to receive that ID, which will be a string.

And approved, which will be a billion.

Now, once again, inside of your all we have to do is find the appropriate report, change the approved

property, and that's pretty much it.

So inside of here, I'm going to mark this function as async and then go going to find the appropriate

report by using our repository.

So I'll say report is a wait.

It's not repo.

Find one null pass in the ID.

Now, whenever we try to find a single record by ID, it is entirely possible that we might fail to

find that record.

So we're going to make sure that report actually exists.

We're going make sure that we actually found a report with the given ID.

So say if there is not a report that we need to throw an error and tell whoever making the request.

Sorry, but we were not able to find that record.

So once again, to handle this case, we're going to throw a not found exception.

I'll give it the custom message of something like report.

Not found.

And they're going to make sure that I import that exception at the top of the file.

So at the very top, I will import.

Not found exception from NASA's common.

I'm still getting an air around that.

Throat knew my mistake, that's better throw new and not found exception.

OK, so now that we've got the reports, we're going to update the approved property on it and then

we're just going to save it just as we did back up here inside of it.

So we'll say reports approved is the new value for approval that was passed into this function.

And then we will return this dot repo safe and we're going to save the updated reports.

And that should be it.

Let's now save all the changes we have made inside this file.

We're going to go back over to our comptroller.

Everything over here looks pretty good as well.

So I think we're ready to test this stuff out.

I'm going to open up my API client.

Here we go.

I'm going to first attempt to make a brand new report when I create the reports, I should get back

response that say that this thing is by default not approved.

So I'm going to send the request off.

There we go.

And I am matter of fact, I'm not told at all about the approval state because we did not mention the

approved property inside of our report.

So let's go fix that up real quick.

My mistake on forgetting that step.

Let's make sure that inside of our dittos report file, we're going to say that in the response, whenever

we send out a report, we are also going to mention.

Whether or not this thing is approved.

OK, that should be better now if we try to make a report with our API client.

By default, the import report is not approved, so we get approved of false, that's definitely what

we want.

Now, instead, my API client, I'm going to write out a brand new request.

So I'm going to say approve and existing reports.

I'm going to do a patch request to.

Localhost three thousand reports and we need to put in the ID of an actual report right here, so I'm

just going to make another report very quickly and just take note of the ID.

Looks like I've got a report ID of eight right here.

I'm going to try to set the report with ideate.

I'm going to try to change its approved property to true.

And they're going to send along a header of content type application, Jason.

And then finally, I'm going to say that I want to change the approved property to Drew, and that should

be at.

So now send off this request, and sure enough, I get a response back with approved of true.

So that means that this report is now approved and in theory, it will be used inside of all of our

current estimate reports or estimate values we eventually generate and put together.

Let's also just make sure that we can also unapproved report as well.

So I'm going to try changing approved over to false.

I'm going to send this off.

Yep.

That definitely works as well.

OK, so this definitely looks good, so we've got some basic functionality now around having a report

and an approved or unapproved state.

So now we just need to add in this idea of administrative users, because remember, we only want to

allow an administrator to take a look at all the different reports and eventually approve a report come

in.

Users should not be able to do so.

So let's start adding in some authorization to our application in the next video.
```
