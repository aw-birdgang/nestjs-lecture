## script
```bash
All right, my friends, let's get started on building up this relationship between our users and our

reports.

I put together a little series of steps we're going to go through in the coming videos.

So this is the series of steps we're going to go through every single time you want to build up an association

between different kinds of records using Narced and type Aughrim step number one.

We're going to focus on in this video is figuring out what kind of association we are actually modeling.

So in the world of SQL databases, there are three kinds of associations that you need to be aware of.

Let me show you what these associations are and give you examples of each of them.

And I think you'll get an idea of what this term association and specifically what kind of association

is referring to.

OK, so we're going to investigate three different kinds of relationships between different records,

the first kind of relationship we're going to take a look at is one to one relationships.

So this is where we have one kind of record or one kind of entity.

And one instance of that record or entity is directly related to one other single instance of a record.

So examples of a one to one relationship would be the relationship between a country and a capital.

If we had a list of countries and we wanted to relate them to a list of capital cities, then every

country would have exactly one capital city and every capital city would have exactly one country.

So there is a one to one relationship between a country and its capital.

The same thing can be said about a car and its engine, every single instance of a car is always going

to have exactly one instance of an engine, and every engine has exactly one car.

Same thing for passports and people and people and cell phones.

Now, one important thing to note right away is that you might be able to think of examples where some

of these different relationships are violated.

For example, you personally might have more than one cell phone.

You might have one phone for personal stuff and one phone for work.

Likewise, a single person absolutely probably can have more than one passport.

So these relationships are not set in stone and you might eventually be able to think of rules or situations

that violate them.

The idea behind all these different relationships comes down to how we want to model data inside of

our application.

So inside of our app we might enforce rules saying that a single person can only ever have exactly one

cell phone and every cell phone belongs to one single person.

In the real world, that might not be true.

This is all about the context of the application we are building.

Now, we are not building a one to one relationship, so let's move on to the next kind of relationship.

OK, so the next kind of relationship is a one to many where a many to one.

This is where we have one instance of one kind of record that is directly related to many other instances

of another kind of record.

So an example of this might be a customer and orders.

If you are a customer of Amazon, you might have many different orders for products at any given time.

You might make one order today and set that to be shipped out on, say, Monday.

And then tomorrow you might create a completely different order that you expect to be shipped on Tuesday

or Wednesday.

A car has many different parts, so one single instance of a car that might be sitting in your garage

or driveway right now has many different parts inside of it.

All those different parts belong to one single car, and those parts don't necessarily belong at the

same time to multiple different cars.

One single country is going to have many different cities inside of it.

All the cities inside of a country belong to that one country.

And finally, one continent on the planet might have many different mountains inside of it.

All these different mountains belong to exactly one single continent at any given time, and there's

probably no mountain that ever exists between distinctly different continents.

Now, once again, you might be able to find some examples of real world things that violate these rules.

It all comes down to how we want to model these relationships inside of our application.

So there might be some mountain out there that actually straddles, say, Europe and Asia might be split

right in the middle and some on Wikipedia, let's say, or some encyclopedia might say, oh, yeah,

well, this mountain exists in both Europe and Asia at the same time absolutely might exist.

But for the purposes of applications that we build, we would want to say that maybe that given mountain

exists and specifically Europe or specifically Asia, one or the other.

All right, last kind of relationship, many to many, so this is where we have a couple of instances

of one kind of record that are related to multiple different instances of another kind of record.

And the reverse is true as well.

So an example of this might be trains with riders on any given day on a train network.

There will be many different trains and every different train has a collection of different riders.

A writer, likewise might have many different trains that they need to take to get to their destination.

So this would be a classic case of a many to many relationship.

Another good example would be classes with students, there are many classes going on on maybe a university

campus at any given time, and every class has multiple different students inside of it.

But every student in turn has many different classes that they go to throughout the day.

So another good example of a many to many relationship.

It's now out of these three different kinds of relationships, let's think about what kind of relationship

we have in our application, what is the relationship between a user and a report?

Well, I would say that we have a many to one or alternatively a one to many relationship.

So depending upon how we kind of look at this relationship or what kind of side of the relationship

you consider, we refer to this either as a one to many or many to one.

So for us, from the perspective of a user, a user has many reports.

So that would be a one to many relationship from the perspective of a report.

However, one single report belongs to exactly one user.

So from the perspective of a report, many reports belong to or have one user.

Do we fall into this kind of second case right here, one to many or alternatively, depending upon

how we look at the relationship, many to one.

So we need to set up some rules inside of our application that say specifically that exactly one user

can have multiple different reports associated with them.

OK, so now that we've established what kind of relationship we have, we're not going to come back

the next video and we're going to add in some decorator's to our user entity and our report entity,

and we're going to set up this association.
```
