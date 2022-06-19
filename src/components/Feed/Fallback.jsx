import React from 'react';
import { CardWrapper } from './FeedStyles';
import Loading from '../../assets/loading.png';

const Fallback = () => {
  return (
    <>
      <CardWrapper fallback={true} bg={Loading}></CardWrapper>
    </>
  );
};

export default Fallback;
