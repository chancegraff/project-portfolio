import React from 'react';
import { QueryResult } from '@apollo/react-common';


const QueryHandler: React.FC<{
  query: QueryResult,
  loadingNode: React.ReactNode,
  errorNode: React.ReactNode,
  children: (data: any) => any,
}> = (props) => {
  const {
    children,
    loadingNode,
    errorNode,
    query: {
      data,
      loading,
      error,
    },
  } = props;

  return (
    Boolean(loading) && loadingNode
  ) || (
    Boolean(error) && errorNode
  ) || (
    Boolean(data) && children(data)
  );
};

export default QueryHandler;
