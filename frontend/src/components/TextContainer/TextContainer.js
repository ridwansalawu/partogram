import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="">
    {
      users
        ? (
          <div>
            <h4>Staff currently in the forum:</h4>
            <div className="">
              <h4>
                {users.map(({name}) => (
                  <div key={name} className="">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h4>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;