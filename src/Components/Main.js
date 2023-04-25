

function Main(){

  function handleAvatarClick() {
  const avatar = document.querySelector('#avatar')
    document.querySelector('.pop-up_place_update-avatar').classList.add('pop-up_active')
  }

  function handleEditProfileClick() {
    const profile = document.querySelector('.profile__edit-button')
    document.querySelector('.pop-up_place_profile').classList.add('pop-up_active')
  }

  function handleAddPlaceClick() {
    const place = document.querySelector('.profile__add-button')
    document.querySelector('.pop-up_place_add-place').classList.add('pop-up_active')
  }

  return (
    <main className="main">
      <section className="profile">

        <button onClick={handleAvatarClick} id="avatar" className="profile__avatar"></button>
        <div className="profile__desc">
          <button onClick={handleEditProfileClick} type="button" className="profile__edit-button"></button>
          <h1 className="profile__name"></h1>

          <p className="profile__info"></p>
        </div>

        <button onClick={handleAddPlaceClick} type="button" className="profile__add-button"></button>
      </section>
      <section className="places">
        <ul className="cards"></ul>
      </section>
    </main>
  )
}
export default Main