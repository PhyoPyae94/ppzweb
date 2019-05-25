import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  } 

    toggleCategories() {
      
      if(this.state.activeTab === 0){
        return(
          <div className="projects-grid-zero">
          {/* project 1 */}
            <div className="project-one" style={{miniWidth: '300', margin: 'auto'}}>
              <Card shadow={5}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5wIiElencE4D-Cv1f3YqouHUFVmmrNzikLVk9ADs244_WBzomw) center / cover'}}>Todo List app</CardTitle>
                <CardText>
                    Build a Todo list application with Laravel.
                </CardText>
                <CardActions border>
                    <Button colored>
                      <a href="https://github.com/PhyoPyae94/Todos" style={{textDecoration: 'none', color: 'blue'}}>Github</a>
                    </Button>
                    <Button colored>
                      <a href="http://ppztodos.000webhostapp.com/" style={{textDecoration: 'none', color: 'blue'}}>Live Demo</a>
                    </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>

          {/* project 2 */}
            <div className="project-one" style={{miniWidth: '450', margin: 'auto'}}>
              <Card shadow={5}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5wIiElencE4D-Cv1f3YqouHUFVmmrNzikLVk9ADs244_WBzomw) center / cover'}}>Laravel Project #2</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>Live Demo</Button>
                    <Button colored></Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>

          </div>
        )

        // React
      } else if(this.state.activeTab === 1){
        return(
          <div>
            {/* project 1 */}
              <div className="project-one" style={{miniWidth: '450', margin: 'auto'}}>
                <Card shadow={5}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>Portfolio Website</CardTitle>
                  <CardText>
                      Building Portfolio Website using ReactJs.
                  </CardText>
                  <CardActions border>
                      <Button colored>
                        <a href="https://github.com/PhyoPyae94/ppzweb" style={{textDecoration: 'none', color: 'blue'}}>Github</a>
                      </Button>
                      <Button colored>
                        <a href="https://phyopyaezaw.netlify.com" style={{textDecoration: 'none', color: 'blue'}}>Live Demo</a>
                      </Button>
                  </CardActions>
                  <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>
          </div>
        )
      } else if(this.state.activeTab === 2){
        return(
          <div><h1>PHP projects will comming soon.</h1></div>
        )
        // others project
      } else if(this.state.activeTab === 3){
        return(
          <div>
            {/* project 1 */}
              <div className="project-one" style={{miniWidth: '450', margin: 'auto'}}>
                <Card shadow={5}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHVQRQGKwkNNAmuacy-mLBGHbeN_TlTPZbprci4bp99L3mvod'}}>Simple Responsive Website</CardTitle>
                  <CardText>
                      Building Simple responsive website with html, css, jquery and bootstrap.
                  </CardText>
                  <CardActions border>
                      <Button colored>
                        <a href="https://github.com/PhyoPyae94/sbp" style={{textDecoration: 'none', color: 'blue'}}>Github</a>
                      </Button>
                      <Button colored>
                        <a href="https://loso-responsive.netlify.com" style={{textDecoration: 'none', color: 'blue'}}>Live Demo</a>
                      </Button>
                  </CardActions>
                  <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>
          </div>
        )
      }
    }
    
  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Laravel</Tab>
          <Tab>React</Tab>
          <Tab>PHP</Tab>
          <Tab>Others</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
