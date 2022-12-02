## script
```bash
We are all done with our messaging service and the repository, so now we need to create an instance

of the service and give it to the controller.

The controller is then going to receive incoming request to our three different route handlers and depending

upon which handler is called, the controller is going to answer the request by using some data that

it gets from the service.

So let's go back over to our Ed.

We're going to find the controller file.

We're going to make sure that this thing gets an instance of the service and uses it to respond to requests.

OK, so back over inside my editor, I'm going to find my messages controller file here it is right

here, and then going to import my service at the very top.

So messages service.

Then inside the controller, we're going to create an instance of that service in the same way that

we created an instance, the repository inside the service itself.

In other words, we're going to give the controller a service using some not very good code.

So we're going to once again have the controller create a copy of the service in a not good way.

We are going to come back very shortly and refactor this to use the way that we're supposed to do things

inside of Nest.

That's by using the dependency injection system.

So back inside my controller, I'm going to say that my controller is going to have a messages service

property that will be an instance of messages service.

Well, then, to find the constructor.

I'll say that the message of service property is going to be an instance of messages, service messages

with this.

And once again, I'm going to put a comment right here that says, don't do this on real app use dependency

injection.

And again, we're going to come back and fix this in two seconds.

Now, inside of all three of our different route handlers, we can put in some code that's going to

use that service to either list all messages, create one or get one.

So these methods are going to end up looking very simple and straightforward on list, we will return

this messages service, find all, and that's pretty much it.

Don't forget that the key here is that return statement.

If we don't return something from our method handler or our handler, then next is not going to return

or send anything back to whoever made the request.

So if we just call find all like that, we're not going to send anything back to whoever made the request

to us.

When we call, find all we need to make sure we return it.

So it actually gets sent back.

We can then do something very similar inside of our other two handlers as well.

So instead of create a message, I'm going to return.

This messaging service dot create and remember, we set up our.

Create method to take in a single string, and that's supposed to be the content that we want to add

to the message.

The input to this route handler itself is the message.

And if you do a command, click on that.

You remember that we said that the incoming body object should have a content property.

So when we call the create method right here, we want to pass in body dot content.

So take the content property of the incoming request body, pass it off to create and that'll be used

as the actual message.

And then finally get message down here, so we will return.

Messages service, find one and once again, remember, we set up this method to assume that we were

going to pass in an ID.

So I will send the ID that comes in on the incoming request.

OK, so that should be it, so we should now be able to open up our API clients and test out our application

before we do so, however, I'm going to open up my file explorer on the left hand side over here.

I would like you to double check, make sure that you've got a messages JSON file inside of here.

Remember, this is the file.

We're going to write all of our data.

Once you make sure that you've got this file, open it up and I would like you to add in just a plain

empty object like so if you don't put in an empty object, some of the JSON parsing stuff is not going

to work as expected.

I know this is kind of a silly limitation, but again, it's just a simple demonstration application.

So make sure you get an empty object inside there.

Save the file and then go ahead and close it.

OK, so now really this time ready to test out our application, make sure your server is up and running

and that you don't have any errors at your terminal, then go ahead and open up your API client.

So Postman or whatever else you want to use and then go in to first begin by trying to list all my different

messages.

So I'm going to send that request off.

And I get back as a response, an empty object, that means that we currently have no messages whatsoever.

And before I say anything else, if you see some kind of air over here, if you see something that says

five hundred as a status code and internal server air, I would encourage you to go back over to your

terminal and see what the air message says.

You will see an air over here that has some more descriptive stuff about what just happened.

Assuming that you did get back some good outputs like that empty object, let's now try to create a

message and then try to fetch it.

So I'm going to send a post request and my content from my message will be ASDF, I'm going to send

that off.

It looks like it was created.

So now if I once again gets all messages.

Well, now see that object right there, so there's my message, it was given a random ID of eight eight

five and its content is ASDF.

Awesome.

Now, we should also be able to affect a very particular message, so I'm going to go to my request

handler or sing my request down here.

We're going to make a get request to messages and then the idea of the message that I want to retrieve.

Now, at this point in time, my message, the one I just created, has an ID of eight eight five,

so I'm going to make a request two messages, eight eight five.

You will need to update that ID right there to reflect whatever ID was randomly assigned to you, because

you're definitely going have it's very likely, I should say, that you're going to have an ID different

than mine.

So make sure you put whatever ID was generated for you right there instead and then going to send off

that request.

And it looks like I was able to fetch that one as well.

OK, well, this is looking pretty good.

So we are now able to create a message and create another one right now.

We are able to list all messages and we can get a very particular message.

So I'd say that this is a pretty good success so far, but as I mentioned, still a couple of shortcomings.

First, we need to do that refactored that I promised.

The other thing I want to point out here is that if we try to fetch a particular message using an ID

that definitely doesn't exist, we get back a status code of 200 whenever we try to find something on

a remote API and we are not able to find it.

I would really expect to get back a 404 or something like that.

So I think it's pretty clear that although it looks like everything is working, maybe we still need

to handle some cases a little bit better.

So let's take care of these last steps in the next couple of videos.
```
