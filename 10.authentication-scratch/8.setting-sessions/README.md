## script
```bash
In this video, we're going to start working on the second half of this entire flow so we have the ability

to sign up a user which creates a new user record and sign in a user which verifies a user supplied

email and password.

But we still don't have the ability to say, hey, this person is signed in and this person is not and

so on.

So that's what all this kooky stuff is all about.

And to understand how this cookie stuff is going to work, I first want to help you understand a little

package we're going to use to manage our cookies called cookie session.

So quick diagram.

OK, so this is an imaginary request handler, this does not exist inside of application, we're just

going to imagine what cookie session does behind the scenes for us.

So we're going to imagine that we make a request to ASDF or something like that.

And inside this request, we are going to have a very special header called Cookie.

Cookie is going to be a string that has what looks like a random series of numbers and letters.

When this request comes into our server, the kookiest session library is going to receive this request

and take a look at all the different headers included inside of it.

If it finds a header called Kookie that's going to jump into action, first cookie session is going

to take that encrypted value right there.

It looks like a random series of numbers and letters, but it's actually an encrypted string that stores

some plain JavaScript object inside of it.

Cookie session is going to decode that string, and that's going to result in an object which referred

to as our session object, that object can have any information stored inside of it that we want.

So maybe in this case we have a color property as value of red.

Then inside of our root handler, we're going to make use of a decorator to receive this session object,

so on, any of our given handlers will make use of yet another decorator to extract this session object

from the incoming request.

Then inside of our handler, we can read information off that such an object or we can add remove change

properties on it as well.

So maybe in this case we decide to update the session object and change the color property to blue instead.

As soon as we make that change, the cookie session library is going to see that we have made a change

to that session object and it's going to realize, oh, I need to take this updated object.

I need to take all the data inside of it and turn it back into an encrypted string and then send that

string back in the outgoing response as a header called Set Dash Cookie.

Then right there will have some kind of encrypted string that includes this new piece of data says color

is now blue as opposed to red, which was before inside the outgoing cookie of set cookie right here.

There's going to be a couple of other pieces of information tied to it.

So some other stuff beyond just that encrypted string.

But right now, that's the only value that we really care about.

So that's what's going to be going on behind the scenes, we make use of the cookie session library

and we're going to use this cookie, this little we're going to take advantage of the fact we can tie

some information to this incoming request, an outgoing response to store the ID of the user that this

person just signed up to her application has or signed into our application as.

Said No one, however, is to just understand cookie session by itself and understand how the session

object works.

So let's not even think about authentication for right now.

Instead, let's just get a better idea of how cookie session by itself works.

Step number one, we have to install this library into our project, so let's take care of that right

away.

Back over at my terminal.

I'm going to stop my running web server.

And run npm install cookie session and at Type's.

Cookie session as well.

Once I've got that installed, I'll then start my back server back up with NPR run start Dev.

Very good, then back over inside of our Ed, we're going to find our main points file.

So we're going to wire up the cookie session middleware inside of here at the very top will first import

cookie session.

So of course, normally we would write something like, say, cookie session from cookie session.

That would be what we normally do.

Unfortunately, cookie session, this library has a couple of settings or a couple of things inside

of it that don't work nicely with our current TS config setup.

So in other words, thanks to some settings that we have inside of our config file that are required

by NEST, we cannot make use of a normal import statement to make use of cookie session.

So it's just a very small compatibility thing.

So to get around this very small problem, we cannot make use of a normal import statement.

Instead, we're going to kind of regress, go back to the old way of doing things, which is to use

a simple require statement.

So we're going to add in a cookie session and that's going to require a cookie session.

So, again, only doing this thanks to a little bit of configuration mismatch between our NEST project

and cookie session itself.

Then inside of our bootstrap function, we're going to find app right here.

We're going to call app use.

We're going to pass in kookie session, we're going to call Kookie Session and to the cookie session

function call, we'll put in a configuration object.

The only option we're going to pass in inside this object for right now is a Kei's property.

That's going to be an array with a string inside of it.

And that string can be anything you want, just a series of random numbers and letters.

The string is going to be used to encrypt the information that is stored inside the cookie.

So, again, this right here, the info inside the cookie is encrypted and it cannot be easily read

or changed by a user.

So the Keys array that we just put in is being used for this encryption step.

We're going to eventually come back and do something a little bit better than just putting in a plane

starting right here, but right now in a developed environment, this is totally fine.

OK, so that's it.

We've now got cookie session all set up, so let's take a pause right here.

We're going to come back the next video.

And as I mentioned, we're going to put together one or two very small request handlers and just test

out this entire session thing.
```
