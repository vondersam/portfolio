import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const menu = ["intro", "projects", "contact"] //"about", "experience", "skills",

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

          <div className="flex space-x-2 p-1" id="projects">
            <div className="w-1/2 h-max mt-8 pl-4 pt-4">
              <StaticImage
                src="../images/stec-screenshot.jpg"
                loading="eager"
                alt="Screenshot of Stockholm Transport Emissions Calculator after a search"
                className="w-full border-2 border-gray-400"
              />
              <div className="p-5">
                <p className="mb-3">
                  Stockholm Transport Emissions Calculator is a web application
                  where you can search for trips in the Stockholm's (SL)
                  transport system and calculate carbon dioxide emissions from
                  the different possible routes of the trip. I used React,
                  TypeScript, Bootstrap 5, Testing Library, two of Trafiklab's
                  APIs to build it. It's deployed with Vercel.
                </p>
                <a
                  href="https://github.com/vondersam/stec"
                  target="_blank"
                  className="hover:text-black text-gray-400"
                >
                  View on GitHub
                </a>
              </div>
            </div>
            <div className="w-1/2 h-max mt-8 pl-4 pt-4">
              <StaticImage
                src="../images/casa-atlante-screenshot.jpg"
                loading="eager"
                alt="Screenshot of Casa Atlante's landing page"
                className="w-full border-2 border-gray-400"
              />
              <div className="p-5">
                <p className="mb-3">
                  Website for the holiday home rental Casa Atlante, located on
                  the island of La Palma, Canary Islands. I used React,
                  TypeScript, Bootstrap 5. It's deployed with Vercel.
                </p>
                <a
                  href="https://github.com/vondersam/casa_atlante"
                  target="_blank"
                  className="hover:text-black text-gray-400"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="flex">
            <div id="contact">contact</div>
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
