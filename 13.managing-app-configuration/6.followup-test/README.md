## script
```bash
We spent a very long time talking about testing, so in this video, we're going to wrap up testing

with just one more test around our authentication logic.

So, again, I'm inside of our off e to a file.

At the very bottom.

I'm going to add in a test where we first attempt to log in or how about sign up?

I should say, sign up as a new user, then get the.

Currently logged in user.

OK, so as you can kind of tell from the description on this thing, I went to first sign up as a brand

new user and then I want to make a get request to the Who am I route.

Do we have inside of Rep remember the Who am I route that we had implemented inside of our users controller.

Right here.

So here is who am I that's going to return whoever is currently signed in or really whoever is making

the request to our application, so goal is to simply sign up, then make a request to my roots and

we should get back our user.

So let's go ahead and give this a shot.

It will be just a little bit challenging because of, well, one very small hang up.

So inside of this test, we are going to first make a request to our application in the same way we

did right back up here.

So I'm going to create a new email address.

I'm then going to make a request to abduct, get http server.

We're going to make a post request to sign up and we're going to send along that given email right there

along with a password.

And a password can be pretty much anything we want.

And then going to expect that this results in a two or one.

Now, here's the gotcha whenever we sign up to the application, as you and I well know, because we

put together the authentication system.

This request is going to respond with a cookie.

And that cookie is what is going to prove that we are signed in when we make a follow up request or

application.

The library we are using to actually make the request is referred to as superagent, that's the name

of the library we're using here and that's in this request object that we're dealing with.

Unfortunately, super agent by default does not handle cookies for us.

So that means that when we get a cookie back from making this request, we need to temporarily store

that cookie inside this test right here and then send that cookie, along with our follow up request

to figure out who is currently logged in or who is currently making that request.

So to get access to that cookie, we're going to take the response that comes back from this request.

We could do that by saying Rez is a wait request, blah, blah, blah.

So now right here is the response we get back from making this entire request to get access to the cookie

inside.

There we can do cookie is rez get set, Cookie.

So that is pulling out the set cookie header, which is where a cookie is eaten, usually sent back

to us inside of a response.

So this cookie should be a string.

And inside of it is the information that proves that we are signed into the application.

So now we're going to make a follow up request to the handler.

We are just looking at the Who am I one.

And we're going to send along this cookie as a header inside that request as well.

So we'll say await, request an update, get HTTP server once again.

Well, then, do I get to office?

Who am I?

And along with that request, I'm going to send the cookie like so so calling set with a string of cookie

sets the cookie header on the outgoing request.

We then provide the cookie that we want to send inside of it.

I'm then going to expect that I get back a 200 from that.

Now, to make sure that we actually are truly signed in beyond just expecting that we get a two hundred

insider response, I'm also going to receive the response right here in D structure off the body property.

It's going to pull out just the body like so so the body is going to be whatever gets sent back to us

inside the response.

So inside that body, remember, that should be our user entity, which means it should have an ID and

an email as well.

So let's just take a look at the email property and make sure that the email is identical to the email

that we signed up with.

So we can do expect body email to equal the email we had signed up with at the top of the test, and

that should be it.

So let's see this go back over to our terminal and rerun our tests.

So back over here.

Yep, looks good to me, test is passing naturally, you might want to make sure that we can get the

test to fail.

So if I say that maybe the body that email is equal to just some random string, how about that?

I'm going to run my test again and just make sure they feel.

Very good.

OK, well, that is pretty much it, so based on this test right here, if you want to add in more tests

around authentication, you are absolutely free to do so.

All you have to do inside of each test is first sign up, get access to the cookie, and then if you

want to make a followup request, you're going to attach that cookie to the outgoing followup request

using that line of code right there.

OK, well, my friends, we have spent, like I said, a very good amount of time on testing, so at

this point I think we're going to say, yeah, we're pretty good on testing.

So let's pause right here and we're going to move on inside of our application in just a moment.
```
