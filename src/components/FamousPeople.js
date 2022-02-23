import React from 'react';

import Card from './UI/Card';
import './FamousPerson.css';

const FamousPerson = (props) => {
  return (
    <Card>
      <div className='famous-people__details'>
        <h3 className='famous-people__title'>{props.name}</h3>
        <ul>
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
    </Card>
  );
};

export default FamousPerson;
