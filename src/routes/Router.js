import react from 'react';
import { Router as ReactRouter, Switch, Route } from 'react-router-dom';
import RouterConstants from './routerConstants';
// Create your own history instance.
import { createBrowserHistory } from 'history';
import LandingPage from '../pages/LandingPage/Landing.component';

let history = createBrowserHistory();

const CustomRouter = () => (
    <ReactRouter history={history}>
        <Switch>
            <Route exact path={RouterConstants.HOME} component={LandingPage} />
        </Switch>
    </ReactRouter>
)

export default CustomRouter;