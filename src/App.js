import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main.js';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title={<NavLink style={{textDecoration: "none", color: '#fff'}} to="/">PhyoPyaeZaw</NavLink>} scroll>
              <Navigation>
                  <NavLink to="/projects">Projects</NavLink >
                  <NavLink to="/aboutme">About Me</NavLink >
                  <NavLink to="/resume">Resume</NavLink >
                  <NavLink to="/contact">Contact</NavLink >
              </Navigation>
          </Header>
          <Drawer title={<NavLink style={{textDecoration: "none", color: '#000'}} to="/">PhyoPyaeZaw</NavLink>}>
              <Navigation>
                  <NavLink to="/resume">Resume</NavLink >
                  <NavLink to="/aboutme">About Me</NavLink >
                  <NavLink to="/projects">Projects</NavLink >
                  <NavLink to="/contact">Contact</NavLink >
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
    </div>
  );
}

export default App;
