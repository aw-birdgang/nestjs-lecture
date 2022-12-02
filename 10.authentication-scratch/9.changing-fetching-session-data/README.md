## script
```bash
I'm back inside of our users controller, so instead of here, we're going to understand how to make

use of cookies session and the session object that it creates.

So let me tell you what we're going to do as a very quick exercise in this video.

We're going to write out a little bit of code and then delete it by the very end of the video.

So I want to create a new get request handler inside of our users controller that's going to have a

root of something like off colors.

And we'll put in a wild card token right here.

So colon color.

So that might be something like red or blue or whatever else inside of our root handler.

We're going to read in that wild card and then apply it to the color property of these session object.

So this right here should be the color param from the incoming request will then add in a second request

handler to take a look at the cookie and really just take a look at this or the color property on the

session.

We're going to print out whatever color is stored there.

So let's give this a shot.

Back inside of users controller, I'm going to go to the very top and from Nest Coleman, we're going

to import another decorator called Session.

It's a very similar to how we have many other decorators for extracting information from incoming requests.

Session is yet another.

This is going to work with the Cookies Session Library to get us access to this entire object inside

of any of our different root handlers.

Downside of our controller.

Right above our post sign up route, I'm going to add in two different route handlers, the first one

will be a get two colors, Kolan color.

We'll call this one set color.

Inside of the argument list, we're going to first extract that color parameter right there, so whatever

wild card for color is provided.

So let's say at Perram Color.

Color, there'll be a string and then as a second argument, we're going to receive this entire session

object, so we'll say at session.

Too many S's on there.

There we go.

I'm going to call the argument session, and right now I'm going to give it a type of any.

So then inside of color, we're going to receive that color wild card and use it to update our session

object, so we'll say session.

Not color is color, and that should be it.

Then we'll set up another route handler where we're going to read or just print out or just return whatever

color is stored on the session object, so I'll define a second route handler called GET.

Colors.

I'll call the method itself get color.

We're going to receive the session object as an argument.

And then inside of here, we'll return session dot color.

And that's it.

So the only goal here is to communicate or show to you with a very simple example how we can store information

on this session, object and then retrieve it on follow up requests very easily.

Let's now go over to our API client.

We're going to try to call both these handlers and just make some observations about the entire process.

So inside of my API clients.

I'm going to go down to the very bottom of this file.

But in and you coming down here and say set a color so it will be a get.

If you look close, three thousands of colors and I'm going to first set my color to red.

Then I'll make a up request down here to get the color.

And this will be a get to.

Local, three thousand of colors.

OK, so let's try this out.

When I send off the first request, I'll see that inside my list of response headers.

I've now got a set cookie header.

So there's a very long string of random numbers and letters right here that is encrypting our object

as one property.

And inside of it it's color and it should have a value of red.

So now when we make our follow up request, that will string right there is going to be attached automatically

to the outgoing request.

Cookie session is going to receive that encrypted string right there and decrypted into our session

object.

And so now at this point in time, the color property on it should be red.

So instead of our request and we're going to take off that red string and just return it.

So if we send off the second request, we should get back simply red.

Very good.

And of course, we can test this out as much as we want.

So instead of colors red, we can do blue or some really long string.

Send that off.

Then do the second request and get the string right there.

OK, so this looks great, this is proof that we can take some information stored inside the cookie

and then retrieve that information on a later follow up request.

So at the very last thing I'm going to delete the two requests we have inside of my request file right

here, because, again, that was just a very quick example.

And then inside of my controller, once again, I'm going to remove the two root handlers we put together.

If you want to, you can leave these things inside of you.

They're not going to conflict with any other code.

I just want to have a very concise example for you to walk away with.

And we're not going to use these handlers anymore.

So me personally, I am going to delete them.

OK, so now we've got a better idea of what all this session stuff is all about and how we can store

information between different requests.

Let's go back in the next video.

We're going to update our user insigne in route handlers inside of both those handlers after user successfully

signs up or signs in inside of our session object, we're going to store the user ID.

Of whoever the user just signed up as or whoever they just signed in as, so let's take care of that

in just a moment.
```
