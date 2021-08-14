function Card({card, onCardClick}) {
    
    function handleClick() {
        onCardClick(card);
    }
    return (
        <> 
            <div className="element"> 
                <img src={card.link} style={{ backgroundImage: `url(${card.link})` }} onClick={handleClick} className="element__image" alt={card.name} /> 
                <button className="element__delete element__delete_type_hidden" type = "button"></button> 
                <div className="element__group"> 
                    <h2 className="element__title">{card.name}</h2> 
                    <div className="element__group_likes"> 
                        <button className="element__heart" type = "button" />
                        <h2 className= "element__count_heart">{card.likes.length}</h2> 
                    </div> 
                    
                </div> 
            </div> 
        </>
    )
    
}


export default Card;