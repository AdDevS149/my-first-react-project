import FamousPeople from './FamousPeople';

const FamousPerson = (props) => {
  return (
    <div>
      {props.person.map((user) => (
        <FamousPeople key={user.id} name={user.name} job={user.job} userCountry={user.userCountry} userage={user.userage} netWorth={user.netWorth} />
      ))}
    </div>
  );
};

export default FamousPerson;
