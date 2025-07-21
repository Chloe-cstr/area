import BannerDesktop from '../../assets/banner_desktop.png';
import BannerTablet from '../../assets/banner_tablet.png';
import BannerMobile from '../../assets/banner_mobile.png';
import './hero.scss';

const Hero = () =>{
    return(
        <div className='hero'>
            <h2 className='hero__title'>Browse everything.</h2>
            <img src={BannerDesktop} alt="Tableau interactif montrant une amélioration de l'efficacité sur fond de paysage naturel" className='hero__image--desktop' />
            <img src={BannerTablet} alt="Tableau interactif montrant une amélioration de l'efficacité sur fond de paysage naturel" className='hero__image--tablet' />
            <img src={BannerMobile} alt="Tableau interactif montrant une amélioration de l'efficacité sur fond de paysage naturel" className='hero__image--mobile' />
        </div>
    )
};

export default Hero;