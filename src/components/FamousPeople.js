import React from 'react';

import './FamousPerson.css';

const FamousPerson = (props) => {
  return (
    <div className="famous-people__details"> 
    {/*<div className='famous-people__details'>*/}
    <h3 className='famous-people__title'>{props.name}</h3>
    <div>
    </div>
      <ul>
        <li>
          <span>Job: </span>
          {props.job}
        </li>
        <li>
          <span>Country: </span>
          {props.userCountry}
        </li>
        <li>
          <span>Age: </span>
          {props.userAge}
        </li>
        <li>
          <span>Net worth: </span>
          {props.netWorth}
        </li>
      </ul>  
  </div>
  );
};

export default FamousPerson;
