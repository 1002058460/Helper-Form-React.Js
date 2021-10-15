import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cards from './Cards';
import Main from './Main';
import PersonList from './CardComponents';

const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Cards} />
        <Route path="/Main" component={Main} />
        <Route path="/CardComponents" component={PersonList} />
      </Switch>
      </BrowserRouter>,
      rootElement
    );
