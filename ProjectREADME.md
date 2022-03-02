
##  Dependencies:
1.  React
    -  React-Dom will load with it
2.  React-Bootstrap
3.  Bootstrap
4.  React-Router-Dom - used 5.3.0 - had to load because pages wouldn't change from home page
5.  @fortawesome/react-fontawesome, @fortawesome/free-solid-svg-icons, @fortawesome/fontawesome-svg-core
6.  Axios
7.  CurrencyFormat
8.  @algolia/autocomplete-js
9.  @algolia/autocomplete-theme-classic
10. algoliasearch
11.  For cart icon and items 'circles' paste into index.html in the public folder - <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
12.  React-instantsearch-dom
13.  React-instantsearch
14.  React-avatar
15.  Mdb-react-ui-kit - this was used for the header image, etc.



##  Referenced:
1.  https://www.youtube.com/watch?v=wOxP4k9f5rk
2.  https://www.youtube.com/watch?v=oUZjO00NkhY
3.  https://codesandbox.io/s/ygtux
4.  https://www.youtube.com/watch?v=3bOUzjik8OY
5.  https://github.com/ambassify/react-avatar/blob/master/demo/index.js

###  1)  index.js:
1. import { BrowserRouter  } from 'react-router-dom';
2. Add <BrowserRouter> around <App />

###  2)  Nodemon - proof of life

###  3)  app.js:
1.  import React from 'react';
2.  import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
3.  import 'bootstrap/dist/css/bootstrap.min.css';

###  4)  Create the components folder in src

###  5)  Create Home page

###  6)  app.js:
1.  import Home from './components/Home';
2.  Add Switch and Route in the return area
3.  Add <Route exact path={['/', '/home']}> and </Route> after the home route below
3.  Add <Home /> as a route

###  7)  Created NavMenu and Footer and put in a partials folder within components

###  8)  Added sticky to the navbar and also created an offcanvas navbar

##  Strapi:
1.  For the initial state for the data that you will "get", you have to use setState({data: []}); to be able to get the .map to work in the return
2.  For the initial state when "get"ting users, you use ('') to be able to get the .map to work in the return

##  Usage info:
-  Form.js is the parent form/wrapper for the rest of the forms elements that we will call
