/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-13 15:17:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-28 15:47:06
 * @Description:
 */
import React from 'react';
import GridLayout from 'react-grid-layout';
import type { ItemCallback } from 'react-grid-layout';
import DynamicEngine from './DynamicEngine';
import styles from './ViewRender.less';

type PointDataItem = {
  id: string;
  item: Record<string, any>;
  point: Record<string, any>;
};

type ViewRenderProps = {
  pointData: PointDataItem[];
  curPoint: PointDataItem;
  pageData?: any;
  width?: number;
  dragStop?: ItemCallback;
  onDragStart?: ItemCallback;
  onResizeStop?: ItemCallback;
};

const ViewRender = (props: ViewRenderProps) => {
  const {
    pointData = [],
    curPoint = null,
    pageData,
    width,
    dragStop,
    onDragStart,
    onResizeStop,
    ...rest
  } = props;
  return (
    <GridLayout
      cols={24}
      rowHeight={2}
      width={width}
      margin={[0, 0]}
      onDragStop={dragStop}
      onDragStart={onDragStart}
      onResizeStop={onResizeStop}
      style={{
        minHeight: '100vh',
        backgroundColor: pageData && pageData.bgColor,
        backgroundImage:
          pageData && pageData.bgImage ? `url(${pageData.bgImage[0].url})` : 'initial',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
      }}
      {...rest}
    >
      {pointData.map((value: PointDataItem) => {
        return (
          <div
            key={value.id}
            data-grid={value.point}
            data-componentId={value.id}
            className={styles.dragItem}
            style={{
              border: curPoint && value.id === (curPoint as any).id ? '2px solid #274080' : 'unset',
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <DynamicEngine {...(value.item as any)} isTpl={false} />
          </div>
        );
      })}
    </GridLayout>
  );
};
export default React.memo(ViewRender);
