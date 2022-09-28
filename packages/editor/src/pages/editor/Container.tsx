import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { connect } from 'dva';
import { Result, Tabs } from 'antd';
import type { StateWithHistory } from 'redux-undo';
import _ from 'lodash';
import classnames from 'classnames';
import TargetBox from './TargetBox';
import SourceBox from './SourceBox';
import CanvasControl from './components/CanvasControl';
import H5JhLowerCodeUIComponents from 'h5JhLowerCodeUI/components';
import {
  PieChartOutlined,
  PlayCircleOutlined,
  HighlightOutlined,
  DoubleRightOutlined,
  DoubleLeftOutlined,
} from '@ant-design/icons';

import Header from './components/Header';
import styles from './index.less';
import Calibration from '@/pages/editor/components/Calibration';
import { FormRender } from '@/core';
const { TabPane } = Tabs;

const DynamicEngine = React.lazy(() => import('h5JhLowerCodeUI/loader')); // 动态渲染组件
const { template = [], schemaH5 } = H5JhLowerCodeUIComponents;
const Container = (props: {
  history?: any;
  location?: any;
  pstate?: any;
  cstate?: any;
  dispatch?: any;
}) => {
  const { pstate, dispatch } = props;
  const pointData = pstate ? pstate.pointData : []; // 组件集合
  const curPoint = pstate ? pstate.curPoint : {}; // 选中组件
  const [collapsed, setCollapsed] = useState<boolean>(false); // 左侧资源菜单是否收缩
  const [scaleNum, setScaleNum] = useState<number>(1); // 缩放比例
  const [dragState, setDragState] = useState({ x: 0, y: 0 }); // 目标盒子位置
  const [diffMove, setDiffMove] = useState({
    // 目标盒子位置中间变量
    start: { x: 0, y: 0 },
    move: false,
  });
  const [rightCollapse, setRightCollapse] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  // 指定画布的id
  const canvasId = 'js_canvas';

  const onChangeCollapse = useCallback((c: boolean) => {
    setCollapsed(c);
  }, []);

  const onChangeRightCollapse = useMemo(() => {
    return (c: boolean) => {
      setRightCollapse(c);
    };
  }, []);
  // 当选中组件的时候，打开右侧配置菜单栏
  useEffect(() => {
    if (curPoint && curPoint.status === 'inToCanvas') {
      setRightCollapse(false);
    }
  }, [curPoint]);

  const TabsIcon = useMemo(() => {
    return {
      base: <HighlightOutlined />, // 基础组件
      media: <PlayCircleOutlined />, // 媒体组件
      visible: <PieChartOutlined />, // 可视化组件
    };
  }, []);

  const allType = useMemo(() => {
    const arr: string[] = [];
    template.forEach((val: { type: string }) => {
      arr.push(val.type);
    });
    return arr;
  }, [template]);

  const generateHeader = useMemo(() => {
    return (type: any, text: string) => {
      return (
        <div>
          {(TabsIcon as any)[type]} {text}
        </div>
      );
    };
  }, [TabsIcon]);
  const tabRender = useMemo(() => {
    if (collapsed) {
      return (
        <>
          <TabPane tab={generateHeader('base', '')} key="1" />
          {/* <TabPane tab={generateHeader('media', '')} key="2" />
          <TabPane tab={generateHeader('visible', '')} key="3" /> */}
        </>
      );
    } else {
      return (
        <>
          <TabPane tab={generateHeader('base', '')} key="1">
            <div className={styles.ctitle}>基础组件</div>
            {template.map((value: any, i: React.Key | null | undefined) => {
              return (
                <SourceBox item={value} key={i} canvasId={canvasId}>
                  <React.Suspense fallback="加载中...">
                    <DynamicEngine
                      {...value}
                      componentsType="base"
                      isTpl={true}
                      config={schemaH5[value.type].config}
                    />
                  </React.Suspense>
                </SourceBox>
              );
            })}
          </TabPane>
          {/* <TabPane tab={generateHeader('media', '')} key="2">
            <div>基础组件2222</div>
          </TabPane>
          <TabPane tab={generateHeader('visible', '')} key="3">
            <div>基础组件3333</div>
          </TabPane> */}
        </>
      );
    }
  }, [collapsed, generateHeader]);

  const redohandler = useMemo(() => {}, []);
  const undohandler = useMemo(() => {}, []);
  // 清空数据
  const clearData = useCallback(() => {
    dispatch({ type: 'editorModal/clearAll' });
  }, [dispatch]);

  // 鼠标按下记录开始的位置
  const onMouseDownFn = useMemo(() => {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === containerRef.current) {
        // 判断是为了确定只能在盒子中拖动，防止在刻度线或者别的地方误触
        setDiffMove({
          start: {
            x: e.clientX,
            y: e.clientY,
          },
          move: true,
        });
      }
    };
  }, []);
  // 鼠标移动记录位置
  const onMouseMoveFn = useMemo(() => {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      if (diffMove.move) {
        const newX = e.clientX;
        const newY = e.clientY;
        const diffX = newX - diffMove.start.x;
        const diffY = newY - diffMove.start.y;
        // 鼠标到左上角的距离
        setDiffMove({
          start: {
            x: newX,
            y: newY,
          },
          move: true,
        });
        // 开始到移动之间的距离
        setDragState((preState) => {
          return {
            x: preState.x + diffX,
            y: preState.y + diffY,
          };
        });
      }
    };
  }, [diffMove.move, diffMove.start.x, diffMove.start.y]);

  // 鼠标抬起
  const onMouseUpFn = useMemo(() => {
    return () => {
      setDiffMove({
        start: {
          x: 0,
          y: 0,
        },
        move: false,
      });
    };
  }, []);

  // 上下滚动(滚轮事件)
  const onwheelFn = useMemo(() => {
    return (e: React.WheelEvent<HTMLDivElement>) => {
      if (e.deltaY < 0) {
        setDragState((prevState) => {
          return {
            x: prevState.x,
            y: prevState.y + 10,
          };
        });
      } else {
        setDragState((preState) => {
          return {
            x: preState.x,
            y: preState.y - 10,
          };
        });
      }
    };
  }, []);

  // 重置大小
  const backSize = useMemo(() => {
    return () => {
      setScaleNum(1);
      setDragState({ x: 0, y: 0 });
    };
  }, []);
  // 放大或者缩小
  const handleSlider = useMemo(() => {
    return (type: any) => {
      if (type) {
        setScaleNum((prevState: number) => +(prevState + 0.1).toFixed(1));
      } else {
        setScaleNum((prevState: number) => +(prevState - 0.1).toFixed(1));
      }
    };
  }, []);
  // 保存表单
  const onSave = useMemo(() => {
    return (data: any) => {
      // console.log('curPointcurPoint', curPoint);
      // console.log('datadata', data);
      dispatch({
        type: 'editorModal/modPointData',
        payload: { ...curPoint, item: { ...curPoint.item, config: data } },
      });
    };
  }, [curPoint, dispatch]);

  const onDel = useMemo(() => {
    return (id: any) => {
      dispatch({
        type: 'editorModal/delPointData',
        payload: { id },
      });
    };
  }, [dispatch]);
  const renderRightBar = useMemo(() => {
    console.log('curPoint', curPoint);
    return (
      <div
        className={styles.attrSetting}
        style={{ transform: rightCollapse ? 'translate(100%, 0)' : 'translate(0,0)' }}
        ref={ref}
      >
        {pointData.length && curPoint ? (
          <>
            <div className={styles.tit}>属性设置</div>
            <FormRender
              config={curPoint.item.editData}
              defaultConfig={curPoint.item.config}
              uid={curPoint.id}
              defaultValue={curPoint.item.config}
              onSave={onSave}
              onDel={onDel}
              rightPannelRef={ref}
            />
          </>
        ) : (
          <div>
            <Result
              status="404"
              title="还没有数据或者没有选中数据"
              subTitle="拖动源组件到目标组件，生成H5页面吧"
            />
          </div>
        )}
      </div>
    );
  }, [rightCollapse, pointData, curPoint, rightCollapse, onSave, onDel]);

  return (
    <div className={styles.editorWrapper}>
      <Header
        redohandler={redohandler}
        undohandler={undohandler}
        pointData={pointData}
        clearData={clearData}
        location={props.location}
        canvasId={canvasId}
      />

      <div className={styles.container}>
        <div
          className={classnames({
            [styles.list]: true,
            [styles.collapsedList]: !collapsed,
          })}
        >
          <div className={styles.componentList}>
            <Tabs
              defaultActiveKey="1"
              tabPosition={'left'}
              className="editorTabclass"
              onTabClick={() => onChangeCollapse(false)}
            >
              {tabRender}
            </Tabs>
          </div>
          <div className={styles.collapsed} onClick={() => onChangeCollapse(!collapsed)}>
            {collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
          </div>
        </div>
        {/* 为左侧组件栏占位 */}
        <div
          style={{
            width: collapsed ? '50px' : '350px',
            transition: 'all ease-in-out 0.5s',
          }}
        />
        <div
          className={styles.tickMark}
          id="calibration"
          ref={containerRef}
          onMouseDown={onMouseDownFn}
          onMouseMove={_.throttle(onMouseMoveFn, 500)}
          onMouseUp={onMouseUpFn}
          onMouseLeave={onMouseUpFn}
          onWheel={onwheelFn}
        >
          <div className={styles.tickMarkTop}>
            <Calibration direction="up" id="calibrationUp" multiple={scaleNum} />
          </div>
          <div className={styles.tickMarkLeft}>
            <Calibration direction="left" id="calibrationRight" multiple={scaleNum} />
          </div>
          <TargetBox
            dragState={dragState}
            setDragState={setDragState}
            scaleNum={scaleNum}
            canvasId={canvasId}
            allType={allType}
          />
          <CanvasControl scaleNum={scaleNum} backSize={backSize} handleSlider={handleSlider} />
        </div>
        {renderRightBar}
        <div
          className={styles.rightCollapse}
          style={{ right: rightCollapse ? 0 : '304px' }}
          onClick={() => onChangeRightCollapse(!rightCollapse)}
        >
          {!rightCollapse ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
        </div>
        {/* 右侧占位符 */}
        <div
          style={{
            width: rightCollapse ? 0 : '304px',
            transition: 'all ease-in-out 0.5s',
          }}
        />
      </div>
    </div>
  );
};
export default connect((state: StateWithHistory<any>) => {
  return { pstate: state.present.editorModal, cstate: state.present.editorPcModal };
})(Container);
