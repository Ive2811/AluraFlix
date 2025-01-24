import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Inicio from './pages/Inicio';
import RegistroVideo from './pages/registro/Video';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegistroCategoria from './pages/registro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Inicio} exact />
      <Route path="/registro/video" component={RegistroVideo} />
      <Route path="/registro/categoria" component={RegistroCategoria} />
      <Route component={() => (<div>Página 404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
