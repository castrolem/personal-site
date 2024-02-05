---
layout: ../../layouts/MarkdownPostLayout.astro
author: "Luis Castro"
title: "Write code as a senior developer"
pubDate: 2024-02-01
description: "Effective tactics to write code as a senior developer"
tags: [ "programming", "code reviews" ]
---

My inner circle of friends is mostly composed of developers, and we always talk
about what separates so-called senior developers from actual senior developers.
In my opinion, it boils down to professionalism versus wishful thinking.

## Set goals and finish them

There's always pressure from the Agile flavour your company has chosen to use to
show where you are, what's missing, and how we (the team) can unblock you to
complete your tasks. If you haven't finished your task, don't lie about it (not
even to yourself) – this leads to tech debt that you or your teammates will have
to finish and stress about later. If you want to maintain control of the
situation and things slip out of control, finish the code you started writing.

## Coding standards

Nowadays, this is quite easy to implement; we have many tools to enforce how
written code can be read. Nobody likes a discussion about when to use curly
braces or lingering commas at the end of the JavaScript code base. Use prettier,
use eslint, use the tools available, and automate all of this work right now.

## Document what you do

Continuing on the previous note, we have few tools to watch for patterns in the
code base, so this is more of a manual task. Be disciplined about documenting
what you do and how you do it. Share it early with your team and agree with them
on how to do these patterns. Embrace markdown files and tools like Storybooks to
document and link from your code any major pattern in the project. Ultimately,
our goal is to reduce the time invested in code reviews and prevent people from
modifying or introducing new patterns without a justifiable reason. If there's a
reason to do so, then before it is merged into the code base, take the time to
delve into a conversation with everyone that is required to agree on the
pattern.

## Review new patterns

Another follow-up in this story, everyone has a Tom (sorry if you are named Tom,
but this is the cliché) that introduces a new pattern without telling everyone
about it because they are following the premise of "ask for forgiveness rather
than permission", equal to the mantra of "break things, move fast." Don't be a
Tom and do your teammates a favour. Be inclusive in the decisions that will
affect everyone and introduce them on the topics as soon as you have something
to show. They will probably improve your vision around the topic and how it can
be used by everyone. Also, you can get their backing and enlist them to help you
refactor old or introduce the new patterns with you leading the charge.

## Don't ask for time to refactor, do the refactoring right away

I'm at fault on this one, and it is heavily related to our first topic in this
conversation. I used to be a big fan of exposing my refactor efforts to the
board. But I have learned better. These boards are for different stakeholders
who do not care about essential engineering tasks. These boards become an
incentive for the management in charge to pull out these tickets and move them
for a later moment. Do the opposite. Increase the complexity of a ticket that
you know touches old places that are in need of a refactor and plan ahead a
general viewpoint to get things moving towards the goal by introducing multiple
atomic pull requests with your teammates introducing the ideas that are
necessary to remove the tech debt and get to the product goals.

## Embrace the unexpected

Software development is messy but delicious, like a spaghetti plate. Projects
can change on every task you meticulously planned, you will have to attend
meetings, troubleshoot, or write documentation. Don't let other people get you
pressured to cut corners. If you don't estimate and add time for the unexpected
in what you do, then you are at your own fault.

*This is not a definitive guide; these are my opinions based on my experience
with the start-up world. These are the things that have worked for me, which
might not work for you. I want to think that these patterns are generic, so
everyone can put them into work and be better at their craft.*
