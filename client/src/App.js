import React, { Component } from 'react';
import{BrowserRouter, Route, Switch}from 'react-router-dom';

import Navbar from './Navbar'
import CreateBook from './components/CreateBook'
import ShowBookDetails from './components/ShowBookDetails'
import ShowBookList from './components/ShowBookList'
import Home from './components/Home'
class App extends Component {
  render() {
    return (
   <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact={"true"}path='/' component={Home}/>
          <Route exact ={"true"} path='/create-book' component={CreateBook}/>
          <Route exact={"true"} path='/detail-book/:id' component={ShowBookDetails}/>
          <Route exact={"true"} path='/show-book' component={ShowBookList}/>
        </Switch>
     </BrowserRouter> 
    );
  }
}

export default App;