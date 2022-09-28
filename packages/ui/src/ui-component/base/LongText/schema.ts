/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-25 22:50:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-25 23:31:44
 * @Description:
 */

const LongText = {
  editData: [
    {
      key: 'name',
      name: '组件名称',
      type: 'Text',
    },
    {
      key: 'text',
      name: '长文本',
      type: 'TextArea',
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
      key: 'textIndent',
      name: '首行缩进',
      type: 'Number',
      rang: [0, 100],
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
  ],
  config: {
    name: 'LongText',
    text: '我是一段长文本哦，嗷呜嗷呜嗷呜',
    color: 'rgba(40,64,128,1)',
    fontSize: 14,
    textIndent: 20,
    textAlign: 'left',
    lineHeight: 1.5,
    backgroundColor: 'rgba(255,255,255,1)',
    padding: 0,
    borderRadius: 0,
  },
};
export default LongText;
