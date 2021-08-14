import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditAvatarFormContent from './EditAvatarFormContent.js';
import EditProfileFormContent from './EditProfileFormContent.js';
import EditAddFormContent from './EditAddFormContent.js';
import { useEffect } from 'react';
import api from '../utils/Api';
import React from 'react';
import ImagePopup from './ImagePopup';

function App() {
    const [cards, setCards] = React.useState([])
    const [info, setInfo] = React.useState([])
    const [selectedCard, setSelectedCard  ] = React.useState(null)

    function handleCardClick(card) {
        setSelectedCard(card)
    }

    useEffect(() => {
        api.getInitialCards()
            .then(cards => {
                setCards(cards)
            })    
    }, [])

    
    useEffect(() => {
        api.getUserInfo().then(info => {
            setInfo(info)
        })
    },[setInfo])
    // const onCardButtonClick = data => alert(data)

    const [isEditAvatarPopupOpen, setStateAvatar] = React.useState(false)
    function handleEditAvatarClick() {
        setStateAvatar(true);
    } 

    const [isEditProfilePopupOpen, setStateProfile] = React.useState(false)
    function handleEditProfileClick() {
        setStateProfile(true);
        
    }
    const [isAddPlacePopupOpen, setStatePlace] = React.useState(false)
    function handleAddPlaceClick() {
        setStatePlace(true)
    }
    const [isAllPopupsClose, setClosePopups] = React.useState(false)
    function closeAllPopups() {
        setClosePopups(true)
        setStateProfile(false)
        setStatePlace(false)
        setStateAvatar(false)
        setSelectedCard(null)
    }
    

    return (
    <div className="App" background='#000'>
        <div className="body"> 
                <div className="page"> 
                    <Header />
                    <Main cards={cards} handleCardClick={handleCardClick} userInfo={info} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} >
                    </Main>
                    <Footer />
                    <PopupWithForm name={'update-popup'} title={'Обновить аватар'} onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen}>
                        <EditAvatarFormContent />
                    </PopupWithForm>
                    <PopupWithForm name={'edit-popup'} title={'Редактировать профиль'} onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} >
                        <EditProfileFormContent />
                    </PopupWithForm>
                    <PopupWithForm name={'add-popup'} title={'Новое место'} onClose={closeAllPopups} isOpen={isAddPlacePopupOpen}>
                        <EditAddFormContent />
                    </PopupWithForm>
                    <PopupWithForm name={'confirm-popup'} title={'Вы уверены?'} onClose={closeAllPopups} isOpen={isAddPlacePopupOpen}>
                    </PopupWithForm>
                    
                    <ImagePopup handleCardClick={handleCardClick} onClose={closeAllPopups} card={selectedCard}  />


        {/* <section className="popup popup_type_edit-popup" id = "edit-popup"> 
            <div className="popup__container"> 
                <button className="popup__close" type="button"></button> 
                <h2 className="popup__title">Редактировать профиль</h2> 
                <form className="popup__form" name="form-edit" novalidate> 
                    <input className="popup__input popup__input_type_name" id="name-input" minlength="2" maxlength="40" required type="text" name="name" placeholder="Ваше имя" /> 
                    <span className="name-input-error"></span> 
                    <input className="popup__input popup__input_type_activity" id="about" minlength="2" maxlength="200" required type="text" name="activity" placeholder="О себе" /> 
                    <span className="about-error"></span> 
                    <button className="popup__submit" type="submit">Сохранить</button> 
                </form> 
            </div> 
        </section> 

        <form className="popup popup_type_confirm-popup" id = "confirm-popup"> 
            <div className="popup__container"> 
                <button className="popup__close" type="button"></button> 
                <h2 className="popup__title">Вы уверены?</h2> 
                    <button className="popup__submit" type="submit">Да</button> 
            </div> 
        </form> 

        <section className="popup popup_type_update-popup" id = "update-popup"> 
            <div className="popup__container"> 
                <button className="popup__close" type="button"></button> 
                <h2 className="popup__title">Обновить аватар</h2> 
                <form className="popup__form" name="form-avatar" novalidate> 
                    <input className="popup__input popup__input_type_link-avatar" id="link-avatar-input" pattern="https://.*" type="url" required placeholder="Ссылка на картинку" name="link-avatar-input" /> 
                    <span className="link-avatar-input-error"></span> 
                    <button className="popup__submit" type="submit">Сохранить</button> 
                </form> 
            </div> 
        </section> 

        <section className="popup popup_type_add-popup" id = "add-popup"> 
            <div className="popup__container"> 
                <button className="popup__close" type="button"></button> 
                <h2 className="popup__title">Новое место</h2> 
                <form className="popup__form" name="form-add" novalidate> 
                    <input className="popup__input popup__input_type_mesto-name" id="name" type="text" minlength="2" maxlength="30" required name="name" placeholder="Название" /> 
                    <span className="name-error"></span> 
                    <input className="popup__input popup__input_type_link" id="link" pattern="https://.*" type="url" name="link" required placeholder="Ссылка на картинку" /> 
                    <span className="link-error"></span> 
                    <button className="popup__submit" type="submit">Создать</button> 
                </form> 
            </div> 
        </section>  */}

    </div> 

    {/* <template className = "item-template"> 
        <div className="element"> 
            <img src="#" className="element__image" alt="Изображение" /> 
            <button className="element__delete element__delete_type_hidden" type = "button"></button> 
            <div className="element__group"> 
                    <h2 className="element__title">Название</h2> 
                    <div className="element__group_likes"> 
                        <button className="element__heart" type = "button"></button> 
                        <h2 className= "element__count_heart">0</h2> 
                    </div> 
                    
            </div> 
        </div> 
    </template>   */}
    </div>
    </div>
    );
}

export default App;
