/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-16 10:49:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-28 15:17:30
 * @Description:
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type { StateWithHistory } from 'redux-undo';
import { connect } from 'dva';
import type { Dispatch } from 'umi';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import { useDrop } from 'react-dnd';
import Draggable from 'react-draggable';
import { Menu, Item, MenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
import { uuid } from '@/utils/tool';
import type { ItemCallback } from 'react-grid-layout';
import lodash from 'lodash';

import styles from './index.less';
import { message } from 'antd';

/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-16 10:49:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-16 17:08:13
 * @Description:
 */
interface SourceBoxProps {
  pstate: { pointData: { id: string; item: any; point: any; isMenu?: any }[]; curPoint: any };
  cstate: { pointData: { id: string; item: any; point: any }[]; curPoint: any };
  scaleNum: number;
  canvasId: string;
  allType: string[];
  dispatch: Dispatch;
  dragState: { x: number; y: number };
  setDragState: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
    }>
  >;
}
const ViewRender = React.lazy(() => import('h5JhLowerCodeUI/viewRender')); // 动态渲染组件

const TargetBox = React.memo((props: SourceBoxProps) => {
  const { pstate, scaleNum, canvasId, allType, dispatch, dragState, setDragState, cstate } = props;
  const pointData = pstate.pointData || []; // 组件集合
  const curPoint = pstate.curPoint || null;
  const [i, setI] = useState(0); // 对于强刷浏览器，不调用onDragStart进行特殊处理, 否则组件会进行重叠
  const [canvasRect, setCanvasRect] = useState<number[]>([]);
  // 目标画板放置源目标组件
  const [{ isOver }, drop] = useDrop({
    accept: allType,
    drop: (item, monitor) => {
      // 当源目标拖动放下到目标源(当前为画版)的时候触发
      const canvasContainerDiv = document.getElementById(canvasId);
      const pointRect = canvasContainerDiv?.getBoundingClientRect();
      const top = pointRect!.top;
      const pointEnd = monitor.getSourceClientOffset();
      const y = pointEnd!.y < top ? 0 : pointEnd!.y - top;
      const col = 24; // 网格数量
      const cellHeight = 2; // 网格高度占列数
      const w = item.type === 'Icon' ? 3 : col;
      // 转换成网格规则的坐标和大小
      const gridY = Math.ceil(y / cellHeight);
      // 添加组件
      dispatch({
        type: 'editorModal/addPointData',
        payload: {
          id: uuid(6, 10),
          item,
          point: {
            i: `x-${pointData.length}`,
            x: 0,
            y: gridY,
            w,
            h: (item as any).h,
            isBounded: true,
          },
          status: 'inToCanvas',
        },
      });
    },
    collect: (monitor) => {
      return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        item: monitor.getItem(),
      };
    },
  });

  const dragStop: ItemCallback = useMemo(() => {
    return (layout, oldItem, newItem, placeholder, e, element) => {
      layout?.sort((prev, next) => prev.y - next.y); // 对布局进行排序，切记不能删除!!!
      const curPointData = pointData.filter((item) => item.id === newItem.i)[0];
      dispatch({
        type: 'editorModal/modPointData',
        payload: { ...curPointData, point: newItem, status: 'inToCanvas' },
      });
    };
  }, [dispatch, pointData, curPoint]);
  // , [dispatch, pointData, curPoint]
  const onDragStart: ItemCallback = useMemo(() => {
    return (layout, oldItem, newItem, placeholder, e, element) => {
      const curPointData = pointData.filter((item) => item.id === newItem.i)[0];
      dispatch({
        type: 'editorModal/modPointData',
        payload: { ...curPointData, status: 'inToCanvas' },
      });
    };
  }, [dispatch, pointData, curPoint, i]);

  const onLayoutChange = useCallback(
    (currentLayout: []) => {
      // 布局改变，对布局reducer和localStorage进行重排, 顺序按从上到下排列
      const pointDataClone = lodash.cloneDeep(pointData);
      const _pointData = currentLayout?.map((layout: ItemCallback) => {
        const id = layout.i;
        const pointItem = pointDataClone?.filter((data) => {
          return data.id === id;
        })?.[0];
        return pointItem;
      });
      dispatch({
        type: 'editorModal/resetPointData',
        payload: { pointData: _pointData },
      });
    },
    [dispatch, pointData, curPoint],
  );
  const onResizeStop: ItemCallback = useMemo(() => {
    return (layout, oldItem, newItem, placeholder, e, element) => {
      const curPointData = pointData.filter((item) => item.id === newItem.i)[0];
      dispatch({
        type: 'editorModal/modPointData',
        payload: { ...curPointData, point: newItem, status: 'inToCanvas' },
      });
    };
  }, [dispatch, pointData, curPoint]);

  useEffect(() => {
    const _i = i + 1;
    setI(_i);
  }, []);

  useEffect(() => {
    // 对放置到画板的源组件设置为画板宽度
    const { width, height } = document.querySelector(`#${canvasId}`)!.getBoundingClientRect?.();
    setCanvasRect([width, height]);
  }, [canvasId]);
  const render = useMemo(() => {
    console.log('pointDatapointData', pointData);
    return (
      <Draggable
        position={dragState}
        handle=".js_box"
        onStop={(e: DraggableEvent, data: DraggableData) => {
          setDragState({ x: data.x, y: data.y });
        }}
      >
        <div
          className={styles.canvasBox}
          onClick={(ev) => {
            dispatch({
              type: 'editorModal/delCurPointData',
              payload: {},
            });
            ev.preventDefault();
            ev.stopPropagation();
          }}
        >
          <MenuProvider id="menu_id">
            <div className={styles.menu} style={{ transform: `scale(${scaleNum})` }}>
              <div
                id={canvasId}
                className={styles.canvas}
                ref={drop}
                style={{ opacity: isOver ? 0.7 : 1 }}
              >
                <React.Suspense fallback="加载中...">
                  {pointData.length > 0 ? (
                    <ViewRender
                      width={canvasRect[0] || '100%'}
                      pointData={pointData}
                      curPoint={curPoint}
                      dragStop={dragStop}
                      onDragStart={onDragStart}
                      onResizeStop={onResizeStop}
                      onLayoutChange={onLayoutChange}
                    />
                  ) : null}
                </React.Suspense>
              </div>
            </div>
          </MenuProvider>
        </div>
      </Draggable>
    );
  }, [
    canvasId,
    canvasRect,
    dragState,
    scaleNum,
    drop,
    isOver,
    dragStop,
    onDragStart,
    onResizeStop,
    pointData,
    curPoint,
  ]);

  const onConTextClick = (type: string) => {
    if (!curPoint) {
      return message.error('请选择组件');
    }
    if (type === 'copy') {
      // 组件复制
      dispatch({
        type: 'editorModal/copyPointData',
        payload: {
          id: curPoint.id,
        },
      });
    } else if (type === 'del') {
      // 删除组件
      dispatch({
        type: 'editorModal/delPointData',
        payload: {
          id: curPoint.id,
        },
      });
    }
  };
  const ContextMenu = useCallback(
    () => (
      <Menu id="menu_id">
        <Item onClick={() => onConTextClick('copy')}>复制</Item>
        <Item onClick={() => onConTextClick('del')}>删除</Item>
      </Menu>
    ),
    [onConTextClick],
  );
  return (
    <>
      {render}
      <ContextMenu />
    </>
  );
});

export default connect((state: StateWithHistory<any>) => ({
  pstate: state.present.editorModal,
  cstate: state.present.editorPcModal,
}))(TargetBox);
