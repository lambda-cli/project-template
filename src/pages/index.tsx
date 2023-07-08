import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useMount } from 'ahooks';
import { useQuery } from '@tanstack/react-query';

import { useNav } from '@/hooks';
import { useStore } from '@/store';
import { queryMenu } from '@/services/menu';

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

  const { data } = useQuery({
    queryKey: ['queryMenu'],
    queryFn: queryMenu,
  });

  console.log('userData=', toJS(basic.userData));

  return (
    <div>
      {(data || []).map((item) => (
        <p key={item.value} onClick={() => toState(item.value)}>
          {item.name}
        </p>
      ))}
    </div>
  );
};

export default observer(Pages);
