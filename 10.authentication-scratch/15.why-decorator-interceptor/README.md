## script
```bash
In the last video, I told you that I was going to mention what the data argument right here is all

about, the data argument is going to contain any data or any argument that we provide to our decorator

when we actually make use of it.

So back inside of our controller, where we are making use of current user, I can provide, say, a

number right here or maybe a string or an object or whatever I want to provide.

Whatever we provide to the decorator is going to show up inside the decorator function as this first

argument.

So in our case, if we provide a string of ASDF right here, then data would be that same string would

be the string of ASDF.

In our case, our decorator does not need any arguments provided to it.

The current user decorator is going to be just the decorator by itself.

No arguments, nothing like that.

So in our case, a better type annotation for data than any might be never the type imitation of never

means.

This value is never going to be used, accessed in any way, shape or form as soon as we change that

to never back inside of our users controller.

I'm now getting an air around providing ASDF right here.

So that type annotation of never is a good signal to everyone else making use of our decorator that

way.

Don't give our decorator any arguments because it doesn't need them.

OK, so now back inside of our decorator, now that we've got a better idea of how this thing works,

all we have to do is return a value.

That's pretty much it.

Let's actually use this thing to actually fetch the current user and then provide that user as an argument

to a root handler.

So inside of our decorator, here's what we need to put this thing together.

We need first this session object because the session object tells us the user ID of the person making

a request to us.

We also need a copy of the user's service, because that service is what is going to allow us to go

into our database and find a user with the given ID.

So let's first focus on just getting at that session object, I want to look up the session object and

I want to try to find our user ID property inside their.

So to get our session object, we're going to make use of that context argument, remember, context

is kind of like a wrapper around the incoming request.

So right above our return I'm going to add in request is Sirtex switch to HTP and so I put Sirtex right.

There should be context that's better switched to get request.

So that is going to give us the underlying request that is coming into our application.

Then to access the session, we would reference request that session and then we can look up any property

we want on the session.

So for example, user ID.

Right now, let's just do a council log of that.

So I'm going to save this, I am making use of the decorator on who am I?

So let's open up our API clients.

We're going to sign into our application.

We're going to make a request to his handler and we're going to expect to see a consultation of our

current user ID.

OK, so back inside my API client.

I'm going to first make sure that I am signed in as an existing user.

OK, I am signed in as user with 18 19.

I'll then make a request to who am I?

I get back.

They're totally fine, but let's go back over to our terminal and see what we got for that console log.

So at my terminal, I can see perfect, we've got rid of 19.

OK, that looks good inside of our decorator, we absolutely can get access to the session object and

we can read off the user ID from it.

Now, the only thing to do is make use of the user service to look up the user with that given ID.

And unfortunately, that's where things are going to start to get challenging.

Remember, our user service is a part of the dependency injection system.

We can't just empathy's our service and create a new instance of it ourselves.

The service makes use of the users repository and that users repository is set up only through dependency

injection.

Now, that's probably a reminder, we know that user service is a part of dependency injection, it

makes use the repository.

We've gone over that quite a bit.

But why does that matter in this case?

Well, unfortunately, we cannot make use of dependency injection with a parameter decorator.

That's what you and I are creating.

We're making a Perram decorator, and this decorator cannot reach into the system in any way and try

to get access to some instance of anything inside there.

So we currently have a decorator that just plain can't get access to our users service.

So although we can get to such an object, we can get the user ID, we can't get the real thing that

we need to make the query to find that user.

Of course, there is a way to work around this, and that's why I told you a moment ago.

That we have to create both a decorator and an interceptor, so the interceptor is going to solve this

problem, here's what we're going to do.

So we're going to create an interceptor called Current User, all interceptors that we make can be a

part of the dependency injection system.

So this interceptor is going to read in the session object.

It's also going to read in through dependency injection, our user service and then inside the interceptor.

That is where we are going to do our lookup for the current user.

And then eventually we're going to expose that value that we find.

We're going to expose the user through our decorator.

Now, that last step where we I'm saying that we're going to expose that user through the decorator,

if that sounds confusing, I'm kind of leaving it intentionally vague for right now.

So all I really want you to understand is at this point time, our decorator can't get access dependency

injection.

So instead we have to create this interceptor.

The interceptor is going to be what is responsible for actually fetching the user out of our database.

And we're going to take that user that we find and somehow communicate it over to the decorator.

And the decorator in turn is going to provide the value to our root handler.

OK, so again, I know this probably seems vague right now, and I kind of want it to be that way because

the whole system is just a little bit it's a little bit confusing.

I totally understand that.

So let's take a pause right here.

We're going to come back in just a moment and start putting together this interceptor.
```
