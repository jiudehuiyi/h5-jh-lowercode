/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-27 09:45:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-27 17:30:04
 * @Description:
 */
import React, { useEffect, useState } from 'react';
import styles from './index.less';
import Banner from '@/assets/banner.png';
import { Carousel } from 'zarm';
import classnames from 'classnames';

const JhCarousel = (props: any) => {
  const { direction, swipeable, autoPlay, imgList, round, color, isTpl } = props;
  const [activeIndex, setActiveIndex] = useState<number | undefined>(0);

  useEffect(() => {
    const nodes = document.querySelectorAll('.za-carousel__pagination__item');
    const activeNode = document.querySelector('.za-carousel__pagination__item--active');
    if (!!nodes?.length) {
      nodes.forEach((node) => {
        (node as HTMLDivElement).style.backgroundColor = `${color}`;
        (node as HTMLDivElement).style.opacity = '0.5';
      });
    }
    if (activeNode) {
      (activeNode as HTMLDivElement).style.opacity = '1';
    }
  }, [activeIndex, color]);

  const contentRender = () => {
    return imgList.map((item: any, i: React.Key) => {
      return (
        <div className={styles.carouselItemPic} key={+i} style={{ borderRadius: round + 'px' }}>
          <a href={item.link}>
            <img src={item?.imgUrl?.length > 0 ? item.imgUrl[0].url : ''} alt="" />
          </a>
        </div>
      );
    });
  };

  return (
    <div
      className={classnames({
        [styles.carouselWrapper]: true,
      })}
    >
      {isTpl ? (
        <div className={styles.carouselItemPic}>
          <img src={Banner} alt="" />
        </div>
      ) : (
        <Carousel
          activeIndex={activeIndex}
          onChange={(index: number | undefined) => setActiveIndex(index)}
          direction={direction}
          swipeable={swipeable}
          autoPlay={autoPlay}
          loop
        >
          {contentRender()}
        </Carousel>
      )}
    </div>
  );
};

export default React.memo(JhCarousel);
