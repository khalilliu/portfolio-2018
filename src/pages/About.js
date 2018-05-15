import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class About extends Component{
  componentDidMount(){
    document.title = 'About'
  }

  render(){
    return (
      <div>
        About page
      </div>
    )
  }
}

export default About;

