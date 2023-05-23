import Head from "next/head";
import React from "react";

interface RLDSEOTagsProps {
  title: string;
  description: string;
}

/**
Rload SEO component that allows you to define both the title and the description of the page, you can add the necessary props for the needed meta tags 
 * @param title Title of the page
 * @param description Description of the page
 */

const RLDSEOTags = ({ title, description }: RLDSEOTagsProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default RLDSEOTags;
