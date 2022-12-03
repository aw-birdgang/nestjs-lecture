## script
```bash
All right, let's get started on adding some code to our reports module, and we've already generated

that controller service and the entity as well.

So we've already got a little bit of code in here.

So for the most part, we're just going to be going back through these files we have already created

and adding in some different route handler's properties to the entity and so on.

A lot of the steps we have to go through, we already did in great detail on our users feature.

So just about everything we need to do around reports is going to be, for the most part, really straightforward

because it's just a repeat of all things we have done already.

We're going to first begin by opening up our report entity and we're going to add in a couple of different

properties to it.

So we need to store for every report the make the model, the year mileage, longitude and latitude

of a vehicle sale.

So let's go open up our report entity file and add in all these different properties to it.

Back inside my editor, I'll find the reports directory inside there, the report entity file.

So when we previously created this file, we had added in an ID and a price already, so we're going

to add in some additional properties to this.

We're going to first add in a column that's going to store the make of the vehicle to remember the make

is the company who made a vehicle.

So that would be like a Honda or a high and I or a Toyota and so on.

We're also going to store the model, so that's going to be the actual model of the vehicle.

So it might be a Mustang or a Corolla or what have you.

We're going to store the year.

That the vehicle was manufactured.

Then we're going to also store.

Oh, come on, there we go.

The longitude and latitude of the sale of the vehicle, so essentially where the vehicle was sold because

a vehicle that sold in one country might have a totally different price expectation than a vehicle sold

in a different country, we're going to abbreviate the longitude and latitude properties as simply LNG.

And Laerte for lattitude.

And then finally, we're going to also store the mileage or the number of miles or kilometers that the

vehicle was driven when it was actually sold because more miles or more kilometers on a vehicle decreases

its value.

I'm going to call this mileage, and that's going to be a number as well.

OK, so there's all of our different properties, simple enough now that we've got our entity put together,

we're going to start to work on our.

Service and the controller, we're going to make sure that we receive requests into the controller.

We're going to use it to extract and validate some information.

We're then going to use our service to make use of a repository and through that, the entity we just

modified to actually store these different reports inside of our database.

So let's get started on the controller and the service in just a moment.
```
