## script
```bash
We finished up our messages application, so now we're going to move on and start to work on our next

app.

This next app is not going to be a true full application that really does anything.

Instead, we're going to do a very quick little side project.

And the entire goal of this project is to get a really good understanding of how modules and dependency

injection work together through the app that we're going to build.

Again, not really a lot of point to it.

It's just a simple demonstration.

So let me help you understand what we're going to build.

We're going to make a very small project that is going to kind of imitate a computer.

So every computer that you've ever used has a couple of different components inside of it, a typical

computer lab, a CPU for processing data and a hard disk of sorts for storing data.

Both these devices are powered by a power supply.

So power supply is what supplies electricity.

A typical computer will also have some other very common components inside of it, such as networking

capabilities and RAM, so form a memory and so on.

But we're not going to worry about those where it's going to model a very simple computer that is going

to have a CPU, a disk and a power supply.

So let me show you how we are going to model this thing and how dependency injection is going to come

into play.

OK, so here's the general goal we're going to make a separate module that serves are kind of models,

each different part of a computer.

So at the lowest level down here, we are going to create something called the power module.

Inside the power module is going to be a service called the power service.

The power service will have a single method called supply power.

We're then going to create a CPU module and a disk module, which will both have a service of their

own.

A CPU and a disk can only work if they have power.

So we need to make sure that both the CPU module and the disk module have access to some code that we

put together inside the power module.

Once we've got the CPU and the disk stuff put together, we're then going to make use of both those

modules inside of our topmost module, which we are going to call the computer module.

So we have a very strict hierarchy here of modules, the computer module depends upon CPU and disk and

CPU and disk in turn depend upon the power module.

And in each of these different modules, there's exactly one service or controller, for that matter,

that's going to rely upon some other service.

So that's the general goal along the way, as I mentioned, we're going to get a better idea of what

modules are, why we use them, and a really good idea of some rules around dependency injection.

So let's get started on this project right away by going back over to our terminal and we're going to

generate a new project using the nest Kellye.

So I've stopped my running application, I'm back inside of a workspace directory of sorts, I'm going

to generate this new project with Nest New and then I'm going to call my project Die Short for Dependency

Injection, because that's what we're really learning about here.

So run that command, I'll be prompted to select a package manager, I can go with NPM.

And the installation is going to kick off as usual.

That's going to take a moment or two.

So I'm going to take a pause right here.

We'll come back to the next video and we're going to start to generate a couple of different modules

and services.
```
