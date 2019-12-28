import React, { useCallback } from 'react';
import { observer, inject } from 'mobx-react';
import { TPage } from 'type';

const Page: React.SFC<TPage> = ({ store,history }) => {
  const { view } = store!;
  const jump = useCallback(() => { 
    history.push('./user')
  },[])
  return (
    <>
      <h1>Home</h1>
      <p>mobxContent：{view.content}</p>
      <button onClick={jump} >go user</button>
    </>
  );
};

export default inject('store')(observer(Page));
