import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import avatar from './avatar.png';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

export default class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4} className="resume-left-col">
            <div style={{ textAlign: 'center'}}>
              <img 
              src={avatar}
              alt="myPhoto"
              style={{height: '200px', borderRadius: '50%'}}
              />
            </div>

            <h2 style={{paddingTop: '0.5em'}}>Phyo Pyae Zaw</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, ab.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, ab.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, ab.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Pha Sa Pa La quatar, MingalrTaungNyunt, Yangon.</p>
            <h5>Phone</h5>
            <p>(+959)972 137599</p>
            <h5>Email</h5>
            <p>phyopyae.za94@gmail.com</p>
            <h5>Web</h5>
            <p><a href="http://phyopyae.tk" rel="noopener noreferrer" target="__blank">phyopyae.tk</a></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%', textAlign: 'center'}}/>
          </Cell>

          <Cell col={8} className="resume-right-col">
            <h2>Education</h2>

            <Education
              startYear={2002}
              endYear={2006}
              schoolName="WYTU"
              schoolDescription="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
              <Education
                startYear={2002}
                endYear={2006}
                schoolName="WYTU"
                schoolDescription="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            <hr style={{ borderTop: '3px solid #d16c82'}} />

            <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2018}
              jobName="First Job"
              jobDescription="orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <hr style={{ borderTop: '3px solid #d16c82'}} />

            <h2>Skills</h2>
            <Skills
              skill="HTML/CSS"
              progress={90}
            />
            <Skills
              skill="JavaScript"
              progress={80}
            />
            <Skills
              skill="PHP/Laravel"
              progress={70}
            />
            <Skills
              skill="React"
              progress={30}
            />
            <Skills
              skill="NodeJs"
              progress={25}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}
