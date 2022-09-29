function Main(props){
    return(
        <>
        <main className="content">
        <section className="profile">
            <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                <img className="profile__photo" src="<%=require('./images/man.jpg')%>" alt="Фото профиля"/>
            </div>
            <div className="profile__info">
                <div className="profile__infos">
                    <h1 className="profile__title">Жак-Ив&nbsp;Кусто</h1>
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                </div>
                <p className="profile__subtitle">Исследователь океана</p>
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