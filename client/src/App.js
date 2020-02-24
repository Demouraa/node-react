import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home/home';
import Login from './components/login/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
