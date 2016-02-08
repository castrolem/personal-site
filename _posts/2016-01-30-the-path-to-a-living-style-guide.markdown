---
layout: post
title:  "The path to a living Style-guide for RealScout"
date:   2016-01-27 18:29:12 +0100
author: Luis Castro
tags: 'RealScout'
---

## A not so long time ago
In a repo far far into the cloud. We started by creating a complex application that was huge, and with every project that starts small, it didn’t had much scope for it’s CSS, which it can get really cumbersome for newcomers to work with.

To start talking about why we decided to change our approach to the structure of our project, we’ll have to talk about first of how CSS it’s considered usually.

CSS is a language that can be beautiful to write in, but it’s really complex to do because it does not support the Object Oriented Design that we developers are used to. And that’s where SASS comes to the rescue. It’s 2016, if you are not using some kind of pre-processor for your medium to big size project, then there’s time you’re probably giving into your stylesheets that can be used in other tasks.

## Basic design principles
Freedom breeds design decisions that are based on particular instances of content and context. On a small sampling of pages, this might not be so bad. But as the number of uniquely art directed pages increases, or as additional designers begin to impose their stylistic discretion, design standardization falls by the wayside. The result is pages that look good on their own, but lack any sense of cohesion as a whole.

> Designers believe in freedom and beauty, engineers believe in consistency. The result of combining both perspectives it’s what I call User Experience.

