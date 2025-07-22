import './benefits.scss';
import Card from '../Card/Card';
import imageMontagnes from '../../assets/image_montagnes.png'

const Benefits = () =>{
    const cardsData = [
        {
          "id": 1,
          "icon": "fa-solid fa-link", 
          "title": "Amplify Insights",
          "text": "Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth."
        },
        {
          "id": 2,
          "icon": "fa-solid fa-earth-americas", 
          "title": "Control Your Global Presence",
          "text": "Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere."
        },
        {
          "id": 3,
          "icon": "fa-solid fa-language", 
          "title": "Remove Language Barriers",
          "text": "Adapt to diverse markets with built-in localization for clear communication and enhanced user experience."
        },
        {
          "id": 4,
          "icon": "fa-solid fa-chart-line", 
          "title": "Visualize Growth",
          "text": "Generate precise, visually compelling reports that illustrate your growth trajectories across all regions."
        }
    ]

    return(
        <div className="benefits">
            <div className="benefits__title">
                <h2>Browse <br /> everything.</h2>
                <h3>Benefits</h3>
            </div>
            <p className='benefits__text'>Area provides real insights, without the data overload.</p>
            <div className='benefits__cards'>
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        text={card.text}
                    />
                ))}
            </div>
            <img src={imageMontagnes} alt="Images de Montagnes" className='benefits__img' />
        </div>
    )
};

export default Benefits;