import { Provider } from 'react-redux';
import { store } from '../Redux/store/store';
import { GlobalStyle } from '../assets/styles/GlobalStyles/GlobalStyles';
import { PropsWithChildren } from 'react';

function AppProviders({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      {children}
    </Provider>
  );
}

export default AppProviders;
