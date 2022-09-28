/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-27 17:46:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-27 17:51:16
 * @Description:
 */
import { NoticeBar } from 'zarm';
import React from 'react';
import NoticeLogo from '@/assets/notice.png';

const Notice = (props: any) => {
  const { text, speed, theme, isClose = false, isTpl } = props;
  return (
    <>
      {isTpl ? (
        <div>
          <img src={NoticeLogo} alt="" />
        </div>
      ) : (
        <NoticeBar theme={theme === 'default' ? undefined : theme} closable={isClose} speed={speed}>
          <span style={{ color: 'inherit' }}>{text}</span>
        </NoticeBar>
      )}
    </>
  );
};
export default React.memo(Notice);
