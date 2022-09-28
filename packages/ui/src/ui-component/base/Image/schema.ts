/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-26 11:39:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-26 17:06:23
 * @Description:
 */

// ！！！！！！！！！！！！！！
// filter: hue-rotate(136deg); 滤镜: 可改变任意东西的颜色(包括图片)
// filter: grayscale(80%); 滤镜: 可以让网站变灰(纪念日变灰)，直接应用在html中即可
const Image = {
  editData: [
    {
      key: 'name',
      name: '组件名称',
      type: 'Text',
    },
    {
      key: 'imgUrl',
      name: '上传图片',
      type: 'Upload',
      isCrop: true,
    },
    {
      key: 'borderRadius',
      name: '圆角',
      type: 'Number',
    },
    {
      key: 'hueRotate',
      name: '滤镜色调值',
      type: 'Number',
    },
    {
      key: 'isCover',
      name: '宽高铺满',
      type: 'Switch',
    },
    {
      key: 'animationClassName',
      name: '动画',
      type: 'Select',
      range: [
        {
          key: '',
          text: '无动画',
        },
        {
          key: 'animate_scale',
          text: '缩放',
        },
        {
          key: 'animate_bounce',
          text: '上下弹跳',
        },
        {
          key: 'animate_rotate',
          text: '旋转',
        },
        {
          key: 'animate_rubberBand',
          text: '拉伸',
        },
        {
          key: 'animate_fadeInDown',
          text: '向下淡入',
        },
        {
          key: 'animate_fadeInUp',
          text: '向上淡入',
        },
        {
          key: 'animate_fadeInLeft',
          text: '向右淡入',
        },
        {
          key: 'animate_fadeInRight',
          text: '向左淡入',
        },
        {
          key: 'animate_flipInX',
          text: 'X轴翻转',
        },
        {
          key: 'animate_flipInY',
          text: 'Y轴翻转',
        },
        {
          key: 'animate_hinge',
          text: '悬挂掉落',
        },
        {
          key: 'animate_zoomIn',
          text: '放大淡入',
        },
      ],
    },
    {
      key: 'animationIterationCount',
      name: '动画次数',
      type: 'Number',
    },
  ],
  config: {
    name: '图片名称',
    imgUrl: [
      {
        uid: '001',
        name: 'image.png',
        status: 'done',
        url: 'https://locals-house-prod.oss-cn-shenzhen.aliyuncs.com//localhomeqy/bg.jpg',
      },
    ],
    borderRadius: 0,
    hueRotate: 0,
    isCover: false,
    animationClassName: '',
    animationIterationCount: 1,
  },
};
export default Image;
