/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        allGraphCmsPost {
            edges {
              node {
                id
                title
                tags
                slug
                publishedAt
                excerpt
                coverImage {
                  url
                }
                content {
                  html
                }
              }
            }
          }
      }
    `)
    data.allGraphCmsPost.edges.forEach(edge => {
      const slug = edge.node.slug
      actions.createPage({
        path: `blogs/${slug}`,
        component: require.resolve(`./src/templates/blogs.js`),
        context: { slug: slug },
      })
    })
  }