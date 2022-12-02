## script
```bash
Let's get started working on hashing the user's password now in this video, we're not going to write

out any code just yet.

Instead, I'm going to tell you what it means to hash a user's password and how this is going to give

us any level of security inside of our application if you are already familiar with password hashing.

I would encourage you to skip over this video and just go to the next one.

This will be a long video, very long, as a matter of fact, and are going to be 100 percent focused

just on the password hashing process.

So let's get to it.

OK, so here's what we're currently doing inside of our database, we've got our table of users, we

have an ID, email and password for each of them.

And right now, of course, we are storing our passwords as plain text.

This is very, very bad practice.

It's something we never want to do inside of any real application.

If any malicious person ever got a copy of our database, they would have the email and password of

all of our different users.

The reason this is a big deal is not only because some malicious person could sign into our app as another

person.

It's also a very big deal because our users might use the same email password combination as on our

application, as they do on other applications, such as maybe their banking service or their private

email address and so on.

So by anyone getting access to our users email and password, it is a threat not just to our application

but to our users entire online presence in general.

So we need to make sure that we do not store passwords in plain text.

So the rest of this video is going to be all about how we avoid this very bad practice right here.

OK, so understand how we are going to encrypt our users passwords, the first thing we need to understand

is something that might seem completely unrelated, called a hashing function.

This hashing function is going to be the absolute key to everything we do around handling a user's password.

Hashing functions are not only used for password storage, they're used for a lot of different security

applications.

You and I are not going to write out our own hashing function.

Instead, there are a variety of different hashing functions that are already implemented in the node

standard library.

So we're going to use one of these already built hashing functions.

The goal of a hashing function is to take in some kind of input.

It can be just about any format.

In our case, it's going to a plain string.

It's then going to calculate a hash based on that input and then spit out a sort of digital fingerprint.

So we're going to get back a string of numbers and letters.

This string of numbers and letters has two very important characteristics around it.

So the first characteristic is that if we ever change the input, we're going to get back a completely

different output.

So, for example, if I have my password, I put it into the hashing function, I will get back a string

of four seven seven two zero blah, blah, blah.

If I put in this same string to the hashing function again, I'll get back the exact same output.

So the same string always results in the exact same output.

But if we ever make even the smallest change to that string, if we change one letter, if we capitalize

letter, if we remove a letter, any change whatsoever, we're going to get a dramatically different

output.

So we're not talking about changing one number or letter in the output.

We're talking about a completely different string.

These are two very real hashes right here for a string of my password and my password.

One, you'll notice that even though we only added on one number between these two strings, the output

hash is dramatically, dramatically different.

OK, so now that we kind of understand the basics of a hashing function, one other thing, that's a

very important property of them.

Is that once we apply a hashing function to a string and we get some output, we can not undo that process.

So, for example, if I have the string, my password and I get back a string of four seven seven to

zero, something something something I cannot take this string, put it back into the hashing function

as an input and figure out what the original input was.

If I tried to hash that value right there, I'll just get back another totally different hash.

So once we have hash and output or Sunny Hostin input and we've got just the output by itself, if we

have only that string, we have no way whatsoever of figuring out what the original input was.

So if I were to zoom on this right here.

If I showed you just this string and asked you what the original input to this was, there would be

no way you could ever answer my question without, of course, already seeing my password over here.

So by just having this string alone, we can't figure out what the original input was.

All right, so that's the two very important qualities of hashing functions first.

Any very small change, the input will result in a very different, completely, very different hash

and second.

Once we have hash and inputs, we can't go backwards, we can't figure out what the original input was.

Now we've got these basics down.

Let's take a look at how are we going to handle our password encryption or hashing process?

All right, so our entire sign up and sign and flow is going to revolve around these hashing functions,

so here's what we're going to do during Sign-Up.

Well, then take a look at how we're going to handle sign in after that point.

So during our sign up process, a user is going to give us a password.

Right now.

We would just take that plane password and stick it directly into our database.

So we're not going to do that anymore.

Instead, we're going to first take that password right there and run it through our hashing function.

That's going to give us back a series of numbers and letters.

We're then going to store this inside of our database as the password field instead of the original

password.

So at no point time are we going to directly store this original password.

So if a user signed up with my password and an email of something like a AdCom, I would expect that

inside of our database we would have a record of some ID with that given email.

And we would see the hash of the user's password as opposed to their real password.

So we are going to store hash passwords as opposed to the original plain text ones.

Now, this might seem like it doesn't really do a whole lot for us.

The key is understanding the sign in process.

So this is just what occurs during sign up.

Let's take a look at what happens when a user comes back to our application and tries to sign back in

at some point in the future.

So at some point in the future, a user is going to come back to our application, they're going to

fill out our sign in form, and that's going to give our server an email and a password.

As a part of this sign in process, you and I are going to immediately go into our database and find

a user with that given email address, so at a dotcom.

So we'd find this record right here and we would see that hashed password.

So then here's the key, we're going to take the users supplied password right here, we're going to

hash it with the same hashing function.

And remember, if we ever run the same hashing function two times or five times or a million times with

the same inputs, we will always get the exact same output.

So we're going to, again, hash this supplied password right here and get the output.

Once we've got that output will then compare, this has to output against what was stored inside the

database.

If these two values are identical, that means that the user during the sign in process must have just

given us the same password that they gave us during the original sign up.

Flo.

So the original or the supply password right here must be identical to the original password supplied,

that means the user has given us some valid credentials and we would now consider them to be signed

in.

Now, what would happen if a user gave us an invalid password?

Well, if a user gave us a totally different password right here, like maybe my.

Or how about Apple?

Maybe that's my password.

When I run that through the hashing algorithm, I'm going to get a totally different hash.

So something like that, once again, we will compare it that value against the stored hash.

In this case, they are not the same.

So that means that the password supplied right here must not be the same as the original.

And we have just been given an invalid email and password.

OK, so that's it, that is the entire sign up and sign in process, this allows us to store passwords

inside of our database as opposed to passwords in plain text.

Now, I wish I could say that was the entire flow.

I wish I could say that's all we have to write.

But unfortunately, there is a little weakness to this entire technique.

Remember, turns out that people across the Internet, we all tend to use the exact same passwords everywhere,

so chances are someone maybe you or someone you know has used the password password at some point in

their life or something like I think a very popular password across the world is something like, I

love you.

There are a couple of passwords out there that are just extremely common.

So malicious people can use that fact to still kind of attack our database and figure out what a person's

password is, even though we are storing it as a password.

This is referred to as a rainbow attack.

So let's figure out what a rainbow attack is, because this is something that we absolutely have to

address inside of application as well.

The idea behind a rainbow table attack is that some malicious person out there is going to get a list

of all the different most popular passwords across the world.

So they've got some list.

They're then going to run through this list of maybe hundreds or thousands or even millions of different

very common passwords.

And they're going to calculate the hash of every one of these very common passwords ahead of time so

they can do this any day of the week, they can do it right now.

And once they've done this calculation and they've got these password and hash pairs, they can just

store this table.

They never have to run this calculation again.

So then if this malicious user ever got access to our database in some way, they could take a look

at our password, they could then compare our stored hash password right here against all these recalculated

hashes that they ran ahead of time.

So they would look at this user's passwords, see, it's zero zero eight nine, and they would compare

it against the list of all hashes they computed ahead of time.

So they say, are these two identical note?

How about those do note?

How about these two?

Oh, hey, it's a match.

Well, because these hashes are identical, that means that this person's password must be my password.

So this malicious person, by making use of this rainbow table attack, we know that our user has an

email of a at AdCom and their original password was my password.

So this malicious person could then take this email and that password and try to go to log in to a variety

of maybe different bank websites or different personal email addresses.

Basically, we're back to the original scenario where this malicious person now has our users email

and plain text password.

So we have to figure out a way to deal with these rainbow table attacks.

Fortunately, it's pretty easy and straightforward to do.

Well, I don't want to say straightforward.

It's definitely not straightforward, but it is easy to deal with.

We don't have to write a lot of code to prevent this kind of attack.

So here's what we're going to do.

We're going to make our sign-up process and our signing process just a little bit more complicated,

so we're going to say that during the sign up process, a user is going to once again give us a password

that they want to use.

You and I simultaneously, inside of all of our sign up related code for this particular person who

is signing up to our application, we are going to generate a random series of numbers and letters and

we're going to refer to this as a salt.

So maybe our salt would be something like a one zero one.

So, again, randomly generated the length of salt can be as long or technically as short as we want.

Ideally, it would be longer.

We're then going to take the user's password and the salt and joined them together into one single string.

They're going to join that, join that into one string.

So we'd end up with something like my password, a one zero one.

Oops, there we go, we're then going to run that joint string through our hashing function and we're

going to get some output down here, maybe something like, I don't know, zero one zero zero six six

D.

So that is the highest output of joined together, the password and the salt.

We're not done yet.

We're now going to take that output and join it together with the original salt.

We would usually put a period or some kind of separating character between that output right there and

the salt so we can tell which string is which or where one begins and the other begins.

So we might end up with something like zero one zero zero 60 and then maybe a period or slash or two

slashes any kind of separating character we want to put in here.

And then we would put in the salt.

We would refer to this as the Hashd and Salted Password.

And this value is what we were going to store inside of our database, so we take that value and put

it right there.

So, again, that's a sign up flow.

So how does this really help us?

Well, let's go take a look at the sign inflow, understand how we make use of the salt, and then eventually

we'll see how this solves problems around that rainbow table attack.

It's now the sign in flip.

Gets later on during Sinon, a user is going to give us some email and a password as a first step during

the sign in process, we're not going to generate a salt randomly.

Instead, we're going to take a look at the email address that the user just supplied to us.

We're going to go into our database and find a user inside the database with that email so we would

find this right here.

Remember, we had stored the hash and then a period and then the salt right after it.

So we're going to find this user.

We're going to pull out that string right there and separate it into its component parts.

We're going to separate it into the hash.

And the salt, I'll fix up that formatting here.

A little bit better, come on.

There we go.

So remember, we stored those two things together in one string with a separator character inside them

or separating the two.

So we know which one is the salt and we know which one is the hash.

We're going to separate them into the two.

And now we know that our original salt was that string right there.

So we're going to take that salt, but ah, right here.

And we're going to repeat the exact same process we had done previously.

So we're going to take the user's password and the stored salt that we had inside of our database.

We're going to join the two together.

And we would end up with my password, Abbi, to see a three, three, four, we would then run that

through our hashing function and we would get our output maybe a one zero one zero six six or whatever

else.

So that is our -- right there, so the A1, the one six, so now we're going to go back to the same

user right here.

And remember, we have the original house right there and we're going to compare it, the hash we just

calculated with the hash we have stored inside of our database.

And once again, if that hash right there in the one we just calculated are identical, that means the

user must have supplied the correct password if they gave us a different password.

So if they gave us something like ASDF, then our input to the hashing function would have been ASDF

and then the salt we would have gotten a very different output from the hashing function, would have

had a very different hash.

And so these two would not be the same.

And that means that the user must have given us the incorrect password.

So at the end of the day, adding in the salt, just totally identical.

The only difference is that during the sign up process, we are generating that salt and storing it

inside of our database.

And then during the signing process, we're going to go into the database, find that salt and use it

inside of our house, has the password hashing process.

Now, I know that's confusing.

Last thing I want to say here is why this solves the rainbow table attack.

Remember now the output of our hashing function right here is not just the users playing password.

Now it is the user's password, plus a random series of numbers and letters.

So that means that enable or in order to do a rainbow table attack, which all revolves around this

idea of kind of pre calculating these different hashes ahead of time, someone to put together this

rainbow table attack would now have to do a series of different entries where they take a password and

then they guess assaults.

They would say, if I have a password of this and a salt of this, I would end up with a hash that looks

like this.

This malicious user could then compare that against the one we have stored inside of our database,

but the key thing here is that the user or this malicious person would have to regenerate this entire

rainbow table with a different salt for every different possible salters in the world out there.

And there are millions or billions or trillions of different combinations of numbers and letters we

can use as our salt.

They would have to generate a totally different rainbow table so they'd have one rainbow table with

this salt.

They would then have to generate another one.

So here's the second one they generate with a slightly different salt.

So maybe this time they use all these numbers and letters with a one at the end and that would give

them a totally different set of hashes over here.

So by adding on the salt, it turns this rainbow table attack into just way too much work, because

there's no way that any malicious user would ever want to make a number of different rainbow tables

that have every possible different password out there with every different possible combination.

It is just plain not feasible.

So that's how we address issues with rainbow table attacks.

All right, so that's it, that's what's going on here now, if in this video you got lost at any point

in time.

Don't sweat it because I guarantee you, as soon as we start writing the code out for this, everything

is going to become crystal clear because it turns out the code ends up being pretty darn straightforward,

especially some of the stuff around comparing the salt and generating the salt and storing that stuff.

All that stuff is going to be pretty straightforward as soon as we start writing the code.

So at this point time, let's take a pause right here.

We're going to come back to the next video.

We're going to implement all the stuff manually ourselves, with the one exception of that hashing function.

Again, remember, in general, make use of hashing functions that are already built for us.

And the node standard library has a collection of different hashing functions we can use.

So let's start our implementation in just a moment.
```
