import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tilt from 'react-tilt';
import {Link} from 'react-router-dom';

import Card from './Card';

const SmallCard = ({client, direction}) => (
  <Tilt
    style={{
      borderRadius:12, overflow:'hidden'
    }}
    options={{
      max: 10,
      speed: 500,
      perspective:500,
      scale:1.02,
      glare: true
    }}
    className={
      client.properties !== null 
        ? ['card Tilt half-size', client.properties.className].join(' ') : 'card half-size Tilt'
    }
  >
      <Link 
        to={`/work/${client.slug}`}
        key={client.name}
        style={{
          backgroundImage:`url(${require(`../img/${client.slug}/feature-small.jpg`)})`,
          backgroundPosition: 'center',
          backgroundSize:'cover'
        }}
      >
        <div className='Tilt-inner'>
          <h4>{direction} Project</h4>
          <hr/>
          <h3>{client.name}</h3>
        </div>
      </Link>
  </Tilt>
)

SmallCard.propTypes = {
  client: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    properties: PropTypes.shape({
      className: PropTypes.string
    })
  }).isRequired,
  direction: PropTypes.string.isRequired
}

export default SmallCard;