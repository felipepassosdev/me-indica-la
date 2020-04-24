import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Inicial from './componentes/paginas/Inicial';
import Navbar from './componentes/navbar/Navbar';
import Backtend from './componentes/paginas/Backend';
import Frontend from './componentes/paginas/Frondend';


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route path="/" exact component={Inicial} />
    <Route path="/backend" exact component={Backtend} /> 
    <Route path="/frontend" exact component={Frontend} />                                 
    </Switch>
    </>
  );
}

export default App;