Have you ever grabbed a design book? Basic design principles teaches that everything is inside a GRID, which by itself doesn’t give much freedom but people love GRIDs, and it’s kinda funny when you think that CSS a language engineered for designers as is it right now, doesn’t have GRIDs (read more about the working draft of CSS grids [here](https://www.w3.org/TR/css-grid-1/)).

Of course there are ways to create your own GRID system, the best way is to do it using floated elements for columns and clearing the `floats` in every row. The 2015+ way it’s using `flexbox` which solves one of the most difficult tasks in the history of CSS: **centering stuff**, which is great but it’s not supported by most of the browsers and sometimes you need to have all of this features prefixed.

Just like pre-processors are great, there are tools like [Autoprefixer](https://github.com/postcss/autoprefixer), which is a post-processor that will read your compiled stylesheet and add all of the prefixes necessary to make your CSS work in the latest 2 versions of each browser (You can change this configuration)

All this technologies are outside the W3C, but will make your SASS code work follow what this standards say, if you write the code the way it should, which lead us to the big question in the design process: *How to write good CSS?*

## Structuring a consistent experience

Since CSS by itself is not that great and we have already talked about SASS letting us make OOD code, we can say that the next step for making a great design is to have a consistent experience.

With the supplied designs of course and with the mindset to write DRY code. After long sessions of investigation we decided that going with a structure similar to what Brad Frost - [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) says about the web.

So how can you scope a project based on components rather than pages with the designs supplied by your design team?

We though the best place was to start creating an interface inventory, which is a comprehensive collection of the bits and pieces that make up your interface.

Designs tend to be pixel perfect, so I think this is the best process you can do with your designer to start creating components that breath and are consistent.

Tackling a project this size required us to start small, beginning with typography settings, headings and links with real code, will let you optimize and test in every browser how the type font will look in the real life. This is an important step, the typography of your web application will dictate the size of your components.

After we created all this components, that of course will replace the agent supplied styles of every browser, we had to start deciding on the actual folder structure of our project. Like I stated before, we we’re heavily inspired by the concepts of Atomic Design, so we created the following folders.

{% highlight html %}
├── components
├── helpers
├── layouts
├── objects
└── settings
{% endhighlight %}

Each one contains a main file that include all the partial views in it and then each `_main_partial.scss` file it’s included by a main.scss which will be compiled later by our asset pipeline (Another story).

### Settings
With all the typography work done, we created our settings folder, the chosen one to hold all our variables and constants of our site.

Our variables are divided by
- Typography: The baseline of our styles is set to a `font-size` in the document of `16px`, with a `$primary—font-family: “Helvetica Neue”` and a `$secondary—font-family: “Montserrat”` (both with all the fallbacks necessary to avoid [FOUT](http://www.paulirish.com/2009/fighting-the-font-face-fout/)).
- Colors: The file that every designer will love to see first, contains all the HEX codes with correspondent names. We suggest to add a unique name to your HEX codes and then create variables that will say the type of color that it is. For example: `$blue-da-france: #0CAAF4;` it’s our main tone of blue and the base color for most of the things in the Agents application, so we have a variable that’s easier to read and correspond the role of the color `$base: $blue-da-france;`. Say you want to move from blue to red, then you only need to change this, *voilà*.
- Sizes: Holds all the standard measures for margins and paddings that we can use in our application, between standard sizes to use when creating new components to the setup of some global components like our `box` style.
- Index: This file it’s one of the most interesting ones of our settings, it holds a SASS array of strings, each one it’s a name for a component or object that we know will have a `position` that’s not static in our stylesheet, depending on the position of the string in the array, it’s the `z-index` that we’ll get compiled into the element, by doing this we avoided the terrifying situation of not knowing a bigger number for an element that needs to be in front of our fixed navigation component.
- Box model: have you ever worked without making all your elements have `box-sizing: border-box;`. We have, in this file we set a couple helpers to define different box-sizing ways for our elements.

### Objects
Each of the small snippets of code that are re-usable and independent of where they will be put. For example `buttons`, `inputs`, `links`, `iconography`, etc.

It’s the second section to tackle when making a style-guide, and one of the most important steps, if you did your job at the interface inventory, then this items should be immutable to achieve consistency.

For example, this is how part of our SASS looks like for our different buttons.

{% highlight html %}
.button {
  background-color: $base;
  border: 1px solid $base;
	color: currentColor;

  $button:  (“orange”, $orange),
            (“green”, $green),
            (“red”, $red),
            (“pink”, $pink),
            (“error”, $error),
            (“valid”, $valid);

  &:not([disabled]) {
    color: white;

    @each $name, $color in $button {
      &.#{$name} {
        background-color: $color;
        border-color: $color;

        &:focus,
        &:hover {
          $hover—color: darken($color, 10%);
          border-color: $hover—color;
          background-color: $hover—color;
        }
      }
    }
  }

  &[disabled] {
    color: rgba($black, .5);
    background-color: rgba($black, .1);
    border-color: rgba($black, .1);
    cursor: not-allowed;
  }
}
{% endhighlight %}

The big things to notice here are, we have a set of different buttons that we want to create, which are color dependent (`green`, `orange`, `pink` and `red`) or situational (`valid` and `error`). To do this, there’s a SASS loop that will create consistent styles for each of the types of buttons that we need.

But wait, why are you negating in this buttons disabled? Well, we like a lot the HTML5 disabled syntax, and it’s really easy to use with most JavaScript frameworks nowadays. So for our CSS we didn’t like the idea of having to add a `.disabled` class that overrides the styles of the elements. If a button is disabled, none of the styles will apply to it which means that the browser will render a disabled button faster to the user.

### Layouts
Remember those famous GRIDs? Well, for our styles, we have a `float` with `clearfix` one that can be set with `mobile`, `tablet` and sizes, the first two are modifiers to the sizes, which override the styles for certain resolutions between a `em` size. This simplifies things a lot because we say that every devices between `47.50em` and `60.00em` is going to be a tablet, but since we’re using `ems` here, if a user in a desktop browser zooms into the UI, it won’t break at all, it will just display the tablet UI with bigger fonts.

But hey, we also talked about how cool is flexbox for centering, well, we didn’t forget about it, in our grid, if any developer adds the class `.flex` to a `.row`, the columns become easy to modify with every flexbox alignment property you can imagine and this will also work with different resolutions, how cool is that?

### Components
Are the part that can be hard to explain sometimes, we call components all the elements that can contain objects and are displayed in a certain way always, so they would have to have a layout set and more than one object to be called a component.

Some of the components are also immutable, like the pagination or tabs component, both include `buttons`, `links` and a layout that is specific, we don’t want developers to change this component unless there’s a significant change in the design department. So our solution to this was to set up a sub-folder called immutable that contains this type of element.

Outside of this folder, you can find the elements that can change depending on new features or layout decisions. For example, we call everything that our agents see the *“pro side”* of the application, so every *”pro”* component can be changed by feature decisions without affecting the homebuyer side of the application that has similar or equal elements.

## The future is uncertain but controlled
Great, you have everything done, but what about future elements that other developers will create without your mentorship, will they follow the work that you have done in the style-guide elements?

Well, this is a really hard thing to answer, but for us, we can say that after deciding on the way of writing code, which is using the **BEM** methodology and you can read more about it [here](https://en.bem.info/method/), we now write more HTML than CSS, we can set up templates for new features without having to write anything in our components, which mean we have achieved an optimal level of consistency and our selectors do are not nested more than 1 level for objects and 3 levels for components (read more about [nesting](http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css)).

> After you have your Style-guide finished. If you are writing more lines of CSS than HTML, then there’s something wrong.

That’s the philosophy to live by and here at RealScout we’re sure that our application will grow and become better for our user base with a streamlined and consistent UI.
