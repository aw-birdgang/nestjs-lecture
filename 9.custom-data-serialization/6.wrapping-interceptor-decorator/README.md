## script
```bash
As I mentioned, very last thing we're going to do here, we're going to try to refactor or create something

new.

Who knows what?

So we don't have to write out such a long line of code.

So to refactor this, we're going to create our own very, very simple custom decorator.

This custom decorator is going to essentially run exactly that, or we're just going to kind of condense

everything down.

So it's going to end up as a very, very small and very convenient call.

So let's go back over to our interceptor.

We're going to create the decorator in there.

And again, this decorator is going to be extremely simple.

OK, so back inside the interceptor file at the very top, I'm going to export a new decorator behind

the scenes, decorators are playing functions.

So what we are really going to export here is, well, just a plain function.

We're going to export a function called serialize.

To this function, we're going to pass in the detail that we want to use for civilization, so I'm going

to accept an argument called DTO.

And again, I'm going to markets type as any we're going to fix up these any types in just a moment,

by the way.

So then inside of here, we're going to return exactly that right there, more or less exactly that,

except for user on the end.

So inside of Serialize I'm going to return.

Use interceptors.

We're going to put in a new instance of Serialize interceptor and as the details to be used, we'll

pass in the detail that was passed to the serialised function.

Like so.

And that's our decorator.

Now, if I lost you during any step of this process of all this interceptor stuff, I would expect might

have just lost you right there.

So if you're not super familiar with decorator's, don't sweat that much.

All we're doing here is kind of wrapping up this really long decorator inside of much more simple and

straightforward.

One last thing we need to do is make use of our new custom decorator that is very small and very convenient.

So let me show you how we would use this.

Back inside of our controller at the very top.

I'm no longer going to import the entire serializer interceptor.

We don't need that anymore because we created this new custom decorator.

I'm going to instead import just the decorator.

Then back where we set up our interceptor, rather than having this very long line of code, we're going

to instead put in just at Serialize user dō and that's it.

I think you'd agree that this is far more compact and easier to read than the line above it.

It's now one last test, I'm going to say the file go back over to my API client, send the request

off.

Yep, still works.

OK, so this looks good, but one or two outstanding issues.

First off, back inside of our interceptor, we have the type of any all over the place.

I'd like to fix that up to some degree.

I would also like to make sure that we apply this serialized decorator instead of a controller, not

only to this one single request handler right here, but to probably all of our different request handlers

inside of here because they're all returning users in one way or another.

So just two last steps here in just a moment.
```
