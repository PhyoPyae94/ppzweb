import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import avatar from './avatar.png';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing" style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={avatar}
              alt="profile"
              className="avatar-img"
              />
            <div className="banner-text">
              <h1>Web Developer</h1>

              <hr />

              <p>HTML/CSS | Bootstrap | Javascript | React | PHP | Laravel | MySQL</p>
              </div>  
          </Cell>
        </Grid>
      </div>
    )
  }
}
  