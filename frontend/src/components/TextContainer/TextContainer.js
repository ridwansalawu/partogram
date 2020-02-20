import React from 'react';
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