import './header.scss'
import { useState, useEffect } from "react";
import Button from '../Button/Button';

const Header = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
            });
        },
        {
            threshold: 0.6, // quand 60% de la section est visible
        }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const navItems = [
        { label: "Benefits", href: "#benefits" },
        { label: "Specifications", href: "#specs" },
        { label: "How-to", href: "#howto" },
        { label: "Contact Us", href: "#contact" },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => { 
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
          document.body.style.overflow = "hidden"; // empêche de scroller
        } else {
          document.body.style.overflow = ""; // remet normal
        }
    
        // Nettoyage au démontage (bonne pratique)
        return () => {
          document.body.style.overflow = "";
        };
      }, [isMenuOpen]);    

    return (
        <header className="header">
            <h1 className='header__logo'>Area</h1>
            <nav className={`header__nav ${isMenuOpen ? "open" : ""}`}>
                <ul className="header__nav__list">
                    {navItems.map((item) => (
                        <li className="header__nav__item" key={item.href}>
                            <a
                            href={item.href}
                            className={`header__nav__item__maj ${
                                activeSection === item.href.slice(1) ? "active" : ""
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                            >
                            {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="header__nav__button">
                    <Button
                        text="Learn More"
                        className="button__full"
                        link="https://github.com/Chloe-cstr?tab=repositories"
                        icon="fa-solid fa-up-right-from-square"
                    />
                </div>
            </nav>
            <div className="header__button--desktop">
                <Button 
                    text="Learn More"
                    className="button__full"
                    link="https://github.com/Chloe-cstr?tab=repositories"
                    icon="fa-solid fa-up-right-from-square"
                />
            </div>
            <div className='header__menu'>
                <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"} header__menu__icon`} onClick={toggleMenu}></i>
            </div>
        </header>
    );
};

export default Header;