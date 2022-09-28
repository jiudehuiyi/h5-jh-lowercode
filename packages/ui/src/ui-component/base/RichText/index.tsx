/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-27 18:05:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-27 18:16:45
 * @Description:
 */
import React from 'react';
import styles from './index.less';
import RichTextLogo from '@/assets/richText.png';

const RichText = (props: any) => {
  const { borderColor, backgroundColor, borderWidth, round, padding, content, isTpl } = props;
  return isTpl ? (
    <div>
      <img style={{ width: '100%' }} src={RichTextLogo} alt="" />
    </div>
  ) : (
    <div
      className={styles.richTextWrap}
      style={{
        border: `${borderWidth}px solid ${borderColor}`,
        borderRadius: round + 'px',
        padding: padding + 'px',
        backgroundColor,
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};
export default React.memo(RichText);
