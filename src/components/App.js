import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import EditAvatarFormContent from "./EditAvatarFormContent.js";
import EditProfileFormContent from "./EditProfileFormContent.js";
import EditAddFormContent from "./EditAddFormContent.js";
import { useEffect } from "react";
import api from "../utils/Api";
import React from "react";
import ImagePopup from "./ImagePopup";

function App() {
    const [cards, setCards] = React.useState([]);
    const [info, setInfo] = React.useState([]);
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    useEffect(() => {
        api
            .getInitialCards()
            .then((cards) => {
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        api
            .getUserInfo()
            .then((info) => {
                setInfo(info);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [setInfo]);
    // const onCardButtonClick = data => alert(data)

    const [isEditAvatarPopupOpen, setStateAvatar] = React.useState(false);
    function handleEditAvatarClick() {
        setStateAvatar(true);
    }

    const [isEditProfilePopupOpen, setStateProfile] = React.useState(false);
    function handleEditProfileClick() {
        setStateProfile(true);
    }
    const [isAddPlacePopupOpen, setStatePlace] = React.useState(false);
    function handleAddPlaceClick() {
        setStatePlace(true);
    }
    const [isAddConfirmPopupOpen, setStateConfirm] = React.useState(false);
    function handleConfirmPlaceClick() {
        setStateConfirm(true);
    }
    const [isAllPopupsClose, setClosePopups] = React.useState(false);
    function closeAllPopups() {
        setClosePopups(true);
        setStateProfile(false);
        setStatePlace(false);
        setStateAvatar(false);
        setSelectedCard(null);
    }

    return (
        <div className="App" background="#000">
            <div className="body">
                <div className="page">
                    <Header />
                    <Main
                        cards={cards}
                        handleCardClick={handleCardClick}
                        userInfo={info}
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                    ></Main>
                    <Footer />
                    <PopupWithForm
                        name={"update-popup"}
                        title={"Обновить аватар"}
                        onClose={closeAllPopups}
                        isOpen={isEditAvatarPopupOpen}
                    >
                        <EditAvatarFormContent />
                    </PopupWithForm>
                    <PopupWithForm
                        name={"edit-popup"}
                        title={"Редактировать профиль"}
                        onClose={closeAllPopups}
                        isOpen={isEditProfilePopupOpen}
                    >
                        <EditProfileFormContent />
                    </PopupWithForm>
                    <PopupWithForm
                        name={"add-popup"}
                        title={"Новое место"}
                        onClose={closeAllPopups}
                        isOpen={isAddPlacePopupOpen}
                    >
                        <EditAddFormContent />
                    </PopupWithForm>
                    <PopupWithForm
                        name={"confirm-popup"}
                        title={"Вы уверены?"}
                        onClose={closeAllPopups}
                        isOpen={isAddConfirmPopupOpen}
                    >
                    </PopupWithForm>

                    <ImagePopup
                        handleCardClick={handleCardClick}
                        onClose={closeAllPopups}
                        card={selectedCard}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
