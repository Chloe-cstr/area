import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import './home.scss';

const Home = () =>{
    return(
        <div className="container">
            <Header />
            <div className="container__hero">
                <Hero />
            </div>
        </div>
    )
}

export default Home;