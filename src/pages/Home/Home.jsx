import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import LogoCloud from "../../components/LogoCloud/LogoCloud";
import './home.scss';

const Home = () =>{
    return(
        <div className="container">
            <Header />
            <div className="container__hero">
                <Hero />
            </div>
            <div className="container__logoCloud">
                <LogoCloud />
            </div>
        </div>
    )
}

export default Home;