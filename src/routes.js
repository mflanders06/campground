import React from 'react';
import { Route } from 'react-router-dom';
import home from './components/pages/home';
import siteDetails from './components/pages/siteDetails';
import login from './components/pages/login';
import admin from './components/pages/admin';
import * as actions from './Store/Actions.js';

const Login = login
const routes =(
    <div>
        <Route exact path="/"      component={home} />
        <Route path="/siteDetails" component={siteDetails} />
        <Route path="/login"       component={login} />
        <Route path="/admin"       component={admin} />

    </div>
)

export default routes;