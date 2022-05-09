import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const index = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, minima.</p>
      <StaticImage alt='Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera' src='https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large' />
    </Layout>
  );
};

export default index;
