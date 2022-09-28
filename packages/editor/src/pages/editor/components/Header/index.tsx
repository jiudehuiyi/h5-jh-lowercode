import React from 'react';
import { Button, Input, Modal, Upload, Tooltip, Badge } from 'antd';
import {
  ArrowLeftOutlined,
  MobileOutlined,
  DownloadOutlined,
  CopyOutlined,
  DeleteOutlined,
  UndoOutlined,
  RedoOutlined,
  FileAddOutlined,
  CodeOutlined,
  SketchOutlined,
  UploadOutlined,
  InstagramOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import html2canvas from 'html2canvas';
import { getPointData } from '@/utils/tool';
type HeaderComponentProps = {
  pointData: any;
  location: any;
  clearData: any;
  undohandler: any;
  redohandler: any;
  importTpl: any;
  canvasId: string;
};
import styles from './index.less';
const Header = (props: HeaderComponentProps) => {
  const { pointData = [], location, clearData, undohandler, redohandler, importTpl } = props;

  const savePreview = () => {
    const { tid } = props.location.query || '';
    // req.post('/visible/preview', { tid, tpl: pointData });
  };

  const toPreview = () => {
    localStorage.setItem('pointData', JSON.stringify(pointData));
    savePreview?.();
    // setTimeout(() => {
    //   window.open(
    //     isDev
    //       ? `/preview?tid=${props.location.query.tid}`
    //       : `/preview?tid=${props.location.query.tid}`,
    //   );
    // }, 600);
    setTimeout(() => {
      window.open(
        `http://localhost:8020/preview?tid=${props.location.query.tid}&pointData=${encodeURI(
          JSON.stringify(pointData),
        )}`,
      );
    }, 600);
  };

  const onSaveTemplate = async () => {
    // console.log('getPointData', getPointData(pointData));
    // console.log('getComponentsIndex', getComponentsIndex());
    // const _pointData = getComponentsIndex().map((item) => {
    //   return pointData.filter((point) => {
    //     if (item === point.id) {
    //       return point;
    //     }
    //   })?.[0];
    // });
    // console.log('_pointData', _pointData);
    // const res = await html2canvas(document.body, {
    //   allowTaint: true,
    //   useCORS: true,
    //   scale: window.devicePixelRatio,
    // });
    // console.log('res', res);
    // if (res) {
    //   const base64Url = res.toDataURL('image/jpeg');
    //   console.log('base64Urlbase64Url', base64Url);
    // }
    // html2canvas(document.body).then(function (canvas) {
    //   console.log('canvascanvas', canvas);
    //   document.body.appendChild(canvas);
    // });
  };

  return (
    <div className={styles.header}>
      <div className={styles.operation}>
        <Button
          type="link"
          disabled={!pointData.length}
          title="保存模版"
          onClick={() => onSaveTemplate()}
        >
          保存模板
        </Button>
        {/* 上传模版 */}
        {/* <Upload>
          <Button type="link" disabled={!pointData.length} title="上传模版">
            <UploadOutlined />
          </Button>
        </Upload> */}
        {/* 下载模版 */}
        {/* <Button type="link" disabled={!pointData.length} title="下载模版">
          <DownloadOutlined />
        </Button> */}
        {/* 下载json文件 */}
        {/* <Button type="link" disabled={!pointData.length} title="下载json文件">
          <CopyOutlined />
        </Button> */}
        {/* 新建页面 */}
        {/* <Button type="link" disabled={!pointData.length} title="新建页面">
          <FileAddOutlined />
        </Button> */}
        {/* 生成二维码，手机预览 */}
        {/* <Button type="link" disabled={!pointData.length} title="生成二维码，手机预览">
          <MobileOutlined />
        </Button> */}
        {/* 清空 */}
        {/* <Button type="link" disabled={!pointData.length} title="清空">
          <DeleteOutlined />
        </Button> */}
        {/* 撤销 */}
        {/* <Button type="link" disabled={!pointData.length} title="撤销">
          <UndoOutlined />
        </Button> */}
        {/* 重做 */}
        {/* <Button type="link" disabled={!pointData.length} title="重做">
          <RedoOutlined />
        </Button> */}
        {/* 一键生成海报分享图 */}
        {/* <Button type="link" disabled={!pointData.length} title="一键生成海报分享图">
          <InstagramOutlined />
        </Button> */}
        {/* 预览 */}
        <Button type="link" onClick={toPreview} disabled={!pointData.length} title="预览">
          预览
        </Button>
        {/* 一键分享 */}
        {/* <Button type="link" disabled={!pointData.length} title="一键分享">
          <WechatOutlined />
        </Button> */}
        {/* 帮助 */}
        {/* <Button type="link" disabled={!pointData.length}>
          帮助
        </Button> */}
      </div>
      {/* <div className={styles.btn}>
        <Button type="primary" style={{ marginRight: '12px' }}>
          <CodeOutlined />
          在线编程
        </Button>
        <Button type="primary" style={{ marginRight: '12px' }}>
          <SketchOutlined />
          登录
        </Button>
      </div> */}
    </div>
  );
};
export default React.memo(Header);
