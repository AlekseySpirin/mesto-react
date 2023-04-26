import {useEffect, useState} from "react";
import {api} from "../utils/Api";


function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [userId, setUserId] = useState(null)



  useEffect(() => {
    api.getServerUserInfo().then((info) => {

      setUserId(info.id)
      setUserName(info.name)
      setUserDescription(info.about)
      setUserAvatar(info.avatar)
    }  )
  })

  return (
    <main className="main">
      <section className="profile">

        <button onClick={onEditAvatar} id="avatar" style={{ backgroundImage: `url(${userAvatar})` }} className="profile__avatar"></button>
        <div className="profile__desc">
          <button onClick={onEditProfile} type="button" className="profile__edit-button"></button>
          <h1 className="profile__name">{userName}</h1>

          <p className="profile__info">{userDescription}</p>
        </div>

        <button onClick={onAddPlace} type="button" className="profile__add-button"></button>
      </section>
      <section className="places">
        <ul className="cards"></ul>
      </section>
    </main>
  );
}

export default Main;