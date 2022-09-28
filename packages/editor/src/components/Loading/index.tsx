import * as React from 'react';

const Loading = () => {
  return (
    <div className="rotate-animate">
      <div className="line-scale-pulse-out">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="loadingFont">h5-jh-lowercode, 正在加载中...</div>
    </div>
  );
};
export default React.memo(Loading);
