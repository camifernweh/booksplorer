import { ApolloProvider } from '@apollo/client';
import client from '../apollo/client';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from '../lib/utils/theme';
import dynamic from 'next/dynamic';
import 'nprogress/nprogress.css';

const TopProgressBar = dynamic(
  () => {
    return import('../components/TopProgressBar/TopProgressBar');
  },
  { ssr: false },
);

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopProgressBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
