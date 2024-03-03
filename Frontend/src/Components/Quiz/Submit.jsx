// SubmitButton.jsx
import { NavLink } from 'react-router-dom';

const SubmitButton = ({ onSubmit}) => {
  const handleSubmit = () => {
    console.log('Submitting quiz...');
    onSubmit();
  
  };

  return (
    <NavLink to='/Scoreboard'>
      <button
        className='bg-green-500 px-5 border border-green-500 rounded-2xl py-3 mx-1'
        onClick={handleSubmit}
      >
        Submit
      </button>
    </NavLink>
  );
};

export default SubmitButton;
  