import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {useEffect, useState} from "react";
import {api} from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import CardContext from "../contexts/CardContext";

const App = () => {
	
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);
	const [currentUser, setCurrentUser] = useState('');
	const [cards, setCards] = useState([]);
	
	// Получение информации о пользователе //
	useEffect(() => {
		api.getServerUserInfo()
			.then((info) => {
				setCurrentUser(info);
			})
			.catch(err => console.log(err));
	}, []);
	
	// Получение карточке //
	useEffect(() => {
		api.getInitialCards()
			.then((card) => {
				setCards(card);
			})
			.catch(err => console.log(err));
	}, []);
	
	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true);
	}
	
	function handleCardClick(card) {
		setSelectedCard(card);
	}
	
	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true);
	}
	
	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true);
	}
	
	function closeAllPopups() {
		setIsEditAvatarPopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditProfilePopupOpen(false);
		setSelectedCard(null);
	}
	
	return (
		<>
			<CurrentUserContext.Provider value={currentUser}>
				<Header/>
				<CardContext.Provider value={cards}>
					<Main
						onCardClick={handleCardClick}
						onEditProfile={handleEditProfileClick}
						onAddPlace={handleAddPlaceClick}
						onEditAvatar={handleEditAvatarClick}
					/>
				</CardContext.Provider>
				<Footer/>
				<PopupWithForm
					name={'edit-profile'}
					title={'Редактировать профиль'}
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
					// onSubmit={}
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
				>
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
				<PopupWithForm
					name={'delete-card'}
					title={'Вы уверены?'}
					// isOpen={}
					// onClose={}
					// onSubmit={}
					submitButtonText={'Да'}/>
				<ImagePopup
					selectedCard={selectedCard}
					onClose={closeAllPopups}/>
			</CurrentUserContext.Provider>
		</>
	);
};

export default App;
