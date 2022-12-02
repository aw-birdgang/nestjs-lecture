## script
```bash
Our controller is now looking pretty good inside of our post request handler, we are receiving the

body of an incoming request.

Remember that around this post request handler, we had said that we wanted to do some validation of

incoming data.

So whenever we have an incoming post request where we should have somebody that has a content property,

that is a string, we had said that we probably need a pipe here to validate that incoming body.

And if that data was somehow invalid, for example, if there was no content property or if content

was instead maybe a number or something like that, then we should use a pipe to somehow reject this

incoming request and send it back to whoever made the request before the request gets to our controller.

So that's exactly what we're going to use API for.

We're going to validate this data that is coming into our application before it ever reaches our root

handler.

So that guarantees that by the time we run our create message method right here, we know that our body

will definitely be an object that has a content property that is a string.

Now, we can definitely create pipes on our own manually, but usually instead we're going to rely upon

a pipe that is provided for us by Nest itself.

So this pipe is called the validation pipe.

So, again, this is a pipe that is built into nest.

It handles validation for us.

You're probably gonna use this on just about every project you ever work on.

And this is what we're going to use inside this course for doing the vast majority of our request validation.

So right now, we're just going to wire up this pipe.

We're going to use it inside of application.

And I'll show you how we actually make use of it in just a moment after that.

So to initially set up this pipe, we're going to go back over to our Ed and find the main ducts file.

Inside of here at the very top, we're going to add in another import or validation pipe from at next

James Common.

Then right after we create our application, we will add in app dot use global pipes.

And to that function, we are going to pass in new validation pipe like so.

And that's pretty much it, so the function call right here of U.S. global pipes is pretty descriptive.

We can apply a pipe to just one single root handler if we want to.

But in this case, we want to attempt to validate all incoming requests.

So we're going to apply this pipe globally.

So the validation pipe will attempt to validate every single incoming request that comes into our application.

Now, this doesn't mean we need to add in validation rules to every single root handler.

The validation pipe is very intelligent, and if we don't add in some validation rules to some particular

handler, the validation pipe won't run on it.

So in other words, this is kind of an opt in thing.

We're going to run this code or use this line of code right here, but we're only going to validate

very certain routes at the end of the day.

OK, so that's the initial wire up.

Now let's take a pause and take a look at how this pipe actually works and how we apply some validation

and set up validation rules in the next video.
```
