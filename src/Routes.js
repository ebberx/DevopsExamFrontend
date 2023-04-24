import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import MenuPage from './MenuPage';
import RegisterPage from './RegisterPage';
import OverviewPage from './OverviewPage';
import CreateCollectionPage from './CreateCollectionPage';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/menu" component={MenuPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/overview" component={OverviewPage} />
                <Route path="/overview/create" component={CreateCollectionPage} />
            </Switch>
        </Router>
    );
};

export default Routes;