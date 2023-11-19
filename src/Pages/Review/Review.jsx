import person from '../../assets/review/p1.jpg'
import view from '../../assets/review/p2.jpg'
import { BsBoxArrowUpRight } from "react-icons/bs";

const Review = () => {
    return (
        <div className="hero min-h-screen  max-w-7xl mx-auto lg:mt-0 md:mt-16 mt-16 ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative lg:ml-10 md:ml-5 ml-5">
                    <img src={person} className="w-3/4  rounded-lg shadow-2xl" />
                    <img src={view} className="md:w-[250px] w-[150px]  absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className="lg:w-1/2 space-y-4 lg:mt-0 md:mt-20 mt-28 lg:text-start md:text-center text-center lg:ml-28">
                    <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-blue-600">Read company reviews to avoid <br /> career mistakes</h1>
                    <p className="py-6 lg:text-lg md:text-base text-base">Read what employees are saying about companies. </p>
                    <button className="btn btn-primary rounded-full text-white">Explore Company Review <BsBoxArrowUpRight className='text-lg font-bold'></BsBoxArrowUpRight></button>
                </div>
            </div>
        </div>
    );
};

export default Review;