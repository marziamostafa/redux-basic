# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## why  postcss autoprefixer?

installed with : npm install -D tailwindcss postcss autoprefixer

![alt text](image-2.png)

1.  What is postcss?
==> PostCSS is a tool that transforms your CSS using JavaScript plugins.

Tailwind requires PostCSS because it generates all utility classes dynamically using it.

2.  What is autoprefixer?
==> Autoprefixer is a PostCSS plugin that adds vendor prefixes to CSS for better cross-browser compatibility.

3. Why needed in Tailwind?
==> When you run Tailwind CLI or use it with Vite, Tailwind is processed via PostCSS. So it looks for a postcss.config.js file with at least:

tailwindcss: {},

autoprefixer: {}

4.  postcss autoprefixer mandatory?

No, postcss and autoprefixer are not strictly mandatory to run Tailwind CSS, but they are recommended and often bundled by default because they improve compatibility and workflow.

5. So when can you skip them?

==> You can skip configuring PostCSS manually if you’re using tools like:

i. Next.js — built-in support

ii. Vite with Tailwind — 'tailwindcss init -p' handles it

iii. CRA (Create React App) — has PostCSS under the hood

## Made a counter- lifting state up:
--> if we want to scale it and used the <Counter> 2 times in the APP.jsx

![alt text](image-3.png)

![alt text](image-4.png)

both are encapsulated and doing separate state management

--> now if we want to show another component here <Stats> and show the sum of two <Counter> in <Stats>

![alt text](image-5.png)

here we need to pass the value of <Counter> as props

--> To do that we have to do lifting state up, means we have to lift the value of <Counts> to App.jsx component.

so i am creating an initial state

![alt text](image-6.png)

![alt text](image-7.png)

![alt text](image-10.png)

made the handling function in the App.jsx file and passed them as prop to the children components





--> all those things we have done before with context api

--> redux solves those state management problems

# why redux - Concept of redux?

--> the things er did previously by lifting up the state:

![alt text](image-11.png)

here <Counter> is used only as a carrier

--> there can be more nested children, application can be complex with so many features

--> if we keep lifting state up, we have to break the tree structure every time 

--> some components becomes only carrier. they are not used in any way, not even using the props

- **How Redux helping?**

--> as we keep breaking the tree structure, **Redux** says let's not keep the state inside the tree structure

--> it keeps the state in another storage, the storage is like data warehouse

--> those components who need the state , will have to **subscribe** to the storage

![alt text](image-12.png)

those components can take data directly from the central store. -**this store is redux**

## What is Redux?
--> Redux is a flexible -**state container** for javaScript apps that manages our applications state separately

--> redux is written a js and in any js project redux can be used (reactJS, vanillaJS, vueJS, angularJS, remix)

--> redux can also be used in backend with nodeJS

## How redux store works?
1. **action** : user interaction or action (ex:clicking a button) goes to redux as a command. this command is known as action in redux
2.**dispatch** : make the action to be happened 
3. **reducer()** : when any action happens (gets dispatched), how can we define the things that happened? in JS we can define occurred thing with function(). when any action will happen redux will call a function and do some work. that work / function is called **reducer**


## reducer()

scenario is: an action happened, we have state in redux store

--> reducer(state,action) function gets the state as 1st parameter and action as 2nd parameter automatically

reducer(state, action){
    return newState ;
}

--> after that, we will check the action , and based on action we will conditionally change the state


## what are the redux terminology?








# what problem redux solves and how?


# new learnings:
## reduce()
to convert an array to a single value we use reduce()

![alt text](image-8.png)

--> sum is a number holding previous 

--> current is indicating to the current individual array value according to index

--> and the parameter 0 is the initial value of sum

![alt text](image-9.png)


# problems that I faced:

# tailwind css wasn't working:

-->Because

![alt text](image.png)

 ["./src/**/*.{html,js}"]

 -->solved by

 ![alt text](image-1.png)

["./index.html", "./src/**/*.{js,jsx,ts,tsx}"]

