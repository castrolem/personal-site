---
layout: ../../layouts/MarkdownPostLayout.astro
author: "Luis Castro"
title:  "Code Quality team"
pubDate: 2021-01-06
---

Mostly known as “core team” or “architecture team”, are teams whose sole responsibility in the company is to improve the quality and performance of the experience that the end-user receives.

You probably heard them before and thought “... Isn’t quality and performance something that all teams should have metrics on?” Well... yes, but, and there’s always a but. Product teams run a backlog with new or tweaks of features that affect the business and most of the time these experiences are 90% there when speaking about performance and quality.

It’s that 10% that’s hard to achieve and requires more time or knowledge that most product teams can’t afford to have because the business has to keep finding new and better ways of engaging with the user.

I have always been interested in providing better ways for my teammates to improve their code quality and the performance of their features, we always work together on those things, to be honest, and these past weeks we have been discussing a lot the creation of this team and I'm loving the idea of it.

Going back to pieces of code that for sure work and get the job done but that can be improved on 2 fronts:

### The developer side
* To make it easier to understand as a new developer or as someone that wants to extends the features of this piece of code
* To add a testing suite to old code that doesn’t have one or that’s lacking tests. Backfill tests to get more confidence on these existing features.
* Improve the confidence as someone touching a piece of code that you might not know about.
* Expected maintenance of the codebase. No code is written will be eternal, code is always shifting and it requires maintenance.
* Visualize how the app is performing and making it visible to everyone in the tech team of your company. Delivering better metrics will drive better decisions.

So to summarize these points. The developer experience is about having confidence as an experienced or not person in the codebase to add or tweak features.

### The end-user side
* Have a more responsive app (when I say app I mean mobile and web apps)
* Have a seamless experience with less error prompts or crashes than before.

And that’s it. The benefit of the user is less tangible when you try to describe it but it’s there and it matters a lot to your company, it’s not just the overall perception of your app in the ratings of the AppStore to say one metric, it’s also the amount of money you spend on customer service, the number of error logs you send to your tracking services like sentry and the monthly cost of these, each of these things adds up to lots of expenses.

### What will I do in this team?
Look at “old” code and optimize will be my main focus, you probably have in your company lots of what’s usually called “legacy code” and I believe it’s an odd term. If the code works, does the job, and it’s aligned with the business needs, then it’s not legacy per se, it’s just the current codebase.

When I say I will look at “old” code I mean code that was written before I joined the company or after it that I haven’t seen in a long time. I will be refactoring this code to be aligned with the future needs of our roadmap. Things that we know will have to be changed in this code to improve the quality of life of our devs.

I started with my first refactor, and it was a fun one, I optimized a bunch of things but mainly, removed lots of complexity that was added during multiple experiments done on the same code base for different features within the same screen that aren’t being used anymore or that can be improved now that we know they work and won’t be enhanced on a significant way.

To put some numbers. I removed around 2000 lines of code when removing these complexities while keeping the same level of features that was there and adding documentation on still relatively complex functions that need to be kept.

One thing to note is that I don’t belong to this team on a full-time basis. This will be ~20% of my week. So 1 day each week I will focus on improving different things from our app, and my teammates that come from other teams will also have the same amount of time. We track everything using a Kanban board and have a weekly check of 15m to check on each other the progress of our tasks.

Right now, our app has been featured by Apple for the must-have apps of 2021, and we have **improved the rating of the app from 3.5 stars to 4.8 stars**. Our goal is to not only improve the positive perception of our users but to make our app a staple of stability and performance on the react-native scene. I will be looking forward to achieving these hefty goals. Make sure to look at my review of 2021 once is published to see if I did it hah.
