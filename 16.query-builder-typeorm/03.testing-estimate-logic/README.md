## script
```bash
All right, time to test out our gadget estimate query, the first thing we need to do is create a couple

of different reports that are of the exact same make and model inside the correct longitude and latitude

with the same year or at least a very similar year, will then be able to test out our new gadget estimate

route handler down here and make sure that everything works as expected.

So I can first begin by changing the make to some other make a vehicle.

In this case, we'll go with a Ford and I'm going to change the model to Mustang.

I'm going to stick with the year of 1980, a mileage of how about we'll stick with about fifty thousand.

I'll change the longitude to 45, the latitude to 45, and then for the price, I'm going to put in

ten thousand.

I'm not going to create exactly one car with these attributes.

OK, so there's the one car.

I'm then going to make a very small change to a couple of these parameters so I can change the year

to nineteen eighty one.

And the price to 15000.

And then finally, I'll change the year to nineteen eighty two and I'll change the price to twenty thousand.

So now if McQueary is working as expected, I would if I make a or try to get an estimate for a Ford

Mustang with a year of, say, nineteen eighty one with the same mileage or really any mileage around

that longitude and latitude, I would expect to get back a price estimate of 15000 because my first

Ford Mustang had a price of ten thousand, then 15 and then 20.

So if I average those three vehicles together, the result would be a price of fifteen thousand.

So I'm going to go down to the bottom and update my query string a little bit.

I'm going to change the make to Ford.

The model to Mustang.

I'll change the longitude to 45 and the latitude to 45, the mileage and not make a big difference because

right now we only have three cars anyways.

I will change the year to say nineteen eighty one.

Now, if I send off this request, it should build me an estimate for my vehicle based upon the three

different reports that I just submitted.

It's going to send us off and sure enough, it worked.

Awesome.

That's exactly what we wanted.

OK, so I'd say that our request to make or to get an estimate is working as we expect.

So now we've done this test.

The very last thing I would like to take care of is to add in one last condition around our estimate.

Right now, our estimate is not actually only considering a report that has been approved by an admin.

So we can very easily add in this case or add in a check for that by.

Putting in one additional and we're here, we're going to put in and and we're of.

Approved.

Is true.

They'll make sure that we only consider reports where they have been approved.

So I'm going to save this, and now if I try to run that same request again, I have not approved the

three different reports I just created.

So I would expect to probably get back a price of NUL or something like that.

Sure enough, yep.

It's not it's now if I wanted to get a actual estimate, I would have to go back through and approve

the three different reports that I just submitted.

OK, well, that is pretty much it for the estimate feature inside of our application and in general,

I think that's kind of it for the entire app.

Overall, at least for code, we have to write around our application logic.

So now that we've wrapped up our authentication logic and the reports logic, we're going to start to

think about deploying our application.
```
