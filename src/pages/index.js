import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const menu = ["intro", "experience", "skills", "projects", "about", "contact"]

const IndexPage = () => (
  <Layout>
    <div className="h-screen flex">
      {/* <!-- Fixed sidebar --> */}
      <div className="w-28">
        <aside className="fixed bottom-0 p-4">
          {menu.map(item => {
            return (
              <a
                href={`#${item}`}
                key={item}
                className="flex justify-start hover:text-black text-gray-400 py-2"
              >
                <p className="text-base leading-4">{item}</p>
              </a>
            )
          })}
        </aside>
      </div>

      {/* <!-- Scroll wrapper --> */}
      <div className="flex-1 overflow-hidden overflow-y-auto scroll-smooth">
        {/* <!-- Scrollable container --> */}
        <div class="grid grid-rows-4">
          <div class="flex">
            <div className="p-3 w-3/5" id="intro">
              <h1 className="text-4xl font-serif">Samuel Rodríguez</h1>
              <p className="text-2xl font-serif pt-4">
                I'm a fullstack software developer with a background in Natural
                Language Processing based in Stockholm, Sweden. Over the past 4
                years I worked on both front- and backend. I enjoy working in
                environments that challenge me and allow me to learn.
              </p>
            </div>
            <div className="w-2/5">
              <StaticImage
                src="../images/samuel-rodriguez-profile.jpg"
                loading="eager"
                alt="Profile of Samuel Rodriguez"
                className="h-dvh float-end"
              />
            </div>
          </div>

          <div className="flex">
            <div id="experience" className="w-2/5">
              My working experience goes here
            </div>
            <div id="skills" className="w-3/5">
              My skills
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
