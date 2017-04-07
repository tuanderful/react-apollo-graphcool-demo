import React from 'react';
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

export default ChannelsList;
