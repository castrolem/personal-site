---
layout: post
title:  "Refactoring a part of the business"
---

As an engineer, I spend most of my time thinking about the best possible solutions for the problems we encounter, and as
many engineers I know, I don't spend nearly half of the time I spend on new solutions at updating, upgrading, and
overall improving previous code I made.

That's overall fine in our industry, for the most part, we follow the philosophy of if it ain't broken don't touch it.
But what if we need to modify that code to add new things? Well, we are touching something now that isn't broken but
adding more complexity to it which means, more points of failure and possibly introducing new ways of breaking it.

At this point you are thinking, well, it's time to refactor it! But I want to make you ask yourself, refactor what? Our
new code, our previous code, the combination of both? Can we retrofit our new logic into the old one? If you can't
answer those questions with a resounding yes... Well, let's say you are now entering "rewrite" territory.

"Rewrite" is such a scary world, try telling your product manager/owner that you'll focus your time on a rewrite and
there's only one question that will define your ability to start doing it "How will this rewrite benefit our customers?"
.

So let's get into how you can help your team and your company by investing time into rewrites and harvest the benefits
of it.

## Selling the concept

Like I said before, your product manager and probably tech lead are the most important roles to consult with when you
want to do something like this.

I would argue that talking to your lead first is the best path to success since you want to get the input of the person
that is the closest to the company stakeholders and shape your ideas to the feedback you get.

Once you have a polished idea of what to do from the tech side and how that will affect the company workflow, talk to
your product manager and get an idea, if possible, metrics, on how many issues have users encountered with the thing you
want to refactor or rebuild, these metrics will be extremely helpful on your quest and your final presentation, but most
importantly, they will help you build credibility for future similar projects.

## Using your budget

This will depend a lot on your team composition, but let me generalize it, you want to stay on your budgeted time frame,
so always give yourself some headroom.

The easiest way for me when assuming this responsibility has been to start with my test suite (Yes I'm a big TDD
advocate but hear me out), knowing what I what to accomplish, and having it established into some sort of code gives me
the headspace to think about the complex parts of the business logic instead of focusing down on what I want to display
on the page.

## Pre-release

I'm skipping the coding part, I'm assuming you stayed on your budget and if you went over it, you did by just a tiny
bit. So... You are done, right? Wrong.

This might be one of the most important parts, we assume as individuals that once we merge that pull request because QA
gave it a look and we told our team about it, that our work is almost done and we can send it to production.

But if we do that, we miss some major parts of the company, I'm an advocate of developers must be there for our customer
support peers, we are the ones that can make their life easier or harder and we should always make their life easier.

So talk to the individuals on customer support that will be the ones you hope to affect positively before doing any
release, talk about the things you are solving (here's where those metrics will come in handy), and also make yourself
the reference contact with them for any issues that come up from the users on the piece of work you have done.

Make sure also you have enough logs set up so once your code hits prod, you can track the user flow and which errors (if
they encounter any) occur.

## Post-release

With big rewrites, doesn't matter how much you test (locally and with your test suite) things out and how many times it
went through QA, there are always bugs that will come up once your users get the update.

Don't give up on the temptation of releasing a hot-fix if you see a small number of users getting an error you have
never seen before, if it's less than 5% my advice is to make a release with more logs to help you track down the culprit
and go over the user flow with your lead or a peer, get fresh opinions on how the user and code are interacting for
these scenarios before making changes.

And that's about it, I hope I make it sound simpler than you thought it would be. I know these things are especially
scary when it's one of the most important parts of the business, which was the case with my latest example.

But this cannot be a deterrent to us as developers, investing time into reflecting on the past code and what can we do
to make it fit the scenarios of the present world is an important part of our job.

So my advice is to be sure you have plenty of time to check how things are going on after you release your changes and
start seeing your users using the changes you made. The ability to do fast-follows for any major bug that they can
encounter (believe me, users will find their way to find them) is what they will appreciate the most.