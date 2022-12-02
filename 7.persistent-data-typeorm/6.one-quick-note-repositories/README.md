## script
```bash
When we wired everything up with type Aughrim just a little bit ago, remember that we now have access

to something called the users repository and the reports repository.

So these are classes that are created for us automatically by type Aughrim.

We can now make use of dependency injection to get access to these things inside of things like, say,

our services.

We're going to make use of these repositories to find, update, delete and so on, the entity that

this repository is responsible for dealing with.

So in other words, if we ever want to persist or update or delete a user, we're going to always make

use the users repository.

Same thing for the reports repository.

And we're going to understand and learn about how these repositories work in great detail in just a

moment.

But right now, I just want to give you a very high level overview.

My fear right now is that it might get a little bit confusing what the difference is between an entity

and a repository.

That's why I just want to be really crystal clear right now and help you understand what we use the

repository for.

So these repositories have a set of methods attached to them that we're going to use to work with data

inside of our database.

You can take a look at the full API or all the different methods we have access to at that link to the

documentation right there.

So we have access to methods like create, save binde, find one and remove.

You don't have to memorize the definition I put on here for each method, just kind of a high level

overview of what each method is about.

And in some cases some of these methods might be a little bit confusing.

For example, what's the difference between create and save?

Don't worry, we're going to go over that in great detail.

The other thing I want to really highlight right away, especially if you start to go and look at that

official documentation, is that you might very quickly start to realize that inside the API documentation

for these repositories, it seems like there are some methods that look very, very similar in nature.

So, for example, if you go to that documentation page and look up the save method, it says that you

can use the safe method to add data to your database or to update data.

And it seems like what the save method does is very similar to what to other methods, too, that are

attached to the repository called insert and update.

You might also notice that there is a remove method, but there's also a delete method as well.

So what is the difference between these different sets of methods that appear to be just about identical

in nature?

Well, we're not going to go into super big detail just yet on what the exact differences are between

these things.

All they want to do is really highlight to you right away as you start to use type arem that.

Inside this library, there are always more than one way to do something.

In just about every scenario, there's even probably three different ways of creating a repository and

getting access to it, not just including Nest and this all this dependency injection stuff that we

just set up.

If you're just using type Orombi itself, there are seriously three different ways of creating a repository.

So the one thing I really want you to understand is that as you read the documentation, there are always

going to give you multiple different ways to achieve just about anything you want to do.

And the difference between these different approaches really comes down to some very fine grained details.

So unfortunately, this is one of the downsides to the library.

You kind of have to understand from the behind the scenes details of school and how databases work to

understand whether you want to call safe or insert or whether you want to call remove versus delete.

So I'm going to do the best I can over time to help you understand why you might go with one route of

implementation versus another with type.

Or am I just again, want you to understand that as you look at this API documentation, sometimes things

will be just a little bit unclear.

All right.

So enough these scary stories, I think we've had enough of those.

So let's take one last pause.

And in just a moment, here we go.

We're going to come back to the next video.

We're going to start working on our users service.

We're going to use this service to make use of our users repository and create users, sign up users,

all that kind of good stuff to work on our user service in just a moment.
```
