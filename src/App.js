import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import GlobalStyle from './styles/global'
import Navbar from './componentes/navbar/Navbar';
import Backtend from './componentes/paginas/Backend';
import Frontend from './componentes/paginas/Frondend';
import Mobile from './componentes/paginas/mobile/Mobile';


function App() {
  return (
    <>
    <GlobalStyle />
    <Navbar/>
    <Switch>
    {/* <Route path="/" exact component={Inicial} /> */}
    <Route path="/backend" exact component={Backtend} /> 
    <Route path="/frontend" exact component={Frontend} />
    <Route path="/mobile" exact component={Mobile} />                                      
    </Switch>
    </>
  );
}

export default App;
