## script
```bash
Our controller is looking pretty good, so let's now move over to our report service where we're going

to find this creates function.

I'm going to find my report service.

Nope, not that one, the suspect.

There we go, there's a service, so then instead of here, before we just dive into defining that create

function, we need to do a little bit of setup.

We need to get access to a repository that we can use to write information into our database.

You might recall that the code for this is a little bit complex.

So let's go back over to our users service and just get a quick reminder on how we get access to a repository

that's going to go and find my users directory inside.

There, I will find the user's service.

All right, so instead of here, this is the part that's kind of complex, I want to give you a very

fast reminder on we've got the insect repository decorator.

We then make use of the private keyword.

We call the repository simply repo.

And then we put in a type annotation of repository with a generic type of our user entity.

Injector story is coming from netjes type of arem, the repository type comes from type arm itself,

and then our entity comes from our entity file.

So we need to essentially write that exact same line of code right there, just replacing the user entity

with our report entity.

So let's go back over to our report service.

At the very top.

I'm going to import.

Inject repository.

From Netjes type Aughrim.

Repository.

Rom type Aughrim.

And then finally report.

From reports that entity.

Then inside of our service itself will define our constructor.

Don't forget to put in your curly braces right there.

We're not going to actually have a body twerk instructor, but we still have to apply or put in those

curly braces.

Well, then put in the inject repository decorator.

And feed in the report.

Then the private key word to make sure that this repository gets assigned as a property to our class,

I'm going to call it repo and then finally.

Type imitation of repository that's going to deal with reports and that's it.

Now we can define our function.

Remember, we're only calling this creates because a moment to go back inside of our controller, we

had assumed that our service would have a function called create, and that function was going to receive

the entire report DTO.

So inside of a report service, I'll define creates.

This is going to receive some incoming report kind of thing that we're going to try to save into our

database, so I'll call this report detail and it's going to be of type creates report Etto.

We then have to add in an import for the DCO itself.

So goes creates reports.

And then inside of creates, you might recall, a little bit of tricky code inside of your once again,

let's get a quick review from our user service.

So back at the user service, the only thing I want to remind you here, remember, we first have to

call it create, and that's what's going to actually create a user entity instance for us that doesn't

actually save anything into our database.

So we first call create we get back an entity instance and then finally we call save on that entity

instance.

We're going to do the same thing back inside the report service, so say reports is this repo creates

we're going to pass in the report.

Dito.

And then return this repo safe report.

And that should be at.

All right, well, that should be enough to at least allow us to test out everything we've written so

far, so we should be able to log into our application and then make a request to create a brand new

report.

And we should see it persisted into the database.

So let's do a very quick test in the next video.

So quick pause right here and we'll continue in just a moment.
```
