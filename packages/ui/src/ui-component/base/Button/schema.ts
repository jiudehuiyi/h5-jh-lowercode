/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-26 09:47:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-26 10:48:38
 * @Description:
 */

const Button = {
  editData: [
    {
      key: 'name',
      name: '组件名称',
      type: 'Text',
    },
    {
      key: 'text',
      name: '按钮文字',
      type: 'Text',
    },
    {
      key: 'backgroundColor',
      name: '背景颜色',
      type: 'Color',
    },
    {
      key: 'frontLinearGradient',
      name: '前背景色渐变',
      type: 'Color',
    },
    {
      key: 'endLinearGradient',
      name: '后背景色渐变',
      type: 'Color',
    },
    {
      key: 'deg',
      name: '渐变角度',
      type: 'Number',
    },
    {
      key: 'width',
      name: '宽度',
      type: 'Number',
    },
    {
      key: 'paddingVertical',
      name: '上下内边距',
      type: 'Number',
    },
    {
      key: 'paddingHorizontal',
      name: '左右内边距',
      type: 'Number',
    },

    {
      key: 'borderRadius',
      name: '背景圆角',
      type: 'Number',
    },
    {
      key: 'color',
      name: '文字颜色',
      type: 'Color',
    },
    {
      key: 'fontSize',
      name: '文字大小',
      type: 'Number',
    },
    {
      key: 'textAlign',
      name: '对齐方式',
      type: 'Select',
      range: [
        {
          key: 'left',
          text: '左对齐',
        },
        {
          key: 'center',
          text: '居中对齐',
        },
        {
          key: 'right',
          text: '右对齐',
        },
      ],
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
    name: 'Text',
    text: '按钮',
    backgroundColor: 'rgba(40,64,128,1)',
    width: 190,
    borderRadius: 16,
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    textAlign: 'center',
    animationClassName: '',
    animationIterationCount: 1,
    frontLinearGradient: '',
    endLinearGradient: '',
    deg: 90,
    paddingVertical: 4,
    paddingHorizontal: 20,
  },
};
export default Button;
