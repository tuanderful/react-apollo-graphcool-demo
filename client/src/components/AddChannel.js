import React from 'react';
import {
  gql,
  graphql,
} from 'react-apollo';

// import the previously written query rather than re-writing it for refetch
import { channelsListQuery } from './ChannelsList';


// Update AddChannel to accept a `mutate` prop
const AddChannel = ({ mutate }) => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      console.log(evt.target.value);

      evt.persist();

      mutate({
        variables: { name: evt.target.value },
        // add refetchQueries to indicate the query to refetch
        // after performing mutations
        refetchQueries: [{ query: channelsListQuery }]
      })
      .then( res => {
        evt.target.value = '';
      });
    }
  }

  return (
    <input
      type="text"
      placeholder="New channel"
      onKeyUp={handleKeyUp}
    />
  );
};

// Tutorial uses `addChannel`, we use `createChannel` instead
const addChannelMutation = gql`
  mutation addChannel($name: String!) {
    createChannel(name: $name) {
      id
      name
    }
  }
`;

const AddChannelWithMutation = graphql(
  addChannelMutation
)(AddChannel);

export default AddChannelWithMutation;
