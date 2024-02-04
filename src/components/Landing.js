import React from 'react';
import { Link } from 'react-router-dom';

const Landing = ({users}) => {

  return (
    <div>
      <h4 className='landing-question'>WHO'S WATCHING?</h4>
      {users.map((user) => (
       <Link key={user.id} to="/catalog">
            <div
                className='user-template'
                style={{ backgroundColor: user.backgroundColor }}
            >
                {user.name}
            </div>
        </Link>
      ))}
    </div>
  );
};

export default Landing;
