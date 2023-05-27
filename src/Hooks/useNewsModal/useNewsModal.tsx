import React, { useState, PropsWithChildren, useContext } from 'react';
import { NewsModalInterface } from './useNewsModal.types';

const NewsModalContext = React.createContext<NewsModalInterface | null>(null);

export function NewsModalProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return <NewsModalContext.Provider value={{ isOpen, setIsOpen }}>{children}</NewsModalContext.Provider>;
}

export const useNewsModal = () => {
  const newsModalContext = useContext(NewsModalContext);

  if (!newsModalContext) {
    throw Error('useNewsModal needs to be used inside ErrorContext');
  }

  return newsModalContext;
};
