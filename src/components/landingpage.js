import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import avatar from './avatar.png';
import Particles from 'react-particles-js';

const particleOpt =  {
                  particles: {
                    number: {
                      value: 70,
                      density: {
                        enable: true,
                        value_area: 800
                      }
                    },
                    opacity: {
                      value: 0.4008530152163807,
                      random: false,
                      anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                      }
                    },
                    line_linked: {
                      shadow: {
                        enable: true,
                        color: "#3CA9D1",
                        blur: 3
                      }
                    },
                  },
                  interactivity: {
                    detect_on: "window",
                    events: {
                      onhover: {
                        enable: true,
                        mode: "repulse"
                      },
                    }
                  }                  
}

export default class Landing extends Component {
  render() {
    return (
      <div className="landing" style={{
        width: '100%', 
        margin: 'auto',
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%"
        }}>

        <Grid className="landing-grid">
          <Cell col={12}>

            <div id ="btext" 
              style={{
                position: "absolute",
                textAlign: "center",
                top: 100,
                left: 0,
                right: 0,
                zIndex: 1,
                width: "80%",
              }}
            >
              <h1>Welcome to my portfolio.</h1>
              <hr/>

              <img
              src={avatar}
              alt="profile"
              className="avatar-img"
              />
              
              <p>Phyo Pyae Zaw is learning, thinking and coding about web development, how to create, how to maintain and how to design with the following skills.</p>
              <p>HTML/CSS | Bootstrap | Javascript | React | PHP | Laravel | MySQL</p>

            </div>

            <Particles params={particleOpt}
            />
  
          </Cell>
        </Grid>
      </div>
    )
  }
}
  