import Chat from '../../components/chat/Chat'
import List from '../../components/list/List'
import "./profile.scss"

const ProfilePage = () => {
	return (
		<div className='profilePage'>
			<div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Информация о пользователе</h1>
            <button>Обновить профиль</button>
          </div>
          <div className="info">
            <span>
							Аватар:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span>
							Имя пользователя: <b>Джон Доу</b>
            </span>
            <span>
              E-mail: <b>john@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>Мой лист</h1>
            <button>Создать новый пост</button>
          </div>
          <List />
          <div className="title">
            <h1>Сохронить лист</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
		</div>
	)
}

export default ProfilePage
