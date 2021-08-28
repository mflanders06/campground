import React from 'react';
import { Route } from 'react-router-dom';
import home from './components/pages/home';
import siteDetails from './components/pages/siteDetails';
import login from './components/pages/login';

const routes =(
    <div>
        <Route exact path="/" component={home} />
        <Route path="/siteDetails" component={siteDetails} />
        <Route path="/login" component={login} />
    </div>
)

export default routes;