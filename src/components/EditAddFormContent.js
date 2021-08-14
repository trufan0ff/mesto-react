function EditAddFormContent() {
    return (
    <>
        <input className="popup__input popup__input_type_mesto-name" id="name" type="text" minLength="2" maxLength="30" required name="name" placeholder="Название" /> 
        <span className="name-error"></span> 
        <input className="popup__input popup__input_type_link" id="link" pattern="https://.*" type="url" name="link" required placeholder="Ссылка на картинку" /> 
        <span className="link-error"></span>
    </>
    )
}

export default EditAddFormContent;