import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {useState, useEffect} from "react";


const App = () => {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  // const [isClosePopup, setIsClosePopup] = useState(false)
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen(false)
  }

  return (
    <>
      <Header/>
      <Main
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      />
      <Footer/>
      <PopupWithForm
        name={'edit-profile'}
        title={'Редактировать профиль'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        // onSubmit={}
        submitButtonText={'Сохранить'}
      >
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
      </PopupWithForm>

      <PopupWithForm
        name={'add-place'}
        title={'Новое место'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        // onSubmit={}
        submitButtonText={'Создать'}>
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
      </PopupWithForm>


      <PopupWithForm
        name={'update-avatar'}
        title={'Обновить аватар'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        // onSubmit={}
        submitButtonText={'Сохранить'}>

        <input
          id="link-avatar"
          name="link"
          className="form__item form__item_el_link"
          type="url"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="form__item-error form__item-error_el_link"></span>
      </PopupWithForm>


      <div className="pop-up pop-up_place_img">
        <div className="pop-up__container pop-up__container_place_img">
          <img className="pop-up__img" src="#" alt="#"/>
          <h2 className="pop-up__title-img">Название</h2>
          <button type="button" className="pop-up__close pop-up__close_place_place"></button>
        </div>
      </div>

      <PopupWithForm
        name={'delete-card'}
        title={'Вы уверены?'}
        // isOpen={}
        // onClose={}
        // onSubmit={}
        submitButtonText={'Да'}/>

      <ImagePopup/>

    </>
  );
};

export default App;
