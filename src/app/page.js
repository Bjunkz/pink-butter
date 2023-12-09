import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <h1>PINK BUTTER</h1>
      <Image src='/public/pink-butter-garden1.png' width='1024' height='1000'/>
    </div>
  )
}
