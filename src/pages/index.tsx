import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useMount } from 'ahooks';

import { useNav } from '@/hooks';
import { useStore } from '@/store';

import './index.less';

const Pages: React.FC = () => {
  const { toState } = useNav();
  const { basic } = useStore();

  useMount(() => {
    basic.updateUserData({
      userName: 'artisan',
      userId: 272039,
    });
  });

  console.log('userData=', toJS(basic.userData));

  return (
    <div>
      <p onClick={() => toState('/')}>首页</p>
      <p onClick={() => toState('/list', { from: '首页' })}>列表页</p>
    </div>
  );
};

export default observer(Pages);
