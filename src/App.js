import React, { useState } from 'react';
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { toast } from 'react-toastify';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Navigation
import NavMenu from './components/partials/NavMenu';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Breadcrumb from './components/partials/Breadcrumb';

//public routes
import Home from './components/pages/Home';
import Registration from './components/users/Registration';
import Login from './components/users/Login';
import Products from './components/store/Products';
import Cart from './components/store/Cart';

//conference
import Conference from './components/pages/Conference';
import Form from './components/conference/Form';
import ConfSessions from './components/conference/ConfSessions';

//private routes - admin dashboard
import Users from './components/dashboard/Users';
import Demo from './components/dashboard/Demographics';
import Sessions from './components/dashboard/Sessions';
import Profile from './components/users/Profile';
import ProductMaint from './components/dashboard/ProductMaint';


const user = JSON.parse(localStorage.getItem('user'));
const registration = JSON.parse(localStorage.getItem('registration'));


function App() {

  const [crumbs, setCrumbs] = useState(['Home', 'Category', 'Sub Category']);

  const selected = crumb => {
    //this is where you would add the functionality for the breadcrumb
    console.log(crumb);
  }

  return (
    <>
      <div className="App">
        <Breadcrumb crumbs={ crumbs } selected={ selected }/>
      </div>

      <Router>
        <NavMenu />
        <Cart />
        <Header />

        <div className='main-content'>

          <Switch>

            <Route exact path={['/', '/home']}>
              <Home />
            </Route>

            <Route path='/conference'>
              <Conference />
            </Route>

            <Route path='/sessions'>
              <ConfSessions />
            </Route>

            <Route path='/registration'>
              <Registration />
            </Route>

            <Route path='/store'>
              <Products />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>
            {!registration &&
              <Route path='/form'>
                <Form />
              </Route>
            }
            {user &&
              <Route path='/profile'>
                <Profile />
              </Route>
            }


            {user &&
              <Route path='/dashboard'>
                <ProductMaint />
                <Users />
                <Demo />
                <Sessions />
              </Route>
            }

          </Switch>

          <Footer />

        </div>

      </Router>

    </>
  );
}
// const notify = (text) => {
//   toast.info(text, {
//     position: "bottom-right"
//   });
// };


export default App;
