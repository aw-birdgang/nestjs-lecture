## script
```bash
So if we are not going to use the synchronized flag, we still need some way of updating the structure

of our database and to do so, we're going to use something called Migration's.

So let's take a look at a couple of different diagrams and understand what a migration is.

A migration is a file that has two functions defined inside of it.

Usually we call one function something like up in the other, something like down.

These two functions are going to describe a change that we want to make to the structure of our database.

The function is going to describe some kind of update that we actually want to apply.

So this might be creating a table, deleting a table, adding a column, renaming a column, any kind

of change to the structure of our database.

We want to make then inside added down function, we're going to describe exactly how to undo the steps

that we committed during up.

By having both the up and down file or up and down functions inside of one file, we can then safely

apply this migration to a database and change its structure.

And then if something goes wrong during that process, we could immediately undo that change if we want

to as well.

So, for example, in our application for our users table, we might have a migration file that looks

like this, we might have one function called up that describes adding in a new table called users and

then saying that on that table, we want to add in a column called email and a column called Password.

So all those steps described some kind of changes that we want to make to the database, then inside

of our down function, we would put in a step that exactly undoes whatever we did during up.

So in this case, to undo what we did during the up step, we could just delete the entire table called

users, and that would undo everything we did during up to now, if we applied the up function to our

database, that would create a table with two columns.

And if we applied the down function, that would delete the entire table and the two columns we had

created inside of it.

In order to eventually generate the entire structure of our database, we can create multiple different

migration files and then run them all in a row.

So, for example, to build up the structure of our current database where we have a table of users

and a table of reports, we might create one migration file with an up function that creates our table

of users and then a second migration file with another function that creates the table of reports and

gives it all the different appropriate columns as well.

Naturally, inside the second migration file, we also write out a done down function that perfectly

undoes whatever underuse, whatever we did during up.

So in this case, we would delete the table called reports.

So this is how we are going to change the structure of our database moving forward rather than using

that synchronise flag, because that might lead to some data loss and we start to deploy our application

to production.

We're going to instead write out these different migration files.

And these migration files are going to perfectly describe the structure of our database or some changes

that we want to make to it.

So now we understand this idea of a migration file where things start to get a little bit more complicated

is how we actually execute these and where things start to get really complicated in our application

in particular is how we are going to run these migrations during our production deployment.

So let's take another pause right here.

Come back in just a moment and I'm going to tell you exactly how we execute migrations using type Aughrim.
```
