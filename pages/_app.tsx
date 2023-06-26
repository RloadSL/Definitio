import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import es from '../lang/es.json'
import en from '../lang/en.json'
import '../assets/styles/globals.scss'
import Header from '@/components/Header'
import CookieAdvicer from '@/components/CookieAdvicer'
import { useEffect, useState } from 'react'
import { cookies_items } from '@/constant/cookies_items'


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
  const [cookies_compliance, setCookies_compliance] = useState('accepted')

  useEffect(() => {
    const st_cookie =  localStorage.getItem('cookies_compliance')
    setCookies_compliance(st_cookie || 'declined')
  }, [])

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="definitio" />
        <meta name="author" content="Rload Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header/>
      <Component {...pageProps} dir={getDirection(locale)}/>
      {(!cookies_compliance  || cookies_compliance === 'declined') && <CookieAdvicer cookies_items={cookies_items}/>}

    </IntlProvider>
  )
}
