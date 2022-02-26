import React, { useState } from 'react';

import './NewPersonForm.css';

const FamousPeopleForm = (props) => {
  console.log('form', props);
  const [userName, setUserName] = useState('');
  const [userJob, setUserJob] = useState('');
  const [userCountry, setUserCountry] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userNetWorth, setUserNetWorth] = useState('');

  const [userNameErr, setUserNameErr] = useState('');
  const [userJobErr, setUserJobErr] = useState('');
  const [userCountryErr, setUserCountryErr] = useState('');
  const [userAgeErr, setUserAgeErr] = useState('');
  const [userNetWorthErr, setUserNetWorthErr] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const userInputData = {
      name: userName,
      job: userJob,
      userCountry: userCountry,
      userAge: userAge,
      userNetWorth: userNetWorth,
    };
console.log('userInput', userInputData)
    const isValid = formValidation();
    if (isValid) {
      setUserName('');
      setUserJob('');
      setUserCountry('');
      setUserAge('');
      setUserNetWorth('');
      props.onSaveUserInputData(userInputData);
    }
  };

  const formValidation = () => {
    setUserNameErr('');
    setUserJobErr('');
    setUserCountryErr('');
    setUserAgeErr('');
    setUserNetWorthErr('');
    let isValid = true;

    if (!userName) {
      isValid = false;
      setUserNameErr('Please insert name value');
    }

    if (!userJob) {
      isValid = false;
      setUserJobErr('Please insert a job value');
    }

    if (!userCountry) {
      isValid = false;
      setUserCountryErr('Please insert a country value');
    }

    if (!userAge) {
      isValid = false;
      setUserAgeErr('Please insert an age value');
    }

    if (!userNetWorth) {
      isValid = false;
      setUserNetWorthErr('Please insert an net worth value');
    }
    return isValid;
  };

  return (
    <div className='form-container'>
      <div className='form-details__inputs'>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            // id={id}
            value={userName}
            className='form-input'
            placeholder='Username'
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <br />

          <input
            type='text'
            value={userJob}
            className='form-input'
            placeholder='Job'
            onChange={(e) => {
              setUserJob(e.target.value);
            }}
          />
          <br />

          <input
            type='text'
            value={userCountry}
            className='form-input'
            placeholder='Country'
            onChange={(e) => {
              setUserCountry(e.target.value);
            }}
          />
          <br />

          <input
            type='text'
            value={userAge}
            className='form-input'
            placeholder='Age'
            onChange={(e) => {
              setUserAge(e.target.value);
            }}
          />
          <br />

          <input
            type='text'
            value={userNetWorth}
            className='form-input'
            placeholder='Net worth'
            onChange={(e) => {
              setUserNetWorth(e.target.value);
            }}
          />
          <br />
          <button type='submit'>Add User</button>
          <br />
          <p className='input-message'>{userNameErr}</p>
          <p className='input-message'>{userJobErr}</p>
          <p className='input-message'>{userCountryErr}</p>
          <p className='input-message'>{userAgeErr}</p>
          <p className='input-message'>{userNetWorthErr}</p>
        </form>
      </div>
    </div>
  );
};

export default FamousPeopleForm;
