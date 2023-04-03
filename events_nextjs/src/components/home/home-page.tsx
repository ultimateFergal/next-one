import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/Home.module.css'

const HomePage = ({ data }: any) => {
    return (
        <main className={styles.main}>
        {data.map((ev: any) => (
          <Link key={ev.id} href={`/events/${ev.id}`} passHref legacyBehavior>
            <a>
              <Image width={200} height={100} src={ev.image} alt={ev.title} />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </a>
          </Link>
        ))}
      </main>
    )
}

export default HomePage;