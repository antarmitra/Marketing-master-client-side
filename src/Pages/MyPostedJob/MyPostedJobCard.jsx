/* eslint-disable react/prop-types */



const MyPostedJobCard = ({ post }) => {

    const { image, category_name, job_title, deadline, min_price, max_price, description } = post;

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {job_title}
                    </h2>
                    <p className="text-lg font-medium">Category-Name: {category_name}</p>
                    <p>Max-Price: {max_price}</p>
                    <p>Min-Price: {min_price}</p>
                    <p>Deadline: {deadline}</p>
                    <p>Description: {description}</p>
                    <div className="card-actions justify-end">
                        <div className="btn btn-primary text-white mr-5">Update</div>
                        <div className="btn btn-primary text-white">Delete</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPostedJobCard;