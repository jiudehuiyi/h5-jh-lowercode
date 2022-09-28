import React, { useCallback, useState } from 'react';
import { Link } from 'umi';
import { Button } from 'antd';
import { CustomerServiceOutlined } from '@ant-design/icons';
import type { RenderList } from 'chatbot-antd';
import { library, generateRespones, useRegister } from 'chatbot-antd';
import styles from './index.less';
import type { IRouteComponentProps } from 'umi';
import { history } from 'umi';
// 前端机器人，text是语句，reg会生成正则匹配，useReg会使用自定义匹配
library.push(
  //语料库，push进去，也可以不用
  {
    text: '我是机器人',
    reg: '你是谁',
  },
  {
    text: <CustomerServiceOutlined />,
    useReg: /(.*?)表情(.*?)/,
  },
);

function Layout({ children }: IRouteComponentProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const callb = useCallback((v: RenderList) => {
    setTimeout(() => {
      const returnValue = generateRespones(v);
      if (returnValue) {
        setList((prev) => [...prev, { isUser: false, text: returnValue }]);
      }
    }, 500);
  }, []);

  // 注册
  const [render, setList] = useRegister(
    modalOpen,
    callb,
    {
      onOk: () => setModalOpen(false),
      onCancel: () => setModalOpen(false),
      title: 'h5-jh-lowercode-机器人客服',
    },
    {},
    <div>欢迎，小慧有什么可以帮你?</div>,
  );

  const isExistPathname = (_pathname: string) => {
    return window.location.pathname.indexOf(_pathname) > 0;
  };

  const WrapperStyle = isExistPathname('preview')
    ? { height: '100%', overflow: 'auto' }
    : { height: '100%' };
  return (
    <div style={WrapperStyle}>
      <div
        style={{
          position: 'fixed',
          right: '10px',
          top: '40%',
        }}
      >
        <Button type="primary" onClick={() => setModalOpen(!modalOpen)}>
          <CustomerServiceOutlined />
        </Button>
      </div>
      {render}
      {children}
    </div>
  );
}

export default React.memo(Layout);
