import classes from './Overlay.module.css';
import Modal from '../Modal/Modal';

const Overlay = (props) => {
  //   const [hidden, setHidden] = useState(false);

  const clicked = () => {
    props.loadOverlay(false);
  };

  let display = (
    <div className={classes.Overlay}>
      <Modal clicked={clicked} />
    </div>
  );

  //   if (hidden) display = null;

  return display;
};

export default Overlay;
