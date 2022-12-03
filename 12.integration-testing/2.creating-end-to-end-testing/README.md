## script
```bash
Let's try putting together our own custom end to end test, we're going to test out our authentication

system and make sure that we can successfully sign up, sign out and sign back in to get started inside

my test directory.

I'm going to make a new file called Off Dot to dash suspects.

Then inside of here, we need to write out a whole lot of boilerplate rather than writing this all out

from scratch.

Let's just go back over to the app and to end file, copy everything inside of here and then paste it

into the new off each file.

OK, so here is the officer to inspect file, I've now got everything copied over into it.

I'm going to close the app and to inspect file, but I only have the file open now.

Then inside of here, we're going to go on through this file line by line, maybe not line by line just

yet, but I want to change out a couple of things inside of here.

The first and most obvious one is the description at the very top.

So I don't have a description of our controller because that's not what we are testing.

I'm going to change it to of.

Authentication system.

So that's what we testing inside this file.

And then going to go down to the statement right here, you'll notice that they are using a format right

here with the list out, the route that they're going to make a request to and the method of the request.

You can use this format if you want to for your test descriptions.

But personally, I like to use something a little more human readable.

So I'm going to say it handles a sign up request.

So now it's very clear that this test right here is all about attempting to sign up to our application.

So then inside the test, you're going to see some code that for right now might look a little bit mysterious.

We're going to understand exactly how to interact and make a request over time.

But right now, let me just tell you what you need to know.

The first line inside this test is always going to be us attempting to make a request off to our server.

We're then going to chain on some different method calls that are going to customize that request and

then eventually make an expectation around the response that comes back.

So in this case, we're first forming up a request.

And making a gett method request to the roots and then expecting that we get back a status code of 200,

and in the body of the response, there should be a string of hello world.

So in order to test our sign up feature, we should probably just go very quickly, review how we make

a request to sign up and what kind of data we expect to get back.

So I'm going to open up my API client very quickly.

There it is right here.

So you might recall that to sign up to our application, we need to make a post request to a out of

office sign up.

We then need to include an email and a password.

And if we sign up with some unique email and password, we then would expect to get back a user entity

without a password.

So there should be an ID and an email that comes back so we can write out a test to make sure this is

all working as expected inside of our test, we can make a request that is a post request.

You sign up with an email and a password and then we can make sure.

That inside the response, we have a status code of maybe two 01 created and the response body has an

email and an ID, so let's try that out and see what that would look like back inside my test file.

I'm going to delete everything that's been on and we're going to replace it with our own customizations

and our own expectation.

So I'm going to first say that I want to make a post request to often sign up.

Inside the body, that request, and then go to send along some amount of information, so to send a

post request with a body, we're going to first call post and then I'll send right after and inside

of send, we're going to list out what we want to send inside the post request.

So in this case, I want to send along an email that is unique.

So I'll put in some unique string right here.

And a password.

We're then going to chain on a set of expectations, so this is where we are going to write out some

code to make sure that the request worked as expected.

I'm going to expect that we get back a status code of two 01.

Then to make sure that we got back an actual user entity, so an object with an ID and a password,

rather than putting on another statement, we're going to instead chain on a dot then.

This is going to be called with a response object, which I'm going to abbreviate simply as rez, this

response object has a body property and that body property contains the data that is being sent back

to our test from our running server.

So in theory, hopefully the resident body property should have an email and an ID property.

So I'm going to try to structure those off.

And I'll write out an expectation I'm going to expect the ID just to be defined because remember that

ID is somewhat randomly generated, it is in sequence, but we can't necessarily always predict exactly

what the ID is going to be going to actually be when it gets sent back.

So I'm just going to say that I expect the ID to exist.

But then in the case of the email, I definitely expect the email to be exactly whatever we sent to

the original sign up root handler.

So I would expect email to equal that string right there.

So I will copy that string and put it in right there.

Duplicating the email like this, not super good practice, so rather than duplicating that string,

I'm going to instead create a new variable at the top of the test called email and assign it that email.

I'll then make use of that variable in both locations.

It's all remove that string right there.

And I'll change that string to just email.

OK, so that should be it, this should be enough to actually run a test now, unfortunately.

Hey, you know how life is.

We are going to run this test.

It's not going to work as expected.

We have two very big issues around our test setup right now.

Nonetheless, I want to run this test as is and we're going to figure out what these two issues are

and then solve them in the coming videos.

So let's get to it.

Let's go back over to our terminal.

I'm going to run and run test Colin E to E!

Yes, it looks like it's going to run our test file and sure enough, we get a failure with a nice big

error message.

So let's take a pause right here.

We're going to come back in just a moment and figure out exactly why this test is failing to reasons

for it.

We're going to fix those both up.
```
