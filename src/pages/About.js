import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class About extends Component{
  componentDidMount(){
    document.title = 'About'
  }

  render(){
    return (
      <div>
        <section className='container fadeInUp photo'>
          <div className='col-6-of-12'>
            {/*<img src={require('img/portrait.jpg')} />*/}
          </div>
          <div className='col-4-of-12 pull-2'>
            <h1>About Me</h1>
            <h2></h2>
          </div>
        </section>
        <section className='container fadeInUp profile'>
          <div className='col-5-of-12'>
            <h4>Profile</h4>
          </div>
          <div className='col-7-of-12'>
            <p>I am a designer and creator of digital products. Currently based
            in the great city of Milwaukee, Wisconsin.</p>
          </div>
        </section>
        <section className='container fadeInUp profile'>
        <div className='col-5-of-12'>
          <h4>Experience</h4>
        </div>
        <div className='col-7-of-12'>
          <ul className='experience'>
            <li>
              <h4>
                <span>Wuhan, China</span>
                <span>2017–Present</span>
              </h4>
              <span>UI&UX Designer</span>
            </li>
          </ul>
        </div>
      </section>
      </div>
    )
  }
}

export default About;

