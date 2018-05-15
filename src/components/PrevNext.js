import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import SmallCard from './SmallCard';

const getPrevClient({allClients, clientId}) => {
  if(clientId === 0){
    return allClients[allClients.length-1]
  }else{
    return allClients[clientId-1]
  }
}

const getNextClient({allClients, clientId}) => {
  if(clientId === allClients.length){
    return allClients[0];
  }else{
    return allClients[clientId+1]
  }
}

const PrevNext = (props) => {
  const prevClient = getPrevClient(props);
  const nextClient(props);

  document.onkeydown = (e) => {
    switch(e.keyCode){
      case 37 :
        return props.history.push(`/work/${prevClient.slug}`);
      case 39 : 
        return props.history.push(`/work/${nextClient.slug}`);
      default:
        return null;
    }
  }

  return (
    <div>
      <section className='container prevnext'>
        <SmallCard client={prevClient} direction='Previous'/>
        <SmallCard client={nextClient} direction='Next'/>
      </section>
    </div>
  )
}

PrevNext.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default withRouter(PrevNext)

