import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


//Navigation
import NavMenu from './components/partials/NavMenu';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

//public routes
import Home from './components/pages/Home';
import Registration from './components/users/Registration';
import Login from './components/users/Login';

//conference
import Conference from './components/pages/Conference';
import Form from './components/conference/Form';
import ConfSessions from './components/conference/ConfSessions';

//private routes - admin dashboard
import Users from './components/dashboard/Users';
import Demo from './components/dashboard/Demographics';
import Sessions from './components/dashboard/Sessions';
import Profile from './components/users/Profile';

const user = JSON.parse(localStorage.getItem('user'));
const registration = JSON.parse(localStorage.getItem('registration'));


function App() {
  return (
    <>
      <Router>
        <NavMenu />
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

export default App;
