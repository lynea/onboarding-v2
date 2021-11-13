import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ApolloProvider } from '@apollo/client';
import { client } from '../graphql/mainClient';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default MyApp;
