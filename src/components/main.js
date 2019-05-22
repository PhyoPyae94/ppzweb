import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';

const Main = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
        </Switch>
    </Router>
)

export default Main;