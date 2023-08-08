import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import photo1 from 'public/port2.jpg'
import Link from 'next/link'


const Blog = () => {
  return (
    <div className={styles.mainContainer}>
       <Link href="/blog/test" className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src={"https://images.unsplash.com/photo-1691175085195-a743156f9b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
        <Link href="/blog/test" className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src={"https://images.unsplash.com/photo-1691175085195-a743156f9b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
        <Link href="/blog/test" className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src={"https://images.unsplash.com/photo-1691175085195-a743156f9b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
    </div>
  )
}

export default Blog