import { defineConfig } from 'umi';
import path from 'path';
const { ModuleFederationPlugin } = require("webpack").container;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    immer: true,
    lazyLoad:true,
    skipModelValidate:true,
    disableModelsReExport: true,
    
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/preview', component: '@/pages/preview/index' },
  ],
  fastRefresh: {},
  dynamicImport: {},
  devServer: {
    port: 8020,
  },
  webpack5: {},
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
    utils: path.resolve(__dirname, 'src/utils/'),
    assets: path.resolve(__dirname, 'src/assets/'),
  },
  // webpack5, 联邦模块加载相同的组件
  chainWebpack(memo) {
    memo.output.publicPath('auto');
    memo
      .plugin('mf')
      .use(ModuleFederationPlugin, [{
        name: "h5JhLowerCodeUI",
        library: { type: 'umd', name: 'h5JhLowerCodeUI' },
        filename: 'remoteEntry.js',
        exposes: {
          "./viewRender": './src/renderer/ViewRender',
          "./loader": './src/renderer/DynamicEngine',
          "./components": './src/ui-component/index',
        },
        shared: { react: { eager: true , requiredVersion: '17.x' }, "react-dom": { eager: true , requiredVersion: '17.x'  } }
      }])
  },
});
