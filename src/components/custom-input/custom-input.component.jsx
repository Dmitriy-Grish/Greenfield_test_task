import './custom-input.styles.css';

const CustomInput = ({ value, onChange, ...otherPops }) => {
  return (
    <input className='input' value={value} onChange={onChange} {...otherPops} required />
  );
};

export default CustomInput;
