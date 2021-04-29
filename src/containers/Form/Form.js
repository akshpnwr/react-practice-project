import { Fragment, useState } from 'react';
import User from '../../components/User/User';

const Form = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  // const [submitted, setSubmitted] = useState(false);
  const [inputs, setInput] = useState([]);

  let submitted = false;

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newInputs = inputs;

    newInputs.push({ name, age });

    setInput([...newInputs]);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  let displayUser = null;

  if (inputs.length) {
    displayUser = <User inputs={inputs} />;
  }

  return (
    <Fragment>
      <form>
        <label>Username</label>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => nameChangeHandler(e)}
        />
        <br />

        <label>Age</label>
        <input
          type="text"
          placeholder="Age"
          onChange={(e) => ageChangeHandler(e)}
        />
        <br />
        <input onClick={(e) => onSubmitHandler(e)} type="submit" />
      </form>
      {displayUser}
    </Fragment>
  );
};

export default Form;
