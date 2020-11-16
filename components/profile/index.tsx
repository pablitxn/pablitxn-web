// React
import { FC } from 'react'
// Icons
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons'
// Styles
import './styles.less'

const Profile: FC = () => {
  return (
    <div className="profile">
      <div className="profile__avatar">
        <img src="https://i.pinimg.com/originals/69/6d/c3/696dc310d9b4e06cb460bcd4ef72331d.jpg" />
      </div>
      <h2 className="profile__title">Pablo Coronel - Fullstack dev</h2>
      <article className="profile__description">
        El Justicialismo ha dejado de ser la causa de un hombre para ser la
        causa del pueblo, y por ella sí valdría la pena darlo todo, incluso la
        vida Yo llevo en mis oídos la más maravillosa música, que, para mí, es
        la palabra del pueblo argentino El Justicialismo necesita apóstoles y
        para ser apóstol hay que estar dispuesto a ser héroe, y solamente los
        fanáticos de amor por una causa son capaces de morir por un ideal
      </article>
      <div className="profile__links">
        <a href="#">
          <LinkedinOutlined className="icon" />
        </a>
        <a href="#">
          <GithubOutlined className="icon github-icon" />
        </a>
        <a href="#">
          <MailOutlined className="icon" />
        </a>
      </div>
    </div>
  )
}

export default Profile
