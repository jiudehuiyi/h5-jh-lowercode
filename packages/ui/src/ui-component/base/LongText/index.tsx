/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-25 22:50:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-25 22:55:27
 * @Description:
 */
import React from 'react';

const LongText = (props: any) => {
  const { isTpl, text, ...restStyle } = props;
  return <div style={{ ...restStyle }}>{text}</div>;
};
export default React.memo(LongText);
