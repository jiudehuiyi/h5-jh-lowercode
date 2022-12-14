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
          title="????????????"
          onClick={() => onSaveTemplate()}
        >
          ????????????
        </Button>
        {/* ???????????? */}
        {/* <Upload>
          <Button type="link" disabled={!pointData.length} title="????????????">
            <UploadOutlined />
          </Button>
        </Upload> */}
        {/* ???????????? */}
        {/* <Button type="link" disabled={!pointData.length} title="????????????">
          <DownloadOutlined />
        </Button> */}
        {/* ??????json?????? */}
        {/* <Button type="link" disabled={!pointData.length} title="??????json??????">
          <CopyOutlined />
        </Button> */}
        {/* ???????????? */}
        {/* <Button type="link" disabled={!pointData.length} title="????????????">
          <FileAddOutlined />
        </Button> */}
        {/* ?????????????????????????????? */}
        {/* <Button type="link" disabled={!pointData.length} title="??????????????????????????????">
          <MobileOutlined />
        </Button> */}
        {/* ?????? */}
        {/* <Button type="link" disabled={!pointData.length} title="??????">
          <DeleteOutlined />
        </Button> */}
        {/* ?????? */}
        {/* <Button type="link" disabled={!pointData.length} title="??????">
          <UndoOutlined />
        </Button> */}
        {/* ?????? */}
        {/* <Button type="link" disabled={!pointData.length} title="??????">
          <RedoOutlined />
        </Button> */}
        {/* ??????????????????????????? */}
        {/* <Button type="link" disabled={!pointData.length} title="???????????????????????????">
          <InstagramOutlined />
        </Button> */}
        {/* ?????? */}
        <Button type="link" onClick={toPreview} disabled={!pointData.length} title="??????">
          ??????
        </Button>
        {/* ???????????? */}
        {/* <Button type="link" disabled={!pointData.length} title="????????????">
          <WechatOutlined />
        </Button> */}
        {/* ?????? */}
        {/* <Button type="link" disabled={!pointData.length}>
          ??????
        </Button> */}
      </div>
      {/* <div className={styles.btn}>
        <Button type="primary" style={{ marginRight: '12px' }}>
          <CodeOutlined />
          ????????????
        </Button>
        <Button type="primary" style={{ marginRight: '12px' }}>
          <SketchOutlined />
          ??????
        </Button>
      </div> */}
    </div>
  );
};
export default React.memo(Header);
