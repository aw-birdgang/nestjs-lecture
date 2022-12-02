## script
```bash
We've got the basics of interceptors down, so now we're going to go back and start to add in some actual

serialisation logic.

Now, I've been saying that inside of our interceptor, we're going to take the response that's coming

out of our request handler.

We're then going to take that plane object, turn it into our data or something like that, turn that

into a plain object and that goes into JSON.

Let's not 100 percent accurate.

So let me help you understand what's really going to go on inside of our interceptor.

If you go back to your terminal and take a look at the console log that is coming from that map statement

at the bottom.

So here's mine right here, it said, I'm running before response is sent out and we see the word user

right there.

That means that we are still working with an instance of the user entity inside of our interceptor.

So putting that in diagram format is our interceptor coming into it.

We are getting an instance of the user entity.

Now, normally, whenever we finish all of our request handlers, whenever we finish all these interceptors,

Nest is going to take whatever comes out of all this stuff and turn it into JSON for us.

So usually this user entity instance will be turned into JSON, but we're going to kind of hijack that

process.

We're going to put in an extra step inside there.

You and I are going to take that user entity instance.

We're going to convert it into a user instance.

This user instanced thing is going to have all of our different serialization rules.

It's going to have the rules that say, OK, I want to show the ID and the email, but not the password

and so on.

We are then going to directly return that instance, then NASA's is going to take that instance, it's

going to turn it into Jason automatically and send that back in the response.

All right, so now we've got the general idea, let's go and create a user DTO, so this will be very

similar to all the details we have already put together.

The only difference is that this time around, we're going to list out properties inside of it that

we want to include in our responses.

We are also not going to add in any validation to the DTA because we don't really need to validate outgoing

data.

So to get started.

Back inside, my editor.

I'm going to find the directory inside there, I will make a new file called simply user Dito Dotts.

So you'll notice that I've chosen a very simple name of user Dotto.

I'm not using something like show user or view user or anything like that.

You can give a more descriptive name to this if you want.

The reason I'm using a very simple name is that I want this to be understood to all the other developers

inside my app.

This is kind of the default way of displaying or showing a user to the outside world.

So then inside of here, we were going to export a class of user DTO and inside of here I'm going to

list out all the different properties that I want to share with the outside world.

So I'm going to put in an ID.

That's a No.

And an email.

That's a string.

I'm going to annotate these two properties with some decorators.

We're going to eventually use the information from these decorator's to say, hey, these properties

should go to the outside world.

So at the very top, I'm going to import.

Expo's.

From Class Transformer, you might recall that back inside of our entity a little bit ago, we used

a slightly different directive called what was it exclude?

I think it was exclude the exclude directive means do not try to share this property.

Expo's mean specifically, do share this property.

So inside of our dittos, we're going to explicitly say, here are the properties.

I want to be sent out inside of responses.

So I'm going to use that expose decorator.

Right there.

And right there.

OK, so there's our ditto.

So now all we have to do is back inside of our interceptor, we're going to import this class definition.

And whenever we get in a user entity instance, we're going to do this conversion process.

We're going to take that user entity, turn it into an instance of this, and then return it.

When Nest tries to serialize this object or turn it into JSON, all these decorator rules will be applied

and we're going to only expose the ID and the email.

OK, so now back inside of our interceptor.

At the very top, so here's the interceptor at the very top, I'm going to import the we just put together.

I'm going to import user.

Etto.

From users, ditto user Dotto.

And I think I've probably got a typo in that path right there, up one directory that's better or should

be better Odos.

All right, now I've got it.

By wiring up the user directly to our interceptor, that means our interceptor is not going to be able

to serve up any other kind of data.

So we won't be able to use this interceptor anywhere else.

Don't sweat it.

We are going to make a quick refactor to the interceptor in just a little bit so that the detail that

we use is not hard coded to the interceptor.

So now inside of our intercept method, I no longer need to do anything before we run a request handler.

I only put that console log in there just to help you understand what was going on.

So I'm going to remove that entire block of code just to keep things a little bit more concise.

Then inside this map statement, I don't really need the comment or console log in there anymore.

It's going to delete that stuff.

And then finally, inside this map statement, this is where we are going to take the incoming user

entity, so that's what this data argument right here is, we're then going to turn it into an instance

of the user.

And to do so, we're going to use this method class to plane.

And you know what?

I just realized I mixed that up.

We don't want class to plane.

We actually want plane to class.

That's better.

So plate glass, my mistake, I reverse the two words.

And finally, inside the map statement is where we are going to do this conversion process, so we are

going to return.

Lane to class.

We want to turn data into an instance of user data that we're going to provide user DTO.

As the first argument.

And then our user entity as the second argument.

We are also going to put in a little options object inside this options object, I'm going to say exclude

extraneous values of true.

This setting right here is the absolute key to making sure everything works as expected by adding the

setting, it ensures that whenever we have an instance of user and try to turn it into plain JSON,

it is only going to share or expose the different properties that are specifically marked with that

exposed directive.

So if there are any other properties, they're going to be absolutely removed immediately and it's all

thanks to exclude extraneous values.

If we did not have that property on there than any other properties inside of our user instance would

would be shared, they would be sent inside the outgoing response.

OK, so that's it.

We've now got everything put together.

So now let's test this out.

I'm going to go back over to my API client.

I'm going to send off a get request.

And sure enough, I still do not see the password, which is perfect.

That's exactly what we want, just to make sure that this is working as expected.

I'm going to try going back into my user DTO and I'm going to delete that entire or how about just coming

out, save ourselves some trouble here, the entire email property.

Now, if I save this and make a request again.

Now we only get back the ID perfect.

OK, so this is definitely a proof of concept, it shows that we've got something that can kind of do

the same serialisation logic as the built in nest solution.

So now we need to make a couple of different improvements.

We need to make sure that our interceptor.

Is not hard coded to always use user DTO because we might want to use this interceptor in many different

locations inside of our app, we might want to try to format outgoing responses that return not only

users, but maybe also photos or messages or blog posts or whatever else our application does.

So one more quick pause.

Are going to do a little refactor to our class in just a moment to make this thing a little bit more

reusable.
```
