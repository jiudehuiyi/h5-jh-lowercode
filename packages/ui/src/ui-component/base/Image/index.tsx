/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-26 11:38:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-26 16:50:12
 * @Description:
 */
import React from 'react';
import classnames from 'classnames';
import animate from '../../animation.less';
import styles from './index.less';
import Logo from '@/assets/logo.png';
// ！！！！！！！！！！！！！！
// filter: hue-rotate(136deg); 滤镜: 可改变任意东西的颜色(包括图片)
// filter: grayscale(80%); 滤镜: 可以让网站变灰(纪念日变灰)，直接应用在html中即可

const Image = (props: any) => {
  const {
    isTpl,
    imgUrl,
    animationClassName,
    borderRadius,
    hueRotate,
    isCover,
    ...restStyle
  } = props;
  if (isTpl) {
    return (
      <div className={styles.tpl}>
        <img src={Logo} alt="" />
      </div>
    );
  }
  const _style: React.CSSProperties = {
    filter: `hue-rotate(${hueRotate}deg)`,
    borderRadius: borderRadius,
  };
  const imgStyle: React.CSSProperties = {
    borderRadius: borderRadius,
    width: '100%',
    height: '100%',
    pointerEvents: 'all',
    objectFit: isCover ? 'cover' : 'contain',
  };

  return (
    <div
      className={classnames({
        [styles.imgWrapper]: true,
        [animate[animationClassName]]: !!animationClassName,
      })}
      style={{ ..._style, ...restStyle }}
    >
      <img src={imgUrl && imgUrl?.[0]?.url} alt="" style={{ ...imgStyle }} />
    </div>
  );
};
export default React.memo(Image);
