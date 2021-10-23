import React from 'react';
import { Switch, Route } from 'react-router';
//pages
import { MainPage } from '../pages/MainPage';
import { CartPage } from '../pages/CartPage';

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/cart' exact component={CartPage} />
      </Switch>
    </>
  );
};
