import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import {useState, useEffect} from 'react';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from '../utils/Api.js'
import EditProfilePopup from './EditProfilePopup.js';

function App() {
    
    const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const[selectedCard, setSelectedCard] = useState({});
    const[currentUser, setCurrentUser] = useState({});

    function handleEditProfileClick(){
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick(){
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick(){
        setIsEditAvatarPopupOpen(true);
    }

    function handleCardClick(card){
        setSelectedCard(card)
    }

    function closeAllPopup(){
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard({})
    }

    function handleUpdateUser(e){
        api.setUserInfo(e.name, e.about)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopup();
            })
            .catch((res) => {
                console.log(res);
            })
            }
            
    useEffect(()=>{
        api.getUserInfo()
        .then((e) => {
            setCurrentUser(e);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

  return (
    <div className="app">
    <CurrentUserContext.Provider value={currentUser}>
    <Header/>
    <Main onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}/>
    <Footer/>

    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopup} onUpdateUser={handleUpdateUser}/>

    <PopupWithForm title='Новое место' name='add' textButton="Сохранить" isOpen={isAddPlacePopupOpen} onClose={closeAllPopup}>
        <input className="popup__input popup__input_title" placeholder="Название " name="name" id="title" type="text" minLength="2" maxLength="30" required/>
        <span className="popup__error title-error"></span>
        <input className="popup__input popup__input_url" placeholder="Ссылка на картинку " name="link" id="url" type="url" required/>
        <span className="popup__error url-error"></span>
    </PopupWithForm>
        
    <PopupWithForm title='Обновить аватар' name='avatar' textButton="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopup}>
        <input className="popup__input popup__input_url" name="link" id="urll" placeholder="Ссылка на картинку" type="url" required/>
        <span className="popup__error urll-error"></span>
    </PopupWithForm>

    <ImagePopup card={selectedCard} onClose={closeAllPopup}/>

    <PopupWithForm name='delete' title='Вы уверены?'  textButton='Да'/>

    
    </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
