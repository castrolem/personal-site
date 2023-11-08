---
layout: ../../layouts/MarkdownPostLayout.astro 
title:  "TDD is the way"
pubDate: 2021-05-21
---


I was giving some thought about my #programming approach using Test Driven Development lately and how much am I
imparting the knowledge with my teammates of my experiences with it.

I must admit that I love the process and I'm not going to explain here what TDD is, there are many articles about it.
I'm focusing this journal entry on one thing, the fact that it can be detrimental if you overuse it or use the process
on the wrong things.

#### Where does it make sense?

* **When you need to fix a bug**: This is my most used use-case for it, trying to replicate an issue that someone
  reported and allowing myself to understand the problem better by behaving in an automated way like the end-user.
* **With high fidelity designs**: For those components or screens where the flow has been thought out and the story
  leaves no room to interpretation I love reproducing the requirements first as a test.
* **Utility functions**: anything that's functional programming like honestly, but certainly for functions which have a
  set of inputs and outputs that contain some complexity inside them, I always start with the expectations and build
  them from there.

#### And when it doesn't?

* When you have to test multiple elements that lead you to mock functions, 3rd party code or components,
* When you are trying to make an experimental 🔬 feature or some piece of code that you don't quite understand yet, then
  the development cycle and the creativity cycle with TDD might be really hard because you'll be more on the groove of
  making specs than actually thinking on solutions.

### My final thoughts

I will be sharing more TDD with my teammates because I believe in it and I believe it will be helpful for them to shift
the way we think at certain moments, and because I'm in the project for the long run. My suggestion for you is to
understand how you use your time, and treat it as a resource, the most important resource out there, and experiment with
how much time doing the things in a TDD way can help you spend your resources better.
