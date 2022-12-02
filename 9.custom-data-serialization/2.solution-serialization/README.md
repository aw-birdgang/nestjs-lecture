## script
```bash
Now that we have implemented the next recommended solution on how to hide that password property, we're

going to take a look at some downsides with this approach and then start to implement a little bit better

way of dealing with this.

OK, so first, here's the big issue.

I want you to imagine that at some point in time we decide to start storing more information around

our users, maybe their age, their name and so on.

And then at some further point time, maybe we decide to put together some admin functionality inside

or out.

So maybe there are administrator users.

An administrator should be able to look up a user and see a lot of detailed information around them

to service that we might decide to add in a new route handler to our application.

So something like admin off to if a user makes a request to that, we're going to make sure that the

request is coming from a valid administrator.

Well, then set up a customer handler just for that route.

Nothing will reach out to our user service, find a particular user, and then send back a ton of information

related to that person.

So their ID, their email, their age, their name and so on.

But that's just the admin route handler.

We still might want to have roots inside our application that allows some random person to look up another

user but not see all that info.

So we still probably want a public route to look up a very particular user, but only get back just

the ID and the email and not the age in the name.

So this route handler still called maybe something like Finisar would reach out to the exact same user's

service and try to find one particular user.

So now the whole problem here using the nest based solution is that we're saying that we want to take

the same kind of user entity in both cases, we want to send back that same user entity.

But between these two different route handlers, we want to send back very different sets of information

around that user.

In one case, we want to include a lot of different properties.

In the other case, we want to include a very few.

So we really need to customize that, exclude DirecTV and how it gets applied on the user entity instance

based upon which route handler is being accessed.

And that is really not possible by using the approach recommended by Nest.

So we're going to take a look, as I mentioned, at a slightly different approach that's going to address

this whole issue very, very easily.

So let me show you a diagram of what you and I are going to do.

All right.

So we are no longer going to tie any formatting information or anything around serialisation directly

to our user entity instance, because it's pretty clear that we cannot attack or attach any view related

logic to that entity because it's really not going to scale and serve multiple different route handlers

appropriately.

Instead, you and I are going to create a custom interceptor.

And remember, in Interceptor is a class that's going to mess around in some way with the response before

it gets sent back to someone making the request inside of this custom interceptor.

We are going to serialize or turn our user entity instance into a plain object and then eventually into

a plain JSON by using some serialization rules set up inside of a DTO.

At this point time.

Remember, we've only seen dittos around handling incoming requests, but the term DTO stands for data

transfer object dittos in general.

In other words, in other languages, in other frameworks are not only used for handling incoming data,

dittos are also used in other languages, other frameworks for handling the formatting of outgoing data

as well.

So we are going to create a user DTO that describes exactly how we want to format a user entity.

In other words, what properties we want to include for a very particular root handler.

So maybe just one user, DTL.

Or the admin controller, so we might have one, ditto for this one right here that says, let's pull

off the ID, email age and name for every user, and then we might create a second Itoh with a different

set of our serialization rules on it.

The second you might say, well, if we're trying to serialize a user or this public route, we're going

to only pull off the ID and the email.

We're going to apply this custom interceptor to each of our different route handlers, so on a route

handler basis will be able to describe exactly how we want to format our outgoing Jason.

We can very easily say that we want to include this property, but not that one and so on.

So that's the idea.

Custom interceptor, we're going to wire up our own custom dittos to describe how to serialize these

different user entities so that we understand what we need to do.

Let's take a pause right here and start to work on this custom interceptor in just a moment.
```
