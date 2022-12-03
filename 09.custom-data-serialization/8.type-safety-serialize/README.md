## script
```bash
As I mentioned, the last thing we're going to take care of is try to get rid of some of these different

any type limitations.

And I got to be honest with you, this is really challenging and really hard.

The primary reason is that applying any kind of tight safety around decorator's and typescript is really

challenging right now.

At the time I'm making this video, typescript doesn't really have great support for making use of types

around decorators in general.

In addition, inside of our intercept method, we've got that map call right there.

And remember the argument called data.

That is the outgoing data that is inside of our response.

So it's kind of hard for us to get information from where we apply our decorator right here and somehow

relate that decorator to what is being returned from the method that it is attached to.

That's pretty darn challenging, though.

Rather than trying to remove every instance of any inside of here.

Let me set a little bit smaller target.

Remember, one of the primary goals of types in typescript in general is to just capture errors or help

us catch errors before we actually run our code.

So let me show you one very basic error that we can make right now.

Without a doubt, back inside my user's controller.

I'm going to find where we made use that serialize decorator.

So right now, I have my user D2 inside of here.

But if I put in any kind of value inside of here, like anything whatsoever, I don't get any error.

But naturally, if we try to run this, we're going to very quickly get an error when our code actually

gets executed.

So for right now, at least as just a little bit of a fix up, at least some improvement, let's at

least try to make sure that whenever we make use of the serialized decorator, whatever we pass to it

must be a class.

That's the only requirement we're going to put in here.

We're just going to say whatever he put in, it's got to be a class.

So to enforce that restriction back inside of our interceptor file, right above our decorator of Serialize,

I'm going to define a new interface.

Called class constructor.

And then inside there, I'm going to put a new dot, dot, dot, args, Colen, any as an.

And then put in just a plain object like so.

So this is an interface that means any class, basically any class whatsoever, as long as you give

me a class, I'm going to be happy so we can now make use of this interface as the argument for detail

right here.

I'm going to put in class constructor.

Now, if I see this and go back to my users controller now, if I try to call Serialize with, say,

a string or a number, I will in fact get in there.

So at least a reasonable, if very small improvement, but at least we're able to capture some very

basic errors.

OK, so, again, ideally, we would be able to put in some more tight safety in this, but because

we are making use of decorator's and typescript, unfortunately, very, very challenging to do as it

stands today.

All right, my friends.

I think that's pretty much it for all this stuff around interceptors and dittos on echoing responses

and whatnot.

So now here at the conclusion of at least this stage, because trust me, we still have a ton to do

inside this application.

We have a decorator we can put either on an entire controller or on an individual right handler.

And that decorator will take the outgoing response and serialize it based upon some rules.

So we put inside of that DTO.

So I do expect that you will use this a decent amount anytime you want to format outgoing responses.

So now we've got this done, quick pause right here.

Move on to our next feature in just a moment.
```
