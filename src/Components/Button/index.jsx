import { Link } from 'react-router-dom';
import './style.css';
export const Button = (props) => {
  return (
      <Link to={`/${props.nameTails}`} className='butt'>{props.name}</Link>
  );
};
