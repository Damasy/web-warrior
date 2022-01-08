import React from 'react'
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from 'gatsby';

import styles from '../styles/project-details.module.css'

export default function projectDetails() {
  return (
    <Layout>
      <div className={styles.details}>
        <h2>title</h2>
        <h3>stack</h3>
        <div className={styles.featured}>
          <GatsbyImage image={getImage()}/>
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={} />
      </div>
    </Layout>
  )
}

export const query = graphql`

`
