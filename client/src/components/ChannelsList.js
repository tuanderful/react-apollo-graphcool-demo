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
// channels to allChannels - why?
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
const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);

export default ChannelsListWithData;
