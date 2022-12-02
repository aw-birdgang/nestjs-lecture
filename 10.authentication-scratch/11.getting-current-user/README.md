## script
```bash
In this video, we're going to put together another root handler just to make sure that all this session

stuff is working as expected, the goal of this handler is to tell the user who they are currently signed

into our application as let's start putting this thing together.

And I think you'll have a very good idea of what we're doing very quickly.

So right above my create user method, I'm going to add in a new handler that will deal with get requests

to who am I?

I'm then going to tie this to a handler called Who Am I?

Inside the argument list, we're going to receive our session object.

And then inside the body, I'm going to return the results of this DOT users service, find one with

session dot user ID and that's it.

So if a user is signed into our application, that means they have a defined user I.D. property inside

their cookie.

So we're going to take that section object, look at that user ID property.

We're going to look up a user inside of our database with that ID and then just return the result.

If a user is not signed in, then session user ID will be something like undefined and hopefully we

will not find a user who is who has an idea of undefined or anything like that.

OK, so to test this out, I'm going to say the file, I'll then go back over to my API client and anywhere

inside if you're going to add in a new request.

It's all put in a comment that says, get the currently signed in user, this will be a get request

to.

Localhost three thousand.

Off, who am I and now if I send off that request, I should get back whoever I am signed in as perfect.

If I sign in as a different user and make the same request, I should then get back a completely different

response.

So I'd say this looks good and it is proof that our application is pretty much working as expected.

So now one of the last big things we're going to take care of is making sure you can sign out of our

application as well.

So let's take care of that in just a moment.
```
