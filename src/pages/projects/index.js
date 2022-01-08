import { graphql, Link } from 'gatsby';
import React from 'react'
import Layout from '../../components/Layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as styles from '../../styles/projects.module.css'

export default function Projects({ data }) {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  console.log(data)
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects && projects.map(proj => (
            <Link key={proj.id} to={proj.frontmatter.slug}>
              <div>
                <GatsbyImage image={getImage(proj.frontmatter.thumb)} alt={proj.frontmatter.title} placeholder="blurred"/>
                <h3>
                  {
                    proj.frontmatter.title
                  }
                </h3>
                <p>
                  {
                    proj.frontmatter.stack
                  }
                </p>
              </div>
            </Link>
          ))}
        </div>
        <p>Likewhat you see? email me at {contact} for a quote!</p>
      </div>
    </Layout>
  );
}

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
          thumb {
						childImageSharp {
							gatsbyImageData
            }
          }
          featuredImg{
						childImageSharp {
							gatsbyImageData
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`