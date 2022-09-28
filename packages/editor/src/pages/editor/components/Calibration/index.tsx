import React, { useState, useEffect, useRef, useCallback } from 'react';

import styles from './index.less';
export interface calibrationSizeTypes {
  width: number;
  height: number;
}
export type CalibrationTypes = {
  direction: 'up' | 'left';
  multiple: number;
  id?: string;
};
/**
 * @description:
 * @param {"up" | "left"} direction : 刻度上或左
 *  @param {number} multiple : 刻度上尺寸
 * @param {id} id
 * @return {*}
 */
const Calibration = (props: CalibrationTypes) => {
  const { direction, multiple } = props;
  const [calibrationSize, setCalibrationSize] = useState<calibrationSizeTypes>({
    width: 0,
    height: 0,
  });
  const calibrationRef = useRef<HTMLDivElement>(null);

  const setHtmlStyle = (element: HTMLElement, propObj: Record<string, any>) => {
    for (const prop in propObj) {
      if (propObj.hasOwnProperty(prop)) {
        (element as any).style[prop] = propObj[prop];
      }
    }
  };

  const generateElement = useCallback(
    (extend?: boolean, num?: number) => {
      if (calibrationRef?.current) {
        // 创建元素(刻度)设置默认样式
        const createDiv = document.createElement('div');
        createDiv.className = 'calibrationLine';
        setHtmlStyle(createDiv, { 'background-color': '#ccc' });
        setHtmlStyle(calibrationRef.current, {
          display: 'flex',
          'justify-content': 'space-between',
        });

        if (direction == 'up') {
          calibrationRef.current.style.marginLeft = '50px';
          setHtmlStyle(createDiv, { width: '1px', height: '6px', display: 'inline-block' });
        } else {
          calibrationRef.current.style.flexDirection = 'column';
          setHtmlStyle(createDiv, { width: '6px', height: '1px' });
        }
        // 需要显示的刻度的样式
        if (extend) {
          const createSpanContent = document.createElement('span');
          if (direction === 'up') {
            setHtmlStyle(createDiv, {
              height: '12px',
              transform: 'translateY(0px)',
            });
            setHtmlStyle(createSpanContent, { transform: 'translate3d(-4px, 20px, 0px)' });
          } else {
            setHtmlStyle(createDiv, {
              width: '12px',
            });
            setHtmlStyle(createSpanContent, { paddingLeft: '20px' });
          }
          setHtmlStyle(createSpanContent, { display: 'block' });
          createSpanContent.className = 'calibrationNumber';
          createSpanContent.innerHTML = (num! * 5).toString();
          createDiv.appendChild(createSpanContent);
        }
        calibrationRef.current?.appendChild(createDiv);
      }
    },
    [direction],
  );

  useEffect(() => {
    // 渲染刻度尺
    if (calibrationRef?.current) {
      // 获取元素视窗大小，边距各种尺寸
      const calibrationClientRect = calibrationRef.current.getBoundingClientRect();
      setCalibrationSize({
        width: calibrationClientRect.width,
        height: calibrationClientRect.height,
      });
      // 以容器的实际尺寸绘制标尺
      const len = direction == 'up' ? calibrationClientRect.width : calibrationClientRect.height;
      // 一个刻度代表5px，所以需要除以5
      for (let i = 0; i < len / 5; i++) {
        // 50的倍数刻度尺中长度需要较长
        if (i % 10 === 0) {
          generateElement(true, i);
        } else {
          generateElement();
        }
      }
    }
  }, [direction, generateElement]);

  useEffect(() => {
    // 整体缩放功能
    if (calibrationRef.current) {
      const width = calibrationSize.width
        ? calibrationSize.width
        : calibrationRef.current.getBoundingClientRect().width;
      const height = calibrationSize.height
        ? calibrationSize.height
        : calibrationRef.current.getBoundingClientRect().height;
      const arr = [...Array.from(calibrationRef.current.querySelectorAll('.calibrationLine'))];
      if (arr.length) {
        if (direction === 'up') {
          calibrationRef.current.style.width = parseFloat(multiple?.toFixed(1)) * width + 'px';
          arr.forEach((el) => {
            const dom = [
              ...Array.from(el.querySelectorAll('.calibrationNumber')),
            ][0] as HTMLElement;
            if (dom) {
              dom.style.transform = `translate3d(-4px, 16px, 0px) scale(${(multiple + 0.1).toFixed(
                1,
              )})`;
            }
          });
        } else {
          calibrationRef.current.style.height = parseFloat(multiple?.toFixed(1)) * height + 'px';
          arr.forEach((el) => {
            const dom = [
              ...Array.from(el.querySelectorAll('.calibrationNumber')),
            ][0] as HTMLElement;
            if (dom) {
              dom.style.transform = `translate3d(-4px, -8px, 0px) scale(${(multiple + 0.1)?.toFixed(
                1,
              )})`;
            }
          });
        }
      }
    }
  }, [calibrationSize.height, calibrationSize.width, direction, multiple]);

  return <div className={styles.calibration} ref={calibrationRef} />;
};

export default React.memo(Calibration);
