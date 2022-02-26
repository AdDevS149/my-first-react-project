import React, { useState } from 'react';

// import NewUser from './components/NewUser/NewUser';
import FamousPerson from './components/FamousPerson';
import NewPersonForm from './components/NewPersonForm';

const TEMP_USERS = [
  { id: 1, name: 'John Mayer', job: 'Singer', userCountry: 'USA', userAge: 44, userNetWorth: '40M' },
  { id: 2, name: 'Dwayne Johnson', job: 'Actor', userCountry: 'USA', userAge: 49, userNetWorth: '320M' },
  { id: 3, name: 'Mike Tyson', job: 'Boxer', userCountry: 'USA', userAge: 55, userNetWorth: '10M' },
];

const App = () => {
  const [users, setUsers] = useState(TEMP_USERS);

  const addNewUserHandler = (user) => {
    setUsers([...users, user]);
    // setUsers((prevUsers) => {
    //   return [user, ...prevUsers];
    // });
  };

  return (
    <div>
      {/*<NewUser onAddNewUserHandler={addNewUserHandler} />*/}
      <NewPersonForm onSaveUserInputData={addNewUserHandler} />
      <div >
        <FamousPerson key={users.id} person={users} />
      </div>
    </div>
  );
};

export default App;
