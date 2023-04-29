function Card(props) {
  const {card, onCardClick} = props
  function handleClick() {
    onCardClick(card)
  }
  return (<li className="card" key={card._id}>
    <img className="card__img" src={card.link} alt={card.name} onClick={handleClick} />
    <h2 className="card__title">{card.name}</h2>
    <div className="card__likes-container">
      <button type="button" className="card__like"></button>
      <p className="card__like_el_count">{card.likes.length}</p>
    </div>
    <div className="card__trash"></div>
  </li>);

}

export default Card;