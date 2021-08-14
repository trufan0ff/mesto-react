// import zspv3skF7z0 from '../images/zspv3skF7z0.jpg'
import avatar_edit from '../images/avatar_edit.svg'
import Card from './Card';

function Main({userInfo, cards, onEditProfile, onAddPlace, onEditAvatar, handleCardClick}) {
    return (
        <main> 
        <section className="profile"> 
                <div className="profile__avatar-group"> 
                    <img src={userInfo.avatar} style={{ backgroundImage: `url(${userInfo.avatar})` }} className="profile__avatar" alt="Аватар" onClick={onEditAvatar}/> 
                    <img src ={avatar_edit} className="profile__avatar-edit" alt="Карандаш" /> 
                </div> 
                <div className="profile__group"> 
                    <div className="profile__info"> 
                        <div className="profile__edit"> 
                            <h1 className="profile__title">{userInfo.name}</h1> 
                            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button> 
                        </div> 
                        <p className="profile__subtitle">{userInfo.about}</p> 
                    </div> 
                    <button className="profile__add-button" type = "button" onClick={onAddPlace}></button> 
                </div> 
        </section> 

        <section className="elements"> 
            {cards.map((card) => <Card key={card._id} onCardClick={handleCardClick} card={card} />)}
        </section> 
</main>
    )
}
export default Main;