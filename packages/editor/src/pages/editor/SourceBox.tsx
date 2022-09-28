/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-19 11:48:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-28 15:18:39
 * @Description:
 */
import React, { useMemo } from 'react';
import { useDrag } from 'react-dnd';

import styles from './index.less';
import H5JhLowerCodeUIComponents from 'h5JhLowerCodeUI/components';

const { schemaH5 } = H5JhLowerCodeUIComponents;

type SourceBoxProps = {
  item: any;
  children: React.ReactNode;
  canvasId: string;
};
/**
 * @description:
 * @param {SourceBoxProps} props
 * @return {*} 主要为ui组件添加可拖拽功能
 */
const SourceBox = (props: SourceBoxProps) => {
  const { item, children } = props;
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: item.type,
      config: schemaH5[item.type].config,
      h: item.h,
      w: item.w,
      editData: schemaH5[item.type].editData,
      category: item.category,
      x: item.x || 0,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  // 移动的时候，原组件样式
  const containerStyle: React.CSSProperties = useMemo(
    () => ({
      opacity: isDragging ? 0.4 : 1,
      cursor: 'move',
      height: '140px',
    }),
    [isDragging],
  );
  return (
    <div className={styles.listWrap}>
      <div className={styles.module} ref={drag} style={{ ...containerStyle }}>
        <div className={styles.moduleChild}>{children}</div>
        <div className={styles.moduleDisplayName}>{item.displayName}</div>
      </div>
    </div>
  );
};

export default React.memo(SourceBox);
