import Image from 'next/image'
import styles from './page.module.css'
import news from 'public/home3.jpg'
import Button from '@/components/Button/Button'
 
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Proof of Web 3 with this blog.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet.
        </p>
        <Button url="/blog" text="Blog'a git" />
      </div>
      <div className={styles.item}>        
        <Image src={news} alt="" className={styles.img} />
      </div>
    </div>
  )
}
