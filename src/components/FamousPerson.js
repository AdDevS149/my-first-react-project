import FamousPeople from './FamousPeople';

const FamousPerson = (props) => {
  return (
    <div>
      {props.person.map((user) => (
        <FamousPeople key={user.id} name={user.name} job={user.job} userCountry={user.userCountry} userAge={user.userAge} netWorth={user.userNetWorth} />
      ))}
    </div>
  );
};

export default FamousPerson;
