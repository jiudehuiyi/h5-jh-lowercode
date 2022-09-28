/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-13 15:17:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-19 11:38:17
 * @Description:
 */
import React, { useMemo } from 'react';
import { dynamic } from 'umi';
import Loading from '../components/Loading';

export type componentsType = 'media' | 'base' | 'visible';
type DynamicEngineType = {
  isTpl: boolean;
  config: Record<string, any>;
  type: string;
  componentsType: componentsType;
  category: string;
};
/**
 * @description: 动态加载模块
 * @param {string} type 某个组件实际类型
 * @param {string} componentType 某个组件属于一个大模块类型
 * @return {*}
 */
const DynamicFunc = (type: string, componentsType: string) => {
  return dynamic({
    loader: async function () {
      /**
       * @description: 按需加载模块
       * @return {*}
       */
      const { default: Tree } = await import(`@/ui-component/${componentsType}/${type}`);
      const Component = Tree;
      return (props: DynamicEngineType) => {
        const { config, isTpl } = props;
        return <Component {...config} isTpl={isTpl} />;
      };
    },

    loading: () => {
      return (
        <div style={{ paddingTop: 15, textAlign: 'center' }}>
          <Loading />
        </div>
      );
    },
  });
};
/**
 * @description: 动态按需加载模块，优化首屏加载速度
 * @param {DynamicEngineType} props
 * @return {*}
 */
const DynamicEngine = (props: DynamicEngineType) => {
  const { type, config, category } = props;
  const Dynamic = useMemo(() => {
    return (DynamicFunc(type, category) as unknown) as React.FC<DynamicEngineType>;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);
  return <Dynamic {...props} />;
};
export default React.memo(DynamicEngine);
