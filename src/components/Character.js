import React, { Component } from 'react'

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col, Button } from 'reactstrap'
import './character.css';

class Character extends Component {
  constructor(props){
    super(props)
    this.state = {
      status: 'alive'
    }
    this.freeHug = this.freeHug.bind(this);
  }
  
  freeHug(){
    console.log("I love you!")
    this.setState({
      status:'dead :('
    })
  }

  render(){
    return (<Col xs="3" sm="2" className="pt-5 pb-5">
      <Card className={this.state.status !== 'alive' ? 'dead-style' : null}>
        <CardImg top width="100%" src={ this.props.imgUrl } alt={ this.props.name } className="img-fluid" />
        <CardBody>
          <CardTitle>{ this.props.name }</CardTitle>
          <CardSubtitle className="text-muted">{ this.status }</CardSubtitle>
          <CardText>{ this.state.status }</CardText>
          <Button style={{ visibility: this.state.status != 'alive'? 'hidden' : 'visible'}} onClick={this.freeHug}>&#10084; Kill with love &#10084;</Button>
        </CardBody>
      </Card>
    </Col>)
  }
}

export default Character