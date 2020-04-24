import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Cards from './componentes/paginas/Cards';
import Navbar from './componentes/navbar/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route path="/" exact component={Cards} />                             
    </Switch>
    </>
  );
}

export default App;
