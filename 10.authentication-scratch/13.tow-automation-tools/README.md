## script
```bash
Our authentication logic is looking pretty good, and we've got a lot of very common features that just

about any authentication system needs, so we have sign up, sign in, sign out, and we can also return

who the currently Sinden user is.

But there are two other things that are authentication system probably needs to work just perfectly.

Unlike the other things we've worked on so far, which are all root handlers, these last two features

are going to be a little tool so we can use elsewhere inside of our project just to automate a couple

of authentication related tasks.

So we're going to create an interceptor or a decorator or something like that.

We're going to create two of them.

The first one is going to reject requests to certain route handlers.

If the user is not signed in, then the second one is going to automatically tell a request handler

who the currently signed end user is or essentially who the person making the request is.

So, again, these are going to be functions or interceptors or decorators or something like that to

just automate these tasks inside of other root handlers that we eventually put together.

So the things we're actually going to create for each of these, the first one, we're going to make

something called a guard.

A guard does just about exactly what the name implies, it guards a route and it forbids access to that

route if some condition is not met.

So our guard is going to check to see if whoever is making a request to a particular route is signed

in.

If they are not signed in, we're going to reject the request.

For the second, something to automatically tell a handler who the currently Sinden user is, we're

going to have to create two different things.

One is going to be the interceptor.

The other is going to be a decorator.

Now to these two different features, we're going to first work on that one, this is definitely the

more complicated of the two, which is why we're going to take care of it first.

So let's take a pause right here.

When we come back, the next video, we're going to start working on a custom interceptor and decorator

to automatically tell us who the currently Sinden user is.
```
