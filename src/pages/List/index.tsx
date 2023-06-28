import React from 'react';

import { useNav } from '@/hooks';

const Lists: React.FC = () => {
  const { state } = useNav();
  return <p onClick={() => history.go(-1)}>{state.from}</p>;
};

export default Lists;
