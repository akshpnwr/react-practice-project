import classes from './Modal.module.css';

const modal = (props) => {
  return (
    <div className={classes.Modal}>
      <button className={classes.Button} onClick={props.clicked}>
        &times;
      </button>
      <h1>Ooops! Please enter correct details</h1>
    </div>
  );
};

export default modal;
