import api from '../utils/Api.js'
import {useEffect, useState} from 'react';

function Main(props){
    const[userName, setUserName]=useState('');
    const[userDescription, setUserDescription]=useState('');
    const[userAvatar, setUserAvatar]=useState('');

    useEffect(()=>{
        api.getUserInfo()
        .then((e) => {
            setUserName(e.name);
            setUserDescription(e.about);
            setUserAvatar(e.avatar);
        });
    })
    return(
        <>
        <main className="content">
        <section className="profile">
            <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                <img className="profile__photo" src={userAvatar} alt="Фото профиля"/>
            </div>
            <div className="profile__info">
                <div className="profile__infos">
                    <h1 className="profile__title">{userName}</h1>
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                </div>
                <p className="profile__subtitle">{userDescription}</p>
            </div>
            <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
        </section>
        <section className="elements">

        </section>
    </main>
        </>
    )
}

export default Main;