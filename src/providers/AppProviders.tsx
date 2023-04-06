import { Provider } from 'react-redux';
import { store } from '../Redux/store/store';
import { GlobalStyle } from '../assets/styles/GlobalStyles/GlobalStyles';
import { PropsWithChildren } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NewsModalProvider } from '../Hooks/useNewsModal/useNewsModal';

function AppProviders({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <Router>
        <NewsModalProvider>
          <GlobalStyle />
          {children}
        </NewsModalProvider>
      </Router>
    </Provider>
  );
}

export default AppProviders;
