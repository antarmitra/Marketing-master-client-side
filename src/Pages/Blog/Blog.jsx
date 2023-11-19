import blog from '../../assets/blog/b.jpg'
import blog1 from '../../assets/blog/b1.jpg'
import blog2 from '../../assets/blog/b2.jpg'
import { MdArrowForwardIos } from "react-icons/md";

const Blog = () => {
    return (
        <div className='lg:mt-0 md:mt-10 mt-10'>
            <div className="text-center space-y-3">
                <h3 className="text-4xl font-bold">Latest from our Blog</h3>
                <p className="text-xl">Get interesting insights, articles, and news</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:gap-10 md:gap-2 mt-10 mb-10 max-w-7xl mx-auto lg:pl-4'>
                <div className="card bg-base-100 shadow-xl mb-10">
                    <div className='relative overflow-hidden'>
                        <div className='group'>
                            <img className='w-full h-[250px] transition-transform  transform-gpu hover:scale-105 rounded-lg' src={blog} alt="Shoes" />
                        </div>
                    </div>

                    <div className="card-body">
                        <h2 className="card-title text-lg">
                            October 29, 2021
                            <div className="badge text-blue-600 ">Learn</div>
                        </h2>
                        <p className='text-xl font-bold hover:text-blue-600'>Remote Collaboration: Best Practices, Challenges, and Tools</p>
                        <div className="card-actions lg:ml-24 md:ml-8 mt-4">
                            <div className="btn btn-primary rounded-full">See More<MdArrowForwardIos className='text-lg font-bold'/></div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl mb-10">
                <div className='relative overflow-hidden'>
                        <div className='group'>
                            <img className='w-full h-[250px] transition-transform  transform-gpu hover:scale-105 rounded-lg' src={blog1} alt="Shoes" />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-lg">
                            October 09, 2018
                            <div className="badge text-blue-600 ">Skill</div>
                        </h2>
                        <p className='text-xl font-bold hover:text-blue-600'>How to Work From Home: Tips and Companies Hiring Remotely</p>
                        <div className="card-actions lg:ml-24 md:ml-8 mt-4">
                            <div className="btn btn-primary rounded-full">See More<MdArrowForwardIos className='text-lg font-bold'/></div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl mb-10">
                <div className='relative overflow-hidden'>
                        <div className='group'>
                            <img className='w-full h-[250px] transition-transform  transform-gpu hover:scale-105 rounded-lg' src={blog2} alt="Shoes" />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-lg">
                            October 24, 2023
                            <div className="badge text-blue-600 ">Speaking</div>
                        </h2>
                        <p className='text-xl font-bold hover:text-blue-600'>How Many Hours Is Part Time?</p>
                        <div className="card-actions lg:ml-24 md:ml-8 mt-4">
                            <div className="btn btn-primary rounded-full">See More<MdArrowForwardIos className='text-lg font-bold'/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;