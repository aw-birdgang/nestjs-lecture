## script
```bash
In two of our different request handlers, we need to add in some code that will extract some information

from the incoming request.

So for the post request handler, we need to extract the body of the incoming request.

And on the get one down here, we need to extract that little wild color card part out of the route

of the incoming request.

So when we make use of Nest to extract information out of an incoming request, we're going to use a

couple of different decorators.

Let me show you a couple of diagrams and help you understand how these things work.

All right.

So first, a very fast reminder on how HTTP requests work.

In general, a request is really just a body of text.

A couple of different lines of text.

The first line is referred to as the start line, it has the method of the request and the full route

and also has the protocol used.

We then have a couple of lines for headers on the request.

And then if we have a bot or a post or a put or a patch or a couple of different other kinds of requests,

the requests might also have a body as well.

So out of all the stuff we might want to extract the body, we might want to extract specific headers,

we might want to extract maybe part of a query string, or we might want to extract some new URL parameter.

So a wild card, something like five right there for each of these different parts of information.

Nest has a different decorator available for us to use.

So if we ever want to extract a parameter or essentially a wildcard value out of the URL of the incoming

request, we can use a decorator called Parum.

When we use the Perram decorator, we're going to pass in a string that describes which part of the

URL or which wildcard we want to access.

So if we have a wild card, part of the URL called Colen ID, we would use the Perram decorator with

a string of ID.

If you want to extract part of the query string, we can use the query decorator.

If we want to get access to the headers of the incoming request, we can use the headers decorator.

And finally, the body decorator if we want to get information out of the body of the request.

So all these are different decorators that we can import from the common library up here at the top.

Let's try to use the body decorator right away and the Perram decorator to extract the body of the request

for the post request right here and the ID wild card for the last root handler right there.

So to get started, I'm going to first import the body and param decorator's now how we use these decorator's

is a little bit different than how we've already made use of controller the and the Post.

This controller, one up here is a class decorator, because we are applying it to an entire class,

the Git and the post ones are referred to as method decorators because they're being applied to an entire

method.

But body and param are what we refer to as argument decorators.

So we're can use these in a slightly different fashion.

We're going to put them in the argument list right here.

So for the post request, where we want to get the body of the incoming request, we're going to say

at body.

Then body and I'm going to get this thing for right now, a type of any.

So now whenever we get an incoming request that's going to go to this root handler.

Nest is going to automatically extract the body of the incoming request and provide it as an argument

to a root handler called body.

So inside of here we could do a console log of body.

We're going to use the param decorator on the bottom root handler down here in a very similar way.

So I'm going to say at Perram ID.

We're going to receive an argument called IID, I'm going to annotators type as string, and then once

again inside of here I'll do a console log of ID.

OK, so now I want to test out these two root handlers, and I want to make sure that we can control

all of the ID of the incoming requests in this case, council, log out the entire body.

So let's open up our API clients and test these two things out.

All right, now, remember, I am using the V code rest client extension, so whenever I say let's go

over to our API client, I'm going to be opening up a file like this and using this thing to send off

requests.

If you are using postmen, you're going to use Posman instead.

If you are using some other API client, you're going to use whatever other client that is.

So, again, when I open this file, you might not be doing the same thing.

You might be opening up postman or something else.

OK, so let's give this a shot, I'm going to first try to make a post request to localhost three thousand

messages with a body of content.

Hi there.

So if I send off this request, I'm still going to get back an empty response.

But if I go over to my terminal where my server is running, I should see a log of the body of our request.

Sure enough, I do right there.

Perfect.

Likewise, if I make a get request to messages, anything, so anything right there and send that request

off, still going to get an empty response.

But if I go back over to my terminal, I can see the parameter or the URL parameter console logged out

as well.

All right, so that's pretty much it.

So unless we make use of these different decorator's to extract different parts of information out of

the incoming requests, we're going to use this body decorator and the Perram decorator quite a bit

throughout this course.

There are not many scenarios where we need to make use of headers just because the applications that

we're going to build in this course don't really need to access any headers.

Same thing for a query as well.

In general, we're not going to use the query decorator too often, but just, you know, it does exist.

You can use the query decorator to get access to the query string at the incoming request.

Let's take a pause right here and continue on in just a moment.
```
