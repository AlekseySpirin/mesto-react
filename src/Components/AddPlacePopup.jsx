import {useState} from 'react';
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({isOpen, onClose, onAddPlace}) => {
	
	const [nameCard, setNameCard] = useState('');
	const [linkCard, setLinkCard] = useState('');
	
	function handleChangeNameCard(e) {
		setNameCard(e.target.value);
	}
	
	function handleChangeLinkCard(e) {
		setLinkCard(e.target.value);
	}
	
	function handleAddPlaceSubmit(e) {
		e.preventDefault();
		onAddPlace({name: nameCard, link: linkCard});
	}
	
	return (
		<PopupWithForm
			name={'add-place'}
			title={'Новое место'}
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleAddPlaceSubmit}
			submitButtonText={'Создать'}>
			<input
				id="place"
				name="place"
				value={nameCard}
				onChange={handleChangeNameCard}
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
				value={linkCard}
				onChange={handleChangeLinkCard}
				className="form__item form__item_el_link"
				type="url"
				placeholder="Ссылка на картинку"
				required
			/>
			<span className="form__item-error form__item-error_el_link"></span>
		</PopupWithForm>
	);
};

export default AddPlacePopup;