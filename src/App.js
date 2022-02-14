import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { toast } from 'react-toastify';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Algolia Search
//import algoliasearch from 'algoliasearch/lite';
//import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import '@algolia/autocomplete-theme-classic';
import { Autocomplete } from './components/partials/Autocomplete';




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

//const searchClient = algoliasearch('74W68YLA0N', '6849b26b52cd542e3f4e44e985634e9f');
const user = JSON.parse(localStorage.getItem('user'));
const registration = JSON.parse(localStorage.getItem('registration'));


//************Algolia Search************
function Action({ hit }) {
  // Component to display the items
  return (
    <div className="aa-ItemWrapper">
      <div className="aa-ItemContent">
        <div className="aa-ItemIcon">{hit.icon}</div>
        <div className="aa-ItemContentBody">
          <div className="aa-ItemContentTitle">
            <span>{hit.highlighted}</span>
            {hit.enabled && (
              <code className="aa-ItemContentTitleNote">Enabled</code>
            )}
          </div>
        </div>
      </div>
      <div className="aa-ItemActions">
        <button
          className="aa-ItemActionButton aa-DesktopOnly aa-ActiveOnly"
          type="button"
          title="Select"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M18.984 6.984h2.016v6h-15.188l3.609 3.609-1.406 1.406-6-6 6-6 1.406 1.406-3.609 3.609h13.172v-4.031z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function getQueryPattern(query, flags = "i") {
  const pattern = new RegExp(
    `(${query
      .trim()
      .toLowerCase()
      .split(" ")
      .map((token) => `^${token}`)
      .join("|")})`,
    flags
  );
  return pattern;
}

function highlight(text, pattern) {
  const tokens = text.split(pattern);

  return tokens.map((token) => {
    if (!pattern.test("") && pattern.test(token)) {
      return <mark>{token}</mark>;
    }

    return token;
  });
}


function App() {
  return (
    <>
    <div className="App">
    <Autocomplete
        placeholder="Try '/dark'"
        openOnFocus
        defaultActiveItemId={0}
        getSources={({ query }) => [
          {
            sourceId: "actions",
            getItemInputValue({ item }) {
              return item.label;
            },
            getItems({ state }) {
              const pattern = getQueryPattern(query);

              return [
                {
                  icon: (
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  ),
                  label: "/dark",
                  enabled: state.context.dark,
                  onSelect({ setContext }) {
                    document.querySelector("body").classList.add("dark");
                    setContext({ dark: true });
                    notify("Dark Mode enabled");
                  }
                },
                {
                  icon: (
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  ),
                  label: "/light",
                  enabled: !state.context.dark,
                  onSelect({ setContext }) {
                    document.querySelector("body").classList.remove("dark");
                    setContext({ dark: false });
                    notify("Light Mode enabled");
                  }
                },
                {
                  icon: (
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  ),
                  label: "/default",
                  onSelect() {
                    notify("Default function fired");
                  }
                }
              ]
                .filter(({ label }) => pattern.test(label))
                .map((action) => ({
                  ...action,
                  highlighted: highlight(action.label, pattern)
                }));
            },
            // Run this code when item is selected
            onSelect(params) {
              // item is the full item data
              // setQuery is a hook to set the query state
              const { item, setQuery } = params;

              item.onSelect(params);
              setQuery("");
            },
            // Templates for Header of this source and Items in this source
            templates: {
              header() {
                return <Header text="Available Actions" />;
              },
              item({ item }) {
                return <Action hit={item} />;
              }
            }
          }
        ]}
      />
    </div>

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
const notify = (text) => {
  toast.info(text, {
    position: "bottom-right"
  });
};


export default App;
