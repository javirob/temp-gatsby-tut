import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const about = () => {
  return (
    <Layout pageTitle='About Page'>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quo laudantium harum quidem eaque impedit placeat aliquam amet alias tempora! Dolorem minima voluptates architecto nisi?</p>
      <StaticImage src='../images/img1.jpg' alt='hello world' />
    </Layout>
  );
};

export default about;
