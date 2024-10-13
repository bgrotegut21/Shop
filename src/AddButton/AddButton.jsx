import './addbutton.css';

const AddButton = ({ size }) => {
  const sizeClass = size === 'large' ? 'add-button-large' : '';

  return <button className={`add-button ${sizeClass}`}>Add</button>;
};

export default AddButton;
