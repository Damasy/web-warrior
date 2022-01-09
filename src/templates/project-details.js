import React from 'react'
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from 'gatsby';

import * as styles from '../styles/project-details.module.css'

export default function projectDetails({ data }) {
  console.log(data);
  const {html} = data.markdownRemark;
  const innrHtml = {__html: html}
  const {title, stack, featuredImg} = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage image={getImage(featuredImg)} alt={title}/>
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={innrHtml} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        stack
      }
    }
  }
`