import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {supabase} from './service/supabase.js'
import { Navbar,Button,Card } from "flowbite-react";
import { useState,useEffect } from 'react';
export default function Home() {
  const [links,setLinks] = useState(0)
  useEffect(()=>{
    console.log(links)
  },[links])
  let click = ()=>{
    setLinks(links + 1)
  }
  return (
    <>
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
        <button onClick={click} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
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
    <Card href="#">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    </>
  )
}
