function ImagePopup (props){

 return (<div className={`pop-up pop-up_place_img ${props.selectedCard ? 'pop-up_active' : ''}`}>
   <div className="pop-up__container pop-up__container_place_img">
     <img className="pop-up__img" src={props.selectedCard ? props.selectedCard.link : ''} alt={props.selectedCard ? props.selectedCard.name : ''}/>
     <h2 className="pop-up__title-img" >{props.selectedCard ? props.selectedCard.name : ''}</h2>
     <button type="button" onClick={props.onClose} className="pop-up__close pop-up__close_place_place"></button>
   </div>
 </div>)
}
export default ImagePopup