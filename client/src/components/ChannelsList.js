import React from 'react';
import {
  gql,
  graphql,
} from 'react-apollo';

import AddChannel from './AddChannel';


const ChannelsList = ({ data: { loading, error, allChannels }}) => {
  if (loading) {
    return <p>Loading ...</p>
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return <div className="channelsList">
    <AddChannel />
    { allChannels.map( ch => <div key={ch.id}>{ch.name}</div>)}
  </div>
}

// NOTE: after creating network interface to graphcool, we had to rename
// channels to allChannels. That's because a query to graphcool for Channels
// would return a single Channel.
// Also worth noting: if you search for a Channel, yuo'll need to pass an ID.
// Also, the schema defined should be singular. Defining a Messages type, and
// searching for allMessages doesn't work; graphcool expects allMessageses,
// which is just awkward.
//
// I had to change my type name to Message before I could run a query for allMessages.
export const channelsListQuery = gql`
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
const ChannelsListWithData = graphql(channelsListQuery
  // Uncomment to poll, updating the ChannelsList on the client
  // whenever the store is updated.
  // , {
  //   options: { pollInterval: 5000 },
  // }
)(ChannelsList);

export default ChannelsListWithData;
