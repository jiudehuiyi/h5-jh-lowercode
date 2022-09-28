// ts项目必须配置ts-config相关内容，否则模块联邦不会起作用
// https://blog.csdn.net/mjzhang1993/article/details/115871597
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}
declare let getFaceUrl: any;
