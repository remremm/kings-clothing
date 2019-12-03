import React from 'react';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
