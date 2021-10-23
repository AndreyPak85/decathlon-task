import React from 'react';
import { Switch, Route } from 'react-router';
//pages
import { MainPage } from '../pages/MainPage';

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/' component={MainPage} />
      </Switch>
    </>
  );
};
