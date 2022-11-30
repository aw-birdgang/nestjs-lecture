## script
```bash
The last thing I want to show you inside this application is some stuff around the app controller,

specifically the controller decorator and the get decorators.

Right now, we have called the controller decorator and the decorator and the past any arguments to

them.

This causes nest to set up a root handler that is going to respond to our root root.

That's why we named this method right here, get root root.

So we can also add in some routing rules through the controller decorator and the decorator.

So let me just give you a very quick example.

I'm going to pass a string to this decorator of.

ASDF, just keep it very simple, notice the slash in there as well.

If we then see this file and go back over to our browser.

And refresh the page now, we're going to get a four, a four not bound air, so by adding in ASDF right

here, we have changed how this route handler works.

Now, this route handler is going to respond to get requests to a route of ASDF.

So if I instead make a request to localhost three thousand ASDF, now we are successfully make your

request to that same root handler again.

We can also use the same technique at the controller decorator up here as well, so I can put in something

like Agap right there.

Any route that we put inside the controller decorator is going to apply to all the route handlers that

we define inside of this controller.

So now to make a request to that route handler, we would have to make a request to slash up ASDF to

test that out.

We'll go back over to our browser.

Now, if I refresh the page, we again get that for a four.

But if I change my request to app ASDF once again, our application works.

So we're going to use the controller decorator to control some high level routing rules that are going

to apply to all the different route handlers that we set up inside this controller.

And then in theory, all the different methods we define inside this controller are going to have a

different route.

Let's try now creating a second route.

So I'm going to define another method here called how about get by there.

Romit, I will return a string of by their.

And then right above it, I'll add in another get decorator, I'm going to say if anyone makes a request

to AGAP.

By we will respond with the text of by their so again, I'll say this back over to the browser and I'll

make a request you app by and I see by their upir.

All right, so now we've got some basics around routing with controllers.

Let's take one more pause right here and then move on to our next application in just a moment.
```
