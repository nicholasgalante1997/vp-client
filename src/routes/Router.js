import react from 'react';
import { Router as ReactRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import RouterConstants from './routerConstants';

import LandingPage from '../pages/LandingPage/Landing.component';
import AboutPage from '../page/About/About.component.'

let history = createBrowserHistory();

const CustomRouter = () => (
    <ReactRouter history={history}>
        <Switch>
            <Route exact path={RouterConstants.HOME} component={LandingPage} />
        </Switch>
    </ReactRouter>
)

export default CustomRouter;