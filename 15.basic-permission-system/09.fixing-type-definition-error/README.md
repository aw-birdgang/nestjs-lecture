## script
```bash
Back inside of our current user middleware, we're going to fix up this little air around TypeScript,

where we fixed it just a moment ago by adding this comment, telling TypeScript to just ignore the problem.

So I'm going to remove that comment and now we get the air back.

So the reason we're seeing this error is that we are dealing with some request object that is defined

by express.

So express exports, an interface that describes exactly what a request object is and then different

properties.

It has a request object by default, does not have a current user property.

So we are trying to assign some value to a property that just does not exist.

But to fix this up, we're going to modify the definition of the request interface.

We're going to tell TypeScript that the request interface, as it is defined by Express, now has an

additional property of current user and it's going to possibly refer to some kind of user entity object.

So to fix all this stuff up at the top of the file, I'm going to import user.

From up on directory user entity.

So that is our definition of what a user is.

That's our user entity.

We're then going to add in a little bit of code right above the middleware to tell typescript that this

request might have a current user property that is going to be an instance of a user.

So we're going to add in, declare global.

Then name Space Express with a capital E..

Inside, they will say interface request and then finally, current user, questionmark user.

So this is going to update or add in additional property to an existing interface, so we're saying

go and find the express library, find the interface called request inside there, and we're going to

add in one more property to that interface.

We're going to say that in request object might have.

So it's an optional a current user property.

And if it is defined, it's going to be set to a user entity instant's.

Once we add that in, we can then scroll back down and we'll see that the area down here is now gone

away.

So that looks pretty good.

OK, so I think that we've got everything around the middle, we're set up.

The last thing that is still a little bit funky inside of our application is the fact that inside of

our user entity so here's the user entity file.

We are still saying that everyone who signs up for application is going to be an administrator by default.

So we will eventually change that.

But right now, I'm going to leave it in here just to make testing or application a little bit easier.

OK, so that's pretty much it around authorization for right now, they're going to take a quick pause

and then move on to our next handler in just a moment.
```
