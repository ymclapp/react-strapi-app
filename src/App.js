import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Algolia Search
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


//Navigation
import NavMenu from './components/partials/NavMenu';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

//public routes
import Home from './components/pages/Home';
import Registration from './components/users/Registration';
import Login from './components/users/Login';
import Products from './components/store/Products';

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

const searchClient = algoliasearch('74W68YLA0N', '6849b26b52cd542e3f4e44e985634e9f');
const user = JSON.parse(localStorage.getItem('user'));
const registration = JSON.parse(localStorage.getItem('registration'));


function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Header />
        {/* <InstantSearch searchClient={searchClient} indexName="demo_ecommerce">
          <header id="header">
            <img alt="instant-search-logo" src="instant_search_logo@2x.png" />
            <SearchBox translations={{ placeholder: 'Search for products' }} />
          </header>
          <main> */}
            {/* <Content /> */}
          {/* </main>
          <footer>
            Source Code on
            <a href="https://github.com/algolia/instantsearch.js/tree/v2/docgen/src/examples/demo">
              Github
            </a>{' '}
            - Powered by <a href="https://www.algolia.com">Algolia</a> - Data from{' '}
            <a href="https://developer.bestbuy.com">Best Buy</a>
          </footer>
          <SearchBox translations={{ placeholder: 'Search for Products' }} />
          <Hits />
        </InstantSearch> */}

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

export default App;
