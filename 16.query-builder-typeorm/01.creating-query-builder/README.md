## script
```bash
Now that we understand our estimate criteria of sorts and how we're going to execute this query, let's

talk about how we're going to actually take this information and find some records from the database

by using type Aughrim.

OK, so at this point time, we've made use of the type or repository several times.

Remember, this repository is great for us automatically.

Behind the scenes repository has a couple of different methods tied to it, such as create, save,

find and find one.

Now we can use, find and find one to execute very basic filtering steps.

For example, we can find all the different records with a particular, say, email address or find

one record record with a particular ID.

But in our case, we need to execute a far more complicated query.

We need to execute all these different filtering steps and then we eventually also need to do some kind

of order biologic as well.

So you and I are going to be using a different method on the repository referred to as create query

builder, this method is going to give us back an object that we can use to generate a very complex

query.

Now, I got to be honest with you, the query builder object inside of type Aughrim is rather complex

and making use of it is really challenging if you don't have a background in sequel, if you're in this

course, I'm not really assuming that you know SQL very well.

So in general, you and I are going to make use in this of this create query builder thing, but we're

not going to go into too much detail around it again, just because it's really much more in the world

of SQL than is around next.

So let's go back over to our Ed, we're going to create a query builder inside of our reports service.

This CareerBuilder will then have a lot of logic tied to it to execute all these different filtering

steps.

OK, so back inside my editor, I'm still inside my controller inside of our estimate method.

I'm going to call and return.

This DOT reports.

Service, if I can type, there we go, so this DOT report service and we're going to write out this

entire query with a query builder thing inside of a method that we'll call create an estimate.

And I'm going to pass in our query string object into that thing.

Let's now go into our service.

We're going to define this method and then make use of a query builder inside of it.

All right, so back over inside of our service at the very top, I'm going to import.

The jet estimate, DTL.

Well, then define our new method inside of year of create estimate.

I'm going to assume that this is going to receive an instance of that, DTL, so I'm going to call it

simply estimate DTL.

And then instead of here, we are going to create and return.

A query builder there were going to generate by using our repository, so I'm going to call this rebo

create query builder.

Now, to use a query builder, we're going to chain on a couple of different method calls to it, and

these different method calls are going to customize the query that we eventually make.

So let me show you the most simple and basic query we can execute.

I'm going to chain on select with a star and then get raw many.

So this query is going to take a look at our reports table, it's going to return all the different

reports and all the data that we have around all those different reports I'm going to see to this and

then going to go back over to my API client and send off a request.

I'll then see the response is all the data out of our reports table.

OK, so this looks good.

Now we're going to start touching on a couple of different method calls to create Query Builder and

each of these different trained on methods are going to apply either some filtering logic or some sorting

criteria.

So we need to do a little bit of filtering on those steps right there and then eventually do some sorting

on that step right there.

So we can apply a filtering step by Chingon, a dot where statement.

Inside of a wire call, we can provide a string that's going to specify some kind of filter that we

want to apply.

So in this case, the first filter we're going to apply is to make sure that we only consider cars of

a very specific make.

So I'm going to say make equal to Colen make.

As a second argument, I'm going to pass in an object with a make property of estimate DTO don't make.

Now, let's just forget the syntax inside of here for just a moment, I'm going to see this go back

over to my.

API client once again and make the request a second time.

So now I'm going to only find vehicles with a make of Toyota.

And as I look at my ResultSet, I should only see Toyota listed inside of here.

If I change the make property of my query string to something else, like, say, Ford, I don't have

any Ford cars created yet.

So now if I send off that request, I'm going to get back an empty ResultSet.

So it appears to me that we are definitely doing some filtering logic now let's take a pause right here.

Come back in just a moment and understand what the syntax around this where statement is really doing

for us.
```
