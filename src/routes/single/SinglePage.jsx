import Map from "../../components/map/Map"
import Slider from "../../components/slider/Slider"
import { singlePostData, userData } from "../../lib/dummydata"
import "./singlePage.scss"

function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">Главное</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Коммунальные услуги</span>
                <p>Арендатор несет ответственность</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Политика в отношении домашних животных</span>
                <p>Домашние животные разрешены</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Плата за недвижимость</span>
                <p>Доля арендной платы в общем доходе семьи должна быть в 3 раза выше</p>
              </div>
            </div>
          </div>
          <p className="title">Размеры</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 квадратных футов</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 кровати</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 ванная комната</span>
            </div>
          </div>
          <p className="title">Близлежащие места</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>Школа</span>
                <p>250 метров</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>автобусная остановка</span>
                <p>100 метров</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Ресторан</span>
                <p>200 метров</p>
              </div>
            </div>
          </div>
          <p className="title">Локация</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Отправить сообщение
            </button>
            <button>
              <img src="/save.png" alt="" />
              Сохраните это место
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
