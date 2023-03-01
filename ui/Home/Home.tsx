import SEOHead from '@/components/SEOHead';
import { NextPage } from 'next';
import React from 'react'
import { FormattedMessage } from 'react-intl';
import style from './home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={style.home}>
      <SEOHead title='HOme' description='Esto es la página principal de definitio' />
      <h1>      home definitio
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatum quo consectetur alias dicta. Repudiandae sequi possimus quae quaerat odit placeat molestiae. Fugiat veritatis error exercitationem dolore, laboriosam dolor numquam.</p>
      <h3 className={style.titleButton}>titulo</h3>
      <FormattedMessage id='page.home.h1' />
    </div>
  )
}

export default Home;