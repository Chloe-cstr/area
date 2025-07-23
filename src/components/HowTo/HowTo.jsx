import './howto.scss';
import Button from '../Button/Button';
import Card from '../Card/Card';
import image from '../../assets/image_paysage.png'

const HowTo = () =>{
    const howtoData = [
        {
            "id": 1,
            "icon": "01",
            "title": "Get Started",
            "text": "With our intuitive setup, you’re up and running in minutes."
        },
        {
            "id": 2,
            "icon": "02",
            "title": "Customize and Configure",
            "text": "Adapt Area to your specific requirements and preferences."
        },
        {
            "id": 3,
            "icon": "03",
            "title": "Grow Your Business",
            "text": "Make informed decisions to exceed your goals."
        }
    ]

    return(
        <div className="howto">
            <div className='howto__title'>
                <h2 className="howto__title__text">Map Your Success</h2>
                <Button 
                    text="Discover More"
                    className="button__empty howto__title__button"
                    link="https://github.com/Chloe-cstr?tab=repositories"
                />
            </div>
            <div className='howto__cards'>
                {howtoData.map((card) => (
                    <div className='howto__cards__content'>
                        <Card
                            key={card.id}
                            icon={card.icon}
                            title={card.title}
                            text={card.text}
                            isSpan
                        />
                    </div>
                ))}
            </div>
            <img src={image} alt="image d'un paysage" className='howto__image' />
        </div>
    )
};

export default HowTo;