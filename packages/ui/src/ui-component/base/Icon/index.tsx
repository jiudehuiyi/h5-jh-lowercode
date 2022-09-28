/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-26 17:29:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-27 00:28:44
 * @Description:
 */
import React from 'react';
import * as Icon from '@ant-design/icons';
import type { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';
import type { AntdIconType } from './icon';
import styles from './index.less';
import { QqCircleFilled } from '@ant-design/icons';
const CustomerIcon = (props: any) => {
  const { color, size, link, text, fontSize, fontColor, type, spin, isTpl } = props;
  const MyIcon: React.ForwardRefExoticComponent<
    Pick<AntdIconProps, AntdIconType> & React.RefAttributes<HTMLSpanElement>
  > = (Icon as any)[type];

  const handleClick = () => {
    if (!link || window.location.href.indexOf('/editor') > -1) return;
    window.location.href = link;
  };

  if (isTpl) {
    return (
      <div className={styles.tpl}>
        <QqCircleFilled style={{ color: '#284080', fontSize: '36px' }} />
      </div>
    );
  }
  return (
    <div className={styles.iconWrapper}>
      <div>
        <MyIcon twoToneColor={color} style={{ fontSize: size }} spin={spin} onClick={handleClick} />
        <div style={{ fontSize, color: fontColor, paddingTop: '6px' }}>{text}</div>
      </div>
    </div>
  );
};
export default React.memo(CustomerIcon);
