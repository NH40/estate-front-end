import { Link } from "react-router-dom"
import "./register.scss"

function Register() {
  return (
    <div className="register">
      <div className="formContainer">
        <form>
          <h1>создать учетную запись</h1>
          <input name="username" type="text" placeholder="Имя" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Пароль" />
          <button >Register</button>
          <Link to="/login">У вас есть учетная запись?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
