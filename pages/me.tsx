// React
import { FC } from 'react'
// React Spring
import Transition from '../components/animations/transition'
// Next
import Head from 'next/head'
// Components
import Profile from '../components/profile'

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>pablitxn - web developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="home">
        <Transition>
          <Profile />
        </Transition>
      </div>
    </>
  )
}

export default Home
