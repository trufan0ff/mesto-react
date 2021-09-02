import React from "react";
import avatar_edit from '../images/avatar_edit.svg'
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from "../utils/Api";
import { useEffect } from "react";


function Main({cards, onCardLike, onCardDelete, onEditProfile, onAddPlace, onEditAvatar, handleCardClick }) {
    const currentUser = React.useContext(CurrentUserContext);
    // const [cards, setCards] = React.useState([]);

    // function handleCardLike(card) {
    //     // Снова проверяем, есть ли уже лайк на этой карточке
    //     const isLiked = card.likes.some(i => i._id === currentUser._id);
        
    //     // Отправляем запрос в API и получаем обновлённые данные карточки
    //     api.setLikeForCard(card._id, !isLiked)
    //         .then((newCard) => {
    //             setCards((state) => 
    //                 state.map((c) => c._id === card._id ? newCard : c)
    //                 )
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // } 

    // function handleCardDelete(card) {
    //     const isOwn = card.owner._id === currentUser._id;
    //     api.deleteCard(card._id, isOwn)
    //     .then(res => {
    //         setCards((state) => {
    //             state.filter(item => item === card._id ? res : item)
    //         })
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // }

    // useEffect(() => {
    //     api.getInitialCards()
    //         .then((cards) => {
    //             setCards(cards);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);

    
    return (
        <main> 
        <section className="profile"> 
                <div className="profile__avatar-group"> 
                    <img src={currentUser.avatar} style={{ backgroundImage: `url(${currentUser.avatar})` }} className="profile__avatar" alt="Аватар" onClick={onEditAvatar}/> 
                    <img src ={avatar_edit} className="profile__avatar-edit" alt="Карандаш" /> 
                </div> 
                <div className="profile__group"> 
                    <div className="profile__info"> 
                        <div className="profile__edit"> 
                            <h1 className="profile__title">{currentUser.name}</h1> 
                            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button> 
                        </div> 
                        <p className="profile__subtitle">{currentUser.about}</p> 
                    </div> 
                    <button className="profile__add-button" type = "button" onClick={onAddPlace}></button> 
                </div> 
        </section> 

        <section className="elements"> 
        {cards.map((card) => <Card key={card._id} onCardDelete={onCardDelete} onCardClick={handleCardClick} onCardLike={onCardLike} card={card} />)}
        </section> 
</main>
    )
}
export default Main;