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
1. performance optimization benefits**
2. to make  the application managable
3. managing props drilling
4. scale the application easily

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
--> a third party library

--> Redux is a flexible -**state container** for javaScript apps that manages our applications state separately

--> redux is written a js and in any js project redux can be used (reactJS, vanillaJS, vueJS, angularJS, remix)

--> redux can also be used in backend with nodeJS

## How redux store works?
1. **action** : user interaction or action (ex:clicking a button) goes to redux as a command. this command is known as action in redux
2. **dispatch** : make the action to be happened 
3. **reducer()** : when any action happens (gets dispatched), how can we define the things that happened? in JS we can define occurred thing with function(). when any action will happen redux will call a function and do some work. that work / function is called **reducer**


## reducer()

scenario is: an action happened, we have state in redux store

--> reducer(state,action) function gets the state as 1st parameter and action as 2nd parameter automatically

reducer(state, action){

    return newState ;
    
}

--> after that, we will check the action , and based on action we will conditionally change the state

--> in the reducer() function there will be the logic

--> if the action is increment, we will do state update for increment, like this

--> finally reducer() changes the state and returns a new state; reducer does it **immutablly**

--> **immutablly**  means, reducer() never changes the main state; it just returns a new **updated** state; and does not mute the old state, as it has to keep the history

--> <Count> and <Stats> component **subscribed** in to redux. so when new updated state comes, redux gives the updated state to those subscribed components, so that they can use it.





## what are the redux terminology?

## setup the existed counter with redux terminology

--> when we setup redux we have to consider, with which feature we will be working

--> when a new feature will be added, we will be adding a redux feature

--> here we have only counter feature

-**RTK**

--> redux **toolkit** : also known as **RTK**, a newer technology 

--> not a package; combination of multiple packages

--> we can keep the code managable with toolkit

-**installation**

npm install @reduxjs/toolkit

npm install react-redux

or, npm install @reduxjs/toolkit react-redux (together)

-**setup**

--> opened a feature folder in src folder, its a convension

--> the feature we have is counter, so we will open a folder counters in the features folder, here we will have some redux oriented files

--> another terminology comes here is **slice**

--> if the application is a pizza, every feature on it is a slice. so we need a slice for every feature. we will open a countersSlice.js file for counters.

![alt text](image-13.png)

--> in redux , while creating file we  can only keep js instead of jsx. because they are just normal javascript function 

--> **createSlice()** is a function provided by the react toolkit , with which we can create the slice

--> in the **createSlice()** there will be some options and we have to give the options in **object**

--> the first field in the object will be name . normally convension is folder name should be given as name

![alt text](image-14.png)

--> then we have to give the **initial state**

![alt text](image-15.png)

--> then we will have to give the **reducers** ; its also an **object**

--> **why reducers ; why not reducer ?** : there is one central reducer but in that reducer there are multiple separate functions.

    one function for increment and one for decrement. for every individual action there is separate function, so there are multiple functions

    we say reeducers cz we can add multiple functions here. reducers will combine them and make them one. reducers is a indicator that now we can add there multiple functions.  

    ![alt text](image-16.png)

--> for counters we need two reducer here. as parameter there will be state and action.

![alt text](image-17.png)

--> as we have multiple counters , we have to get the counterId, we vcan get it by action.payload

--> in this case we can make the state muted by using **immer**. immer is already in the redux dependency.

![alt text](image-18.png)

increment and decrement are partial reducer function

--> we have to export it. here we can see it says reducer; not reducers anymore

--> we have to export the actions as well. actions number will be similar to the reducer , we will get the action name by the reducer name.

--> actions will be named export.

![alt text](image-19.png)


## now make the store

file creation: src --> app --> store.js

--> we will make the store with redux. by configureStore()

--> store only needs reducer 

![alt text](image-20.png)

## use the store


## if another features comes ( like videos)

1. make the videoSlice
2. export the reducer from videoSlice
3. import the reducer and add it in the store after counter








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

