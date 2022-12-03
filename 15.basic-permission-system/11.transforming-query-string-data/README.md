## script
```bash
I bet you can guess how we're going to make sure that the longitude, latitude, mileage and yea all

get turned into numbers before they flow into our application.

Yep.

You guessed it.

We're going use yet another decorator, so we're going to go back over to our gate, estimate Dito.

And then at the top, in addition to importing class validator, we are also going to import the transform

decorator.

From Class Transformer.

This transformed decorator is going to allow us to receive an incoming value, such as, say, a string

from the incoming request and then do some processing on it or transformation on it and allow us to

return that value into some other kind of value before it ever gets assigned and validated on Ardito.

So let's go to our first property, so yea, right here, right above all the existing decorators,

I'm going to apply transform.

We're then going to pass any function that is going to be called with an object that has a couple of

different properties.

Now, you might recall we made use of the Transform decorator just a little bit ago.

The last time we made use this, we received the entire object or essentially the entire DTO.

This time around, we're going to receive just the year property.

So to receive just the property that we are applying the transform decorator to, we are going to D

structure of.

Value.

So value is going to be the incoming year in the string form, so we're going to take that year and

we're going to pass it into an integer and then return it from this function that passed.

Integer will then be assigned to the year property.

So I'm going to call inside of your pass int and pass in value.

And that's it.

So if I now save this, go backward my API client and make the request again, I'm no longer going to

see any validation errors around here because I've now correctly passed it into an integer.

So let's now do the same thing to milage and to longitude and latitude as well.

So back inside the show again, I'm going to copy that entire decorator and apply it to milage.

I'll then go down to longitude and latitude now, as I mentioned, we probably want to turn these things

into numbers just because that is how the entire rest of our application is set up in every location.

We are always assuming that longitude and latitude are going to be numbers.

I remember a longitude and latitude can easily be a number with a decimal on it.

Up here, we are parsing these values using percent that's going to give us back an integer, which

is going to be a whole number, either positive or negative.

In other words, a number without a decimal.

So for latitude and longitude, we're going to slightly change this transform function.

Instead of calling parse int, we are going to pass, float and then going to duplicate that down onto

our lattitude property as well.

OK, that should be it.

So now I'm going to go back to my controller very quickly inside my controller, I'm going to find our

request handler and I'm going to now console log out whatever that query object is.

I'll then go back over to my client, I'm going to send off the request again, and this time we're

not going to get any kind of air sent back to us.

We get a entirely empty response.

That's why I wanted to add on that.

Lugg just make sure that we're now receiving all the correct data that's going to go back in my terminal

and just make sure that I'm receiving that entire first query string.

So sure enough, I've got my make and model longitude and latitude mileage and year and the four letter

properties on there are all numbers perfect.

OK, so now that we are receiving all this information, we're going to use it to somehow generate an

estimate for a car with these attributes.

So let's figure out how we're going to generate that estimate in just a moment.
```
