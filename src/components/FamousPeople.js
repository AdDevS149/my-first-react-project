import React from 'react';

import Card from './UI/Card';
import './FamousPerson.css';

const FamousPerson = (props) => {
  return (
    <Card className='famous-people__details'>
      <h3 className='famous-people__title'>{props.name}</h3>
      <ul>
        <li>
          <span>Job: </span>
          {props.job}
        </li>
        <li>
          <span>UserCountry: </span>
          {props.userCountry}
        </li>
        <li>
          <span>Age: </span>
          {props.userage}
        </li>
        <li>
          <span>Net worth: </span>
          {props.netWorth}
        </li>
      </ul>
    </Card>
  );
};

export default FamousPerson;
