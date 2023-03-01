import SEOHead from '@/components/SEOHead'
import { NextPage } from 'next'
import React from 'react'
import style from './about.module.scss'


const About:NextPage = () => {
  return (
    <div>
      <SEOHead title='About' description='Esto es la página de descripción'></SEOHead>
      sobre nosotros
    </div>
  )
}

export default About