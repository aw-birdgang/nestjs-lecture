## script
```bash
We've got our decorator's hooked up, so let's now understand what the arguments to those decorator's

are and what the decorator's themselves are really doing for us.

OK, so quick diagram here.

It's at the top.

We've got our class user and then down here, class reports.

So on the user, we made use of the one to many decorator by adding in that decorator alone.

No change has been made to the user's table.

However, on class report down here where we made use of many to one, a change has been made to the

reports table, as I mentioned at the end of last video, by making use of many to one that causes a

change to be made to the reports table, we're now going to have that user ID column added to it automatically

by type Aughrim.

Right after we apply the decorator in both case, we then list out a property on the user, we called

it reports and we said that that was going to be a type array of reports.

So now, at some point in time, in the future, if we ever get an instance of a user, so if we fetch

user out of the database or something like that, we can get an access to all the different reports

tied to this user by referring to user dot reports that will be an array of all the different reports

that is tied or associated to this user.

One very important thing to note is that that association, so that array of all those reports is not

going to be fetched automatically whenever you fetch a user.

So right now, if we went into our database and we set up an association between a user and a couple

of different reports and then fetched that user alone, that query by itself by default is not going

to fetch all the associated reports.

We have to add in some additional options to our query when we fetch that user to also get these associated

records.

So if you start to add in your own code to fetch a user and find all the reports associated with them,

don't be surprised if you get back an empty array.

We will, of course, understand in great detail how to fetch a user along with all their associated

records.

On report, the same thing is true, so on reports, we now have a user property, if we ever want to

figure out who created a report or who is associated with the report, we're going to access something

like report dot user.

A very similar to what we just said about users, that property of user is not going to be automatically

fetched.

So if you go into your database and attempt to pull out a report using type Aughrim by default, the

user is not going to be loaded up with it.

We have to make a change to our query and we have to specifically say fetch reports and the user associated

with it.

OK, so now I want to tell you a little bit more around the arguments to these two decorator's, we're

going to first begin inside of our user entity where we made use of one to many.

So we put in a function.

That's returning our report entity class.

Now, the really confusing part here is the fact that we're wrapping this up with a function, the fact

that returning to entity class might not be too strange, because as you might guess, at some point

in time, we have to tell type Aughrim what kind of record our user is going to be associated with.

So that's really the goal of the first argument.

We're saying our user is going to be associated with something of type report.

The part that is strange is the fact that it's wrapped up inside of a function and we did the same thing

over inside of our report entity as well, that first argument is returning a user entity class wrapped

up inside of a function.

So the function is only there due to a little issue that's very common in the world of TypeScript in

many other languages.

Let me show you exactly with a very quick demonstration why we are wrapping that thing up with a function

at the top of class report.

My report entity file.

I'm going to add in a log of user.

Then over inside my user entity file, I'm going to add in a console log of reports.

So I want you to just notice that inside the user entity file, we are importing report and inside of

the report entity file, we are importing user.

That means we have a circular dependency between these two different files.

Now, let's save these two files and see what happens with these console logs.

So back over at my terminal, I'm going to scroll up a little bit and I will find two console logs right

here.

The first one says undefined and the second says KLAS reports so undefined right there.

That is my console log of class user that I put together inside the report entity file.

So in my code, executed this console log right here, reported undefined.

That is the result of having a circular dependency.

So this means that my report entity file is being executed first inside my project.

All the code inside here is loaded up.

It all gets executed.

And at that point in time, the user entity file has not been executed.

That means that the user entity class is undefined just because the code inside that file has not been

executed.

So thanks to the circular dependency, we can't directly make reference to the user entity inside of

our report entity file, I'm going to delete that console log, by the way.

And the same is true inside of our report entity or our user entity file.

We can't directly reference the reports.

To get around this issue, we wrap the entity inside of a function and that's going to solve or fix

up this problem of the report or the user not yet being defined once both these classes are once both

these files get executed, only after that at some point time in the future when our code is actually

running and we need to actually figure out what is meant by this relationship, does this function get

executed?

And at that point in time and the future report and user and the other file will actually be defined.

So again, the function is just here to solve this circular dependency issue.

OK, so now what's going on with the second arguments, so the second argument, I got to be honest

with you, this is a very specialized thing right here.

That's not really something you need to worry about too much.

The use case of the second argument is very, very particular comes down to how type Overeem internally

models relationships between different entities and does validation of how all these relationships are

set up.

I will give you a very, very fast and quick example of where this second argument starts to be really

critical.

OK, so very fast example here, let's say that at some point time in the future, remember, we want

to allow a user to approve a reports or an administrator to approve a report before it's ever used inside

of any car estimates.

So we might want to eventually record which user approved a report versus which user created a report.

So the person who created a report might be referred to as the owner.

And the other user who approved it might be referred to as the approver.

So this is where that second argument starts to become more necessary.

It's when we've got two different entities that are related in more than one way.

So that's when you start one to wanting to research what that second argument is actually used for.

But in our case, we're not going to worry about dividing up a relationship like this.

So for you and I, we're not going to worry about that second argument too much.

All you need to understand about the second argument is that it's going to be a function that's going

to take an instance of the entity that you're trying to relate to.

So in the user file, you would take an instance of a report and then we're going to return how to go

from that target entity instance back to the entity that we are currently defining, which is in our

case right now, the user, because I'm in the user file.

Naturally, inside of our report entity, it's the opposite.

So inside the report entity, we go from a user back to a list of reports.

OK, all right, so that's enough for right now on what these decorator's mean, and we've also got

a little bit of information on what doing or setting up this relationship has now enabled us to do.

If we now make a query that is shaped or formed in the correct way to make sure that we do, in fact,

load up associated records than if we fetch an instance of a user with that special query, the user

will have a reports property and that will be an array of all the reports tied to this user.

Likewise for report, if we try to fetch a report and we shape the query in a very specific way, that's

also going to fetch the user that created this report and set them on the user property.

All right, so now we've got this far.

Let's take a pause right here, come back to next video and we're going to move on to the next step

of our fellow.

Which is where we are going to start to associate our records together whenever one is created.

So in this case, we're going to associate a user with a report when a report is created.
```
