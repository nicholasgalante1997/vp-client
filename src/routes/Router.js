import react from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouterConstants from './routerConstants';

import LandingPage from '../pages/LandingPage/Landing.component';
import AboutPage from '../pages/About/About.component'

const CustomRouter = () => (
    <Router>
        <Switch>
            <Route exact path={RouterConstants.HOME} component={LandingPage} />
            <Route exact path={RouterConstants.ABOUT} component={AboutPage} />
        </Switch>
    </Router>
)

export default CustomRouter;