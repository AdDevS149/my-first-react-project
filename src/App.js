import React, { useState } from 'react';

import NewUser from './components/NewUser/NewUser';
import FamousPerson from './components/FamousPerson';

const TEMP_USERS = [
  { id: 1, name: 'John Mayer', job: 'Singer', country: 'USA', age: 44, netWorth: '40M' },
  { id: 2, name: 'Dwayne Johnson', job: 'Actor', country: 'USA', age: 49, netWorth: '320M' },
  { id: 3, name: 'Mike Tyson', job: 'Boxer', country: 'USA', age: 55, netWorth: '10M' },
];

const App = () => {
  const [users, setUsers] = useState(TEMP_USERS);

  const addNewUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <NewUser onAddNewUsserHandler={addNewUserHandler} />
      <div className='famous-people__container'>
        <FamousPerson person={users} />
      </div>
    </div>
  );
};

export default App;
