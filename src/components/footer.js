import React from 'react'


export default function footer() {
    return (
        <footer >
          <div className="container text-center py-4">

          footer 
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          </div>

        </footer>
    )
}
