import './benefits.scss';
import Card from '../Card/Card';
import imageMontagnes from '../../assets/image_montagnes.png';
import imageUn from '../../assets/image_feuille.png';
import imageDeux from '../../assets/image_clavier.png';
import imageTrois from '../../assets/image_bougie.png';
import Button from '../Button/Button';
import Slider from '../Slider/Slider';

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

    const stepsData = [
        {
          "id": 1,
          "number": "01",
          "text": "Spot Trends in Seconds: No more digging through numbers."
        },
        {
          "id": 2,
          "number": "02",
          "text": "Get Everyone on the Same Page: Share easy-to-understand reports with your team."
        },
        {
          "id": 3,
          "number": "03",
          "text": "Make Presentations Pop: Interactive maps and dashboards keep your audience engaged."
        },
        {
          "id": 4,
          "number": "04",
          "text": "Your Global Snapshot: Get a quick, clear overview of your entire operation."
        }
    ]

    const sliderImages = [
      imageUn,
      imageDeux,
      imageTrois
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
            <div className='benefits__container'>
                <div className='benefits__container__description'>
                    <h5 className='benefits__container__description__title'>See the Big Picture</h5>
                    <p className='benefits__container__description__text'>Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.</p>
                    <div className='benefits__container__description__steps'>
                        {stepsData.map((step) => (
                            <div className='benefits__container__description__steps__item'>
                                <span className='benefits__container__description__steps__item--number'>{step.number}</span>
                                <p className='benefits__container__description__steps__item--text'>{step.text}</p>
                            </div>
                        ))}
                    </div>
                    <Button
                        text="Discover More"
                        className="button__empty"
                        link="https://github.com/Chloe-cstr?tab=repositories"
                    />
                </div>
                <div className='benefits__container__slider'>
                  <Slider images={sliderImages} />
                </div>
            </div>
        </div>
    )
};

export default Benefits;