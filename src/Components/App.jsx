import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {useEffect, useState} from "react";
import {api} from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";

import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";


const App = () => {
	
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);
	const [currentUser, setCurrentUser] = useState({
		name: '',
		about: '',
		avatar: ''
	});
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
				console.log(card)
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
	
	function handleUpdateAvatar({avatar}) {
		
		api.editAvatar({avatar}).then((userAvatar) => {
			setCurrentUser(userAvatar);
			closeAllPopups()
		});
	}
	
	function handleAddPlace({name, link}) {
		console.log({name, link})
		api.addCardServer({name, link}).then((newCard) => {
			console.log(newCard)
			setCards([newCard, ...cards]);
			closeAllPopups()
		});
	}
	
	return (
		<>
			<CurrentUserContext.Provider value={currentUser}>
				<Header/>
				<Main
					cards={cards}
					onCardLike={handleCardLike}
					onCardClick={handleCardClick}
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
					onEditAvatar={handleEditAvatarClick}
					onCardDelete={handleCardDelete}
				/>
				<Footer/>
				<EditProfilePopup onUpdateUser={handleUpdateUser}
				                  isOpen={isEditProfilePopupOpen}
				                  onClose={closeAllPopups}/>
				<AddPlacePopup isOpen={isAddPlacePopupOpen}
				               onClose={closeAllPopups}
				               onAddPlace={handleAddPlace}/>
				<EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
				                 onUpdateAvatar={handleUpdateAvatar}/>
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
