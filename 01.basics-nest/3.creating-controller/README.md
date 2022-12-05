## script
```bash


So just about every server that you're ever going to put together is going to receive a request and

then might do some validation on data contained inside that request.

So, for example, we might validate some body or some data in the body.

The request we then might make sure that the user is authenticated or authorized to send us a request.

We're then going to route the request off to a particular function to handle the request that might

result in us running some particular business logic and eventually maybe access or store some information

inside of a database.

Then as a result of this entire process, we're going to formulate a response and send the response

back to whoever made us the request.

So, again, doesn't really matter what language, framework, anything that you're using, just about

every server is going to have the same series of steps.

In some cases, we might not be doing authentication, so maybe some steps will fall out.

But at the end of the day, this is kind of a very general case.

So in that case, we get special tools to help us address each of these very particular steps.

So in Nest, we have tools to help us create something called, say, a pipe pipes and just help us

validate data on incoming requests.

We also have tools that allow us to create something called guards.

Guards make sure that incoming requests are coming from users who are authenticated or authorized to

use our application.

We get also tools to create controllers.

Controllers contain routing logic.

We get tools to create something called services.

Those contain business logic and so on.

So throughout this course, as we work with Nest, we're going to learn about each of these different

sets of tools.

Each of these different sets of tools included in Nest are meant to help us and put together some piece

of handling incoming requests.

Besides just the five I'm showing right here, there's a couple of other tools we're going to look at.

So these are all tools inside of Nest that help us make things that handle these incoming requests.

So we still have controllers and services, which we saw in the last diagram.

We also have something called module's.

We have pipes, filters, guards', interceptors and repositories.

Again, we're going to learn about all these things throughout this course.

The absolute bare minimum that is required to put together the most simple nest application possible

is a module and a controller.

Every nest application you ever create is going to have at least one module and one controller inside

of it.

So in the diagram we were just looking at a moment ago, this one right here where we said we were going

to create a nest module and a controller.

These are the two things that are required to make the most simple basic app possible.

So that mind let's go back over to our editor and we're going to create a module and a controller.

So back over here to get started, I'm going to create a new directory called SIRC.

Then inside, there are going to make a new file called Main Dotty's.

May not.

This is going to be the first file that gets executed in any next project, so we'll usually have some

code inside of here to start up our application and start listening for traffic on the particular port.

Usually we will create a module and a controller in their own separate files, but right now we're going

to create the module and the controller directly inside the main text file.

So right now, all logic inside this file, but we will very, very quickly extract the stuff into separate

files.

To create a module and a controller, we're going to add in an important statement at the very top and

I'm going to import something called controller in module from at Negs Common.

So, like I mentioned, these are tools that Nesse provides to us to help us make a controller and make

a module.

To use them to create a controller, we're going to focus on the controller first, I'm going to create

a class called App Controller.

And then right above it, I'm going to add an at symbol controller and then call that like a function.

So this is referred to as a decorator in this case, this decorator is telling Nest that we are trying

to create a class that is going to serve as a controller inside of our application.

It is a class that is going to handle and root incoming requests.

Nest makes use of decorator's quite heavily, so throughout this course, we're going to have a big

focus on decorator's how they work and so on.

But for right now, we're going to have these decorators in and we'll discuss what they're really doing

for us later on.

Then inside of our class, we're going to add in a variety of different methods, each method is designed

to handle one kind of incoming request.

Specifically, we want to add in an additional method any time we want to have another route inside

of application.

So, for example, if we want to handle a get request to the root of our application, we might add

in a new method here called something like.

It root root.

Then whenever someone makes a request to our application, we want to route that request to this method

right here to do so, we're going to import another helper from the common library.

This helper is called the Gift Decorator.

This allows us to create route handlers that respond to incoming requests that have an HTTP method of

get to write about my method.

I'm going to put in at git like so.

And inside my method, any time someone makes a request to our roots that's going to run this method

right here and then all we have to do to respond to that request is return of value from this method.

So in this case, I can return simply a string of.

Hi there.

Now, in theory, if someone makes a request for application, it will get routed to this method right

here, we're going to return that string and Northwest is going to automatically take that string and

send it back to whoever made the request.

All right, so a lot of talking here, a lot of stuff going on, let's take a pause very, very quickly.

Come back in just a moment and start to create our module.

Leslie, want to mention is that these decorator's and things are really confusing right now.

Don't sweat it.

As I mentioned, we're going to be going over decorator's a tremendous amount inside this course.
```

<img width="947" alt="1-3-1" src="https://user-images.githubusercontent.com/13144137/205554403-fcf7cb48-18e5-41ee-a212-a50a8ef0f471.png">
<img width="520" alt="1-3-2" src="https://user-images.githubusercontent.com/13144137/205554435-7d5e39b3-e0b0-421c-8a6f-f1df8a882fbf.png">
<img width="485" alt="1-3-3" src="https://user-images.githubusercontent.com/13144137/205554444-785da46d-3334-43e8-ae2b-9622a3b2f090.png">
<img width="638" alt="1-3-4" src="https://user-images.githubusercontent.com/13144137/205554452-fa3c9823-9592-4bb7-9967-9415b8063cd8.png">

## description
```bash
요청 응답 주기

```
