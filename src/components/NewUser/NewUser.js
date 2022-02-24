import React from 'react';

import NewPersonForm from '../NewPersonForm';
import './NewUser.css';

const NewUser = (props) => {
  // Pass data from to onSaveFunction
  // By passing data to the onSaveFunction are (lifting the state) to the App component.

  const saveUserInputData = (newInputData) => {
    const userInputData = {
      ...newInputData,
    };
    props.onAddNewUserHandler(userInputData);
  };
  return (
    <div className='new-user'>
      <NewPersonForm onSaveUserInputData={saveUserInputData} />
    </div>
  );
};

export default NewUser;
