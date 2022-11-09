import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar,Button } from "flowbite-react";
export default function Home() {
  return (
    <div className={styles.container}>
      

      <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand href="https://flowbite.com/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Wacana
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            href="/navbars"
            active={true}
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            WaLink
          </Navbar.Link>
          
        </Navbar.Collapse>
      </Navbar>
      

     
    </div>
  )
}
