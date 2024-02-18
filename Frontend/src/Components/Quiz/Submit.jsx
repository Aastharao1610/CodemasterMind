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
        className='bg-blue-400 px-5 border border-blue-100 rounded-2xl py-3 mx-1'
        onClick={handleSubmit}
      >
        Submit
      </button>
    </NavLink>
  );
};

export default SubmitButton;
  