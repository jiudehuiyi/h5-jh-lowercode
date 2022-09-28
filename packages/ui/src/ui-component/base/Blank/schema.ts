/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-27 23:06:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-27 23:43:53
 * @Description:
 */
const Blank = {
  editData: [
    {
      key: 'name',
      name: '组件名称',
      type: 'Text',
    },
    {
      key: 'backgroundColor',
      name: '背景色',
      type: 'Color',
    },
    {
      key: 'height',
      name: '高度',
      type: 'Number',
    },
    {
      key: 'text',
      name: '文字',
      type: 'Text',
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
  ],
  config: {
    name: '空白组件',
    backgroundColor: 'rgba(255,255,255,1)',
    text: '',
    fontSize: 16,
    color: 'rgba(210,210,210,1)',
    height: 36,
  },
};

export default Blank;
