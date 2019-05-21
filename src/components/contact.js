import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import avatar from './avatar.png';

import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Phyo Pyae Zaw</h2>
            <img
              src={avatar}
              alt="ppz's_photo"
              style={{height: '250px'}}
             />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
          </Cell>
          
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <FontAwesomeIcon className="fontAwesome" icon={faPhoneSquare} />
                    (+959) 972-137599
                    </ListItemContent>
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <a href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&hl=en&flowName=GlifWebSignIn&flowEntry=ServiceLogin" rel="noopener noreferrer" target="__blank">
                      <FontAwesomeIcon className="fontAwesome" icon={faEnvelopeOpenText} />
                      phyopyae.za94@gmail.com
                    </a>
                    </ListItemContent>
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <a href="https://facebook.com" rel="noopener noreferrer" target="_blank">
                      <FontAwesomeIcon className="fontAwesome" icon={faFacebookSquare} />
                      My Facebook ID
                    </a>
                    </ListItemContent>
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <FontAwesomeIcon className="fontAwesome" icon={faPhoneSquare} />
                    (123) 456-7890
                    </ListItemContent>
                </ListItem>
              </List>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}
