import Link from "next/link";
import React from "react";

import Layout from '../components/layout'

export default function Custom404(){
  const [visible, setVisible] = React.useState(true)

  function handleEvent(){
    setVisible(!visible)
  }

  return (
      <Layout title="404 | OpenTech" nav_foo={false}>
        <section className="flex flex-col items-center justify-center h-screen px-3 my-0">
          <h1 className="flex text-9xl md:text-12xl">
            4
            <img className={`h-40 mr-4 md:h-48 ${visible ? '' : 'hidden'}`} src="/assets/img/death.png" alt="mac-dead"/>
            <img className={`h-40 mr-4 md:h-48 ${!visible ? '' : 'hidden'}`} src="/assets/img/life.png" alt="mac-life"/>
            4
          </h1>
          <span className="font-big mt-8 text-center md:mt-2">This page could not be found.</span>
          <Link href="/">
            <button type="button" onMouseOver={handleEvent} onMouseOut={handleEvent} className="nes-btn font-small m-5 text-xl">
              Go Back Home
            </button>
          </Link>
        </section>
      </Layout>
    )
}
