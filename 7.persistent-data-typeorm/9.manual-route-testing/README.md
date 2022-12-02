## script
```bash
Let's open up our API clients and use them to test out this new handler we just put together.

Now, remember, you can use postmen if you want or any other API client, but I'm going to use the

visa code extension rest client.

So to use that extension, I would create a file somewhere inside my project.

Back on the messages application, we created an HTP file inside of our project directory.

But on this application we're going have several different controllers.

So I'm going to instead create an HTTP file inside my user's directory.

And this will have a couple of sample requests that I'm going to issue against specifically the user's

controller.

So I will call this file requests HTTP and I created it once again inside my user's directory.

So then inside of here, we want to make a post request to localhost three thousand logoff sign up.

So I'm going to say post.

Localhost three thousand.

Off, sign up.

I'm going to put a comment on this thing as well, just remember exactly what this thing is meant to

do.

I'm going to say create a new user.

Because it is a post request, I have to put in a content type of application.

Jason?

Well, then put in one empty line right there and I'll put in the body of the request, so my first

request is going to be 100 percent valid.

So I want to put in an email.

That looks like an email.

And a password.

That is a string.

And then going to send the request off, it looks like I got back a successful status code that's very

good.

And if I go back to my terminal, I should see the body other console log right there.

Perfect.

Now, if we ever provide an email that is invalid, let's say we put in just a plain string like so

and send the request off.

We should now get backstabs, go to four hundred and have something that says email.

Must be an email.

All right, let's say this looks pretty good if we also remove a property and send the request off.

Yep, just like we saw previously, definitely captures the fact that we did not provide a valid password.

OK, so I'd say that step one here of setting up the controller and getting the body, the request is

working just as expected.

Before we move on, there's one other quick thing I want to mention.

Remember back inside of our main doctor's file, we had added in that white list of true property,

and I told you that was going to explain on this application what that was all about.

The purpose of this property is to make sure that incoming requests don't have extraneous properties

in the body that we are not expecting.

So, for example, inside of our freezer, we had said that only the email and password properties should

exist by adding an whitelist of right there.

That's going to make sure that any additional properties that we send along with the request will be

stripped out for us automatically.

So if I put in an extra property right there and send the request off, well, let me make sure I've

actually got a valid email really quickly.

There we go.

That's better.

So now if I send the request off, I see a success.

But if we go back over to our terminal and look at the body, you will notice that we do not have that

extra property inside the body of the request.

This is done primarily as a security concern because we don't want to allow users to add in additional

properties to incoming requests, such as, say, maybe admin.

True.

And try to create a new user that is marked as an admin or something like that.

Now, our code doesn't actually make use of this flag at all.

This is just an example.

Rarely do we ever want users to be able to add in additional properties to request unless we are explicitly

expecting those properties.

So, again, adding in whitelist of true, just a very small security thing.

OK, so I'd say that our first test of our API is looking pretty good, so let's take one more pause

and then continue onto our users service and create a brand new user in just a moment.
```
