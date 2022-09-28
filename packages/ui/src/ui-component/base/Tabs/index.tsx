/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-28 10:06:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-28 14:36:02
 * @Description:
 */
import React, { useEffect, useRef, useState } from 'react';
import { Tabs } from 'zarm';
import TabsLogo from '@/assets/tab.png';
import styles from './index.less';
const { Panel } = Tabs;
const CustomerTabs = (props: any) => {
  const {
    tabs = [],
    sourceData = [],
    activeColor,
    inactivate,
    color,
    paddingHorizontal,
    paddingVertical,
    cover,
    fontSize,
    imgSize,
    isTpl,
  } = props;
  const tabWrapRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const line = tabWrapRef.current?.querySelector('.za-tabs__line') as HTMLElement;
    const font = tabWrapRef.current?.querySelector('.za-tabs__tab--active') as HTMLElement;
    const tabsFont = tabWrapRef.current?.querySelectorAll('.za-tabs__tab') as any;
    if (line) {
      line.style.backgroundColor = activeColor;
    }
    if (tabsFont?.length) {
      [...tabsFont].forEach((item) => {
        item.style.color = inactivate;
      });
    }
    if (font) {
      font.style.color = activeColor;
    }
  }, [activeColor, inactivate, value]);

  return (
    <>
      {isTpl ? (
        <div>
          <img src={TabsLogo} style={{ width: '100%' }} alt="" />
        </div>
      ) : (
        <div className={styles.tabWrap} ref={tabWrapRef}>
          <Tabs value={value} onChange={(index: any) => setValue(index)}>
            {tabs.map((item: any, i: React.Key) => {
              return (
                <Panel title={item} key={i}>
                  <div
                    className={styles.content}
                    style={{ padding: `${paddingVertical} ${paddingHorizontal}` }}
                  >
                    {sourceData
                      ?.filter((data: any) => data.type === i)
                      ?.map((dataItem: any, index: React.Key) => {
                        return (
                          <div className={styles.dataItem} key={index}>
                            <a className={styles.imgWrap} href={item.link} title={item.desc}>
                              <img
                                src={dataItem.imgUrl?.[0]?.url}
                                alt={dataItem.title}
                                style={
                                  cover
                                    ? { width: '100%', height: '100%' }
                                    : { width: `${imgSize}px`, height: `${imgSize}px` }
                                }
                              />
                              <div className={styles.title} style={{ fontSize, color }}>
                                {dataItem.title}
                              </div>
                            </a>
                          </div>
                        );
                      })}
                  </div>
                </Panel>
              );
            })}
          </Tabs>
        </div>
      )}
    </>
  );
};

export default React.memo(CustomerTabs);
