/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-25 13:33:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-26 09:54:28
 * @Description:
 */
import React, { useEffect, useState } from 'react';
import type { ColorResult } from 'react-color';
import { SketchPicker } from 'react-color';
import { rgba2Obj } from '@/utils/tool';
import styles from './index.less';
type ColorProps = {
  value?: string;
  onChange?: (v: string) => void;
};
const Color = (props: ColorProps) => {
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);
  const [color, setColor] = useState(rgba2Obj(props.value));
  // 弹起颜色
  const onPopupColorPicker = () => {
    setDisplayColorPicker(!displayColorPicker);
  };
  // 关闭颜色选择框
  const onClose = () => {
    setDisplayColorPicker(false);
  };

  // 改变颜色
  const onChangeColor = (color: ColorResult) => {
    setColor(color.rgb);
    props?.onChange?.(`rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`);
  };
  useEffect(() => {
    setColor(rgba2Obj(props.value));
  }, [props.value]);
  return (
    <div className={styles.colorWrapper}>
      <div className={styles.displayColorWrapper}>
        <div
          className={styles.displayColor}
          style={{ backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` }}
          onClick={onPopupColorPicker}
        />
      </div>
      {displayColorPicker && (
        <React.Fragment>
          <div className={styles.colorPicker}>
            <SketchPicker color={color} onChange={onChangeColor} />
          </div>
          <div className={styles.mask} onClick={onClose} />
        </React.Fragment>
      )}
    </div>
  );
};

export default Color;
