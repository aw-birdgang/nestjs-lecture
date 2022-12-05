
## install
```bash
npm install @nestjs/common@7.6.17 @nestjs/core@7.6.17 @nestjs/platform-express@7.6.17 reflect-metadata@0.1.13 typescript@4.3.2
    
```

## script
```bash
In between the last video and this one, I opened up my code editor inside my scratch project directory so I can see that I've got my packages on file, which we just generated, and then all my dependencies  are inside that node modules directory.

Let's open up our packages on file inside of you.

We've got the dependency section and there's all the dependencies we just installed.

Now, believe it or not, we can actually understand a little bit around just by taking a look at these dependencies and just understand what they do for us.

So very quickly, what are all these things about?

All right, so I took that section, put it in this diagram right here.

And we're going to take a look at four of these different dependencies.

The first one on that list is Nest James Common.

The Nest library itself is split out into several different packages.

The vast majority of functions, classes and whatnot that we're going to use to build a nest application are coming from the common package.

So we're going to be importing that package quite a bit throughout this entire course.

Next up, we're going to skip over the core one and go to Platform Dasch Express, this one is a little bit more interesting, and this is what is going to start to really help us understand what Nest is doing internally.

So internally, Nest itself does not handle incoming requests.

Instead, here's a quick diagram of what's going on behind the scenes.

Nest relies upon some outside implementation to handle requests for it.

So inside of our nest server that you and I are going to eventually create, we are going to have some place inside of our code where we have to plug in some kind of HTP implementation.

We have to provide some kind of server that says here is something that's going to handle incoming requests and then eventually respond to them with an outgoing response.

In the world of Nest, we currently have two options for HTTP server implementations, we can either make use of the very popular Library Express G.S. or another one called Fast Wi-Fi.

So we need to make a choice between both of these HTTP server implementations and essentially drop one in for Nest to use.

Right now, the default is to make use of express, so if you ever generate a new nest project right now as it stands, you are going to get express by default.

But we can easily say, you know what, instead of using Express, I want to use force to fly instead, which is just another HTTP server implementation.

Now, as to why you would use one or the other, it comes down to the kind of application you are building for you and I.

Inside this course, we're going to stick with the default of Express.

So this dependency that we have right here of Platform Dash Express says that we want to install an adapter between Xpress and Nest, it's going to make the two of them work together.

And behind the scenes, Nest is going to use Express for handling all incoming HTTP requests.

All right.

Now onto our next dependancy reflect metadata.

This is a library tied to decorator's if you're not familiar decorator's, don't sweat it.

We're going to go into more detail on decorator's in just a moment.

And then finally, our last dependancy there is TypeScript.

So usually we write nest applications with typescript.

That is not strictly required.

You can write nest apps with JavaScript, but by far the most popular way to do this and probably what you're going to see on any job or series project you work on is the use of typescript with Nest.

So we are installing the typescript compiler here.

All right.

Now back on track, let's continue with our application, we still haven't really said what this app is going to do, but right now, let's just continue doing a little bit of 1.setup and we'll eventually decide on what kind of application we want to build in just a moment.

So at this point in time, we have installed dependencies.

The next thing we're going to do is set up a typescript compiler config file.

So this is going to be a classic test configuration file.

We're going to write out a couple of settings inside of it just to tell typescript how to compile our project.

And usually we do not have to do steps one and two if we are using the next Seelie to generate our project for us.

So these are just steps that we are doing because we are setting up our project from scratch. All right.

So let's go create our config file and set up our typescript compiler very quickly.

So back inside my editor, I'm going to create a test config, JSON file.

I'm going to put in a set of curly braces, a string of compiler options.

And then I'll sign to that in object.

We'll put in there a couple of different key value pairs, the first one is module.

Of Common, James.

Then a target of its seventeen.

And then experimental decorator's of true and finally imit decorator metadata of true, once again, I got to encourage you to double check your spelling on each of these words.

There's some tricky words inside of your make sure you've got the same spelling as I also make sure you've got the same capitalization as well.

So decorator's should be capitalized, decorator's should be capitalized, metadata should be capitalized as well.

So once again, these are just a couple of settings to get TypeScript to properly transpired our project into normal JavaScript code before we eventually run it.

The two settings that are very relevant for us and we're going to learn a lot more about very quickly our experimental decorator's and imit decorator metadata.

So we are going to come back to this file and go into more detail on what those are all about.

These two features right here, believe it or not, are at the absolute core of what makes Nest really work.

So it's super important for us to understand those two settings.

All right, so that's step number two.

Let's take one more pause right here and then go through step number three and four in just a moment.
```


https://user-images.githubusercontent.com/13144137/205551331-5c051e59-ec1b-44fd-9118-2bf13dd9e195.png


## description
```bash

{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2017",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}

```
