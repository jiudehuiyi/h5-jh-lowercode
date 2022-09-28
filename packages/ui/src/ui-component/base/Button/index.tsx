/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-26 09:45:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-26 10:48:36
 * @Description:
 */
import React from 'react';
import animate from '../../animation.less';
import styles from './index.less';
import classnames from 'classnames';

const Button = (props: any) => {
  const {
    isTpl,
    text,
    animationClassName,
    textAlign,
    frontLinearGradient,
    endLinearGradient,
    deg,
    paddingVertical,
    paddingHorizontal,
    ...restStyle
  } = props;
  const backgroundImage = {
    backgroundImage: `linear-gradient(${deg || 90}deg, ${
      frontLinearGradient || 'rgba(255,255,255,0)'
    }, ${endLinearGradient || 'rgba(255,255,255,0)'})`,
    padding: `${paddingVertical} ${paddingHorizontal}`,
  };
  return (
    <div className={styles.btnWrapper} style={{ textAlign: textAlign }}>
      <div
        className={classnames({
          [styles.btn]: true,
          [animate[animationClassName]]: !!animationClassName,
        })}
        style={{ ...backgroundImage, ...restStyle }}
      >
        {text}
      </div>
    </div>
  );
};
export default React.memo(Button);
