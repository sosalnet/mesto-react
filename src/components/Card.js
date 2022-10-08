import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike}){

    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (`${isOwn ? 'element__delete-button' : ''}`)
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (`element__like-button ${isLiked ? 'element__like-button_active' : ''}`);

    function handleClick(){
        onCardClick(card);
    }

    function handleClickLike() {
        onCardLike(card);
      }
    
    return (
        <div className="element">
            <button className="element__delete-button"></button>
            <img className="element__image " src={card.link} alt={card.name} onClick={handleClick}/>
            <div className="element__info ">
                <h2 className="element__title ">{card.name}</h2>
                <div className="element__likes">
                <button className={cardLikeButtonClassName} type="button" onClick={handleClickLike}></button>
                <p className="element__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}
export default Card;

