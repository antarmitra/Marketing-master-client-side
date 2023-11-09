import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from 'react-icons/Fa';

const Category = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => {
                console.log("Fetched data:", data);
                setCategory(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const findCategoryData = (label) => {
        return category.filter((item) => item.category_name === label);
    };

    const tabData = [
        "Web Development",
        "Digital Marketing",
        "Graphic Design",
    ];

    const selectedTabData = findCategoryData(tabData[activeTab]);
    console.log("selected data", selectedTabData);

    const tabContent = (
        <div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 max-w-7xl mx-auto">
                {selectedTabData.map((item, index) => (
                    <div key={index}>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={item.image} alt="Shoes" className="rounded-md w-[400px] h-[150px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{item.job_title}</h2>
                                <p>Deadline: {item.deadline}</p>
                                <p>Price: {item.min_price}</p>
                                <p>Price: {item.max_price}</p>
                                <button className="btn btn-primary w-full rounded-full text-white text-base">Bid Now <FaLongArrowAltRight className="text-lg font-bold"></FaLongArrowAltRight></button>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );


    return (
        <div className=" max-w-screen-xl mx-auto">

            <div className="text-center mt-10">
                <h1 className="text-4xl font-bold">Our Cate<span className="text-blue-500">gory</span></h1>
            </div>

            <div className="mt-10 pl-1 gap-2 md:pl-20 lg:pl-48 grid grid-cols-3">
                {tabData.map((label, index) => (
                    <li
                        key={index}
                        className={activeTab === index ? "active" : ""}
                        onClick={() => setActiveTab(index)}
                        style={{ listStyle: 'none' }}
                    >
                        <button className="btn">{label}</button>
                    </li>
                ))}
            </div>
            <div className="tab-content">{tabContent}</div>
        </div>
    );
};

export default Category;
