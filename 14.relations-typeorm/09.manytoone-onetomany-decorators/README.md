## script
```bash
Now that we've established what kind of association we have between a user and report, we're now going

to open up our entity files and we're going to add in some appropriate decorator's.

So these are going to be some decorator's coming from the type of library that teletype Aughrim, how

these two things are.

These two entities are somehow related together.

The decorator's we are going to use are called one to many and many to one.

So those are the decorator's.

We're going to apply to these entities.

We're going to make use of the one many decorator on our user because one user has many reports on our

report entity.

We're going to use the exact opposite decorator.

We're going to use a separate decorator called many to one.

We are making use of each one because many reports have one user.

So let's now open up these different entity files.

So user and report and we're going to apply these decorator's to them.

OK, so back inside my editor, I'm going to first go to my user entity file, here it is right here.

Then at the very top from type Aughrim, I'm going to import the decorator one to many.

So one too many.

Then inside my user entity class, I'm going to add in a new property that's going to tell type Aughrim

that we are forming a relationship between a user and a list of reports.

So I'm going to go down right after our password property.

I'm going to add in one too many.

I'm going to define a property right after it called reports, and this is going to be of type array

of reports, so make sure you get in report and then those square brackets right after it.

We do have to add in an important statement for report right away.

So that is the report entity that's going to go up to the top.

And import.

The report entity from up one directory reports report that entity.

OK, so after adding that decorator, we're then getting a little typescript air here, so we have to

provide some different arguments to it to customize how this decorator behaves.

Right now, I'm going to add these arguments in and we'll come back in just a moment and describe exactly

what the arguments do for us.

So for right now, these arguments are going to look a little bit mysterious.

But I got good news for you.

You really just need to memorize these arguments one time and then just pretty much repeat them whenever

you want to build an association.

So we're going to write in here a function that returns the report entity class.

Then as the second argument, we're going to put in a function that takes an instance of a report,

so I'm going to put that down to lower R and then we're going to return reports user.

We're going to get an answer from that for right now, but that air is going to go away just a moment

once we update our report entity.

OK, so that's it inside this file for right now, like I said, we're going to go over these arguments

in great detail.

I'm also going to explain what this additional property is all about in just a little bit.

Right now, let's go back over to our report entity file, and we're going to set up the many to one

decorator in there.

So inside of our report entity file.

I'm going to find the import statement for type Aughrim.

And we are going to import the exact opposite decorator, so in this case, we need many to one because

many reports have one user.

So I'm going to import many to one, I'm also going to import the user entity.

As well.

Then at the bottom of our class, go down to the very bottom and we're going to make use of this decorator

just about identical to how we used it inside of our user entity.

So we'll say many to one.

I'm going to put in user is going to be an instance of a user, and you'll notice that in this case

there is no array on here, just one single user.

Well, then put in some very similar looking arguments to the decorator to first a function, the returns,

the user entity class, then another function that takes an instance of a user, for instance, every

report.

No instance of a user, my mistake, sorry, I'm reading my notes here, I got my notes reversed.

I'm going to say user reports.

So the exact opposite of what we had inside the other entity file.

I apologize for the little hesitation there.

OK, so that's it.

We have now set up this relationship.

We've told type Aughrim that these two entities are going to be related.

Now, as soon as we add these decorators in, one extremely important change happens behind the scenes

type.

Aughrim is going to notice that we made use of this many to one decorator inside of our report entity.

The many to one decorator is going to cause a change inside of our database, the opposite decorator,

one to many, does not cause a change.

So this decorator right here, no no change to our database.

Many to one cause is change the change that is going to be made to our database.

Is that on the report table?

So our listing of all of our different reports type forum is going to add in a new column to it automatically.

And that column is going to be the one that we need.

It's going to be a new column that's going to record the user ID or the idea of every user.

So by just adding in that decorator, specifically the many to one decorator, a change has been made

to our database and that change is what's going to allow us to associate a report with a user.

OK, so now we've got at least a little bit more setup, we're going to take another quick pause right

here.

We're going to come back in just a moment, understand a little bit more about these decorator's and

what they're doing for us and really understand what the reports property on a user and what the user

property on a report are doing for us.
```
