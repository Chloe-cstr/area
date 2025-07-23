import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import LogoCloud from "../../components/LogoCloud/LogoCloud";
import Benefits from "../../components/Benefits/Benefits";
import Specs from "../../components/Specs/Specs";
import './home.scss';

const Home = () =>{
    return(
        <div className="container">
            <div className="container__header">
                <Header />
            </div>
            <div className="container__hero">
                <Hero />
            </div>
            <div className="container__logoCloud">
                <LogoCloud />
            </div>
            <div className="container__benefits" id="benefits">
                <Benefits />
            </div>
            <div className="container__specs" id="specs">
                <Specs />
            </div>
        </div>
    )
}

export default Home;