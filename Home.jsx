import slideOne from "../assets/images/home/1.webp";
import slideTwo from "../assets/images/home/2.webp";
import slideThree from "../assets/images/home/3.webp";
import slideFour from "../assets/images/home/4.webp";
import slideFive from "../assets/images/home/5.webp";
import ProductList from "../components/Products/ProductList";

function Home(){
    return(
        <>
            <section className="block">
                <div className="container">
                <h1 className="title">Добро пожаловать в Pizzafy!</h1>
                <div className="stories-list">
                    <img src={slideOne} alt="1" />
                    <img src={slideTwo} alt="2" />
                    <img src={slideThree} alt="3" />
                    <img src={slideFour} alt="4" />
                    <img src={slideFive} alt="5" />
                </div>
                </div>
            </section>
            <section className="block">
                <div className="container">
                    <h1 className="title">Меню</h1>
                    <ProductList />
                </div>
            </section>
        </>
    );
}

export default Home;