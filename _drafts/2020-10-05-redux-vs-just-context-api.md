---
layout: post
title:  "Redux vs just using the context API"
---

By the time I publish this post, I will have 2 apps in the Apple AppStore, one using just the context API with a bunch of verifications and providers wrapping my app to save the local state using `async-storage` and one that's using the latest version of `react-redux` also saving my data into the local storage but with `redux-persist-filesystem-storage` because I want to avoid the limitations of saving data locally on Android.

### Why did I choose to do 2 different approaches?
I'm not a huge fan of `redux`, heck, my co-workers can tell you that 😅, but that doesn't mean that I can appreciate what `redux` brings to the table and that I know when it makes sense to use it. That's not the question, is it? Why did I choose to use these 2 in different projects that are very similar in their scale?

I choose it primarily because I wanted to practice my skills, at work I use redux, it makes sense, the way we use our app, the way we need to handle the information flow, and the scale of it allows it, but on my small indie apps, it's a great opportunity that allows me to understand all the new elements that the flux-like architecture with all the given bias that `redux` contains can offer.

And to be honest, *I have been loving it*, yes, you read that one well, I'm loving using redux on my side projects, even though the scale makes it nonsense. But let's start saying, what makes redux interesting and good, and how we could take the same concept for smaller apps.

Let's study a bit how we can call a part of our state when using the context API vs using one of the Redux hooks.

#### Using the Context API
```ts
const [{memorandums}] = useMemorandums();
const {byIds: memosByIds, allIds: memosAllIds} = memorandums;
const groupedMemos = selectMemoEntriesPerMonth(memorandums);
```

#### Using Redux hooks
```ts
const { byIds: memosByIds, allIds: memosAllIds } = useTypedSelector(
    (state) => state.memorandums
);
const groupedMemos = useTypedSelector(selectMemoEntriesPerMonth);
```

So these 2 examples don't look that different right? I mean, real world usage on both, I have a custom hook exported from my custom context that contains the state that I need to access to call my `selectMemoEntriesPerMonth` function which does a bunch of complex calculations.

#### Differences

##### Reducers vs Contexts
My context containers are wrappers of each of the Models that my App access and modifies in the different interactions it can make, and because I treat them as Models, I can write all the basic ways that these elements will behave without having to follow a custom structure, just plain old JavaScript.

With this separation of concerns, I can use an MVC like model, where I can reuse most of my controllers between my different models, since almost all operations I do follow a CRUD like behavior.

With my reducers, I can't re-use as much code as I want, they have a similar set up, because I set my data to follow the same pattern, but my reducers depend on similar actions and use the selectors abstractions to format my data in a way that's usable around my App, and these selectors are great for memoizing my data slices but also are an abstraction that isn't as vanilla JS as I would have liked.

#### Are these real complains?

Is this a personal taste, in the end, it is. That's an important remark here. You'll find that none of my examples made me better or worst programmer, they just made me use different tools to get to the same end goal.

