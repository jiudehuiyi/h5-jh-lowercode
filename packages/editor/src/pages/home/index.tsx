import * as React from 'react';
import { history } from 'umi';
import { MobileOutlined, CodeOutlined } from '@ant-design/icons';

import { uuid } from '@/utils/tool';
import styles from './index.less';

const Home = () => {
  const onHandleDump = (type: string) => {
    if (type === 'H5') {
      history.push(`/editor?tid=123456`);
    } else if (type === 'online') {
      history.push('/ide');
    }
  };

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.content}>
        <div className={styles.logoTip}>
          <div className={styles.logo}>
            <span className={styles.logoText} title="h5-jh-lowercode编辑器">
              h5-jh-lowercode
            </span>
            编辑器
          </div>
          <p className={styles.desc}>
            h5-jh-lowercode是一款专注于活动页拖拽低代码平台，致力提供一套简单，方便使用的拖拽可视化落地配置解决方案，
            技术栈主要以React为前端，egg.js为后台
          </p>
        </div>
        <div className={styles.operation}>
          <div className={styles.card} onClick={() => onHandleDump('H5')}>
            <MobileOutlined style={{ color: '#284080' }} />
            <div>制作H5页面</div>
          </div>
          <div className={styles.card} onClick={() => onHandleDump('online')}>
            <CodeOutlined style={{ color: '#284080' }} />
            <div>在线编程</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Home);
