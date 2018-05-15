import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-svg-inline';

import Detail from '../components/Detail';
import PrevNext from '../components/PrevNext';
import allClients from '../utils/clients';
import PageNotFound from '../Pages/PageNotFound';

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
    
  }
}