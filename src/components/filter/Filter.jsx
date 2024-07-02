import "./filter.scss"

function Filter() {
  return (
    <div className="filter">
      <h1>
				Результаты поиска по запросу <b>Лондон</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Локация</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Местоположение в городе"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Тип</label>
          <select name="type" id="type">
            <option value="">все</option>
            <option value="buy">Купить</option>
            <option value="rent">Арендовать</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Собственность</label>
          <select name="property" id="property">
            <option value="">все</option>
            <option value="apartment">Квартира</option>
            <option value="house">Дом</option>
            <option value="condo">Кондо</option>
            <option value="land">Земля</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Минимальная цена</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Максимальная цена</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Спальня</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
          />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
