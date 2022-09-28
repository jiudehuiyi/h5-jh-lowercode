/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-27 23:52:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-28 00:52:58
 * @Description:
 */
import React from 'react';
import QrCodeLogo from '@/assets/qrcodeLogo.png';
const QrCode = (props: any) => {
  const { qrCodeUrl, imgUrl, size, qrCodeIcon, iconWidth, iconHeight, isTpl } = props;
  if (isTpl) {
    return (
      <div>
        <img src={QrCodeLogo} style={{ width: '100%' }} />
      </div>
    );
  }
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '220px',
        margin: '16px auto',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <img
        src={qrCodeUrl || imgUrl?.[0]?.url}
        alt=""
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
      <img
        src={qrCodeIcon?.[0]?.url}
        style={{
          width: `${iconWidth}px`,
          height: `${iconHeight}px`,
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};
export default React.memo(QrCode);
