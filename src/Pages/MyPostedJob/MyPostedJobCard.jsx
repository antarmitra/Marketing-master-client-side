/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const MyPostedJobCard = ({ post, handleDeleteItem }) => {

    const { _id, image, category_name, job_title, deadline, min_price, max_price, description } = post;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://marketing-master-server.vercel.app/category/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your post has been deleted.",
                                icon: "success"
                            });
                            handleDeleteItem(_id)
                        }
                    })
            }
        });
    }


    return (
        <div>
            <div className="card h-[600px] bg-base-100 shadow-xl">
                <figure><img className="w-[500px] h-[200px]" src={image} alt="Shoes" /></figure>
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
                        <Link to={`/updatejob/${_id}`}>
                            <div className="btn btn-primary text-white mr-5">Update</div>
                        </Link>
                        <div onClick={() => handleDelete(_id)} className="btn btn-primary text-white">Delete</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPostedJobCard;