import React from 'react';

import { useNav } from '@/hooks';

import './index.less';

const Pages: React.FC = () => {
  const { toState } = useNav();

  return (
    <div>
      <p onClick={() => toState('/')}>首页</p>
      <p onClick={() => toState('/list', { from: '首页' })}>列表页</p>
    </div>
  );
};

export default Pages;
