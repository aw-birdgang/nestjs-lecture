## script
```bash
We just made use of the query builder function inside of type Aughrim, so remember, this is tied to

the repository.

We make use of a query builder.

Any time we want to run a more complex query, then what we can run with, say, the find or find one

methods.

So let's take a look at the code we have written out here so far.

The first statement I want to focus on is the word function.

This is going to apply a filter over all the different rows of our reports table.

So in this case, we are trying to find all the different parts where the make column or the make value

for a given row is equal to some value that we want to use as our search criteria.

So in our case, if I execute that query statement with a make of, say, Toyota, it's going to find

all the rows inside my reports table where I have a make of Toyota and it will filter out all the other

rows that don't have a make of Toyota.

You'll notice that in order to specify that filter, we're using some kind of weird syntax here.

So first off, what's going on with the string?

Well, on the left hand side, that specifically says take a look at the make column of every single

row and we want to find all the columns where the column is equal to some value that we're going to

stick in to the string.

So the value of colon make is going to come from this object.

So behind the scenes type arm is going to take a look at this object, it's going to find the property

inside the object, specifically because we have Colin Mark right here.

It's going to see that we have provided estimate dtente make and it's going to take that value.

And we can kind of imagine that value gets inserted into the string right there.

Now, the entire reason that we use this Colen syntax in order to kind of substitute in a search parameter

is just for security concerns if you've ever heard of a sequel injection exploits.

Well, this is exactly how we address a sequel injection Exploit.

We're making sure that we are not sticking in a raw string that is coming from an incoming requests

directly into one of our Skouris.

In order to kind of condense this object right here, we can structure off the make property from estimate

ahead of time.

So, for example, I could just structure out make.

And now on this subject right here, I can provide just really Burset braces make.

OK, so now let's start to add on some additional filtering logic, in addition to getting cars with

a certain make, I want to make sure I also get cars with a very certain model as well.

So we need to add on a second where statement.

Now, this is where the query builder starts to get a little bit complex.

If you call where a second time, the second where is going to override the first one.

So if we add on something like where the model is Kulin model and then model inside of a object, and

we also do structural model that is going to override the initial where we were trying to find cars

with a very specific make.

So to chain on some additional we're filtering statements, we use a slightly different statement or

a slightly different method called and where.

So if we ever need to call, we're more than once, the first time we're going to call simply where

and then each additional time we will invoke and where.

So now we can do something very similar for our other search criteria as well, specifically for longitude

latitude in the year.

Keep in mind that for these three different filtering statements, we really want to do not just a direct

comparison.

Instead, we want to find reports at a longitude and latitude within plus or minus five degrees.

So are where statements can be slightly different for those.

Let me show you what we're going to do.

I'm going to chain on another.

And where.

And then going to look at the longitude of every single row, I'm going to subtract from that Polan

longitude.

And they're going to provide that longitude parameter from our estimate, Dito.

So that's going to result in some number, so it might be something like five, 10, 15, negative five,

we're just taking the lunch to some report and then subtracting some other longitude from it.

So I want to make sure that this is plus or minus five degrees.

So to get that kind of variance in there, I'm going to add in between negative five and five.

And they're going to do the same thing for lattitude as well, so I'm going to say copy that line down

and then change it to latitude and latitude and then on the object over here, latitude.

As well.

Also, make sure that I do structure off the latitude property off our.

OK, so then finally.

We're going to add on a very similar line for the year as well.

So I'm going to paste that in once again, change it to yea yea I want to find plus or minus three years.

So in this case it's going to be between negative three and three.

I'm going to change that object to year and structure off the year property as well.

And then the very last step is going to be our order by logic.

So I want to find all the vehicles or reports or sort them by whichever vehicle has the closest mileage

to the one that our users trying to get an estimate for.

So for this.

I'm going to chain on an order by.

We're going to take a look at the mileage of a given report and subtract the supplied mileage from its.

Now, unfortunately, we want to use a parameter right here once again for security reasons, but unfortunately,

a type arem API is not super consistent here and the second argument does not allow us to pass in the

mileage.

So in this case, we're going to have to provide that mileage parameter in a slightly different way.

I'm going to add structure of mileage at the top.

And then to set that mileage parameter, I'm going to chain on set parameters.

Milage.

Again, that's just because order by does not take a parameter object as a second argument.

I'm going to make sure that I sought the mileage in descending order.

And then to also handle the case in which we have either a mileage that is greater or less than the

one that we're looking for, I'm going to take the absolute value of the difference between the two.

OK, I know that I kind of sped through this query very quickly, this is everything we actually need

right here.

I know I spent it very fast and didn't really explain a lot of stuff that's going on here.

But as I mentioned just a little bit ago, all this query builder stuff is really built upon knowledge

of scale.

And in this course, we're not really super focused on school, per say.

So I didn't want to have what would probably turn into like a one or two hour aside in order to very

clearly understand every line of code right here.

So we're pretty much just going to say all this stuff has to do with school.

If you want to understand more about what's going on here, take a look at the documentation inside

of type Aughrim, around the query builder.

Now, the last thing we need to take care of here.

We have taken care of all this filtering logic and done the order by step, so the very last thing we

need to deal with is to make sure that we get back at most three different reports and find the average

value of those three does can be the last thing we do.

To make sure that we get back only three reports right after the order by and set parameters, I'm going

to chain on a limit three, which is going to make sure that we only take a look at the top three reports

and then going to modify the select statement up here to actually find the average price among these

three.

It's going to change the string to a Viji price.

And then as the second argument, I'm going to put in a string of price as well.

Finally, very last step, we make use of jet roar many if we expect to get back many different records

in this case, we are really condensing everything down to just one single row, thanks to the average

caller right there.

So rather than making use of Jet Romney, I'm going to change it to get raw one.

OK, so that's it, that's the entire query.

Let's take a pause right here.

We're going to come back in just a moment.

We are going to create a couple of different reports where we know the actual values are going to make

some Toyota Corollas or to some kind of fixed car, will then run a couple of different queries and

make sure that our query is working as expected.
```
