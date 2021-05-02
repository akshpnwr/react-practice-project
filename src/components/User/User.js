import { Fragment } from 'react';

const user = (props) => {
  const users = props.inputs.map((input, i) => {
    return (
      <Fragment key={i}>
        <h3>{input.enteredName}</h3>
        <p>{+input.enteredAge < 1 ? 'Age should be > 0' : input.enteredAge}</p>
      </Fragment>
    );
  });

  return <div>{users}</div>;
};

export default user;
