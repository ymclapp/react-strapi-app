import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


//Navigation
import NavMenu from './components/partials/NavMenu';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

//public routes
import Home from './components/pages/Home';

//conference
import Form from './components/conference/Form';

//private routes - admin dashboard
import Users from './components/dashboard/Users';
import Demo from './components/dashboard/Demographics';
import Sessions from './components/dashboard/Sessions';

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

            <Route path='/form'>
              <Form />
            </Route>

            <Route path='/dashboard'>
              <Users />
              <Demo />
              <Sessions />
            </Route>

          </Switch>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
