import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eaque voluptatem perspiciatis? Architecto quisquam id blanditiis laboriosam nihil illo dicta!
          </p>
          <div className={styles.author}>
            <Image
              src={"https://images.unsplash.com/photo-1691175085195-a743156f9b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"https://images.unsplash.com/photo-1691175085195-a743156f9b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis modi voluptatum, similique repellendus distinctio ex ratione quos placeat dolore voluptatem ullam magnam. Dicta placeat ea iste necessitatibus esse quia neque.
        </p>
      </div>
    </div>
  )
}

export default BlogPost