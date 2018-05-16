import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-svg-inline';

import Detail from '../components/Detail';
import PrevNext from '../components/PrevNext';
import {allClients} from '../utils/client';
import PageNotFound from './PageNotFound';

class Client extends Component{
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        slug: PropTypes.string.isRequired
      })
    }).isRequired
  }

  state = {
    slug: this.props.match.params.slug,
    client: {},
    component: () => null,
    name: '',
    discription: '',
    duration: '',
    location: '',
    scope: '',
    stack: '',
    website: '',
    appstore: '',
    playstore: '',
    isLoading: 'fadeInUp'
  }

  updateClient = slug => {
    const client = allClients.find(c => c.slug === slug);
    if(!client){
      return this.setState({client})
    }
    this.setState({
      component: client.loadComponent,
      name:client.name,
      order: client.order,
      logo: client.logo,
      description: client.description,
      duration: client.duration,
      location: client.location,
      scope: client.scope,
      website: client.website,
      appstore:client.appstore,
      playstore: client.playstore,
      isLoading: 'fadeInUp',
    })
    document.title = `${client.name} | Khalil Liu`
    }

  renderClient = () => {
    const {
      logo,
      duration,
      scope,
      stack,
      website,
      playstore,
      appstore,
      location,
      isLoading,
      component
    } = this.state;

    return (
      <div className={isLoading}>
        <section className='client-cover container'>
          <SVG svg={logo} />
        </section>
        <div className='client-overview'>
          <section className='container'>
            <div className='col-7-of-12 overview'>
              <h3>Overview</h3>
              <p>{this.state.description}</p>
            </div>
            <div className='col-1-of-12'/>
            <div className='col-4-of-12 details'>
              <h3>Details</h3>
              <ul>
                {duration && <Detail title='Duration' value={duration} text />}
                {location && <Detail title='Location' value={location} text />}
                {scope && <Detail title='Scope' value={scope} text/>}
                {stack && <Detail title='Stack' value={stack} text/>}
                {website && <Detail title='Website' value={website} link/>}
                {appstore && <Detail title="App Store" value={appstore} btn />}
                {playstore && <Detail title="Play Store" value={playstore} btn />}
              </ul>
            </div>
          </section>
        </div>
        <div>
          {component()}
        </div>
        <PrevNext allClients={allClients} clientId={this.state.order} />
      </div>
    )
  }

  componentWillMount(){
    this.updateClient(this.props.match.params.slug)
  }

  render(){
    return this.state.client ? this.renderClient() : <PageNotFound />
  }

}

export default Client;