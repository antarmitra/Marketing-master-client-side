
import { Helmet } from "react-helmet";
import Blog from "../../Blog/Blog";
import Review from "../../Review/Review";
import Category from "../Category/Category";
import Slider from "../Slider/Slider";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>
            <Category></Category>
            <Review></Review>
            <Blog></Blog>
        </div>
    );
};

export default Home;