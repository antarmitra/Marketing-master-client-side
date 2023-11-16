import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify"


const UpdateJob = () => {
    const { user } = useContext(AuthContext)

    const updateData = useLoaderData();

    const { _id, image, category_name, job_title, deadline, min_price, max_price, description } = updateData;


    const handleUpdateJob = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.photo.value;
        const email = form.email.value;
        const category_name = form.category.value;
        const job_title = form.title.value;
        const deadline = form.deadline.value;
        const min_price = form.minPrice.value;
        const max_price = form.maxPrice.value;
        const description = form.description.value;
        const newUpdateJob = { image, email, category_name, job_title, deadline, min_price, max_price, description };
        console.log(newUpdateJob)


        // sent data to server
        fetch(`http://localhost:5000/category/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUpdateJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {

                    toast.success('Updated Successfully')
                }
            })
    }



    return (
        <div>
            <div>
                <div className="bg-white shadow-lg p-5 mt-5 mb-5 rounded-lg max-w-screen-lg mx-auto">
                    <h2 className="text-4xl font-extrabold text-center text-black">Add Jobs</h2>
                    <form onSubmit={handleUpdateJob} >
                        {/* photo and email */}
                        <div className="md:flex gap-4 mt-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-lg font-medium text-gray-600">Photo_URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="photo" defaultValue={image} placeholder="photo url...." className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-lg font-medium text-gray-600">User Email</span>
                                </label>
                                <label className="input-group">
                                    <input type="email" name="email" defaultValue={user?.email} readOnly placeholder="User Email...." className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        {/* category and job title */}
                        <div className="md:flex gap-4 mt-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-lg font-medium text-gray-600">Category</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="category" defaultValue={category_name}  placeholder="Category...." className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-lg font-medium text-gray-600">Job Title</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="title" defaultValue={job_title} placeholder="Job Title....." className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        {/* deadline and price */}
                        <div className="md:flex gap-4 mt-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-lg font-medium text-gray-600">Deadline</span>
                                </label>
                                <label className="input-group">
                                    <input type="date" name="deadline" defaultValue={deadline}  placeholder="Deadline....." className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-lg font-medium text-gray-600">Minimum Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="minPrice" defaultValue={min_price}  placeholder="Minimum Price...." className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        {/* price and description */}
                        <div className="md:flex gap-4 mt-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-lg font-medium text-gray-600">Maximum Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="maxPrice" defaultValue={max_price}  placeholder="Maximum Price...." className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-lg font-medium text-gray-600">Description</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="description" defaultValue={description}  placeholder="Description....." className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        <input type="submit" value="Update Job" className=" btn btn-primary mt-8  w-full text-white" />
                    </form>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default UpdateJob;