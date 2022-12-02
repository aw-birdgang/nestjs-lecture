## script
```bash
Right now, our interceptor is being applied to one single controller, so if we start to add in some

additional controllers, we'd have to make use of that same use interceptors line inside of every single

one of these different controllers, because the interceptor is only being applied to one controller

at a time.

We'd refer to it as being controller scoped.

So this instance of the interceptors being applied to that controller, this one is applied to that

one and so on.

This is very tedious because we just have to apply the interceptor all over the place, over our entire

application.

So let's take a look at a better way of setting this up rather than having a controller scoped interceptor.

We're going to make our interceptor globally scoped instead.

So the one copy, one single instance of our interceptor is going to be applied to every request that

comes into our application, regardless of what controller that request is going to.

That's going to significantly, significantly simplify the amount of code or the amount of times we

have to set up the interceptor, which is definitely going to be great.

OK, so to make this thing work, we're going to go back over to our controller, we're going to find

that use interceptors, sign at the top and just delete it.

Well, then also delete the import for current user interceptor.

And I will also delete the import for use interceptors.

So now if we make a request for our application, our decorator is not going to work as expected because

we are currently not taking a look at the session and finding the relevant user.

To reapply our interceptor on a global scale, we're going to go back over to our users module.

Inside of here, I'm going to go to the top and add in a new import statement or a very special thing

called App Interceptor, all capitals with a lowercase in between.

And we're going to import this from next James for.

And then going to find my providers array right here.

I'm going to find where we added in current user interceptor.

I'm going to wrap that thing with an object.

And assign the interceptor to a property called use class.

And then I'm also right above that, can put in another property called Provide.

App.

Interceptor.

Intr.

Sceptre, there we go.

So that is how we set up a globally scoped interceptor.

We apply an object Ariadna object to the provider's array that has a provide property and a used class

property.

So now any request that comes in anywhere to our application, not just controllers that are defined

by this module, but anywhere inside of application will have this interceptor applied to it.

So let's save these different files and go try to make another request now.

So if I try to get my currently signed end user, I'm currently not signed in, so that doesn't work.

Let me first sign in.

There we go.

And now if I get my currently signed end user.

Yep, we're all set.

I can sign out.

If I make that request again, empty response, perfect.

OK, so that is a globally scoped interceptor.

Now, the one downside to this approach is that there might be some controllers out there that don't

care about who the current user is.

In those cases, we are going to make a request to our database to find the current user, even though

the given controller might not care about it or even individual handlers might not care about the current

user.

So there are definitely upsides and downsides to this approach where it kind of overarching data in

some cases, but it definitely makes our app easier to develop for.

OK, so I'd say this is looking pretty good right now.

So now the very last piece of art, the authentication system we have to add in, we need to make sure

that we can reject requests to certain handlers if the user is not signed in.

So let's take care of that very last step around.

Authentication in just a moment.
```
