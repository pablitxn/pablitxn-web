// React
import { FC } from 'react'
// Icons
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  GitlabOutlined,
} from '@ant-design/icons'
// Styles
import './styles.less'

const Profile: FC = () => {
  return (
    <div className="profile">
      <div className="profile__avatar">
        <img src="https://i.ibb.co/JdQHnVQ/me.png" alt="me" />
      </div>
      <h2 className="profile__title">Pablo Coronel</h2>
      <article className="profile__description">
        Desarrollador web fullstack.
      </article>
      <div className="profile__links">
        <a href="https://www.linkedin.com/in/pablitxn/">
          <LinkedinOutlined className="profile__anchor" />
        </a>
        <a href="https://github.com/pablitxn">
          <GithubOutlined className="profile__anchor" />
        </a>
        <a href="mailto:me@pablitxn.io">
          <MailOutlined className="profile__anchor" />
        </a>
        <a href="https://gitlab.com/pablitxn">
          <GitlabOutlined className="profile__anchor" />
        </a>
      </div>
    </div>
  )
}

export default Profile
