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

## Made a counter:
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

