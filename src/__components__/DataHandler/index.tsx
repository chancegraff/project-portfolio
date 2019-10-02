import React from 'react';


const DataHandler: React.FC<{
  children?: any,
}> = (props) => {
  const {
    children,
  } = props;

  return (
    children
  ) || (
    <span />
  );
};

export default DataHandler;
