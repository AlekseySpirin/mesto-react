import {useEffect, useState} from "react";
import {api} from "../utils/Api";
import Card from "./Card";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick,}) {
	
	const [userName, setUserName] = useState('');
	const [userDescription, setUserDescription] = useState('');
	const [userAvatar, setUserAvatar] = useState('');
	const [userId, setUserId] = useState(null);
	const [cards, setCards] = useState([]);
	
	useEffect(() => {
		Promise.all([api.getServerUserInfo(), api.getInitialCards()])
			.then(([info, card]) => {
				setUserId(info._id);
				setUserName(info.name);
				setUserDescription(info.about);
				setUserAvatar(info.avatar);
				setCards(card);
			})
			.catch(err => console.log(err));
	}, []);
	
	return (
		<main className="main">
			<section className="profile">
				<button onClick={onEditAvatar} id="avatar" style={{backgroundImage: `url(${userAvatar})`}}
				        className="profile__avatar"></button>
				<div className="profile__desc">
					<button onClick={onEditProfile} type="button" className="profile__edit-button"></button>
					<h1 className="profile__name">{userName}</h1>
					<p className="profile__info">{userDescription}</p>
				</div>
				<button onClick={onAddPlace} type="button" className="profile__add-button"></button>
			</section>
			<section className="places">
				<ul className="cards">
					{cards.map((card) => (
						<Card key={card._id}
						      card={card}
						      onCardClick={onCardClick}/>
					))}
				</ul>
			</section>
		</main>
	);
}

export default Main;