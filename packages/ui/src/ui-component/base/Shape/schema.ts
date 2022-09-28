/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-28 14:42:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-28 15:11:34
 * @Description:
 */
const Shape = {
  editData: [
    {
      key: 'name',
      name: '组件名称',
      type: 'Text',
    },
    {
      key: 'shapeType',
      name: '形状',
      type: 'Select',
      range: [
        {
          key: 'rectangle',
          text: '矩形',
        },
        {
          key: 'circle',
          text: '圆形',
        },
        {
          key: 'triangle',
          text: '三角形',
        },
        {
          key: 'line',
          text: '线段',
        },
      ],
    },
    {
      key: 'backgroundColor',
      name: '填充颜色',
      type: 'Color',
    },
    {
      key: 'borderColor',
      name: '描边颜色',
      type: 'Color',
    },
    {
      key: 'borderStyle',
      name: '描边类型',
      type: 'Select',
      range: [
        {
          key: 'solid',
          text: '实线',
        },
        {
          key: 'dashed',
          text: '虚线',
        },
        {
          key: 'dotted',
          text: '点',
        },
      ],
    },
    {
      key: 'borderWidth',
      name: '描边宽度',
      type: 'Number',
    },
    {
      key: 'triangleWidth',
      name: '三角形宽度',
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
    name: '形状组件',
    shapeType: 'rectangle',
    backgroundColor: 'rgba(40,64,128,1)',
    borderColor: 'rgba(40,64,128,1)',
    borderStyle: 'solid',
    borderWidth: 1,
    triangleWidth: 40,
    animationClassName: '',
    animationIterationCount: 1,
  },
};

export default Shape;
