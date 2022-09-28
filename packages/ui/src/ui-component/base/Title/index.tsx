/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-19 11:20:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-26 00:07:29
 * @Description:
 */
import React, { useCallback } from 'react';
import animate from '../../animation.less';

const Title = (props: any) => {
  const { isTpl, text, animationClassName, titleSize, color, ...restStyle } = props;
  const renderContent = useCallback(() => {
    if (titleSize === 'h1') {
      return <h1 style={{ color }}>{text}</h1>;
    } else if (titleSize === 'h2') {
      return <h2 style={{ color }}>{text}</h2>;
    } else {
      return <h3 style={{ color }}>{text}</h3>;
    }
  }, [titleSize, color, text]);
  return (
    <div className={animate[animationClassName]} style={{ ...restStyle }}>
      {renderContent()}
    </div>
  );
};
export default React.memo(Title);
