import FamousPeople from './FamousPeople';
import './FamousPeople.css';

const FamousPerson = (props) => {
  return (
    <div>
      {props.person.map((user) => (
        <div className='famous-person__display' >
          <FamousPeople id={user.id} name={user.name} job={user.job} country={user.userCountry} age={user.userAge} netWorth={user.userNetWorth} />
        </div>
      ))}
    </div>
  );
};

export default FamousPerson;
