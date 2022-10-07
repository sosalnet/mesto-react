import api from '../utils/Api.js'
import {useEffect, useState} from 'react';
import Card from './Card.js';
import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function Main(props){
    const currentUser = React.useContext(CurrentUserContext);
    const[cards, setCards]=useState([]);

    useEffect(()=>{
        api.getCards()
        .then((res) => {
            setCards(res);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return(
        <main className="content">
        <section className="profile">
            <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                <img className="profile__photo" src={currentUser.avatar} alt="Фото профиля"/>
            </div>
            <div className="profile__info">
                <div className="profile__infos">
                    <h1 className="profile__title">{currentUser.name}</h1>
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                </div>
                <p className="profile__subtitle">{currentUser.about}</p>
            </div>
            <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
        </section>
        <section className="elements">
            {cards.map((card) => 
                <Card key={card._id} card={card} onCardClick={props.onCardClick}/>
            )}
        </section>
    </main>
    )
}

export default Main;