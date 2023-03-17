import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import es from '../lang/es.json'
import en from '../lang/en.json'
import '../assets/styles/layout.scss'
import Navigation from '@/components/Navigation'


const messages: any = {
  en,
  es
}

//get the language
const getDirection = (locale: string) => {
  if (locale === 'en') {
    return 'rtl'
  }
  return 'ltr'
}

export default function App({ Component, pageProps }: AppProps) {
  const locale: any = useRouter().locale || 'en';

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="definitio" />
        <meta name="author" content="Rload Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navigation/>
      <Component {...pageProps} dir={getDirection(locale)}/>
    </IntlProvider>
  )
}
