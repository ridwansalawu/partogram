import React from 'react';
import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <p>Staff currently in the forum:</p>
            <div className="activeContainer">
              <p>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                  </div>
                ))}
              </p>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;