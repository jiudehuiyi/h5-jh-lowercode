/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-25 23:47:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-26 00:12:09
 * @Description:
 */

const Title = {
  editData: [
    {
      key: 'name',
      name: '组件名称',
      type: 'Text',
    },
    {
      key: 'text',
      name: '文字',
      type: 'Text',
    },
    {
      key: 'titleSize',
      name: '标题大小',
      type: 'Select',
      range: [
        {
          key: 'h1',
          text: '大标题h1',
        },
        {
          key: 'h2',
          text: '中标题h2',
        },
        {
          key: 'h3',
          text: '小标题h3',
        },
      ],
    },
    {
      key: 'color',
      name: '标题颜色',
      type: 'Color',
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
      key: 'backgroundColor',
      name: '背景颜色',
      type: 'Color',
    },
    {
      key: 'borderRadius',
      name: '背景圆角',
      type: 'Number',
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
    name: 'Title',
    text: '我是一个标题',
    titleSize: 'h1',
    color: 'rgba(40,64,128,1)',
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 0,
    animationClassName: '',
    animationIterationCount: 1,
  },
};
export default Title;
