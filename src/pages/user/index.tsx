import React, { useCallback,useState } from 'react';
import { observer, inject } from 'mobx-react';
import { TPage } from 'type';
import styles from './style.module.less';

const Page: React.SFC<TPage> = ({ store, history }) => {
  const { view } = store!
  const [num,setNum] = useState(view.content)
  const jump = useCallback(() => { 
    history.push('./home')
  }, [])
  const changeContent = useCallback(() => { 
    view.changeContent(num);
  },[num])

  return (
    <>
      <h1 className={styles.color}>User</h1>
      <p>mobxContents：{view.content}</p>
      <input type="text" value={num} onChange={(e) => { setNum(e.target.value) }} /><button onClick={changeContent}>修改mobx</button>
      <p></p>
      <button onClick={jump}>go Home</button>
    </>
  );
};

export default inject('store')(observer(Page));
