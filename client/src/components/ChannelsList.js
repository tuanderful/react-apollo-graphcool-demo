import React from 'react';

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

export default ChannelsList;
