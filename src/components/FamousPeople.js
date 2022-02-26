import React from 'react';

import './FamousPerson.css';

const FamousPerson = (props) => {
  console.log('test', props.id);
  return (
    <div className='famous-people__details' key={props.id}>
      <h3 className='famous-people__title'>{props.name}</h3>
      <ul>
        {/* <li>{name}</li> */}
        <li>
          <span>Job: </span>
          {props.job}
        </li>
        <li>
          <span>Country: </span>
          {props.country}
        </li>
        <li>
          <span>Age: </span>
          {props.age}
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
