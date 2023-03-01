import Head from 'next/head'
import React from 'react'

interface SEOHeaderProps {
  title: string,
  description: string
}

/**
 Componente para SEO que permite definir tanto el título como la descripción de la página, se pueden añadir las props necesarias para los meta que se necesiten
 * @param title Título de la página
 * @param description Descripción de la página
 */

const SEOHeader = ({title,description}: SEOHeaderProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  )
}

export default SEOHeader;