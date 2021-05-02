import { Fragment, useState } from 'react';
import User from '../../components/User/User';
import Overlay from '../../components/Overlay/Overlay';
import ReactDOM from 'react-dom';

let overlay = null;

const Form = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  // const [submitted, setSubmitted] = useState(false);
  const [inputs, setInput] = useState([]);
  const [loadOverlay, setLoadOverlay] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!(name && age)) {
      console.log('overlay');
      overlay = <Overlay loadOverlay={setLoadOverlay} />;

      setLoadOverlay(true);

      return;
    }

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
        <input onClick={onSubmitHandler} type="submit" />
      </form>
      {displayUser}
      {loadOverlay
        ? ReactDOM.createPortal(
            overlay,
            document.getElementById('overlay-section')
          )
        : null}
    </Fragment>
  );
};

export default Form;
