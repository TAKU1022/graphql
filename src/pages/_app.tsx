import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { initializeApollo } from '../lib/appolloClient';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const client = initializeApollo();
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
