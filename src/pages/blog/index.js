import React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({ data }) => {

    return (
        <Layout pageTitle="Blog">
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <Link to={'/blog/'+node.id}>
                        <h2>
                            {node.frontmatter.title}
                        </h2>
                        </Link>
                        <p>Posted: {node.frontmatter.date}</p>
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query{
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    title
                    date(formatString: "MMMM D, YYYY")
                }
                id
                body
            }
        }
    }
`

export default BlogPage
