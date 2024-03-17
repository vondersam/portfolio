import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const menu = ["intro", "experience", "skills", "projects", "about", "contact"]

const IndexPage = () => (
  <Layout>
    <div class="flex">
      <div class="p-3 width-full basis-1/12">
        <div
          id="menu1"
          class="flex justify-start flex-col w-full md:w-auto items-start pb-1 fixed bottom-0 left"
        >
          {menu.map(item => {
            return (
              <button
                key={item}
                class="flex justify-start hover:text-black text-gray-400 py-2"
              >
                <p class="text-base leading-4 ">{item}</p>
              </button>
            )
          })}
        </div>
      </div>
      <div class="p-3 basis-6/12">
        <h1 className="text-4xl font-serif">Samuel Rodríguez</h1>
        <p className="text-2xl font-serif pt-4">
          I'm a fullstack software developer with a background in Natural
          Language Processing based in Stockholm, Sweden. Over the past 4 years
          I worked on both front- and backend. I enjoy working in environments
          that challenge me and allow me to learn.
        </p>
      </div>
      <div class="basis-5/12">
        <StaticImage
          src="../images/samuel-rodriguez-profile.jpg"
          loading="eager"
          alt="Profile of Samuel Rodriguez"
          className="h-dvh float-end"
        />
      </div>
    </div>
    <div>Another</div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
