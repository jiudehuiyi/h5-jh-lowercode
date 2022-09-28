import type { PropsWithChildren } from 'react';
import React from 'react';
import { DndProvider } from 'react-dnd';
import type { DndProviderProps } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Container from './Container';

import styles from './index.less';
const BasicLayout: React.FC<PropsWithChildren<DndProviderProps<any, any>>> = (props) => {
  return (
    <div className={styles.layout}>
      <DndProvider backend={HTML5Backend}>
        <Container {...props} />
      </DndProvider>
    </div>
  );
};

export default BasicLayout;
