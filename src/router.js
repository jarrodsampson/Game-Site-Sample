import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';


import ScrollToTop from './components/helpers/ScrollToTop';

import Home from './components/containers/Home';

// Error 404 NOT FOUND
import NotFound from './components/containers/Error/NotFound';

export default (
    <Router onUpdate={hashLinkScroll}>
        <ScrollToTop>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/error" component={NotFound}/>
                <Redirect from="*" to="/error"/>
            </Switch>
        </ScrollToTop>
    </Router>
);

function hashLinkScroll() {
    const { hash } = window.location;
    if (hash !== '') {
        // Push onto callback queue so it runs after the DOM is updated,
        // this is required when navigating from a different page so that
        // the element is rendered on the page before trying to getElementById.
        setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) element.scrollIntoView();
        }, 0);
    }
}