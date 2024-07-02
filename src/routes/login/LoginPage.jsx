import { Link } from "react-router-dom"
import "./loginPage.scss"

function Login() {
  return (
    <div className="login">
      <div className="formContainer">
        <form>
          <h1>Добро пожаловать</h1>
          <input name="username" type="text" placeholder="Имя" />
          <input name="password" type="password" placeholder="Пароль" />
          <button>Логин</button>
          <Link to="/register">{"Don't"} у вас есть учетная запись?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
