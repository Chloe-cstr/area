import './contact.scss';
import Button from '../Button/Button';

const Contact = () => {
    return(
        <div className='contact'>
            <h2 className='contact__title'>Connect with us</h2>
            <p className='contact__text'>Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.</p>
            <Button 
                text="Learn More"
                className="button__full"
                link="https://github.com/Chloe-cstr?tab=repositories"
                icon="fa-solid fa-up-right-from-square"
            />
        </div>
    )
};

export default Contact;