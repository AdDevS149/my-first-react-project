import React, { useState } from 'react';

import './NewPersonForm.css';

const NewPersonForm = (props) => {
  const [userName, setUserName] = useState('');
  const [userJob, setUserJob] = useState('');
  const [userCountry, setUserCountry] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userNetWorth, setUserNetWorth] = useState('');

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userJobChangeHandler = (event) => {
    setUserJob(event.target.value);
  };

  const userCountryChangeHandler = (event) => {
    setUserCountry(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const userNetWorthChangeHandler = (event) => {
    setUserNetWorth(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userInputData = {
      name: userName,
      job: userJob,
      country: userCountry,
      age: userAge,
      netWorth: userNetWorth,
    };

    props.onSaveUserInputData(userInputData);
    setUserName('');
    setUserJob('');
    setUserCountry('');
    setUserAge('');
    setUserNetWorth('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='form-container'>
        <div className='form-details'>
          <label>Name</label>
          <input type='text' value={userName} className='form-input' placeholder='Username' onChange={userNameChangeHandler} />
          <br />

          <label>Job</label>
          <input type='text' value={userJob} className='form-input' placeholder='Job' onChange={userJobChangeHandler} />
          <br />

          <label>Country</label>
          <input type='text' value={userCountry} className='form-input' placeholder='Country' onChange={userCountryChangeHandler} />
          <br />

          <label>Age</label>
          <input type='text' value={userAge} className='form-input' placeholder='Age' onChange={userAgeChangeHandler} />
          <br />

          <label>Net Worth</label>
          <input type='text' value={userNetWorth} className='form-input' placeholder='Job' onChange={userNetWorthChangeHandler} />
          <br />

          <div>
            <button type='submit'>Add User</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewPersonForm;

