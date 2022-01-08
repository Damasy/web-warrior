import { graphql, Link } from 'gatsby';
import React from 'react'
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css'

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects && projects.map(proj => (
            <Link key={proj.id} to={proj.frontmatter.slug}>
              <div>
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
      </div>
    </Layout>
  );
}

// export page query
export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
        }
      }
    }
  }
`