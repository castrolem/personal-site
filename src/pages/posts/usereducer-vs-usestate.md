---
layout: ../../layouts/MarkdownPostLayout.astro
title:  "React state useReducer vs useState"
pubDate: 2022-08-29
---

The other day at my day to day job I came out with this [thought that I had to tweet](https://twitter.com/Castrolem/status/1559920744112463874), because I wanted to seek validation from the community about it.

> I feel like people have some sort of PTSD from Redux, because I see too many devs preferring to use 10+ `useState` in 1 place than using 1 `useReducer` to make their state updates readable and follow the same naming conventions.

To my surprise, lots of people actually felt the same as I, some shared it publicly and others via other channels, but there was a common factor, **local State prevails** and **global state is the root of all evil** within React.

You probably know this already, focusing on your local state first makes more sense than putting everything into the global state, because **not everything has to be shared by every single page and user flow** your app contains. So that's not an area we'll focus in this blog post.

Today's focus is on what happens within complex user flows that are self contained and that do not share any information on the global schema of things. How `useState` is being used here and why developers would get more benefits by replacing those multiple `useState` calls with one `useReducer`.

### The redux association
State management can be confusing for many reasons. In your React apps, you'll manage multiple state types within different elements that you will need to keep track of somehow. You may have different components for example that are further down the tree or in a completely unrelated part of the application that might need to access the same state, which, makes tracking the state quite complicated.

This is why Redux was born, the promise of putting your state in one place and it will be easier to manage came with great elements, but these advantages on large applications are destroyed by the performance issues you might produce as a side effect. This is why as developers we tend to say 🙅‍♂️ to Redux like elements.

### Boilerplate
A word dreaded by most developers, especially since Redux has so much more boilerplate, but is this a disadvantage?

The common complaint of boilerplate code is that it is repetitive and it is annoying to do multiple setups when you already know what and how you want to do your state, but this is the exactly why the boilerplate from `useReducer` achieves the maintanability of the code in a far superior way than the code from multiple `useState`, it just reads better and it is easier to maintain in general.

I will ask you at this point to follow an exercise with me but with your company code, and that's to answer the following question, how hard has it been for you to update or extend your redux code when refactoring or enhancing a feature?

Like [Mohamed](https://gharsallah.com) tweeted here on [his reply](https://twitter.com/mo_gharsallah/status/1559987593445621766) to me, I have felt the same, to give you a real life example, we recently updated at my company (brought to 2022? hah) a flow for an end user, in which they can leave a tip to the person which service they bought whenever they want, as long as it also has a review of the service attached to it.

When we reviewed the current approach, it was using redux, unnecessarily, for sure, because none of the information needed to be on the global state, our first step therefore was to move it into a contained `useState` because it was a simple case, but rapidly we realized something, it wasn't that simple, there were multiple endpoint calls involved, and we got the dreaded IMO result of having multiple `[isLoadingFoo, setIsLoadingFoo]`, `[isLoadingBar, setIsLoadingBar]`, and their correspondent error states

We were now handling multiple states, and it was difficult to follow, but it also introduced another problem, multiple `useEffect` calls, because when a state updates, something had to also update as a "side effect" of that operation.

This is the wrong way to think about React in my personal experience, you want your state to follow your user flow and update a single source of truth where you can derive changes.

> ...you want your state to follow your user flow and update a single source of truth...

`useReducer` comes to the rescue, with it, we can now make one place the source of truth, centralizing the flow into one object that can now have multiple values be updated by one single action. We can now `dispatch`  a user action that **implicitly adds sequencing** to the code.

So yes, our final step once we made the updated flow, was to refactor it to make it more readable and follow a sequence, this had a side effect, we reduced the amount of `useEffect` calls and we also reduced the number of re-renders the UI experienced (see that I did there?)

### SOLID principles
I will focus on the first 2 principles, you can draw your own conclusions on the latter ones, this isn't because they aren't important too, but because I believe the concepts I will mention give you the bigger benefit when designing your state.

#### Single Responsibility Principle
The point here is that your functions should be simple enough to only have one responsibility, if you need more complex behavior, then combine their input and output in order to compose them.

Simpler functions are easier to maintain, read and understand and even write. When we use multiple `useState` calls we start writing functions that will modify multiple concerns at the same time, and when these concerns update the state in a similar fashion, for example those `isLoading` or `hasError` variables, we now encounter a much harder to read code.

Now with `useReducer` you can `dispatch` an action that updates accordingly your state and compose these actions from your unique source of truth.

####  Open-Closed principle
This one references the fact that your code needs to be open for extension (as in, extending the behaviour of it) but closed for external modifications (there's no need to chase other people's code to add more functionality)

When you find yourself or others having to change code to add or extend the existing behaviour, we or they have failed to apply the Open-Closed principle.

For example, let's say you want to add a new product to a shopping cart, the following code fails this principle because if you need to make it work for your use case, you would have to open the file and modify the `products` array.

```js
let allowedProductsForUser = ['t-shirt', 'shirt']
export const authorizedProducts = {
	isProductAllowed: function(productName) {
		return allowedProductsForUser.includes(productName)
	}
}
```

However, the following example fixes it and remains Open-Closed:
```js
let allowedProductsForUser = ['t-shirt', 'shirt']
export const authorizedProducts = {
	isProductAllowed: function(productName) {
		return allowedProductsForUser.includes(productName)
	},
	addAllowedProduct: function(productName) {
		allowedProductsForUser.push(productName)
	}
}
```

With our extra `addAllowedProduct` method, we allow others to extend the behaviour to make it work for them and you, without having to change the code.

### Conclusion
It really depends on what you need, at the end of the day both are tools in your toolbelt to manage the state and the best choice is the one you think works best for you. These are the simplest solutions for state management and if your scope grows further away from these, you may be in need of more tools from React, like `useContext` for example.

Don't be afraid to combine `useState` and `useReducer` when it makes sense but be aware that you should keep making your state easy to read and easy to maintain.

### The gist
#### What's good about `useState`?
* Great for primitive state values, booleans, integers, etc
* It's simple and easy to get started with. So you do not lose time on your setup.
* Setters and Getters are easy to read and can be passed down through props when needed.

#### What's good about `useReducer`?
* Great when managing complicated states, such as objects and nested values.
* Easier to understand and manage the actions and flow of the state.
* Allows you to drill down the `dispatch` function instead of multiple Setters (see `useState` for that) which leads to performance improvements.
