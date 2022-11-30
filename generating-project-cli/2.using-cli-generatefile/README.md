## script
```bash
My project has been generated and I started up my code editor inside of our new messages project directory.

So as I had mentioned before, whenever you generate a project with NSCLC, you get many more files

and folders created for you automatically.

So a lot more stuff going on now.

I want to show you a couple of things before we start writing any code on our project.

So first off, is the package on file inside of here?

Just like any package dogs on file, there is a script section and there are a variety of scripts that

you can use to work around with your project.

Right now, the most critical script for you to be aware of is the start colon dev script.

This will start up your project in a development mode.

You will automatically get your server restarted any time you make a change to your project.

Let's go over to our terminal right now and start up our project in this development mode.

So over at my terminal inside of the Messages Project directory, I'm going to execute NPM Run start

Colen Dev.

And there we go, so the application is now up and running.

All right, back over inside my code editor, there's one other file I want you to be aware of, and

that is the excellent RC dogs file.

So by default, Nest makes use of Slint.

This is a command line tool that will automatically take a look at your code and highlight possible

errors or issues specifically around possibly formatting, stuff like that, the inside of your different

files.

Now, me personally, I cannot stand silent.

I do not care for it at all, especially when I'm making use of TypeScript, because TypeScript already

catches many different errors for me.

So I view Slint as a little bit of an annoyance.

So for me personally, I'm going to disable excellent to do so.

I'm going to comment about the entire contents of the object inside of this excellent RC JS file.

So there's the entire contents of the object, I'm going to come into all that stuff out and save the

file.

Now, you don't have to do this if you want to keep Eastland's around totally, we find.

But me personally, I'm just going to disable its launch right away from the get go.

All right, so now that we've done that little bit of setup, let's dive into that SIRC file.

To me, SIRC folder.

Now, inside of here, you will notice a couple of files that already look a little bit familiar.

We've got the main dots file, which is identical to the one you and I put together.

We've got an app module file, which looks very similar to one we put together and an app controller,

which also once again looks very similar to the one we put together.

So on our project, remember, we had said that we need to make a pipe, some controller, some service

repository and possibly a module as well.

We could absolutely reuse the existing app module and the existing app controller in app service, all

that stuff that was created for us automatically.

But I want to show you how to wire up once again some of the stuff from scratch.

So I do not want to use any of the existing app related stuff inside this project.

So I'm going to find all four of these different app files.

So app controller, DOT spec, app controller, app model and app service.

I'm going to delete all four of them.

And then finally, inside of main mandates, we will immediately notice there's an import here and you'll

also probably notice back at your terminal that you're getting an air from over here as well.

So we're going to create a new module and we're going to wire that module up to our main ports file.

Our module is going to be called the.

Messages module, because it's going to have a bunch of stuff inside of it related to the messages feature

to create this module, we can either create a new file manually, which we did a little bit ago, or

alternatively, we can make use of the nest cli Vanessa.

I can create different kinds of class files for us and put a little bit of starter code inside them.

This is a great feature for putting together a project very quickly.

So let's go over to our terminal.

We're going to use the SLA to generate this module for us.

All right, so back at my terminal.

I'm going to open up a second terminal window still inside of my messages project directory, and then

I'm going to run the command nest generate module and then the name of the module.

I want to create without using the word module in it.

So in this case, we want to make a module called the messages module.

So we're going to call it messages, but not put in that word module.

It's going to run this generate module messages like so.

And when I run, that command will very quickly see that a file has been created for us along with a

new directory as well.

So if we go back over to our editor, we'll see now the messages directory.

And inside there is the messages module.

Notice how that generate command automatically put in the name module for us.

So if you ran a command of something like Narced generates module messages module, so if you put in

that extra word in there, you would end up with a file in a class name that was something like messages

module module, which is probably not what you want.

So even though creating a module or generating this file only saved us a couple of lines of code.

As soon as we start creating controllers services and some other things with that generate command,

we're going to get a lot of extra code added in for us automatically.

So at the end, using that generate command does save us a lot of time.

Now that we've got this new module, let's go over to the main ports file and hook everything up.

So back inside of main mandates, I'm going to remove that existing app module import statement and

replace it with messages, module from messages, messages, dot module.

Well, then pass off messages module to the next factory function.

OK, so that should be it, we don't currently have any controllers set up inside of our application,

so even though we should be able to run this app successfully, it's not really going to do a whole

lot for us right now.

So let's take a pause right here.

We're going to come back in just a moment and start creating this messages, controller messages, service

and so on.
```
