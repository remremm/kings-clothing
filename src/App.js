import React from 'react';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import SignInSignUp from './pages/signIn/SignInSignUp.jsx';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component.jsx';
import { auth } from './firebase/firebase.utils';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
