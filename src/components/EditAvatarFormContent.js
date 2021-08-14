function EditAvatarFormContent() {
    return (
    <>
        <input className="popup__input popup__input_type_link-avatar" id="link-avatar-input" pattern="https://.*" type="url" required placeholder="Ссылка на картинку" name="link-avatar-input" /> 
        <span className="link-avatar-input-error"/>
    </>
    )
}

export default EditAvatarFormContent;