import PropTypes from 'prop-types';
import "./card.scss";

const Card = ({ icon, title, text, isSpan = false }) =>{

    return(
        <div className='content-card benefits__cards--width howto__cards__content--width'>
            {isSpan ? (
                <span className="content-card__span">{icon}</span>
            ) : (
                <i className={`content-card__icon ${icon}`}></i>
            )}
            <h4 className='content-card__title'>{title}</h4>
            <p className='content-card__text'>{text}</p>
        </div>
    )
}

Card.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isSpan: PropTypes.bool,
}

export default Card;