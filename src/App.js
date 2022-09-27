import logo from './images/Vector.svg';
import './index.css';

function App() {
  return (
    <div>
    <div className="page">
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
      </header>
    <main className="content">
        <section className="profile">
            <div className="profile__avatar-container">
                <img className="profile__photo" src="<%=require('./images/man.jpg')%>" alt="Фото профиля"/>
            </div>
            <div className="profile__info">
                <div className="profile__infos">
                    <h1 className="profile__title">Жак-Ив&nbsp;Кусто</h1>
                    <button className="profile__edit-button" type="button"></button>
                </div>
                <p className="profile__subtitle">Исследователь океана</p>
            </div>
            <button className="profile__add-button" type="button"></button>
        </section>
        <section className="elements">

        </section>
    </main>
    <footer className="footer">
        <p className="footer__text ">© 2020 Mesto Russia</p>
    </footer>

    <div className="popup popup_edit ">
        <div className="popup__content">
            <button className="popup__close-button" type="button"></button>
            <h2 className="popup__title ">Редактировать&nbsp;профиль</h2>
            <form className="popup__info popup__form" noValidate>
                <input className="popup__input popup__input_fio" placeholder="Имя " id="fio" type="text" minLength="2" maxLength="40" name="username" required/>
                <span className="popup__error fio-error"></span>
                <input className="popup__input popup__input_job" placeholder="О себе " id="job" type="text" minLength="2" maxLength="200" name="description" required/>
                <span className="popup__error job-error"></span>
                <button className="popup__button " type="submit">Сохранить</button>
            </form>
        </div>
    </div>

    <div className="popup popup_add">
        <div className="popup__content">
            <button className="popup__close-button popup__close-button-add" type="button"></button>
            <form className="popup__info popup__info_add popup__form" noValidate>
                <h2 className="popup__title ">Новое&nbsp;место</h2>
                <input className="popup__input popup__input_title" placeholder="Название " name="name" id="title" type="text" minLength="2" maxLength="30" required/>
                <span className="popup__error title-error"></span>
                <input className="popup__input popup__input_url" placeholder="Ссылка на картинку " name="link" id="url" type="url" required/>
                <span className="popup__error url-error"></span>
                <button className="popup__button " type="submit">Создать</button>
            </form>
        </div>
    </div>

    <div className="popup popup_photo ">
        <div className="popup__case">
            <button className="popup__close-button popup__close-button-photo" type="button"></button>
            <img className="popup__image" src="#" alt=""/>
            <p className="popup__description"></p>
        </div>
    </div>

    <div className="popup popup_avatar">
        <div className="popup__content">
            <button className="popup__close-button popup__close-button-avatar" type="button"></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__info popup__form" noValidate>
                <input className="popup__input popup__input_url" name="link" id="urll" placeholder="Ссылка на картинку" type="url" required/>
                <span className="popup__error urll-error"></span>
                <button className="popup__button" type="submit">Сохранить</button>
            </form>
        </div>
    </div>

    <div className="popup popup_delete">
        <div className="popup__content">
            <button className="popup__close-button popup__close-button-delete" type="button"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="popup__info popup__form popup__form-delete" noValidate>
                <button className="popup__button" type="submit">Да</button>
            </form>
        </div>
    </div>

    <template className="template__element">
    <div className="element">
        <button className="element__delete-button"></button>
        <img className="element__image " src="#" alt=""/>
        <div className="element__info ">
            <h2 className="element__title "></h2>
            <div className="element__likes">
            <button className="element__like-button" type="button"></button>
            <p className="element__like-counter"></p>
            </div>
        </div>
    </div>
    </template>
    </div>
    </div>
  );
}

export default App;
