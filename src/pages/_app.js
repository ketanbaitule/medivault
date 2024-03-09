import "@/styles/globals.css";
import { App as KonstaApp } from 'konsta/react';
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ['latin'] , weight: '400' });

export default function App({ Component, pageProps }) {
  return (
    <div className={roboto.className}>
      <KonstaApp theme="material">
        <Component {...pageProps} />
      </KonstaApp>
    </div>
  )
}
