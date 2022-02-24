import React, { useState } from 'react';

import './NewPersonForm.css';

const FamousPeopleForm = (props) => {
  const [userName, setUserName] = useState('');
  const [userJob, setUserJob] = useState('');
  const [userCountry, setUserCountry] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userNetWorth, setUserNetWorth] = useState('');

  const [userNameErr, setUserNameErr] = useState('');
  const [userJobErr, setUserJobErr] = useState({});
  const [userCountryErr, setUserCountryErr] = useState({});
  const [userAgeErr, setUserAgeErr] = useState({});
  const [userNetWorthErr, setUserNetWorthErr] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();

    const userInputData = {
      name: userName,
      job: userJob,
      country: userCountry,
      age: userAge,
      netWorth: userNetWorth,
    };
    props.onSaveUserInputData(userInputData);

    const isValid = formValidation();
    if (isValid) {
      setUserName('');
      setUserJob('');
      setUserCountry('');
      setUserAge('');
      setUserNetWorth('');
    }
  };

  const formValidation = () => {
    const userNameErr = {};
    const userJobErr = {};
    const userCountryErr = {};
    const userAgeErr = {};
    const userNetWorthErr = {};
    let isValid = true;

    if (!userName.trim().length > 0) {
      userNameErr.userNameValueEmpty = 'Please insert name value';
      isValid = false;
    }
    console.log(userNameErr);
    if (!userJob.trim().length > 0) {
      userJobErr.userJobValueEmpty = 'Please insert a job value';
      isValid = false;
      console.log(userJobErr.userJobValueEmpty);
    }

    if (!userCountry.trim().length > 0) {
      userCountryErr.userCountryValueEmpty = 'Please insert a country value';
      isValid = false;
    }

    if (!userAge.trim().length > 0) {
      userAgeErr.userAgeEmptyValue = 'Please insert an age value';
      isValid = false;
    }

    if (!userNetWorth.trim().length > 0) {
      userNetWorthErr.userNetWorthEmptyValue = 'Please insert an net worth value';
      isValid = false;
    }

    setUserNameErr(userNameErr);
    setUserJobErr(userJobErr);
    setUserCountryErr(userCountryErr);
    setUserAgeErr(userAgeErr);
    setUserNetWorthErr(userNetWorthErr);
    return isValid;
  };

  return (
    <div className='form-container'>
      <div className='form-details'>
        <form onSubmit={onSubmit}>
         
          <input
            type='text'
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
            placeholder='UserCountry'
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
          <br />
        </form>
      </div>
    </div>
  );
};

export default FamousPeopleForm;
