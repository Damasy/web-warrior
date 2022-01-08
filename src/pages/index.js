import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  const {title, description} = data.siteInfo.siteMetadata;
  const fluidImg = getImage(data.imgFile);
  console.log(data)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>{title}</h2>
          <h3>{description}</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <GatsbyImage image={fluidImg}  alt="site banner" style={ {maxWidth: '100%'} } placeholder="blurred" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    siteInfo: site {
      siteMetadata {
        title
        description
        copyright
      }
    }
    imgFile: file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }

`