## script
```bash
We are now able to create a report, which is fantastic, of course, but there is one extra little

kind of surprise feature I would like to add in to our application, something that's going to make

some additional features down the line, a little bit easier to put together.

So here's something I want to add in very quickly to this create report that we just assembled.

I want to make sure that whenever we create a report, we associate the user who create the report with

the report itself.

So in other words, I just want a tie between the user and the reports they create.

So then eventually, at some point time in the future, we can take a look at all these different reports

that have been created.

And we can very easily say, OK, these reports were created by the user, which is one, and these

were created with the user with ID two.

So we need to form what is called an association between these different records.

We need to associate a user with some reports.

Now, let me first give you a couple of different notes on associations.

So the term association refers to relating one kind of record to another.

And I got to be honest with you, a lot of stuff we've covered in this so far has been, well, rather

confusing.

Nest is definitely not easy.

And unfortunately, associations is no exception to that.

So understanding associations and how they work and really having mastery over them requires knowledge

of just about every topic we've covered so far inside this course.

Plus some more topics on top of that for in particular, security and understanding some conventions

as well.

So I'm not going to lie to you going through this association stuff and truly understanding it and having

mastery over it is not going to be easy.

So we're going to take this one step at a time and understand every step along the way whenever a request

comes in, creating a report exactly how we are going to associate a user with it.

So for right now, all I want to tell you is our end goal.

I want to tell you very directly how we are going to associate a user with a report.

OK, so here's what we need to do to actually associate a report with a user, we need to make a change

to our database.

So at present, we've got our user stable and we have a report stable.

Right now, our reports table only has those columns of ID that make the model the price, latitude,

longitude and so on.

I'm just not showing them on this diagram in order to associate a report with a user who created it.

We are going to add in a new column to our reports table.

We're going to call this column something like User Underscore ID.

This is going to store the idea of the user who created this report.

So, for example, if we log in as user with ID one and we create a report, I would expect to see a

new report added in here.

My user ID should be one, so that would indicate that this person created this report.

If this person then created another report, it would get idea of to maybe this time around it is a

Ford.

And we could still have a USAID one, so that is pointing back at this person right here.

So with his column alone, we can now very easily identify exactly who created every single report inside

of our application.

So this is it.

This is the end goal.

This is what we need to make sure actually exists inside of our database.

The reason this is going to be so challenging is that getting this column in here and then eventually

extracting the information from it and using it in some interesting way.

Well, that is where some big complexity is going to come in.

So let's take a pause right here.

We're going to come back in the next video and we're going to start to understand this entire process

and implemented step by step.
```
