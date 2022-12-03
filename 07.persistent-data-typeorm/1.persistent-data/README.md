## script
```bash
Next up, let's take care of these two repositories now for this application, we're not going to store

data instead of a plain file.

Instead, we're going to use a very real database solution when we start making use of databases with

Nest.

We've got two general options, though.

Just to kind of set some high level disclaimer here, you can use just about any Aughrim, any database

you wants you with Nest, and it's going to work out just fine.

So you don't have to worry about using some particular database.

You can use just about anything you want to use.

However, there are two solutions that work very particularly well with Nest just right out of the box.

The first is a library called Type Aughrim.

Type R.M. is a library that can interface very nicely with a variety of different databases, not only

traditional SQL type databases, but some no sequel types as well, such as Mongo DB.

The other option that works very well, right out of the box is Mangus, which works only with Mongo

DB.

In this course we're going to focus on the use of type Aughrim type R.M. and Nest together are really

just a match made in heaven.

They cooperate very fantastically and kind of support each other in a couple of ways.

For example, Type Aughrim in a couple of areas is a little bit deficient and sometimes hard to use.

But there are some tools inside of Nest that make type or just a total pleasure enjoyed to make use

of.

So then mind, here's what we're going to do for our application.

But right now we're going to be making use of type Aughrim and as our actual data base that we're going

to interface with, we're going to be making use of a copy of SQLite.

We're only doing this right now just because SQLite is very easy to use and very easy to get started

with.

Later on, as we start to finish up our application, however, we're going to swap out SQLite for a

much more robust solution.

We're going to use PostgreSQL instead.

So eventually on this application, we're going to be making use of type Arem and PostgreSQL.

Right now, let's just install type R.M. at our terminal, along with a couple of other libraries that

we're going to use to get type Aughrim, and that's to work together nicely.

So back over at my terminal.

Still inside of the McVee project directory, we'll do an install at next James type Aughrim type of

R.M. and finally, sequel Light three.

So these are three separate libraries.

Let me kind of get a couple of new lines in there.

Come on.

There we go.

So we are installing the first library Nafzger type Aughrim, that is library that makes type Aughrim

and must work together very nicely.

Then is the type of library itself and then finally is the very particular database implementation we

are using in this case, SQLite three.

Eventually we are going to come back and install the postgrads client as well.

We'll take care of that later on.

OK, so let's run that, and while that installs, we'll take another quick pause and then start to

create these different repository files or something like them in just a moment.
```
