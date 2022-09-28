/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-16 17:10:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-18 01:26:49
 * @Description:
 */
import React, { useEffect, useState } from 'react';
import { Tooltip } from 'antd';
import Draggable from 'react-draggable';
import { ExpandOutlined } from '@ant-design/icons';

import styles from './index.less';

type CanvasControlType = {
  scaleNum: number;
  handleSlider: Function;
  backSize: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const CanvasControl = (props: CanvasControlType) => {
  const { scaleNum, handleSlider, backSize } = props;
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setVisible(false), 5000);
  }, []);

  return (
    <Draggable>
      <div className={styles.sliderWrapper}>
        <Tooltip title="支持拖动" visible={visible}>
          <div className={styles.showTip} />
        </Tooltip>
        <span
          className={styles.sliderBtn}
          onClick={() => handleSlider(1)}
          style={
            scaleNum === 1.5
              ? { pointerEvents: 'none' }
              : { display: 'initial', marginLeft: '13px' }
          }
        >
          +
        </span>
        <span>{Math.floor(scaleNum * 10) * 10} %</span>
        <span
          className={styles.sliderBtn}
          onClick={() => handleSlider(0)}
          style={
            scaleNum === 0.5
              ? { pointerEvents: 'none' }
              : { display: 'initial', marginLeft: '13px' }
          }
        >
          -
        </span>
        <span className={styles.backSize}>
          <ExpandOutlined onClick={backSize} />
        </span>
      </div>
    </Draggable>
  );
};

export default React.memo(CanvasControl);
