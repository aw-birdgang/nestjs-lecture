## script
```bash
Let's go back over to our terminal and we're going to use the next Seelie to generate our controllers,

our services in our module.

Remember, we do not use the necessary to generate repositories for us.

The reason for this is that these repositories are almost always going to be very, very different,

depending upon how we are storing our data.

So whether we are storing our data inside of a plane file or making use of a database, so we are going

to eventually instead create these repository things on our own manually.

Zeph, right now we're going to create six different things to controllers, to services, into modules.

So let's get to it back over at my terminal, I will change into the McVee project directory and then

do a nest G module users.

So there's our module next up, we'll do a nest egg module reports.

OK, there's the other module, and now we're going to repeat the process two more times to create two

services into controllers for first you Next G controller users.

Nest G comptroller reports.

And then finally, Next G service users.

And Next G service reports.

All right, so a lot of files, let's open up our code editor inside that project directory and just

inspect what we've got now.

So here's my Mrvica project directory.

I already opened up my code editor between the last video and this one.

If I go into the NRC directory now, I should see the reports folder inside there.

I've got a module, the service in the controller.

I should then see the exact same thing inside the user's folder as well, so I should have a module,

a controller and a service.

And then finally, if I open up my app module, I should see that the users and reports modules have

automatically been imported and I should see those two modules listed on this import sign right here

as well.

Remember, we haven't really gone into modules that deep just yet.

So if you're not really sure what this important thing right here does, no problem.

We're going to go over that in great detail inside this application.

All right, so there's our first start, a couple of different files and folders created for us, but

as I mentioned, we still have to create these repositories.

So let's take a pause right here and start moving forward on this application.
```
