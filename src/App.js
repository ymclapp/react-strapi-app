import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from 'react-router-dom';


//Navigation
import NavMenu from './components/partials/NavMenu';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

//public routes
import Home from './components/pages/Home';

function App() {
  return (
<>
<NavMenu />
<Header />

<Switch>

<Route path={['/', '/home']}>
  <Home />
</Route>

</Switch>
<Footer />

</>
  );
}

export default App;
