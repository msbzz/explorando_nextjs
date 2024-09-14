import React from 'react';

export default function Title({ children, as }) {
  const Tag =as;

  return (
    <React.Fragment>
      <Tag>{children}</Tag>
      <style jsx>
        {`
          ${Tag} {
            color: red;
            font-family:sans-serif;
          }
        `}
      </style>
    </React.Fragment>
  );
}
