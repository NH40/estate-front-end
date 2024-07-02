import "./newPost.scss"

function NewPostPage() {
  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Добавить новое сообщение</h1>
        <div className="wrapper">
          <form>
            <div className="item">
              <label htmlFor="title">Заглавие</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="item">
              <label htmlFor="price">Цена</label>
              <input id="price" name="price" type="number" />
            </div>
            <div className="item">
              <label htmlFor="address">Адресс</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Описание</label>
            </div>
            <div className="item">
              <label htmlFor="city">Город</label>
              <input id="city" name="city" type="text" />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Количество спальни</label>
              <input min={1} id="bedroom" name="bedroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Количество ванных комнат</label>
              <input min={1} id="bathroom" name="bathroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="latitude">Квадратура</label>
              <input id="latitude" name="latitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Долгота</label>
              <input id="longitude" name="longitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="type">Тип</label>
              <select name="type">
                <option value="rent" defaultChecked>
                  Аренда
                </option>
                <option value="buy">Покупка</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="type">Собственность</label>
              <select name="property">
                <option value="apartment">Квартира</option>
                <option value="house">Дом</option>
                <option value="condo">Кондо</option>
                <option value="land">Земля</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="utilities">Политика в области коммунальных услуг</label>
              <select name="utilities">
                <option value="owner">Владелец несет ответственность</option>
                <option value="tenant">Арендатор несет ответственность</option>
                <option value="shared">Общий</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Политика в отношении домашних животных</label>
              <select name="pet">
                <option value="allowed">Допустимый</option>
                <option value="not-allowed">не допустимый</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Политика в области доходов</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
              />
            </div>
            <div className="item">
              <label htmlFor="size">Общий размер (кв. фут)</label>
              <input min={0} id="size" name="size" type="number" />
            </div>
            <div className="item">
              <label htmlFor="school">Школа</label>
              <input min={0} id="school" name="school" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bus">автобус</label>
              <input min={0} id="bus" name="bus" type="number" />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Ресторан</label>
              <input min={0} id="restaurant" name="restaurant" type="number" />
            </div>
            <button className="sendButton">Добавить</button>
          </form>
        </div>
      </div>
      <div className="sideContainer"></div>
    </div>
  );
}

export default NewPostPage;
