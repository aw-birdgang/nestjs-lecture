## script
```bash
At the end of the last video, I said that inside of our user service, we could technically call save

directly with an object that looks like a user so we could pass in directly object with an email and

a password.

And I'd said, hey, this code would work fine, but I didn't really go much beyond that.

So in this video, I want to give you at least one reason that we decide to first create an instance

of an entity and then call save on that, as opposed to just directly passing in an email and a password.

So let's take a look at a very quick example.

I'm going to first begin by opening up my user entity file.

So here's my entity inside of here.

I want to define a little bit of extra logic.

I want to add in a function that's going to log out every operation that we do on a user.

So in other words, if we tried to create a new user and save it to the database, if we tried to update

a user or if we tried to remove an existing user, I want to do a console log that says we are updating,

saving, whatever.

One way we can very easily implement this is by using a feature inside of type Overeem called Hooks

Hooks allow us to define functions on an entity that will be called automatically at certain points

in time.

So let me show you a very simple example at the very top of this file I'm going to import.

After insert, this is a decorator that we can apply to a method defined inside of our entity, I going

to define a method inside of here called log insert.

And then I will market with that after insert decorator.

So now whenever we insert a new user into our database, this function right here should be executed.

So to just log the fact that we have inserted a new record.

I'm going to do a console log and say inserted.

User with ID, and then I'm going to print out the user's ID that was just inserted, one can do so

by this thought ID.

So this is a reference to the entity that we just inserted.

And then going to repeat the same process and take care of whenever we update a user or whenever we

remove one as well to handle those cases, we're going to import to other decorator's.

So these are also hook decorators.

So we're going to add in an import for after remove.

And after Update's.

Well, then, to find two more methods inside of here, so after update, we'll say log update, I'll

do a council log of updated user with ID and then print out the ID.

And then finally after remove.

And we'll log, remove and do a council log of removed user with ID.

OK, so we've now got some great logging logic inside our application, we're going to get a ton of

of logs, of course, if we have a very busy app.

But this is good for a demonstration.

It's not easy to find.

So let's very quickly just test one.

I'm going to try to create a new user and I'm going to make sure that I see some kind of log that says

we just inserted a user with some given ID.

So to test this out, I'm going to go back over to my API client.

I'm going to send off this request.

Looks like it was successful, and if I go back over to my terminal.

I should now see a log right here that says inserted user with it, too.

OK, well, that looks fantastic.

So let's get back on topic here.

We've made use of hooks.

Looks like they are pretty useful to some degree.

But how does that relate to this entire discussion of create versus save?

Well, here's the gotcha.

This is where Type Arem starts to get a little bit tricky, because there's a lot of just tiny little

gotchas, tiny little details like this that you need to be aware of.

So we're going to save at certain points in time.

And as I mentioned previously, at the end of last video, we can call save either with a user entity

instance or it's just a plain object.

And either way, our data will be saved.

The difference, however, is that if we save an entity instance, all the hooks tied to that instance

will be executed.

But if we pass in an object and try to save it, so if we just pass in a very plain object, no hooks

get executed whatsoever.

So let me give you an example of this.

Back over inside of our service, I'm going to call, save and pass in directly the email and the object

inside of an object.

Let's try testing out this now, so I'm going to send off the request.

And if I now go back over to my terminal.

I get no log whatsoever, and if I open up my SQLite database explorer very quickly.

So I'm going to take a look at my users table.

It looks like that user was created, but I did not get any console logs.

So, again, if we call save with a plain object, hooks are not executed.

Now, this can result in some incredibly hard to detect bugs if we start to mix saving a plain object

versus an entity because we might define some hooks inside of our entity, assuming that every single

time that we insert update or remove a user, those hooks will be executed.

But if there's some other engineer in on our team who is trying to save objects directly like a plain

object, those hooks are not going to run.

And so in some cases, hooks are running, other cases they are not.

And that would be a really tough bug to try to nail down and figure out why sometimes folks are running

and why sometimes they aren't.

So as a general rule of thumb, we really need to decide up front if we want to use any hooks inside

of our project, chances are you do.

And if you do, then whenever you are trying to insert a new record update record or remove a record,

you need to first get your entity instance and then call, save or update or remove with it, as opposed

to just trying to save a plain object.

This is also one of the differences between some of these different methods we discussed a little bit

ago.

So remember, I told you that on a repo there's a safe method and that looks kind of similar to two

other methods on a repo instance, which are insert and update.

There's also remove and there's also a delete.

So all these different methods look very similar.

Save and remove are expected to be called with entity instances, and if you call them with an entity,

Hooke's will be executed.

But if you make use of insert update or delete to directly insert a record directly update or directly

delete to record, then your hooks will not be executed, which is sometimes not going to be what you

expect.

So, again, in all scenarios up front, we are going to say that anytime we want to insert a record

update or delete, we're going to first get an entity instance and then work with that, as opposed

to trying to save a plain object or try to call these other related methods that do not execute hooks,

because otherwise we're just going to end up in these weird scenarios where our hooks are not running

in quite the way we expect them to.

All right, so hopefully now at long last, we've got some more information or understanding why we've

got the difference between create and save and why we choose to create an instance of a user entity

with CREATE before we try to save it, as opposed to just directly passing an object.

So let's step here.

I'm going to put in user like I had before, and that looks good.

I'm also going to leave the log statements inside of here is going to leave them because these are actually

kind of nice to some degree and a nice to see console logs and understand when data is being inserted

or updated or removed.

All right.

So good progress.

Let's take a pause right here and continue on in just a moment.

```
