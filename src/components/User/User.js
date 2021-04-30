import { Fragment } from 'react';

const user = (props) => {
  const users = props.inputs.map((input, i) => {
    return (
      <Fragment key={i}>
        <h3>{input.name}</h3>
        <p>{+input.age < 1 ? 'Age should be > 0' : input.age}</p>
      </Fragment>
    );
  });

  return <div>{users}</div>;
};

export default user;
