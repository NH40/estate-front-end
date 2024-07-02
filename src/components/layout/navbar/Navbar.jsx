import { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.scss"

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>LamaEstate</span>
        </a>
        <a href="/">Главная</a>
        <a href="/">О нас</a>
        <a href="/">Контакты</a>
        <a href="/">Агенство</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Профиль</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Войти</a>
            <a href="/" className="register">
              Регистрация
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Главная</a>
          <a href="/">О нас</a>
          <a href="/">Контакты</a>
          <a href="/">Агенство</a>
          <a href="/">Войти</a>
          <a href="/">Регистрация</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
