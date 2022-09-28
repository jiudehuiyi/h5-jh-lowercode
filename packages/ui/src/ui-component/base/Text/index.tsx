/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-19 11:20:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-25 22:49:09
 * @Description:
 */
import React from 'react';
import animate from '../../animation.less';

const Text = (props: any) => {
  const { isTpl, text, animationClassName, ...restStyle } = props;
  return (
    <div className={animate[animationClassName]} style={{ ...restStyle }}>
      {text}
    </div>
  );
};
export default React.memo(Text);
