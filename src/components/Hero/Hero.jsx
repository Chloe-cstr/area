import BannerDesktop from '../../assets/banner_desktop.png';
import './hero.scss';

const Hero = () =>{
    return(
        <div className='hero'>
            <h2 className='hero__title'>Browse everything.</h2>
            <img src={BannerDesktop} alt="Tableau interactif montrant une amélioration de l'efficacité sur fond de paysage naturel" className='hero__image' />
        </div>
    )
};

export default Hero;