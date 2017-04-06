import React, { Component } from 'react';
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
} from 'react-apollo';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient();

const ChannelsList = () =>
  (<ul>
    <li>Channel 1</li>
    <li>Channel 2</li>
  </ul>);

const channelsListQuery = gql`
  query ChannelsListQuery {
    channels {
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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Apollo</h2>
        </div>
        <ChannelsList />
      </div>
    );
  }
}

export default App;
