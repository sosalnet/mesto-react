function Main(){
    return(
        <>
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
        </>
    )
}

export default Main;