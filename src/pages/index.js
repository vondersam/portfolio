import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div class="grid grid-flow-col grid-rows-2 grid-cols-3">
      <div class="row-start-1 col-start-1 col-span-2">
        <h1 className="text-green-600 font-serif">Samuel Rodríguez</h1>
        <h2 className="font-serif">Software Developer</h2>
      </div>
      <div class="row-start-1 col-start-3 col-span-3">
        <StaticImage
          src="../images/samuel-rodriguez-profile.jpg"
          loading="eager"
          alt="Profile of Samuel Rodriguez"
          className="h-dvh w-2/3 float-end"
        />
      </div>
      <div class="col-start-4">mountains-2.jpg</div>
      <div>mountains-3.jpg</div>
      <div>mountains-4.jpg</div>
    </div>

    <div
      id="menu1"
      class="flex justify-start  flex-col w-full md:w-auto items-start pb-1 "
    >
      <button class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <p class="text-base leading-4  ">Intro</p>
      </button>
      <button class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <p class="text-base leading-4  ">Work experience</p>
      </button>
      <button class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <p class="text-base leading-4  ">Skills</p>
      </button>
      <button class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <p class="text-base leading-4  ">Project</p>
      </button>
      <button class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <p class="text-base leading-4  ">About</p>
      </button>
      <button class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <p class="text-base leading-4  ">Contact</p>
      </button>
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
