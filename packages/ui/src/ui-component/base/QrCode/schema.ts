/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-27 23:51:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-28 09:51:02
 * @Description:
 */
const QrCode = {
  editData: [
    {
      key: 'name',
      name: '组件名称',
      type: 'Text',
    },
    {
      key: 'qrCodeUrl',
      name: '二维码url(优先)',
      type: 'Text',
    },
    {
      key: 'imgUrl',
      name: '上传二维码',
      type: 'Upload',
      isCrop: true,
    },
    {
      key: 'size',
      name: '二维码尺寸',
      type: 'Number',
    },
    {
      key: 'qrCodeIcon',
      name: '二维码图标',
      type: 'Upload',
      isCrop: true,
    },
    {
      key: 'iconWidth',
      name: '图标宽度',
      type: 'Number',
    },
    {
      key: 'iconHeight',
      name: '图标高度',
      type: 'Number',
    },
  ],
  config: {
    name: '二维码组件',
    qrCodeUrl: 'https://locals-house-prod.oss-cn-shenzhen.aliyuncs.com//localhomeqy/qrcodeLogo.png',
    imgUrl: [
      {
        uid: '001',
        name: 'image.png',
        status: 'done',
        url: 'https://locals-house-prod.oss-cn-shenzhen.aliyuncs.com//localhomeqy/qrcodeLogo.png',
      },
    ],
    size: 180,
    backgroundColor: 'rgba(255,255,255,1)',
    qrCodeIcon: [
      // {
      //   uid: '002',
      //   name: 'image.png',
      //   status: 'done',
      //   url: 'https://locals-house-prod.oss-cn-shenzhen.aliyuncs.com//localhomeqy/avatar.png',
      // },
    ],
    iconWidth: 0,
    iconHeight: 0,
  },
};
export default QrCode;
