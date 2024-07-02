import "./profileUpdate.scss"

function ProfileUpdatePage() {
  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form>
          <h1>Обновить профиль</h1>
          <div className="item">
            <label htmlFor="username">Имя пользователя</label>
            <input
              id="username"
              name="username"
              type="text"
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
            />
          </div>
          <div className="item">
            <label htmlFor="password">Пароль</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Обновить</button>
        </form>
      </div>
      <div className="sideContainer">
        <img src="" alt="" className="avatar" />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
