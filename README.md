### Currency converter in React

![currency-converter](https://github.com/Mateusz-95/currency-converter-react/blob/main/public/img/Zrzut%20ekranu%202023-07-22%20o%2011.24.11.png?raw=true)

This is a currency converter application that was originally built using vanilla JavaScript and has now been refactored to utilize the React library. It allows you to convert an amount from one currency to another.

### Background

This project is a migration of a previous currency converter application implemented in vanilla JavaScript. The migration was done to leverage the benefits of React, such as component-based architecture, virtual DOM, and state management.

### Features

- **React Components**: The application is structured into reusable components such as `Form`, `Result`, and `Container`, allowing for better code organization and modularity.

- **React Hooks**: The code utilizes React hooks, specifically the `useState` hook, to manage the state of the amount, currency, and result values. This simplifies the management of component state and provides a cleaner syntax compared to traditional class components.

- **Dynamic Dropdown**: The currency selection dropdown in the `Form` component is dynamically populated with options based on the `options` array. This allows for easy extensibility and the addition of new currencies without modifying the code structure.

- **Input Validation**: The amount input field in the `Form` component includes validation attributes, such as `required`, `step`, and `min`, to ensure that only valid input values are accepted.

- **Calculation Logic**: The `calculateResult` function in the `App` component performs the currency conversion calculation based on the entered amount and selected currency. It uses a conditional check to handle the case when no currency is selected, preventing invalid calculations.

### Demo 
https://mateusz-95.github.io/currency-converter-react/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
