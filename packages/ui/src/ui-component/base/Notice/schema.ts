/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-27 17:46:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-27 17:59:03
 * @Description:
 */

const Notice = {
  editData: [
    {
      key: 'name',
      name: '组件名称',
      type: 'Text',
    },
    {
      key: 'text',
      name: '文本',
      type: 'Text',
    },
    {
      key: 'speed',
      name: '滚动速度',
      type: 'Number',
    },
    {
      key: 'theme',
      name: '主题',
      type: 'Select',
      range: [
        {
          key: 'default',
          text: '默认',
        },
        {
          key: 'warning',
          text: '警告',
        },
        {
          key: 'primary',
          text: '主要',
        },
        {
          key: 'success',
          text: '成功',
        },
        {
          key: 'danger',
          text: '危险',
        },
      ],
    },
    {
      key: 'isClose',
      name: '是否可关闭',
      type: 'Switch',
    },
  ],
  config: {
    name: 'Notice组件',
    text:
      'JH这是一段很长很长的文本，嗷呜嗷呜嗷呜嗷呜嗷呜嗷呜---JH这是一段很长很长的文本，嗷呜嗷呜嗷呜嗷呜嗷呜嗷呜',
    speed: 50,
    theme: 'success',
    isClose: false,
  },
};
export default Notice;
