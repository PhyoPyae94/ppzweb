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
            <p>Phyo Pyae Zaw is learning, thinking and coding about web development, how to create, how to maintain and how to design with the following skills.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Pha Sa Pa La Quatar, MingalrTaungNyunt, Yangon.</p>
            <h5>Phone</h5>
            <p>(+959)972 137599</p>
            <h5>Email</h5>
            <p>phyopyae.za94@gmail.com</p>
            <h5>Web</h5>
            <p><a href="https://phyopyaezaw.netlify.com" rel="noopener noreferrer" target="__blank">phyopyaezaw.netlify.com</a></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%', textAlign: 'center'}}/>
          </Cell>

          <Cell col={8} className="resume-right-col">
            <h2>Education</h2>

            <Education
              startYear={2014}
              endYear={2015}
              schoolName="West Yangon Technological University"
              schoolDescription="Bachelor of Technology ( Civil )"
            />
              <Education
                startYear={2015}
                endYear={2016}
                schoolName="West Yangon Technological University"
                schoolDescription="Bachelor of Engineering ( Civil )"
              />
            <h3>Others Qualification</h3>
                <Education
                    startYear={2018}
                    endYear={"( Sep -> Dec )"}
                    schoolName="Fairway School of Technology"
                    schoolDescription="Fundamental Software Engineering"
                  />

                <Education
                    startYear={2019}
                    endYear={"( 2018Oct -> Jan )"}
                    schoolName="Fairway School of Technology"
                    schoolDescription="Professional Web Developer"
                  />
            <hr style={{ borderTop: '3px solid #d16c82'}} />

            <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2018}
              jobName="Site Engineer"
              jobDescription="1 Year Experienced Site Engineer position at “68 Residence” and “Myat Mingalar” Condominium Project with (PH Global Co.,Ltd)."
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
                skill="MySQL"
                progress={50}
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
