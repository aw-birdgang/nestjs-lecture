## script
```bash
Well, our very basic application is working out just fine, but as I mentioned, we currently have

all of our logic inside the main doctor's file.

Usually we instead create just one single clasper file inside of a nest application.

So in this video, we're going to start to extract the app controller and the app module into their

own separate files.

Before we do so, I want to very quickly tell you about some file naming conventions in Nest.

So right now, as I mentioned, inside of mandates, we have all three of these different things, we're

going to extract the app controller and the app module into their own separate files.

These files are going to have very specific names applied to them.

So the general template here that we're going to use is the name of the class without the type of the

of the class it is.

That's a little bit confusing.

So these examples, I think, will kind of clear things up.

In this case, we are creating a class called app controller, so the kind of class we are making is

controller and the first part of the name of this class is simply app.

So inappropriate name for this file would be app controller dots.

In the case of app module, the type of class we are creating is module and the shorthand name for this

thing is app.

So an appropriate file name would be app module tortillas.

We're going to repeat the same pattern for every class that we create inside of our application.

They're all going to the same format of name.

So we should always be able to look at a file name or a class name and immediately understand the purpose

of this thing.

So in this case, we can look at the word controller right now right there and understand that this

is a file that contains a controller.

Likewise, if we look at the name of the class, it says controller in it.

So we know immediately that this is a class that serves as a controller.

So let's go and create two new files, one will be app controller, the other will be app module and

it will move some code around between them.

All right, so back inside my editor, I'm going to create a new file called App Dot Controller, it's.

And a second child called.

App module tortillas.

I'll then go back to our main file.

And let's take care of the app controller first, so I'm going to highlight all the code related to

the app controller.

I'm going to cut it.

Then go over to our app controller, not file and paste all that stuff right away, we get a couple

of error messages.

We just need to fix up some imports.

So at the very top, I will import a controller and get from at best, Jase's Common.

I'm also going to make sure that I export this class as well.

Don't forget that export because we need to get access to this class from other files.

OK, so that's it for this file, so I'm going to close that file.

Then back inside of main ports and then going to cut the module out.

I'll go back over to the app module, doctor's file, paste that thing in.

Well, then do another couple of imports at the very top, so we need to import module from Nest James

Common and we also need to import the app controller from same directory app DOT module.

Controller, my mistake.

OK, that looks good as well.

Finally, don't forget to export the app module class down here, so we'll add in the expert keyword.

Yes, looks good.

It's now finally back over to our main ports file, you have to clean up a couple of things inside of

your first.

Let's clean up the first import statement that we have.

We do not need access to the controller module or get inside this file anymore.

So I'm going to delete that entire first line.

Next up, we're going to import the app module from the app DOT module file, so import app module.

From App Dot module.

All right, well, that should be it for our refactor.

So now if we save all these files and go back over to our terminal, our application should still be

running and we should not have any error messages.

In addition, we should be able to go back over to our browser, refresh local three thousand and still

see how high there appear on the screen.

All right, well, I'd say this looks pretty good.

So we've now got one class per file, which much better follows conventions of NASA's, unless a lot

to do inside this application is show you a little bit more around how these controller and get decorators

work.

So let's take a look at that in just a moment.
```
