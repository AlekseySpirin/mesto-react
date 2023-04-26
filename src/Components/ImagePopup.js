function ImagePopup (){

  return (
    <template id="card-template" className="card-template">
      <li className="card">
        <img className="card__img" src="#" alt="#"/>
        <h2 className="card__title">1</h2>
        <div className="card__likes-container">
          <button type="button" className="card__like"></button>
          <p className="card__like_el_count">0</p>
        </div>

        <div className="card__trash"></div>
      </li>
    </template>
  )
}
export default ImagePopup