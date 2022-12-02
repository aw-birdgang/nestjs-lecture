## script
```bash
At long last, we are all done with the initial take on this user's related stuff, so remember the

entire goal of all this stuff around the controller, the service and so on, was to just give you a

very solid and straightforward example using type Aughrim for some very basic operations, like getting

records, updating records, deleting records and so on.

So now that we've got these rather examples put together, we're going to get back on track.

Remember, we had originally said that all this user related stuff was going to be tied to a user authentication

system.

And we had said that we were going to put together these two root handlers to handle users, sign up

and sign in.

Only after we started those root handlers do we start that diversion into doing all these other operations,

like finding a user, updating a user, deleting users and so on.

So all those extra routes, they really were just extra routes that are not necessarily required to

get our application working, as we expect.

Now that we've got all that extra stuff complete, we're going to get back on track and start to focus

on authentication in this video.

OK, so for authentication, let's first begin by taking a look at a couple of different diagrams and

understand the general flow of how we're going to deal with off insider application.

All right, so here's the overall flow, I first want you to understand how things are going to kind

of ping pong back and forth between a client and our server, and we'll start to focus on where we are

going to implement some logic around authentication inside of our server.

So, in other words, are we going to play stuff inside of a controller or a service or where?

OK, so here's the overall flow.

Not worrying about services or controllers or anything like that just yet.

So at some point in time, some client, be it an API client, a mobile device, a Web browser or whatever

else, is going to make a request for application and intend to sign up to our app.

So that'll be a post request to sign up.

We'll have an email and password inside their.

Then instead of our server, we're going to take a look at the email that the user is trying to sign

up to our application with, we're going to make sure that the email is not already in use.

So right now, we are allowing users to have the same exact email.

But we're going to update that in just a moment.

We're going to make sure that every single user has a completely unique email address.

If the user is trying to sign up with an email that's already in use, then we're going to immediately

return in there.

Otherwise we'll go on to our next step, which will be to encrypt the user's password.

So, as I mentioned many times, we are going to store all of our passwords securely inside of our database.

Once we've encrypted the user's password, we're then going to create a new record inside of our database

saying here's the user, here's their email and here's their encrypted password.

Then we're going to send back a response to whoever made that sign up request, we're going to send

back a cookie that contains specifically the ID tied to this brand new user record.

If you are not super familiar with cookies and how they work.

Don't sweat it.

We're going to have a lot of discussion around cookies in just a little bit as soon as we start to take

care of that step.

The only thing you need to know right now around cookies is that a cookie store's a very small amount

of information.

Your browser or mobile device or whatever else is going to automatically manage this cookie for you.

Any time you make a followup request from your browser, mobile device or whatever else, you're going

to automatically have that data inside the cookie attached to the request.

So sometime later, if we try to make a request back to our application again, maybe a post request

to create a report, the information inside that cookie that we had originally sent back, so user with

an idea of 50 is going to be attached to that request.

So we're going to receive that request.

And the first thing we're going to do on our server is take a look at the information stored inside

that cookie.

We're going to make sure that the user did not tamper with the information inside there or anything

like that.

Once we verified that the user did not mess around with the cookie data, we're going to look at the

user ID inside the cookie and we're going to affect that user out of our database.

So the user with ID 50 and we should be guaranteed that whoever is making their request to us is the

user who originally signed up and was assigned an ID of 50.

So that's pretty much it, that is our authentication flow.

Now, this is an extremely standard authentication flow.

This is how authentication works in a wide, wide majority of applications out there, not just in SJS.

So all the techniques we're going to learn here are directly applicable to other frameworks, languages

and so on.

So now that we understand the flow on a very quickly discuss where are we going to write all the code

for this?

Well, without a doubt, there are a couple of different steps right around here on our server that's

going to involve working with the user stored inside of our database.

We've already got a lot of infrastructure inside of our project right now around querying, updating,

reading and so on users inside of our database.

So the first thing we should probably decide is whether or not we want to add a whole bunch of authentication

related logic into our existing users service.

So that's option number one.

So let's take a look at a diagram for option number one.

This is what would be option number one for implementing a lot of this authentication related stuff.

We can add in some additional methods to our user service.

So we might have methods inside there called something like sign up or sign it.

So presumably sign up would take in an email and a password and it would go through these steps right

here check to see if the emails and use encrypted password store record and then send back probably

just the user ID.

When I say send back, I mean send it back to the controller and the controller would be in charge of

actually setting the cookie and whatnot.

That's option number one now option number two is a little bit more involved, a little bit more complex

in option number two, we could instead create a brand new service called the Authentication Service.

And this service would be in charge of implementing a sign up method and a sign in method.

These two methods definitely need to eventually reach into the database and find users, create users

and whatnot, we could have the service make use of our users repository itself.

But instead, well, we've already got a lot of that data fetching or database access logic implemented

inside our user service.

So rather than implementing all that stuff inside the service, we can have the office service just

rely upon the user's service.

That's option number two.

So obviously, the question is, should we go with option number one or option number two?

Well, for a very small application, I would say that option number one makes a lot of sense.

We've got one single location tied to everything related to users.

But as soon as your application starts growing in size, I really recommend going with option number

two.

And here's why.

Let's imagine that at some point in time, we want to add in some more features tied to users.

So maybe you want to have users have a list of preferences.

Maybe we want to implement, say, password reset.

Maybe we want to add in who knows what other feature tied directly to users.

If we right now add in more functionality around our users directly to the user service, that kind

of implies that all these additional features we might add in in the future will just be additional

methods inside of our user service.

So we might just add in more stuff tied to preferences, more stuff tied to password reset, and eventually

more methods tied to whatever other features we have that are directly related to users.

So this is definitely a bad pattern to get into because our user service is just going to grow in size

nonstop.

And it would be kind of hard to eventually say, hey, you know what, we should probably split these

things out into their own separate services.

So, again, for a small application, option number one, definitely fine.

But for anything larger or anything that might be larger, I think option number two is a little bit

better.

So with that in mind in this course, because I really want you to I want to show you how to build larger

applications, we're going to take option number two.

So we are going to create a brand new service called the Authentication Service.

It's going to be responsible for everything related to signing up and signing in.

And it's going to rely upon some functionality that we already built into the user's service.

OK, so I think we've got our path set, we know what we're doing here, so let's take a pause right

here.

We're going to come back the next video and get started on the authentication service.
```
