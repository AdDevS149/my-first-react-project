import React, { useState } from 'react';

import NewUser from './components/NewUser/NewUser';
import FamousPerson from './components/FamousPerson';

const TEMP_USERS = [
  { id: 1, name: 'John Mayer', job: 'Singer', userCountry: 'USA', userAge: 44, netWorth: '40M' },
  { id: 2, name: 'Dwayne Johnson', job: 'Actor', userCountry: 'USA', userAge: 49, netWorth: '320M' },
  { id: 3, name: 'Mike Tyson', job: 'Boxer', userCountry: 'USA', userAge: 55, netWorth: '10M' },
];

const App = () => {
  const [users, setUsers] = useState(TEMP_USERS);

  const addNewUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div className='famous-people__container'>
      <NewUser onAddNewUserHandler={addNewUserHandler} />
      <div>
        <FamousPerson person={users} />
      </div>
    </div>
  );
};

export default App;
