import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import aboutimage from 'public/about.jpg'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
        src={aboutimage} 
        fill={true} 
        alt="" 
        className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Hakkımda</h1>
          {/* <h2 className={styles.imgDesc}>Whoami</h2> */}
        </div>
      </div>
      <div className={styles.textContainer}>
          <div className={styles.item}>
            <h1 className={styles.imgTitle}>Ben Kimim?</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore iste ducimus molestiae ad. Perferendis blanditiis veniam laudantium animi, officiis dolorum impedit! Natus beatae maxime unde nesciunt quasi cum quidem!
            </p>
          </div>
          <div className={styles.item}>
            <h1 className={styles.imgTitle}>Ben Kimim?</h1>
            <p className={styles.desc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto porro voluptates voluptatem laboriosam ratione? Fugit minima vitae totam maxime sunt numquam, ipsa dolorem facilis doloremque, dignissimos, eligendi illum reprehenderit fugiat. 
              <br />
              <br /> - Websites
              <br />
              <br /> - Web 3.0
            </p>
            <Button url="contact" text="Contact" />
          </div>
      </div>
    </div>
  )
}

export default About