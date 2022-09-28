/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-19 11:20:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-25 23:47:27
 * @Description:
 */

const Text = {
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
      key: 'color',
      name: '标题颜色',
      type: 'Color',
    },
    {
      key: 'fontSize',
      name: '字体大小',
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
      key: 'lineHeight',
      name: '行高',
      type: 'Number',
    },
    {
      key: 'fontFamily',
      name: '字体',
      type: 'Select',
      range: [
        {
          key: '黑体',
          text: '黑体',
        },
        {
          key: '宋体',
          text: '宋体',
        },
        {
          key: 'Microsoft YaHei',
          text: '微软雅黑',
        },
        {
          key: 'Georgia',
          text: 'Georgia',
        },
        {
          key: 'Impact',
          text: 'Impact',
        },
        {
          key: 'Verdana',
          text: 'Verdana',
        },
        {
          key: 'Trebuchet MS',
          text: 'Trebuchet MS',
        },
        {
          key: 'Arial',
          text: 'Arial',
        },
      ],
    },
    {
      key: 'fontWeight',
      name: '文字粗细',
      type: 'Select',
      range: [
        {
          key: '300',
          text: '300',
        },
        {
          key: '400',
          text: '400',
        },
        {
          key: '500',
          text: '500',
        },
        {
          key: '600',
          text: '600',
        },
        {
          key: 'bold',
          text: '粗',
        },
        {
          key: 'bolder',
          text: '加粗',
        },
      ],
    },
    {
      key: 'textDecoration',
      name: '文字样式',
      type: 'Select',
      range: [
        {
          key: 'none',
          text: '无',
        },
        {
          key: 'line-through',
          text: '删除线',
        },
        {
          key: 'underline',
          text: '下划线',
        },
        {
          key: 'overline',
          text: '上划线',
        },
      ],
    },
    {
      key: 'backgroundColor',
      name: '背景颜色',
      type: 'Color',
    },
    {
      key: 'padding',
      name: '填充间距',
      type: 'Number',
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
    name: 'Text',
    text: '这是一句文本',
    color: 'rgba(40,64,128,1)',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 2,
    fontFamily: '微软雅黑',
    fontWeight: '400',
    textDecoration: 'none',
    backgroundColor: 'rgba(255,255,255,1)',
    padding: 0,
    borderRadius: 0,
    animationClassName: '',
    animationIterationCount: 1,
  },
};
export default Text;
