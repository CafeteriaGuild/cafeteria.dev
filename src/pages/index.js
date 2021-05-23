import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";
import CurseForge from '../svg/curseforge.svg'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cafeteria Dev</title>
        <link rel="icon" href="/caneco.svg" />
      </Head>

      <header className="fixed top-0 w-screen px-3 py-1 bg-yellow-500 dark:bg-yellow-800">
        <nav>

        </nav>
      </header>

      <main className="dark:text-gray-400 text-center">
        <h1 className="md:text-5xl text-3xl pt-5">
          Cafeteria Development
        </h1>

        <img src="/caneco.svg" width={384} height={384} className={`${styles.canecolight} inline`}/>
        <img src="/caneco-dark.svg" width={384} height={384} className={styles.canecodark}/>

        <code className={`block text-sm ${styles.code}`}>
          fun randomInt(): Int = 7 <br className="inlne sm:none"/> /* This was decided in a poll by the dev team */
        </code>
      </main>
      <footer className="pt-4">
        <nav className="flex">
          <ul>
            <li className="inline mr-2">
              <Link href="https://www.curseforge.com/members/cafeteriaguild">
                <a target="_blank">
                  <CurseForge className="inline h-5 filter dark:invert dark:opacity-80"/>
                </a>
              </Link>
            </li>
            <li className="inline mr-3">
              <Link href="https://github.com/CafeteriaGuild">
                <a target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="inline h-6 text-black dark:text-gray-300"/>
                </a>
              </Link>
            </li>
            <li className="inline">
              <Link href="https://discord.gg/G4PjhEf">
                <a target="_blank">
                  <FontAwesomeIcon icon={faDiscord} className="inline h-6 text-black dark:text-gray-300"/>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}
