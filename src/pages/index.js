import Head from 'next/head'
import FrontBrand from "../components/brand/FrontBrand";
import Caneco from "../components/brand/Caneco";
import {bgGradient} from '../styles/utils.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cafeteria Dev</title>
        <link rel="icon" href="/caneco.svg" />
      </Head>

      <header className="fixed top-0 w-screen px-3 py-1 bg-yellow-500 dark:bg-yellow-800">
        <nav>

        </nav>
      </header>

      <main className="h-screen lg:flex lg:flex-end lg:justify-items-end">
        <aside className={"lg:w-1/3 w-screen " + bgGradient}>
          <FrontBrand className="block lg:fixed lg:w-1/3 h-screen">
            <Caneco width={360}/>
          </FrontBrand>
        </aside>

        <section className="lg:w-4/6 lg:justify-end">
          aa
        </section>

      </main>
    </>
  )
}
