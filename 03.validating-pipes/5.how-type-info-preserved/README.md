## script
```bash
This is an optional video.

In this video, we're going to discuss how the validation pipe knows to validate the incoming request

and make sure that specifically for requests coming to this request.

Handler, the body satisfies all the validation rules we set up inside that create message.

So if you are not interested in this, then no problem whatsoever.

Pause the video right now and continue on to the next one.

Otherwise, stick around.

Now, I kind of told you at the end of the last video why this thing is so interesting.

So let me just review that very quickly, help you understand why what we are seeing right now inside

reapplication is kind of extraordinary as far as TypeScript and JavaScript goes.

I remember we're currently writing typescript inside of our code editor in the typescript world.

We write out decorator's we write out things like type annotations and so on.

But remember, very importantly, we never directly execute.

TypeScript, there is no engine out there that runs typescript code directly.

Instead, whenever we run our next application, all of our typescript is first converted into plain

JavaScript and then it is executed.

So when our application is running, all these decorators, all these type annotations, they get removed

and they don't exist in the JavaScript world, at least in quite exactly the way that we see them right

here.

So how does the validation pipe know that it needs to somehow validate that incoming body against a

type annotation, that type invitation we are applying right there?

Well, let me show you how this works.

It all goes back to something that we very briefly discussed on the very first application we worked

on.

You might recall that on that first app, we had created a config JSON file manually.

So here's my test configuration file right here and inside there, we had put in two configuration options

imit decorator metadata and experimental decorator's.

And I told you at the time that these two settings were extremely important for us to work correctly.

So in this video, we're going to understand why that is specifically what the Imit Decorator metadata

setting is really doing for us.

This line of code right here in this configuration option allows a very small amount of type information

to make it from the typescript world over to the JavaScript world.

So even though when you are first learning, typescript, you are told all the time that all type information

is stripped out of your code when you convert to JavaScript, that is not totally true if you have Imit

Decorator metadata set to.

So if you have that option set to drew, a very small amount of type annotations and information will

make it over to JavaScript.

Let's take a look at our converted JavaScript code for our project and see where this little bit of

type information actually surfaces.

So back inside, my editor.

You'll notice that we have a disk directory inside of our project, this holds all of our converted

typescript as JavaScript code inside if you're going to find the messages directory.

And then find the messages controller James File.

Now, instead of here, we're looking at converted typescript code, so this is JavaScript, and you're

going to notice there is a ton of extra code inserted inside of here, out of everything that's going

on.

We really just care for right now about one or two lines of code towards the very bottom of the file.

Specifically down here, you'll find, underscore, underscore, decorate and then common post right

there.

So this section right here is what we really, really care about right now.

I'm going to delete everything else inside this file.

Now, if you do the same, make sure you don't save this file, because this is actually what is being

used to run our server right now.

So don't save any changes you make.

So this is how decorators are actually applied once we convert typescript into JavaScript, decorators

don't actually exist in JavaScript itself.

So this is kind of like a workaround to make the functionality of the decorator work and the JavaScript

world.

In this case, we are applying the post decorator to the message method and we are applying the body

decorator to the first argument of the create message method.

So we are really looking at some code that makes that decorator and that decorator right there work.

Now, as a part of the the body decorator that we're using, which is a parameter decorator, is being

applied to the argument of our method, a little bit of type information, as I mentioned, is leaked

out into the JavaScript world.

That's what these metadata function calls are right here.

Metadata refers to some type information or some kind of higher level information that is conveyed about

our code.

And it's persisted or kind of maintained over in the JavaScript world as well.

One of these pieces of data is design Colen Param types.

This little piece of information is going to tell us in the JavaScript world what the type annotation

was for this argument.

So if we take a look at that, it says Design Param Type's is going to be assigned a value of our create

message DTL class.

So this little bit of code right here is the absolute key.

This is what allows a very small amount of type information to persist over to JavaScript.

So when the validation pipe runs on an incoming request, it's going to look up that little property

right there on the message function.

It's going to see that we were expecting to receive a body of type, create message, ditto the validation

pipe is then going to go and find the class definition for that thing.

So that actual class is going to find all the validation rules on it as well.

So that's what's going on behind the scenes.

That's how all this stuff works.

And that's how why we are applying a class right here as a type annotation.

That's how some information about that type annotation is made use of in the JavaScript world.

OK, so that's it, so I'm going to close that file now, I'm not going to save any changes.

Now, we've got a better idea of what's going on behind the scenes, you're going to see the same patterns

start to arise and a lot of other uses in NASA as well.

So there are many other scenarios where a very small amount of type information is persisted over to

JavaScript and made use of in some way.

So now that we've got this extra little bit of info, let's take a pause right here and continue on

with our controller in the next video.
```
