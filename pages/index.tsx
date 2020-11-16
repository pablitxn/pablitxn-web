// React
import { FC, useState, useEffect } from 'react'
// Components
import Profile from '../components/profile'
// Styles
import './styles.less'

const Home: FC = () => {
  const [welcomeAnimation, setWelcomeAnimation] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setWelcomeAnimation((prev) => !prev)
    }, 2000)
  }, [])

  return (
    <div className="home">
      {welcomeAnimation ? <h1>¡Hola!</h1> : <Profile />}
    </div>
  )
}

export default Home
