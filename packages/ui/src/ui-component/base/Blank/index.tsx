/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-27 23:06:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-27 23:44:36
 * @Description:
 */
import React from 'react';
import WhiteLogo from '@/assets/white.png';
import styles from './index.less';

const Blank = (props: any) => {
  const { backgroundColor, fontSize, text, color, height, isTpl } = props;
  return (
    <>
      {isTpl ? (
        <div>
          <img src={WhiteLogo} alt="" style={{ width: '100%' }} />
        </div>
      ) : (
        <div
          className={styles.blank}
          style={{ backgroundColor, height, lineHeight: height + 'px' }}
        >
          <div className={styles.title} style={{ fontSize, color }}>
            {text}
          </div>
        </div>
      )}
    </>
  );
};
export default React.memo(Blank);
