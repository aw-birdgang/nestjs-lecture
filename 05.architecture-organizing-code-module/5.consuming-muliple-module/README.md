## script
```bash
Let's warm up this last connection in order for our computer controller to work correctly.

We need an instance of CPU and disk.

So we're going to go through these same three steps once again to connect the CPU module and the disk

module to the computer module.

OK, so let's get to it, step number one, we're going to go into our CPU module and the disk module

and we're going to make sure that we export the services that we want to make available to other modules

inside of our project.

So let's first begin with the CPU module.

The CPU module defines the CPU service, and we want to use this service somewhere else inside of our

project.

So I'm going to add in exports and put in CPU service.

So on repeat for a third time now, whenever you define a service inside of a module, that service

is private.

It does not automatically get shared anywhere else inside of your project unless you add it into the

exports array.

We'll then repeat the same step inside of our disk module.

So on the desk module, I'm going to add in exports and I will export the disk service.

So there's step one.

Next up, step number two, we're going to go into our target module, the thing where we want to get

access to some services and we're going to add in some other modules on the imports list.

So in this case, we're going to open up our computer module file.

At the top, we will import the two modules that we need inside of here, so that's going to be the

CPU module.

And the disk module.

Well, then add in these two modules into a list of imports.

And then finally, step number three, so we're going to go to the controller or the service or whatever

that means to get access to some other service, and we're going to define the constructor method.

So in our case, we want to make sure that the computer controller gets access to CPU and disk.

So we'll define the constructor on computer controller and add in the CPU and disk services to the argument

list.

OK, so inside of computer controller.

At the very top, I'm going to import our two services.

I'll then define my constructor.

An add in private CPU service will be of type CPU service and private disk service will be of type disk

service.

And that should be it.

So now to actually test this thing out, let's very quickly define a root handler on the controller.

We're going to define a handler called something like run, and we're going to imagine that we are running

or starting up our computer, the run method is then going to call compute on the CPU service and call

get data on the disk service will then take whatever gets returned from those two function calls and

return it from our root handler.

So let's give this a shot back inside the controller.

I'm going to find the common import up here and I'm going to get the get decorator.

I'll then define a handler inside of here.

It I'll call simply run.

Then inside of Ron, I'm going to return an array, the first element of the array will be the result

of making use of the CPU service, and the second element will be making use of the disk service.

So I'm going to return an array with this CPU service that computes and remember, COMPUTE is supposed

to receive two numbers that are going to just add together.

I'll in one and two.

Well, then, call disc service.

Get data.

And that should be it.

So let's now save all these different changes, we're going go back over to our terminal and start our

project up the back over at my terminal.

I'll do an NPM run start Colen Deve.

And I should not see any errors, I see any errors right now, it means that I probably missed some

important statement or some expert statement inside of one of my different modules.

So if you get any errors at this point, make sure you double check all the different import statements,

all the different export statements and so on.

Once I've got this all put together and then going to make a request to localhost three thousand computer,

I don't have to use an API client for this.

Since we define this thing as a get handler, we can make request directly from our browser.

It's all start up my browser.

I'm making use of chromium.

Hopefully it's actually going to start up here, sometimes it lags a little bit.

I'll tell you what, I'm not sure chromium is going to start up up there is.

I actually do have it.

OK, so localised.

Three thousand computer.

And there we go.

So I see the result of our CPU service and the result of our data service.
```
