import React, { Component } from 'react';
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,

  // creates interface (in our case, to graphcool)
  createNetworkInterface,
} from 'react-apollo';

import ChannelsListWithData from './components/ChannelsList.js';

import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  networkInterface: createNetworkInterface('https://api.graph.cool/simple/v1/cj171nfzorwla0118r5mwj5ng')
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Apollo</h2>
          </div>
          <ChannelsListWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
