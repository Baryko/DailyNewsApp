import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { useNewsModal, NewsModalProvider } from './useNewsModal';

describe('useNewsModal', () => {
  it('should return the correct context value', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => <NewsModalProvider>{children}</NewsModalProvider>;

    const { result } = renderHook(() => useNewsModal(), { wrapper });

    expect(result.current.isOpen).toBe(false);
    expect(typeof result.current.setIsOpen).toBe('function');
  });

  it('should update the context value correctly', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => <NewsModalProvider>{children}</NewsModalProvider>;

    const { result } = renderHook(() => useNewsModal(), { wrapper });

    act(() => {
      result.current.setIsOpen(true);
    });

    expect(result.current.isOpen).toBe(true);
  });
});
