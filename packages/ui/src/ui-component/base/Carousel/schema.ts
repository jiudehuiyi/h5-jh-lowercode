/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-27 09:45:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-27 17:27:07
 * @Description:
 */

const Carousel = {
  editData: [
    {
      key: 'name',
      name: '组件名称',
      type: 'Text',
    },
    {
      key: 'direction',
      name: '轮播方向',
      type: 'Radio',
      range: [
        {
          key: 'down',
          text: '从上到下',
        },
        {
          key: 'left',
          text: '从左到右',
        },
      ],
    },
    {
      key: 'color',
      name: '指示点颜色',
      type: 'Color',
    },
    {
      key: 'swipeable',
      name: '是否可拖拽',
      type: 'Switch',
    },
    {
      key: 'round',
      name: '圆角',
      type: 'Number',
    },
    {
      key: 'autoPlay',
      name: '是否自动播放',
      type: 'Switch',
    },
    {
      key: 'imgList',
      name: '图片列表',
      type: 'DataList',
    },
  ],
  config: {
    direction: 'left',
    color: 'rgba(255,255,255,1)',
    swipeable: false,
    round: 0,
    autoPlay: false,
    name: '轮播图组件',
    imgList: [
      {
        id: '1',
        title: '这是一个大标题',
        desc: '这是一段大描述',
        link: 'https://minsubao.localhome.cn/',
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
        title: '这是一个第二大标题',
        desc: '这是一段第二大描述',
        link: 'https://minsubao.localhome.cn/',
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
    tplImg: 'https://locals-house-prod.oss-cn-shenzhen.aliyuncs.com//localhomeqy/bg.jpg',
  },
};

export default Carousel;
