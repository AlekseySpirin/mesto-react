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
import EditProfilePopup from "./EditProfilePopup";

const App = () => {
	
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);
	const [currentUser, setCurrentUser] = useState({name: '', about: ''});
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
	
	function handleCardLike(card) {
		// Снова проверяем, есть ли уже лайк на этой карточке
		const isLiked = card.likes.some(i => i._id === currentUser._id);
		
		// Отправляем запрос в API и получаем обновлённые данные карточки
		api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
			setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
		});
	}
	
	function handleCardDelete(card) {
		api.deleteCardServer(card._id).then(() => {
			const updatedCards = cards.filter((c) => c._id !== card._id);
			setCards(updatedCards);
		});
	}
	
	function handleUpdateUser({name, about}) {
		api.editServerProfile({name, about}).then((userInfo) => {
			setCurrentUser(userInfo);
			closeAllPopups();
		});
	}
	
	return (
		<>
			<CurrentUserContext.Provider value={currentUser}>
				<Header/>
				<CardContext.Provider value={cards}>
					<Main
						onCardLike={handleCardLike}
						onCardClick={handleCardClick}
						onEditProfile={handleEditProfileClick}
						onAddPlace={handleAddPlaceClick}
						onEditAvatar={handleEditAvatarClick}
						onCardDelete={handleCardDelete}
					/>
				</CardContext.Provider>
				<Footer/>
				<EditProfilePopup onUpdateUser={handleUpdateUser}
				                  isOpen={isEditProfilePopupOpen}
				                  onClose={closeAllPopups}/>
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
