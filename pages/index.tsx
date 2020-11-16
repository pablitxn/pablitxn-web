// React
import { FC, useState, useEffect } from 'react'
// Next
import Head from 'next/head'
// Components
import Profile from '../components/profile'
// Styles
import './styles.less'

const Home: FC = () => {
  const [welcomeAnimation, setWelcomeAnimation] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setWelcomeAnimation((prev) => !prev)
    }, 2500)
  }, [])

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
        {welcomeAnimation && <h1>¡Hola!</h1>}
        {!welcomeAnimation && <Profile />}
      </div>
    </>
  )
}

export default Home
