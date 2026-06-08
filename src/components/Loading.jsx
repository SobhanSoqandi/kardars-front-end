import React from 'react';
import { ThreeDot } from 'react-loading-indicators';

function Loading() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <ThreeDot color="blue" size="medium" text="" textColor="" />
    </div>
  );
}

export default Loading;