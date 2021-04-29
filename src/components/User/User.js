import { Fragment } from 'react';

const user = (props) => {
  const users = props.inputs.map((input, i) => (
    <Fragment key={i}>
      <h3>{input.name}</h3>
      <p>{input.age}</p>
    </Fragment>
  ));

  return <div>{users}</div>;
};

export default user;
