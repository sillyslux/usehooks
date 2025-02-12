import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import ogImage from "./../../static/img/og-image-2.png";
import "./global.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet title="useHooks - Easy to understand React Hook recipes">
          <html lang="en" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css"
          />

          <meta
            name="description"
            content="We bring you easy to understand React Hook code recipes so you can learn how React hooks work and feel more comfortable writing your own."
          />

          <meta
            name="keywords"
            content="react, javascript, hooks, useState, useEffect, tutorial, demo, code"
          />

          <meta
            property="og:image"
            content={"https://usehooks.com" + ogImage}
          />

          <meta property="og:title" content="useHooks" />
          <meta
            property="og:description"
            content="Easy to understand React Hook recipes"
          />
          <meta name="twitter:card" content="summary_large_image" />

          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.4.2/css/all.css"
            integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns"
            crossorigin="anonymous"
          />

          <meta
            name="google-site-verification"
            content="CJpclzkv90awODeXoBk1uJbZxcBpHYMZo7rp7qTiELg"
          />
        </Helmet>

        {children}
      </>
    )}
  />
);

export default Layout;
