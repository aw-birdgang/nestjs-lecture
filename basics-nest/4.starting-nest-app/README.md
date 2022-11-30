## script
```bash
Let's continue on and create a module, A module is going to wrap up a controller, every application

we create must have one module inside of it to create a module.

We're going to create another class and apply a decorator to it, very similar to what we did with the

app controller right here.

So right after that app controller thing, I'm going to add in at module.

I'll then define a class called App Module.

Like so.

When we make use of the module decorator, we are expected to pass a configuration option or object

to it.

So I'm going to pass in an object and we're going to give it right now just one single property.

This is going to be the controller's property and it's going to list out all the different controllers

that exist inside their application right now we only have one controller, the controller.

So I'm going to add in app controller right there.

Now, whenever our application starts, up next is going to look at this app module, it's going to

find all the controllers that are listed right here and it's going to automatically create an instance

of all of our different controller classes.

So Nest will create an instance of this app controller for us.

It's then going to take a look at all the different decorator's we used inside there and set up root

handlers for each of those different decorators that we used.

Now, the last thing we do is add in a function that is going to run any time we start up our application,

let's add that at the very bottom of the file.

So down here, I'm going to add in an async function and usually by default, this thing is called bootstrap.

It is not required to call this function bootstrap at all.

It's just a very common convention.

Then inside of here, we're going to create a new nest application out of our app module.

So I'm going to say CONSED app is a weight nest factory.

Create app module right away we will get an air from Nest factory right there.

We have to add in an import for Nest factory at the very top of the file.

Let's take care of that really quickly.

So up here at the very top.

I'm going to import.

Nest factory.

From Nest.

James A..

Now, notice here something a little bit confusing.

We now have two different import statements.

One is importing something from common, the other is importing something from SJS Core in just about

95 percent of all import statements.

He writes, where you need something from next, you are going to import stuff from Nisga'a Common.

Your main thoughts file is one of the very few locations that you're ever going to import anything from

NASA.

So if you ever get confused on whether you are importing stuff from Common or Core, remember, it is

just about always supposed to be common.

All right, don't back down here at the very bottom.

So, as I mentioned, we are passing off the app module to this create function that's going to create

an instance of our next application once we created our app right there.

We're going to tell this app to start to listen for incoming traffic on a particular port on our computer.

So we're going to say a weight app, DOT, listen, and we're going to listen on PT..

Three thousand.

Finally, right after that, we're going to call the bootstrap function.

All right, so let's go over this file in total very quickly, whenever we run our application, we've

got a couple of imports up here.

We're going to create one controller that has one root handler set up inside of it.

We then create a module and we tell the SAP module about the app controller we had just created.

We then define and immediately invoke the bootstrap function, the bootstrap function is going to create

an instance of our application and then tell it to listen for incoming traffic.

So right now, we have exactly one route defined inside of our application, if we make a Ghiz request

to localhost three thousand with no route on it, then that request will be routed to this route handler

right here and we will return a string of either.

So let's now go back over to our terminal.

We're going to run our application and then we're going to try to test it out from our browser.

So back over at my terminal, I'm going to make sure I'm inside my project directory and then going

to run Northparkes Node Dev and then SIRC main points.

I remember right now we are running a project we have set up from scratch.

That's what we were running this command in particular to start up our project very quickly on the next

application we work on, we're going to use the next command line tool to generate an application for

us.

Once we do so, we'll have a much easier way of starting up our project.

In other words, it'll be a much simpler command.

So we are only using this command right now just because we have set up everything for this project

from scratch.

OK, so I'm going to run that.

Well, then very quickly see some output right here and then eventually we should see something that

says next application successfully started.

If you do not see this message, if you instead see some kind of error, make sure that you don't already

have another process on your computer.

Listening to traffic on PT..

Three thousand.

If you do, you can either stop that other process or change that 3000 port right there.

All right, so now that our server is listening to traffic, let's open up our Web browser, we're going

to try to make a request to localhost three thousand.

And as I mentioned, we should see the text either up on the screen.

All right, so back over inside my browser, I'm going to go to localhost Kullen three thousand and

sure enough, we see.

Hi there.

All right, fantastic.

Well, obviously, this is really simple and straightforward, and we definitely want to build out some

more complicated applications.

So let's take a pause right here.

And we're going to start to really enhance the kind of complexity of our application and go into greater

detail in just a moment.
```
