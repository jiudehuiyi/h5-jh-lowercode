/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-28 10:06:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-28 14:35:45
 * @Description:
 */

const Tabs = {
  editData: [
    {
      key: 'tabs',
      name: '项目类别',
      type: 'MultipleText',
    },
    {
      key: 'inactivate',
      name: '未激活颜色',
      type: 'Color',
    },
    {
      key: 'activeColor',
      name: '激活颜色',
      type: 'Color',
    },
    {
      key: 'color',
      name: '文字颜色',
      type: 'Color',
    },
    {
      key: 'paddingHorizontal',
      name: '横向内边距',
      type: 'Number',
    },
    {
      key: 'paddingVertical',
      name: '纵向内边距',
      type: 'Number',
    },

    {
      key: 'cover',
      name: '容器铺满',
      type: 'Switch',
    },
    {
      key: 'fontSize',
      name: '文字大小',
      type: 'Number',
    },
    {
      key: 'imgSize',
      name: '图片大小',
      type: 'Number',
    },
    {
      key: 'sourceData',
      name: '数据源',
      type: 'DataList',
    },
  ],
  config: {
    tabs: ['类别一', '类别二'],
    color: 'rgba(153,153,153,1)',
    inactivate: 'rgba(0,0,0,1)',
    activeColor: 'rgba(40,64,128,1)',
    paddingHorizontal: 0,
    paddingVertical: 0,
    cover: false,
    fontSize: 16,
    imgSize: 120,
    sourceData: [
      {
        id: '1',
        title: '这是一个大标题',
        desc: '这是一段大描述',
        link: 'https://minsubao.localhome.cn/',
        type: 0,
        imgUrl: [
          {
            uid: '001',
            name: 'image.jpg',
            status: 'done',
            url: 'https://locals-house-prod.oss-cn-shenzhen.aliyuncs.com//localhomeqy/bg.jpg',
          },
        ],
      },
      {
        id: '2',
        title: '这是一个第三大标题',
        desc: '这是一段第三大描述',
        link: 'https://minsubao.localhome.cn/',
        type: 1,
        imgUrl: [
          {
            uid: '001',
            name: 'image.jpg',
            status: 'done',
            url: 'https://locals-house-prod.oss-cn-shenzhen.aliyuncs.com//localhomeqy/bg.jpg',
          },
        ],
      },
    ],
  },
};

export default Tabs;
