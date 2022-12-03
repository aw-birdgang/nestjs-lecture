## script
```bash
I think we've seen enough around unit testing, so in this video, we're going to start to move on to

the other form of testing and nest, which is referred to as end to end testing, you can find an automatically

generated end to end test inside the test directory of our project folder.

So inside of here is one end to end test file.

If you open that file up, you're going to notice that the structure of this file looks very similar

to the unit test files we already put together.

So inside of here is a described statement.

There's a B for each where some kind of testing module is created and then some tests at the very bottom.

So let's show you a couple of diagrams and understand what we are really doing with end to end test

and how they differ from a traditional unit test.

OK, so with an end to end test, we are attempting to make sure that a wide swath or essentially a

lot of different pieces of our application are working together and working as expected.

So rather than trying to call one single method and make sure that that method does the right thing,

we're going to instead create an entire copy or an entire instance of our application.

We're then going to assign that instance to listen to traffic on some random port on your computer.

Then inside of our test, we're going to make requests to that very temporary server that is listening

to traffic.

We can make one request.

We can make five.

We can make as many requests that running application as we want by writing out some code inside of

our test.

So if we had a test where we are trying to make sure that we were able to sign up successfully, we

might make first one request to just sign up, then maybe we could also attempt to make another request

to sign out and then maybe another two is signed back in to make sure that the account was actually

created correctly.

A brand new copy of our server is going to be created for every separate test we write out.

So if we end up with, say, five different tests, we are going to create.

Over time five, or maybe in this case, just three different copies of our application, so each of

these are going to be created.

We're going to run a test on that server and then shut the entire server down.

We're then going to repeat the entire process during the next test.

To run these tests, we're going to run yet another command from our Seelie.

We're not our Seelie, but our terminal, the command is listed out just in case you forget it, inside

the packages on file.

So if you open up that file and find the script section.

Go on down and you'll notice there is a test Kolan E to E script, so this is going to run all the end

to end tests inside that test directory.

It's not going to run any of the spec files inside your Sarsae folder.

Let's try running that command right now and seeing if the existing test passes.

Back over at my terminal, I've stopped my running test suite, I'm going to do a NPN and run test,

Colen E to E!

And I'll very quickly see that, yup, looks like everything is working as expected, so this means

that we are testing out the builtin app controller, which has just a very small single root attached

to it.

Just make sure that we've got a root root and then that's root.

Root is going to return a string of something like hi there, that's what the test actually does.

So, as you can imagine, pretty straightforward and pretty useless tests that we probably don't really

need.

So let's take a pause right here.

We're going to come back to the next video and we're going to start putting together our own end to

end tests and make sure that our authentication set up.

All of our authentication set up inside.

The user's controller is working as expected.
```
