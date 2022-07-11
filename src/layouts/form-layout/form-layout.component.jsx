import Button from '../../components/button/button.component';

import './form-layout.styles.css';

const FormLayout = ({ children, title, buttonLabel, onSubmit, error }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2 className='form-title'>{title}</h2>
      <div className='form-inputs'>
        {children}
        {error && <p className='form-error'>{error}</p>}
      </div>
      <Button label={buttonLabel} />
    </form>
  );
};

export default FormLayout;
