/*
 * @Description:
 * @Version: 2.0
 * @Autor: dragon
 * @Date: 2020-10-13 14:55:47
 * @LastEditors: dragon
 * @LastEditTime: 2020-10-15 12:21:41
 */
declare module '*.css';
declare module '*.png';
declare module '*.svg';
declare module '*.less';

interface Window {
  currentCates: null | string[];
  opera: string; // note (@livs-ops): fix property 'opera' does not exist on type 'Window & typeof globalThis'
}

declare module 'dom-to-image' {
  const domtoimage: any;
  export default domtoimage;
}

declare let getFaceUrl: any;

declare module 'h5JhLowerCodeUI/viewRender';
declare module 'h5JhLowerCodeUI/loader';
declare module 'h5JhLowerCodeUI/components';
