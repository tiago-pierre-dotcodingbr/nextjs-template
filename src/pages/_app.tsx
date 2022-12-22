import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../styles/theme.config';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// store
import { persistor, store } from '../store/index';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        </ThemeProvider>
    );
}
