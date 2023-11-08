---
layout: ../../layouts/MarkdownPostLayout.astro
author: "Luis Castro"
title:  "Dark mode support"
pubDate: 2020-08-19
---

It's 2020, and we still have `background: white` websites when you enable your OS built-in dark mode, why? Why?! I get this feeling every time it's 9pm, and I switch my computer to be in dark mode with the magic automatic setting from macOS and my browser stills shows me a white background at 300 nits of brightness.

I remember reading an article a while ago touting the browsers that support media queries for the dark mode, which had the following browsers:

- macOS Safari 13 or newer.
- iOS Safari 13.2 or newer.
- Android Browser 76 or newer.
- Chrome for Android 78 or newer.
- Firefox for Android 68 or newer.
- Opera 62 or newer.
- Chrome 76 or newer.
- Firefox 67 or newer.
- Microsoft Edge 76 or newer.

***Phew***, that's a long list.... So... To detect whether a browser is running on a dark mode device or not, you’ll need support for [prefers-color-scheme: dark](https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme) media query, and as 2019 that was fairly new, but on 2020, boy oh boy, we basically have support for it on all browsers.

So if all browsers now support this feature, why are websites not supporting it?

I believe that today’s the issue is a design one, not completely related to designers, but to the design process inside most companies, designing is expensive, now imagine having to design with multiple color variants and keep elements cohesive.

Most companies don't have a style-guide nor are they in the state to have a style-guide, most startups focus on delivering features and that makes sense, can't really support cool features in business if you don't have one.

But we should make things simpler, if we can't make it better for simple issues like this one, imagine supporting harder ones like AR on the web in the near future, these devices will come sooner rather than later. For now, as developers, we can emphasize on having these techniques applied to our apps and sites, we can help ease the pain for designers and introduce the tooling on our codebase to help them play around with real data and the real site with these styles.

CSS variables are one of the best tools because we don't have to deliver complex pipelines or tools like story-books on another domain for designers to play around.

We just need to set them up in a way that is centralized.

```css
/* set light mode color as default value */
:root {
  --bg-color: #ffffff75;
  ...
}
/* switch to dark mode color */
@media (prefers-color-scheme: dark) {
  /*
	use the same as light mode to avoid changing the color
  before designers approve it.
  */
  --bg-color: #121212;
  ...
}
/* apply CSS varaible through var() */
* {
  background: var(--bg-color);
  ...
}
```

And that's it, CSS has a very simple solution to this problem, now we can ask designers to play with the variables to change the colors in the web through any browsers Developer Tools.

# **Design Guideline & Tools**

There are some properties that come from the [material design guidelines](https://material.io/design/color/dark-theme.html) that are worth a look. Are these mostly for designers? Yes, but that does not mean that as devs we can't take a sneak peek, on the contrary, we should always know about these things to make opinions with a good ground base, the ones I would tell you as a dev to keep an eye for are:

- **Contrast:** Dark surfaces and 100% white body text have a contrast level of at least 15.8:1
- **Depth:** At higher levels of elevation, components express depth by displaying lighter surface colors
- **Desaturation:** Primary colors are desaturated so they pass the Web Content Accessibility Guidelines’ (WCAG) AA standard of at least 4.5:1 at all elevation levels
- **Limited color:** Large surfaces use a dark surface color, with limited color accents (light, desaturated and bright, saturated colors)

And the coolest part of it is that you can use Chrome Developer Tools to check all these elements.

# **Reference**

- [Using_CSS_custom_properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [@media/prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [css-variables-with-fallback-for-older-browsers](https://stackoverflow.com/questions/44271920/css-variables-with-fallback-for-older-browsers)
- [Material design for dark mode](https://material.io/design/color/dark-theme.html)
- [Tailwind CSS color shade generator](https://javisperez.github.io/tailwindcolorshades/#/)

<br />
<br />
<br />
*PD:* On another note, did you know this site supports dark mode?
