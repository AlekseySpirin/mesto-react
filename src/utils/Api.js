class Api {
	constructor(option) {
		this.url = option.url;
		this.headers = option.headers;
	}
	
	_getResponseData(res) {
		if (!res.ok) {
			return Promise.reject(`Ошибка: ${res.status}`);
		}
		return res.json();
	}
	
	getInitialCards() {
		return fetch(`${this.url}/cards`, {
			method: 'GET',
			headers: this.headers,
		}).then((res) => this._getResponseData(res));
	}
	
	getServerUserInfo() {
		return fetch(`${this.url}/users/me`, {
			method: 'GET',
			headers: this.headers,
		}).then((res) => this._getResponseData(res));
	}
	
	editServerProfile(userData) {
		return fetch(`${this.url}/users/me`, {
			method: 'PATCH',
			headers: this.headers,
			body: JSON.stringify({name: userData.name, about: userData.info}),
		}).then((res) => this._getResponseData(res));
	}
	
	addCardServer(formData) {
		return fetch(`${this.url}/cards`, {
			method: 'POST',
			headers: this.headers,
			body: JSON.stringify({name: formData.place, link: formData.link, likes: formData.likes}),
		}).then((res) => this._getResponseData(res));
	}
	
	editAvatar(avatar) {
		return fetch(`${this.url}/users/me/avatar`, {
			method: 'PATCH',
			headers: this.headers,
			body: JSON.stringify({avatar: avatar.link}),
		}).then((res) => this._getResponseData(res));
	}
	
	deleteCardServer(cardId) {
		return fetch(`${this.url}/cards/${cardId}`, {
			method: 'DELETE',
			headers: this.headers,
		}).then((res) => this._getResponseData(res));
	}
	
	addLikeServer(cardId) {
		return fetch(`${this.url}/cards/${cardId}/likes`, {
			method: 'PUT',
			headers: this.headers,
		}).then((res) => this._getResponseData(res));
	}
	
	deleteLikeServer(cardId) {
		return fetch(`${this.url}/cards/${cardId}/likes`, {
			method: 'DELETE',
			headers: this.headers,
		}).then((res) => this._getResponseData(res));
	}
}

export const api = new Api({
	url: 'https://mesto.nomoreparties.co/v1/cohort-63',
	headers: {authorization: '6e9922b1-82bb-44b1-8c4a-e1a93da7bd0f', 'Content-Type': 'application/json'},
});


