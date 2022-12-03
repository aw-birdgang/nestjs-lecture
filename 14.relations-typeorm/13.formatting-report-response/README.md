## script
```bash
We are now on to step number four, so we are creating reports and we are associating with a user,

but we are currently sending back way too much information.

So we are going to apply a serializer to limit the amount of information shared.

So inside my editor, here's the response we get back from creating a brand new report, here's the

user property and again, we're sending back the entire password.

So we don't want to send that entire password back, obviously.

In order to limit the amount of information we send back, we're going to reuse something we created

earlier on inside, of course, our interceptor called the serializer interceptor.

So that's inside of our SIRC interceptors directory.

You might recall that along with the interceptor.

We also created a decorator to make use of it very easily as well.

So we are going to create a new DTL that is going to describe how we want to format that outgoing response

with a report inside of it.

And we're going to specifically say that we do not want to include the user's password.

But before you do that, I want to have a very quick side discussion, I'm going to take another look

at the response we're sending back whenever we create a brand new report.

I'm going to copy it into a file empty one just really quickly so I can edit this thing very easily.

OK, so here's our response from creating a brand new report.

Now I want to show you something that a lot of APIs choose to do.

This is not strictly required, but it's a pattern that you're going to see very, very frequently.

So we have a report right here and we've got an association with some user.

In this case.

We have decided to embed the entire user inside the response.

So we have a user property.

And lo and behold, there's the entire user object.

Presumably, if this user had some additional properties associated with it, such as a first name,

last name, favorite color, age, name, whatever else, those would also be present in here.

That's a lot of information to include around a request that was really intended to just create a report.

So pattern that you're going to see in a lot of different APIs is to say whenever we have an association,

rather than embedding the entire association, instead put in just a property called something like

user ID and have that be the idea of the record that this report is associated with.

I just put in the user ID right there.

We now give the person who is making use our of our API the option to get more information about this

user if they want, for example, someone making a request to make this report could decide to make

a follow up request to get some information about the user with ID of one.

So this is a pattern that you and I are going to use inside of our project rather than always embedding

the entire associated record instead of response.

We're just going to have kind of a pointer of sorts.

We're going to say, if you have any interest in this associated record, then make a follow up request

to its own dedicated endpoints and try to get some information about this user.

So this is going to make our API just a little bit easier to manage because we're not going to have

to worry about always fetching a ton of associated data for every single request or every single record

a user ever tries to fetch.

So in total, what I'm trying to say here is we're going to build out a serializer, we're going to

write out a custom detail for it, and rather than just trying to subtract or remove that parser property,

we're going to instead add a new property called User ID.

And it's going to be whatever the idea of the user is, we're then going to make sure we delete that

entire original user property.

So that's the goal that's we're going to do.

OK, so with all that in mind, let's take a quick break here and then get started working on this new

DTO to format the outgoing report in just a moment.
```
