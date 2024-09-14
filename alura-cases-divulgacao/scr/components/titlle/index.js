import React from 'react';

export default function Title({ children }) {
  return (
    <React.Fragment>
      <h1>{children}</h1>
      <style jsx>
        {`
          h1 {
            color: red;
          }
        `}
      </style>
    </React.Fragment>
  );
}
