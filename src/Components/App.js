import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


const App = () => {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
      <div className="pop-up pop-up_place_profile">
        <div className="pop-up__container">
          <form name="edit-profile" action="#" className="form form_place_edit-profile" noValidate>
            <h2 className="form__title">Редактировать профиль</h2>
            <input
              name="name"
              className="form__item form__item_el_name"
              placeholder="Имя"
              type="text"
              id="name"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="form__item-error form__item-error_el_name"></span>
            <input
              name="info"
              placeholder="Вид деятельности"
              className="form__item form__item_el_info"
              type="text"
              id="info"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="form__item-error form__item-error_el_info"></span>
            <button type="submit" className="pop-up__button pop-up__button_place_edit-profile" disabled>Сохранить
            </button>
          </form>
          <button type="button" className="pop-up__close pop-up__close_place_profile"></button>
        </div>
      </div>
      <div className="pop-up pop-up_place_add-place">
        <div className="pop-up__container">
          <form name="add-place" action="#" className="form form_place_add-place" noValidate>
            <h2 className="form__title">Новое место</h2>
            <input
              id="place"
              name="place"
              className="form__item form__item_el_name"
              type="text"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="form__item-error form__item-error_el_place"></span>
            <input
              id="link"
              name="link"
              className="form__item form__item_el_link"
              type="url"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="form__item-error form__item-error_el_link"></span>
            <button type="submit" className="pop-up__button pop-up__button_place_place" disabled>Создать</button>
          </form>
          <button type="button" className="pop-up__close pop-up__close_place_add-place"></button>
        </div>
      </div>
      <div className="pop-up pop-up_place_update-avatar">
        <div className="pop-up__container">
          <form name="update-avatar" action="#" className="form form_place_update-avatar" noValidate>
            <h2 className="form__title form__title_place_avatar">Обновить аватар</h2>
            <input
              id="link-avatar"
              name="link"
              className="form__item form__item_el_link"
              type="url"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="form__item-error form__item-error_el_link"></span>
            <button type="submit" className="pop-up__button pop-up__button_place_update-avatar" disabled>Сохранить
            </button>
          </form>
          <button type="button" className="pop-up__close pop-up__close_place_update-avatar"></button>
        </div>
      </div>
      <div className="pop-up pop-up_place_img">
        <div className="pop-up__container pop-up__container_place_img">
          <img className="pop-up__img" src="#" alt="#"/>
          <h2 className="pop-up__title-img">Название</h2>
          <button type="button" className="pop-up__close pop-up__close_place_place"></button>
        </div>
      </div>
      <div className="pop-up pop-up_place_delete-card">
        <div className="pop-up__container pop-up__container_place_delete-card">
          <form name="delete-card" action="#" className="form form_place_delete-card">
            <h2 className="form__title">Вы уверены?</h2>
            <button type="submit" className="pop-up__button pop-up__button_place_delete-card">Да</button>
          </form>
          <button type="button" className="pop-up__close pop-up__close_place_delete-card"></button>
        </div>
      </div>
      <template id="card-template" className="card-template">
        <li className="card">
          <img className="card__img" src="#" alt="#"/>
          <h2 className="card__title"></h2>
          <div className="card__likes-container">
            <button type="button" className="card__like"></button>
            <p className="card__like_el_count">0</p>
          </div>

          <div className="card__trash"></div>
        </li>
      </template>
    </>
  );
};

export default App;
