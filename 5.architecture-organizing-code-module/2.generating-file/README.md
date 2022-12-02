## script
```bash
I finished generating my project, I've changed into the new dye project directory, and I've opened

up my code editor inside that directory as well.

So at this point, I would encourage you to open up your code editor and open your DIY project directory

as well.

So the first thing I want to do is open up our SIRC directory and I want to delete just about all the

different files that were generated for us.

I'm going to delete everything inside of your except for the main file.

I'm going to keep that one around just to save us from having to type out some really basic code.

I'm going to delete all the other files.

Looks good.

Now, let's go back over to our terminal, we're going to generate all four of these different modules

and the services for each one will service or a controller because remember, our computer module in

particular is going to have a controller.

All right, so back over at my terminal, we're going to run a couple of different commands to generate

all these different things.

So I'm going to first generate the computer module with Next G module computer.

And then going to repeat the same command and make our CPU module.

The disk module.

And finally, the power module.

OK, so there's all four of our different modules, so now we're going to generate a CPU service, disk

service, power service and finally the computer controller.

So to generate these different services will do a nest egg service.

We're going to start how about with the CPU service?

It's going to run that.

I'll then generate the power service.

And then finally, the disk service.

OK, looks good.

Now, the last thing we need is our controller.

So Next G controller and we're going to call this the computer controller.

OK, file generation complete, let's now go back over to our code editor back instead of our editor.

I'm going to find the main points file.

We left that main file around from when we initially generated our project.

So the default may not be as File tries to import the app module, we deleted that module.

So we need to fix up this import to get our main module, which is now the computer module.

We're then going to make sure that we pass off the computer module to the next factory function.

So at the top, I'm going to delete the app module import and replace it with a computer module from

a computer computer dot module.

And then going to pass off that module to nest factory create.

All right, so that should be it for initial setup now we've got our computer model set up as the main

module.

We have all these three other modules, but they're not connected together in any way.

So we're going to start implementing each of these different modules using a bottom up approach.

So we're going to go to the one module that does not depend upon anything else inside of our project.

That is the power module.

We're going to open up our power service and we're going to define a method on there called the supply

power method.

This method is going to eventually be called by some other modules inside of a project.

So I'm going to find the power directory inside there, I will find the power service.

And then on that class, I'm going to define supply power.

Now, remember, our project doesn't really do anything, say we're not really going to be supplying

power or anything like that.

But just for the sake of having at least some functionality here, I'm going to say that the supply

power function.

Is going to receive some argument.

That I'm going to call what's so this is going to be the amount of power that maybe some other service

is requesting to be supplied, then inside the power service, it's going to be a council log and say

supplying.

What's worth of power?

And that's it.

Now we've got essentially a dummy method, doesn't really do anything, but if we ever call it, the

expectation is that we should supply the number of watts that some other service is going to need to

work correctly.

That's pretty much it for our power service, that's all we need to put together.

So now we need to somehow take this service and get access to it inside of both our CPU module and the

disk module, because remember, in order for the CPU service and the disk service to work correctly,

they need some amount of power.

So this is where the actual interesting nest stuff starts to kick in.

So let's take a pause right here and understand how we start to share services between different modules.
```
