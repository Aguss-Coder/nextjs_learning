import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PlayerProvider from 'context/players_context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlayerProvider>
      <Component {...pageProps} />
    </PlayerProvider>
  )
}
