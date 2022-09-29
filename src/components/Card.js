function Card(props){
    function handleCardClick(){
        props.onCardClick(props.card);
    }
    
    return (
        <div className="element">
            <button className="element__delete-button"></button>
            <img className="element__image " src={props.card.link} alt={props.card.name} onClicl={handleCardClick}/>
            <div className="element__info ">
                <h2 className="element__title ">{props.card.name}</h2>
                <div className="element__likes">
                <button className="element__like-button" type="button"></button>
                <p className="element__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}
export default Card;