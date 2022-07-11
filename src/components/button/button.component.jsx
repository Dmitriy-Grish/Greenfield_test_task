import './button.styles.css';

const Button = ({ label, onClick }) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button className='btn' onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
