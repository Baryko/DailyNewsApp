import React, { PropsWithChildren } from 'react';
import { Wrapper } from './MainTemplate.styles';

const MainTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MainTemplate;
