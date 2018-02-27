## Lab 31-redux

This project creates an app with React components and routing that incorporates front-end routing.  The app uses Redux state management.  The structure follows:

```
App
  Provider
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categories
        [Category Item]
           CategoryForm  -- for updating categories
```

**App component**
The App component sets up the Provider for the redux store and the Router.

**Dashboard Component**
- displayed on the / route
- uses react-redux's ```connect``` to map state and dispatchable methods to props
- displays a ```CategoryForm``` for adding categories to the app state
- displays a ```CategoryItem``` for each category in the app state

**CategoryForm Component**
- expects an ```onComplete``` prop to be a function
  - the function is invoked with the CategoryForm state when the form is submitted
- expects a ```buttonText``` prop to configure the submit buttons text
- supports an optional ```category``` prop that will initialize the state of the form

**CategoryItem Component**
- displays the category's name and budget
- displays a ```delete``` button
  - ```onClick``` the category should be removed from the application state
- should display a CategoryForm
  - ```onComplete``` the form should update the component in the application state

**Installation & Set-Up**
Fork this repository and install on your machine using git clone. Switch to the lab-karen folder.

This project requires Node JS and npm( Node package manager).

The following excerpt from the existing package.json file shows the required package dependencies. Install devDependencies with *npm i -D (package name)*.
```
"devDependencies": {
  "babel-core": "^6.26.0",
  "babel-loader": "^7.1.2",
  "babel-plugin-transform-object-rest-spread": "^6.26.0",
  "babel-preset-env": "^1.6.1",
  "babel-preset-react": "^6.24.1",
  "css-loader": "^0.28.9",
  "enzyme": "^3.3.0",
  "enzyme-adapter-react-16": "^1.1.1",
  "eslint": "^4.18.1",
  "eslint-plugin-react": "^7.7.0",
  "extract-text-webpack-plugin": "^3.0.2",
  "html-webpack-plugin": "^2.30.1",
  "jest": "^22.4.0",
  "node-sass": "^4.7.2",
  "react": "^16.2.0",
  "react-dom": "^16.2.0",
  "react-router-dom": "^4.2.2",
  "resolve-url-loader": "^2.2.1",
  "sass-loader": "^6.0.6",
  "superagent": "^3.8.2",
  "uuid": "^3.2.1",
  "webpack": "^3.11.0",
  "webpack-dev-server": "^2.11.1"
}
```

Additionally, add the following scripts to your package.json file to run from the command line.
```
"scripts": {
  "test": "jest",
  "watch": "webpack-dev-server --inline --hot"
},
```
**Running the app**
From the command line, type *npm run watch* to start the Webpack server.  Open a tab in the browser at localhost:8080 to interact with the app.
