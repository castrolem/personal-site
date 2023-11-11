---
layout: ../../layouts/MarkdownPostLayout.astro
author: "Luis Castro"
title: "Nitpicking in Code Reviews"
pubDate: 2023-11-11
tags: ["programming", "code reviews"]
---

One of the things that I have vocalised to myself after
reading [this article](https://blog.danlew.net/2021/02/23/stop-nitpicking-in-code-reviews/)
from [Dan Lew](https://blog.danlew.net) with the same name, is that I have stopped this behaviour by my own without
noticing it. Like the article states, it has made me happier to do so.

Let me explain my point of view on why I believe this is the natural progression of every senior developer in a company
and my reasons behind proposing more adoption of tools like [standardJS](https://standardjs.com) on your workflows.

Code is opinionated, we all have our own personal biases and our own way of writing that comes baked in with our
personalities, what is easy to understand and write for me might not be so easy for the person in front of me.

A good characteristic of senior developers that we all take for granted is the ability to write clear and concise code;
we tend to say – "Yeah, I write concise code." But have you ever stopped yourself for a moment and thought that the fact
that your code is not being criticised for structural elements might be because people respect you too much? Or you
might have the opposite problem, your co-workers do not respect your opinionated choices yet because you are fairly new
to the company, they haven't had the time to work with you and get to know your ways or something else.

Opinions are always subjective, feelings are subjective, some coders think about themselves as these highly trained cold
machines that will always make a logical decision, but that's not who we are in practice and that's by design.

Knowing all these and after all that pre-amp, good senior developers evolve to write highly explicit code that might
read verbose sometimes but that states the behaviour and outcomes by just going through the lecture, gone are the days
of writing incredible complex recursive algorithms for basic functions, our current tools allow us to do so, so we can
take advantage of them.

Now, when people come with their nitpick opinions, like "This variable should be renamed from `getTime` to  `_getTime`
because it is a private variable", tell them, sure, if we want to do that, please make a PR with a linter error for
those things, otherwise I'm just going to ignore this comment because it just increases the signal/noise ratio.

It takes 2 to start shifting from the culture of nitpicking each others code and start reviewing code for what it is, an
open book that fulfils a goal. Focusing on the outcome and the architecture decisions made by the author is the relevant
topic we tend to avoid because it is too easy to nitpick.

So stop nitpicking at other people's code because it does not look like how you would write code and just focus on
 architecture, my fellow dev.
