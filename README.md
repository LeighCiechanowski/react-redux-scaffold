# React Redux Starter Kit
A basic starter project for a React Redux Application. It lays down a "standard'ish" pattern for how to layout your application when using React with Redux. Should hopefully help you hit the ground running. Clone it, run it, modify as required. 

The basic React/Redux flow:

- Component triggers an Action which an Action Creator makes
- Reducers handle the Actions and update the Store
- Connected components receive updated props and the UI updates

## Getting Started

```` npm start ````

This will run the automated build process, start up a webserver, and open the application in your default browser. This command will continue watching all the files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. 

## Technologies

- React:	Fast, composable client-side components.
- Redux:	Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging.
- React Router:	A complete routing library for React	
- Babel: Compiles ES6 to ES5.
- Webpack: Bundles npm packages and our JS into a single file. 
- Automated tests with built-in expect assertions and Enzyme for DOM testing without a browser using Node.
- ESLint: Reports syntax and style issues. Using eslint-plugin-react for additional React specific linting rules.	
- npm Scripts: Glues all this together in a handy automated build.
