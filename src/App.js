import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import routes from './routes';


export default class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />

         {routes}
         <Footer />
      </div>
    )
  }
}
