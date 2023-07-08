import React from 'react';

const Detail: React.FC = () => {
  return <p onClick={() => history.go(-1)}>首页</p>;
};

export default Detail;
