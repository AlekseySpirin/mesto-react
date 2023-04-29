function ImagePopup (props){
 const {selectedCard, onClose} = props
 return (<div className={`pop-up pop-up_place_img ${selectedCard ? 'pop-up_active' : ''}`}>
   <div className="pop-up__container pop-up__container_place_img">
     <img className="pop-up__img" src={selectedCard ? selectedCard.link : ''} alt={selectedCard ? selectedCard.name : ''}/>
     <h2 className="pop-up__title-img" >{selectedCard ? selectedCard.name : ''}</h2>
     <button type="button" onClick={onClose} className="pop-up__close pop-up__close_place_place"></button>
   </div>
 </div>)
}
export default ImagePopup