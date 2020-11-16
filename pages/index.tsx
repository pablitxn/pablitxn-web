// React
import { FC, useState, useEffect, useCallback } from 'react'
// Next
import Head from 'next/head'
// Components
import Trail from '../components/animations/trail'
// Router
import { useRouter } from 'next/router'
// Styles
import './styles.less'

const Home: FC = () => {
  const [openAnimation, setOpenAnimation] = useState(true)

  const router = useRouter()
  const goTo = useCallback(() => {
    router.push('/me')
  }, [])

  const handleClickTrail = () => {
    setOpenAnimation(false)
    setTimeout(() => goTo(), 1000)
  }

  useEffect(() => {
    setTimeout(() => {
      setOpenAnimation(false)
      router.push('me')
    }, 3000)
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
        <Trail open={openAnimation} onClick={handleClickTrail}>
          <span style={{ padding: '1rem' }}>¡Hola!</span>
          <span style={{ padding: '1rem' }}>bienvenidx</span>
        </Trail>
      </div>
    </>
  )
}

export default Home
