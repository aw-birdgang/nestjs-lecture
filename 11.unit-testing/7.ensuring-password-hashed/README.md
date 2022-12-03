## script
```bash
All right, let's try writing another test around authentication service, so in this video, I want

to try to test our sign up method so our sign up method takes in an email and a password is then going

to do some logic, blah, blah, blah.

A lot of stuff generates the salt in the hash, but then eventually creates a new user entity with that

password.

So the hash insulted password and then after creating that user entity, it's going to return that user.

So in this video, I want to try to write a test that is going to try to call the sign up function with

an email and a password.

We're then going to take a look at the user entity that gets returned back to us.

And we're going to make sure that the password is salted and hash out the password we get out should

not be the same as the password that goes in.

A quick reminder, the find method right here and the create method right here are implemented by you

and I.

So we need to make sure that our implementation of find and create are compatible with our goals for

this test.

So back inside of our test file, we're going to take a look at find and create.

It looks like find is going to return an empty array.

That's exactly what we want.

Remember, if it returns an array with anything inside of it, we're going to throw an error.

So that would not allow us to test our code as we want and then for the create method.

This will take in an email and a password and then return a promise that results of an object with whatever

password that was put inside of you.

So that is exactly what we want as well.

Remember, inside of the sign up method, we're going to eventually call create with a given email and

the salted and hashed password.

So we want to make sure that we actually make use of that email and password.

We want to return an object when I return a user right here that has the hash password on it.

It might seem like I'm making a big deal out of this, but just what I really want you to understand

here was if we put together a create function that completely disregarded the provided email and password,

for example, if we hardcoded in some email.

And hardcoded in some password, then our code would probably or a test would not work as expected,

because we'd be getting an email and a password inside this function, but just returning some willynilly,

totally different email and password.

So that's not what we want.

We want to implement this method as close to the original implementation as possible.

And the closest implementation would be to create a new user or fake, creating one with the email and

password that are provided.

OK, so.

Down at the bottom of the file, let's create our test.

So underneath the existing statement, I'm going to say it creates a new user with a salted and hashed

password.

Make sure we mark that function as async.

Then inside of here, I'm going to call my service specifically the sign up function with some email.

And some password.

Telling sign up is asynchronous, so I'm going to put a weight there and then out of it we get back

a user.

So in theory, this would be the user that was saved to our database.

This user should have an ID.

It should have an email and it should have the hashed insulted version of that sign up pass right there

that remember, that is the password that is supplied by our users.

So we're going to take a look at the user that was created.

We're just going to look at the password property.

We're going to make sure that it is not identical to the password we put in.

We're going to make sure that it more or less looks like it is salted and hashed.

Remember, we can't really directly or exactly figure out what the value of the password is because

these salt is randomly generated.

So we can't say, oh, the salted in hash password that comes out should be X, Y, Z, because we just

plain don't know what the salted and hash password looks like.

But we can at least say whatever we get back is that string should have maybe a period in it or something

like that, something that says, yes, we did properly salt and hash it.

All right, enough talking.

Let's just write some code, so what we need to do here is something like expect user password not to

equal ASDF.

And then going to get the salt and hash.

From user password split on period, I'm going to expect salt to be defined.

And password or something, hash.

To be defined.

So, again, this entire block right here, we're just making sure that the password was actually salted

and hashed in some way.

So let's now save this.

Let's go back over to our terminal and see how our tests are doing.

Sure enough, it passes.

Very good.

So, as usual, whenever you run tests, it's really nice to make sure that your tests are actually

working by causing them to fail in some way.

So in other words, I want to see this test actually fail, just so I know that the test is right running

in its entirety and all the inside here is running in some way.

So to make sure that it fails, I'm going to try to split on.

How about.

A dollar sign.

So if I try to split on a dollar sign, we're probably going to have dollar signs on the salted and

hash password, so we are probably not going to end up with a value for hash right here.

It will end up being undefined and that would cause the second expectation probably to fail.

So if I save this and flip back over.

Yep, that's exactly what happened.

So expect it has to be defined.

It was not.

That means that my test is probably running as I expect I'm going to undo that dollar sign and change

it back to a period now if I save again test runs.

OK, so this is a good first test right here.

Let's come back in just a moment, we're going to add in a test around Sinon.

We're also going to take a look at some other ways that we can kind of mess around with our testing

suite and whatnot by massaging or changing how some of the functions on our fake user service behave.
```
