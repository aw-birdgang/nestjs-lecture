## script
```bash
We just had a very long video discussing how to hash and salt passwords and then store them inside of

our database.

So now back inside of our off service, we're going to start to put together this hash the user password

step to get started.

I'm going to put in three separate comments just to describe exactly what we're going to do inside of

here.

So very quick reminder, by the way, if you watch the last video, remember, there is a very big difference

between the sign up process and the sign in process.

Right now, we are just focused on the sign up process.

So we need to generate a salt, hash the salt along with the password, and then store both the hash

password and the salt inside of our database.

So that's what we're going to do right here.

So a couple of comments just to guide us.

First, we're going to generate a salt.

Well, then hash the salt and the password together.

And then finally, we're going to join the hashed results and the salt together.

And then the result of that right there, that is what we're going to actually store inside of our database.

Now, out of these three steps, we're going to implement these using some different functions at the

node standard library.

So let's go up to the very top of this file.

We're going to import these helper functions and then we'll make use them so appear at the very top.

I'm going to add in an import statement or random bytes.

And a script from the Krypto package, so Krypto is a part of the notes standard library, random bites

we're going to use to generate our salt.

It's going to give us just a random string of numbers and letters.

And then script is our actual hashing function, so that's the thing that's going to do the heavy lifting,

the actual hashing of the input password.

If we make use of scripture, however, one little gotcha here, this ESCAP function is asynchronous

in nature, but rather than giving us back a promise to deal with that, a synchronicity, we instead

have to make use of callbacks with this plain version of script.

Remember that in general, you and I as modern JavaScript and typescript developers, we don't really

like callbacks terribly much.

So rather than using this plain version of the script, we're going to wrap it up a little bit.

We're going to make sure that script instead gives us back a password rather than not a password, but

a promise rather than making us use a callback.

So one extra little step here right after that.

Imports, we're going to add in and import for promised Sify from util.

This is another package built into the standard library from his is a function that will take in a function

that makes use of callbacks and it's going to give us back a version of that exact same function that

instead makes use of promises.

So we're just using promesa fi to make script a little bit palatable to our very sensitive here and

making sure that we can use a promise rather than a callback.

OK, so now one other step.

I'm going to rename the script import to underscore the script.

I'm going to say script does underscore is correct.

The only reason I'm doing this is for the next line of code we're going to write.

So right underneath those imports, we're going to say the script is remiss if I underscore script.

So the only goal that rename right there is with that inside this file we're going to reference are

very good promise based version of the script as a variable called script, because otherwise if we

just left this thing named as a script, we'd have to pick out a different name for this variable right

here.

I don't really want to do that.

I want to just call it function script and have it be done with.

OK, so now one more thing around the step, unfortunately, we're making use of typescript here in

typescript sometimes gets a little bit confused whenever we make use of promise a fight.

Usually it's very good about understanding what's going on.

But in this case, TypeScript is just going to have no idea what this line of code really does.

It's not really going have any idea what is going to be returned from calling a script.

It's a very shortly.

We're going to have to give TypeScript a little bit of help and understand what calling this thing is

going to give us, give us back in return or what kind of value it returns to us.

OK, so now down where we just put those comments in, let's put together these three different steps

to first off, we're going to generate our salt with salt is random bites eight and then two string

hex like so.

The random bites we're putting in a number right here, this function is going to return back to us

something called a buffer, which is very similar to an array.

The difference is that a buffer holds some raw data inside of it.

So Rob, binary like ones and zeros, we don't really want to work with ones and zeros.

Instead, we want to work with a string of random numbers and letters.

So we're going to take all those random ones and zeros and turn it into a hexadecimal string, which

basically just means a bunch of random numbers and letters.

The eight right here means that our buffer is going to have eight bytes worth of data inside of it,

every one bit of data turns into two characters when we convert it to hex.

So our salt is going to be a 16 character long string.

Some of the words, this string right here, whatever.

We randomly generate 16 characters inside of it or numbers, characters or numbers.

All right, next up, we're going to hash the salt in the password together, so this is where we're

going to use that ESCAP function.

So we'll say Housh is a great script, we're going to put in our password as the first argument and

remember, this password is an argument to our function.

The second argument will be our salt.

And then finally, 30 to as the third argument.

So when we call script, we're going to get back some kind of hash results, we can customize how many

characters or how long that hash is with this third argument.

So 32 means just give us back thirty two characters or 32 bytes worth.

I forget exactly which one it is as the output of scripts.

Thirty two is totally fine.

You can go longer, you can go a little bit shorter, but no one's going to question you if you have

thirty two characters for this.

So now here's the issue around TypeScript, and that promise, if I function that I mentioned just a

moment ago, if we mouseover hash right here, TypeScript is going to say that it thinks its type is

unknown.

In other words, TypeScript just has no idea what gets returned from script whatsoever.

So just to help TypeScript out a little bit, we're going to wrap this up with a set of parentheses.

And then at the very end, we'll say as buffer like so.

So a buffer is what is actually returned from calling Descript, so again, just giving TypeScript a

little bit of help.

So then finally right here, we're going to join together our salt and the hash result and we're going

to put a separator character between the two.

So we'll say.

Result is salt plus a dot, so that going to be my separator character, so when we eventually store

all this stuff inside of our database, we're going to have the salt, then a period and then the hash

password.

This is what is going to allow us to in the future.

Take a look at this user.

Figure out what the salt was for them and what the hashed password was for them as well.

And I'll join on their hash to string Hecks.

So the two string right here with the hex, very similar to what we had to do back up here at the salt

out of script, we get a buffer.

We can't very easily just take a buffer and join it together with a string.

You technically can, but we probably don't want to do that.

So instead, we're going to first turn that series of random bytes into hexadecimal.

And that should be it.

Now, the last thing we have to do is take that result and we're going to create a new user with it,

this results right here is going to effectively be the user's password as it is stored inside of our

database.

So let's take a pause right here.

Will then create that new user, save it and then test all the stuff out in just a moment.
```
