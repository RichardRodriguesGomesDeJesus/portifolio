import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import React, { use } from 'react';
import { PacmanLoader } from 'react-spinners';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  const  [loading, setLoading] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    },500)

  },[])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {loading ? 
      <>
        <Component {...pageProps} />
      </>
      :
      <PacmanLoader
        speedMultiplier={1.5}
        color={'Yellow'}
        loading={!loading}
        cssOverride={{
          display: 'flex',
          margin: '20vh auto',
        }}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      }
    </ThemeProvider >
  )
}
