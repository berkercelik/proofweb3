import Image from 'next/image'
import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
      ©2023 Proof of Web3. Tüm hakları saklıdır.
      </div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt='proofweb3 facebook'/>
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt='proofweb3'/>
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt='proofweb3'/>
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt='proofweb3'/>
      </div>
    </div>
  )
}

export default Footer