import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    const [detailsData, setDetailsData] = useState([]);
    console.log(detailsData);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setDetailsData(data))
    }, []);


    const findDetails = detailsData.find(data => data._id === id);

    if (!findDetails) {

        return <div>Loading...</div>;
    }

    const { image, job_title, deadline, min_price, max_price, description } = findDetails;

    return (
        <div className="card lg:card-side lg:w-[1200px] md:w-[500px] w-[400px] mx-auto bg-base-100 shadow-xl lg:mt-14 md:mt-10 mt-10 mb-14">
            <figure><img className="w-[800px]" src={image} alt="Album" /></figure>
            <div className="card-body lg:mt-14 md:mt-0">
                <h2 className="card-title lg:text-4xl md:text-2xl text-2xl">{job_title}</h2>
                <div className="justify-end space-y-5">
                    <p className="lg:text-2xl md:text-xl text-xl font-medium">Deadline: <span className="text-xl">{deadline}</span></p>
                    <p className="lg:text-2xl md:text-xl text-xl font-medium">Price Range: <span className="text-xl"> {min_price} - {max_price}</span></p>
                    <p className="lg:text-2xl md:text-xl text-xl font-medium">Description: <span className="text-xl">{description}</span></p>
                    <button className="btn btn-primary text-white w-full">Place Your Bid</button>
                </div>
            </div>
        </div>
    );
};

export default Details;
