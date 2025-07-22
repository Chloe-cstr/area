import logoOne from '../../assets/logo_one.png';
import logoTwo from "../../assets/logo_two.png";
import logoThree from "../../assets/logo_three.png";
import logoFour from "../../assets/logo_four.png";
import logoFive from "../../assets/logo_five.png";
import logoSix from "../../assets/logo_six.png";
import './logoCloud.scss'

const LogoCloud = () =>{
    const logos = [
        { id: 1, src: logoOne, alt: "Logo 1" },
        { id: 2, src: logoTwo, alt: "Logo 2" },
        { id: 3, src: logoThree, alt: "Logo 3" },
        { id: 4, src: logoFour, alt: "Logo 4" },
        { id: 5, src: logoFive, alt: "Logo 5" },
        { id: 6, src: logoSix, alt: "Logo 6" },
    ];

    return(
        <div className='logoCloud'>
            <p className='logoCloud__text'>Trusted by:</p>
            <div className="logoCloud__container">
                {logos.map((logo) => (
                    <img key={logo.id} src={logo.src} alt={logo.alt} className="logoCloud__container__img" />
                ))}
            </div>
        </div>
    )
};

export default LogoCloud;