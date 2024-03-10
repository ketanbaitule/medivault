import "@/styles/globals.css";
import { App as KonstaApp } from 'konsta/react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ['latin'] , weight: '400' });

export default function App({ Component, pageProps }) {
  return (
    <div className={roboto.className}>
      <UserProvider>
        <KonstaApp theme="material">
          <Component {...pageProps} />
        </KonstaApp>
      </UserProvider>
    </div>
  )
}
