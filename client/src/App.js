import React, { Component } from 'react';
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,

  // creates interface (in our case, to graphcool)
  createNetworkInterface,
} from 'react-apollo';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  networkInterface: createNetworkInterface('https://api.graph.cool/simple/v1/')
});

const ChannelsList = ({ data: { loading, error, allChannels }}) => {
  if (loading) {
    return <p>Loading ...</p>
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return <ul>
    { allChannels.map( ch => <li key={ch.id}>{ch.name}</li>)}
  </ul>

}

// NOTE: after creating network interface to graphcool, we had to rename
// channels to allChannels - why?
const channelsListQuery = gql`
  query ChannelsListQuery {
    allChannels {
      id
      name
    }
  }
`;

// Wrap our ChannelsList component with a graphql HOC
// ChannelsList component will receive a prop called data, which will
// contain channels when it is available or error when there is an error.
// data also contains a loading property which is try when Apollo client
// waiting for data to be fetched.
const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);

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
