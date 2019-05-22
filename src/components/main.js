import React from 'react';
import { HashRouter as Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';

const Main = () => (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
        </Switch>
)

export default Main;