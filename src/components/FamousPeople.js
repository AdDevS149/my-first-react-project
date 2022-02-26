import React from 'react';

import './FamousPerson.css';

const FamousPerson = ({name, job, country, age, netWorth}) => {
  // console.log('id',id)
  return (
    <div className="famous-people__details"> 
    {/*<div className='famous-people__details'>*/}
    {/* <h3 className='famous-people__title' >{props.name}</h3> */}
      <ul>
      <li>{name}</li>
        <li>
          <span>Job: </span>
          {job}
        </li>
        <li>
          <span>Country: </span>
          {country}
        </li>
        <li>
          <span>Age: </span>
          {age}
        </li>
        <li>
          <span>Net worth: </span>
          {netWorth}
        </li>
      </ul>  
  </div>
  );
};

export default FamousPerson;
