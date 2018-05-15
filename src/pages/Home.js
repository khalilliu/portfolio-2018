import React , {Component} from 'react';
import {Link} from 'react-router-dom';

import Header from '../components/Header';
import Card from '../components/Card';

import {clients} from '../utils/client';

class Home extends Component{
  componentDidMount(){
    document.title = 'Khalil Liu'
  }

  render(){
    return(
      <div className='fadeInUp'>
        <Header 
          h1='A self taught UX&UI designer from Wuhan '
          h2='I would like to work with talent people to create great experiences on web & mobile applications.'
        >
          <Link to='/myresume' className='btn dark'>View My CV</Link>
        </Header>
        <section className='container'>
          <h3 className='col-1-of-1 headline'>Some Projects</h3>
        </section>
        <section className='container clients'>
          {clients.map(client => {
            const className = {
              className: client.properties !== null ? ['card Tilt', client.properties.className].join(' ') : 'card Tilt'
            }

            const size = client.properties !== null ? 'large' : 'small';

            return (
              <Card 
                client={client}
                className={className}
                size={size}
                key={client.order}
              />
            )
          })}
        </section>
      </div>
    )
  }
}

export default Home;