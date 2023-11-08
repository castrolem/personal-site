---
layout: ../../layouts/MarkdownPostLayout.astro
author: "Luis Castro"
title:  "Making good CSS is harder than what most people think"
pubDate: 2020-10-08
---

It’s not just about knowing the code or the properties in this case that you can apply to any element in your DOM. It’s also about knowing how each browser rendering engine will display your attributes.

Lately, the trend of front-end developers is to focus on JavaScript and learn all about the frameworks, V8 performance, and other elements that make these web apps interactive and fulfill their business intentions.

This is good, but it’s also clear that we have been neglecting a bit the CSS side of it, there are things like [styled-components](https://styled-components.com) which try to break the barrier between doing CSS as we have been doing for decades now into the JS world and other similar tools, but that’s not the main issue. The main issue is:

> We feel like CSS is so easy and that everything will just work by doing a few properties that we don’t pay any attention to the crafting of our DOM and how we style it.

Let me deconstruct that. It’s not that we don’t care. We want to make the best performant and the best looking while remaining usable experiences for our users, but the HTML/CSS craftsmanship has been neglected from what we teach to new developers wanting to join the field, we focus so much in this 3-6 months boot camps on “here are the basics, you can use [bootstrap](https://getbootstrap.com/), now let’s learn [React](https://reactjs.org/)”  and that’s the result, we have great developers working around these JS frameworks (I just mentioned React because that’s the one I’m most familiar with) but that's it.

Can we change this? Should we change this? We can and we should, it’s ok that these boot camps keep doing what they are doing. Their formula works, it’s great for companies that are starting too, you need to prove your business model before you move into more detailed and custom interfaces that fit it. So we senior devs should be the ones teaching the people we see would benefit from these skills.

Can we change this? Should we change this? We can, we should, it’s ok that these boot camps keep doing what they are doing. Their formula works, it’s great for companies that are starting too, you need to prove your business model before you move into more detailed and custom interfaces that fit it. So we senior devs should be the ones teaching the people we see would benefit from these skills.

What skills am I talking about? Well, I’m talking about things like when should you use display `flex` vs `grid`, what `position: fixed;` does, and how it affects the rendering of the parent elements. What this amazing `transform: translate3d(0,0,0);` does to your layers and how the browsers optimize it, and many more topics. Too many to put into one article and all of them so different from each other that you’ll only care when you encounter the scenario when you need them.

As devs, **we are responsible**, especially as front-end devs, **of ensuring a remarkable experience for our users** on whatever device they use to access them. That’s no small feat, but it’s one that’s doable if we all put our little grain of sand towards it.

We can all make pretty things, but making them feel and look in a way that the user remembers it is hard, but’s something you can learn. As your fellow senior dev, I’m going to invest more time into teaching these skills to the people around me when I see them struggling or when I feel like they would benefit from the knowledge for something in their team or my team's pipeline.