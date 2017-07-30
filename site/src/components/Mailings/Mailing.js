import React from 'react';

const Mailing = mailing => {
  return (
    <div className='view-item'>
      {Object.keys(mailing).map((item, index) => {
        return <div key={index}>{item}: {mailing[item]} </div>
      })}
    </div>
  );
};

export default Mailing;