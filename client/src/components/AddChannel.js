import React from 'react';
import {
  gql,
  graphql,
} from 'react-apollo';

// Update AddChannel to accept a `mutate` prop
const AddChannel = ({ mutate }) => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      console.log(evt.target.value);

      evt.persist();

      mutate({
        variables: { name: evt.target.value },
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
