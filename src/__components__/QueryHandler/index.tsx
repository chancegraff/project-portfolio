import React from 'react';
import { QueryResult } from '@apollo/react-common';


interface IProps<T> {
  query: QueryResult<T>,
  loadingNode: React.ReactNode,
  errorNode: React.ReactNode,
  children: (data: T) => any,
}

const QueryHandler = <T extends {}> (props: IProps<T>): JSX.Element => {
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
    Boolean(data) && children(data as T)
  );
};

export default QueryHandler;
