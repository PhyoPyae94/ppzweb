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
          <div className="projects-grid">
          {/* project 1 */}
          <Card shadow={5} style={{miniWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>React Prject #1</CardTitle>
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

          {/* project 2 */}
          <Card shadow={5} style={{miniWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>React Prject #2</CardTitle>
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

          {/* project 3 */}
          <Card shadow={5} style={{miniWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>React Prject #3</CardTitle>
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
        )
      } else if(this.state.activeTab === 1){
        return(
          <div><h1>This is Laravel</h1></div>
        )
      } else if(this.state.activeTab === 2){
        return(
          <div><h1>This is VueJs</h1></div>
        )
      } else if(this.state.activeTab === 3){
        return(
          <div><h1>This is MongoDB</h1></div>
        )
      }
    }
    
  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Laravel</Tab>
          <Tab>VueJs</Tab>
          <Tab>MongoDB</Tab>
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
