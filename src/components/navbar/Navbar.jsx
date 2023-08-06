"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

const links = [
    {
      id: 1,
      title: "Anasayfa",
      url: "/",
    },
    // {
    //   id: 2,
    //   title: "Whoami",
    //   url: "/whoami",
    // },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 4,
      title: "Web 3 Airdrop",
      url: "/dashboard",
    },
    {
      id: 5,
      title: "İletişim",
      url: "/contact",
    },
];

const whoami = [ 
  {
    id: 1,
    title: "Whoami",
    url: "/about",
  },
];


const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>Proof of Web3</Link>
        <div className={styles.links}>
            {links.map(link=>(
            <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>))}
            <div className={styles.whoami}>
              {whoami.map(link=>(
                <Link key={link.id} href={link.url} className={styles.whoami}>{link.title}</Link>))}
            </div>
            <button
              className={styles.logout}
              onClick={() => {
                console.log("logged out");
              }}
            >Logout</button>
        </div>
    </div>
  )
}


export default Navbar