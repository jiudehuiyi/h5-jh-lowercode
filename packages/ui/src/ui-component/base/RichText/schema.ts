/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-27 18:04:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-27 18:29:19
 * @Description:
 */

const RichText = {
  editData: [
    {
      key: 'round',
      name: '边框圆角',
      type: 'Number',
    },
    {
      key: 'borderWidth',
      name: '边框宽度',
      type: 'Number',
    },
    {
      key: 'borderColor',
      name: '边框颜色',
      type: 'Color',
    },
    {
      key: 'padding',
      name: '内边距',
      type: 'Number',
    },
    {
      key: 'backgroundColor',
      name: '背景颜色',
      type: 'Color',
    },
    {
      key: 'content',
      name: '内容',
      type: 'RichText',
    },
  ],
  config: {
    round: 0,
    borderWidth: 0,
    borderColor: 'rgba(255,255,255,1)',
    backgroundColor: 'rgba(255,255,255,1)',
    padding: 0,
    content: '这是一个富文本，嗷呜～',
  },
};
export default RichText;
