import path from 'path';
import { defineConfig } from "umi";
const { ModuleFederationPlugin } = require("webpack").container;
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@/components/Loading',
  },
  dva: {
    immer: true,
  },
  devServer: {
    port: 8002,
  },
  // devtool: 'source-map',
  antd: {},
  title: 'h5-jh-lowercode',
  // exportStatic: {},
  base: '/',
  publicPath: '/',
  outputPath: 'dist',
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: '@/pages/home/index.tsx',
        },
        {
          path: '/editor',
          component: '@/pages/editor/index.tsx',
        },
        // {
        //   path: '/ide',
        //   component: '../pages/ide',
        // },
        // {
        //   path: '/help',
        //   component: '../pages/help',
        // },
        // {
        //   path: '/login',
        //   component: '../pages/login',
        // },
        // {
        //   path: '/mobileTip',
        //   component: '../pages/mobileTip',
        // },
      ],
    },
  ],
  theme: {
    'primary-color': '#274080',
    "btn-primary-bg": "#274080"
  },
  extraBabelPlugins: [['import', { libraryName: 'zarm', style: true }]],
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
    utils: path.resolve(__dirname, 'src/utils/'),
    assets: path.resolve(__dirname, 'src/assets/'),
  },
  fastRefresh: {},
  webpack5: {},
  plugins: [
    './src/plugins/umi-msfu-plugin.ts',
  ],
  // webpack5, 联邦模块加载相同的组件
  chainWebpack(memo) {
    memo
      .plugin('mf')
      .use(ModuleFederationPlugin, [{
        name: "h5JhLowerCodeEditor",
        remotes: {
          h5JhLowerCodeUI: "h5JhLowerCodeUI@http://localhost:8020/remoteEntry.js"
        },
        shared: { react: { singleton: true, eager: true, requiredVersion: '17.x' }, "react-dom": { singleton: true,eager: true, requiredVersion: '17.x' }, }
      }])
  },
});
