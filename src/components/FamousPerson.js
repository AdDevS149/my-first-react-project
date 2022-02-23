import FamousPeople from './FamousPeople';

const FamousPerson = (props) => {
  return (
    <div>
      {props.person.map((user) => (
        <FamousPeople key={user.id} name={user.name} job={user.job} country={user.country} age={user.age} netWorth={user.netWorth} />
      ))}
    </div>
  );
};

export default FamousPerson;
