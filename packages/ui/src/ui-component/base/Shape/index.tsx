/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-28 14:42:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-28 16:18:32
 * @Description:
 */
import React from 'react';
import ShapeLogo from '@/assets/shape.png';
import animate from '../../animation.less';

const Shape = (props: any) => {
  const {
    shapeType,
    backgroundColor,
    borderColor,
    borderWidth,
    borderStyle,
    borderRadius,
    triangleWidth,
    animationClassName,
    animationIterationCount,
    isTpl,
  } = props;
  if (isTpl) {
    return (
      <div>
        <img src={ShapeLogo} alt="" style={{ width: '100%' }} />
      </div>
    );
  }
  const shapeStyle: any = {};

  switch (shapeType) {
    case 'rectangle': // 矩形
      shapeStyle.borderRadius = borderRadius;
      shapeStyle.border = `${borderWidth}px ${borderStyle} ${borderColor}`;
      break;
    case 'circle': // 圆形
      shapeStyle.borderRadius = '50%';
      shapeStyle.border = `${borderWidth}px ${borderStyle} ${borderColor}`;
      break;
    case 'triangle': // 三角形
      shapeStyle.borderRadius = borderRadius;
      shapeStyle.width = '0px';
      shapeStyle.height = '0px';
      shapeStyle.borderWidth = `${triangleWidth}px`;
      shapeStyle.borderStyle = `${borderStyle}`;
      shapeStyle.borderColor = `transparent transparent ${borderColor}`;
      shapeStyle.backgroundColor = 'transparent';
      break;
    case 'line': // 线段
      shapeStyle.height = '0px';
      shapeStyle.border = `${borderWidth}px ${borderStyle} ${borderColor}`;
      shapeStyle.position = 'absolute';
      shapeStyle.top = '50%';
      shapeStyle.transform = 'translateY(-50%)';
      break;
    default:
      break;
  }
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor,
        borderColor,
        ...shapeStyle,
        animationIterationCount: animationIterationCount,
      }}
      className={animate[animationClassName]}
    />
  );
};

export default React.memo(Shape);
