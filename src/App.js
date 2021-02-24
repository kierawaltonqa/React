'use strict';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Components/07-routes/about';
import AboutPage from './Components/07-routes/exercises/aboutPage';
import Bookings from './Components/07-routes/exercises/bookings';
import Contact from './Components/07-routes/exercises/contact';
import Films from './Components/07-routes/exercises/films';
import HomePage from './Components/07-routes/exercises/HomePage';
import NavBar from './Components/07-routes/exercises/navBar';
import Create from './Components/07-routes/exercises2/create';
import Delete from './Components/07-routes/exercises2/delete';
import Navigation from './Components/07-routes/exercises2/navigation';
import Read from './Components/07-routes/exercises2/read';
import Update from './Components/07-routes/exercises2/update';
import Home from './Components/07-routes/home';
import Nav from "./Components/07-routes/nav";
import Product from './Components/07-routes/product';
import User from './Components/07-routes/user';
import FilmRequest from './Components/08-data-requests/exercise/FilmRequest';

import Search from './Components/08-data-requests/exercise2/Search';
import Tesco from './Components/08-data-requests/tesco';

const App = () => {
  return (
    <div className="App">

      {/* <ReadMore text="hello this is the text that I am writing for the purposes of demonstrating the code"
        maxLength="10" />
      <Greet name="kiera" /> */}
      {/* <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/bookings">
            <Bookings />
          </Route>
        </Switch>
      </Router> */}
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/read">
            <Read />
          </Route>
          <Route path="/update">
            <Update />
          </Route>
          <Route path="/delete">
            <Delete />
          </Route>
          <Route path="/tesco">
            <Tesco />
          </Route>
          <Route path="/api">
            <Search />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
