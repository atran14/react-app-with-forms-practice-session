import React from 'react';
import { NavBar } from './components/nav-bar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home-page';
import { LoginPage } from './pages/login-page';
import { RegisterPage } from './pages/register-page';
import { AddProductPage } from './pages/add-product-page';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/addProduct" component={AddProductPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
