import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Providers/AuthProvider';



const AddJob = () => {
    const { user } = useContext(AuthContext)
    console.log(user?.email);
    const handleAddJob = e => {
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
        const newAddJob = { image, email, category_name, job_title, deadline, min_price, max_price, description };
        console.log(newAddJob);

        // sent data to server
        fetch('http://localhost:5000/category', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAddJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Added Successfully')
                }
            })

    }

    return (
        <div>
            <div className="bg-white shadow-lg p-5 mt-5 mb-5 rounded-lg max-w-screen-lg mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-black">Add Jobs</h2>
                <form onSubmit={handleAddJob} >
                    {/* product and brand name */}
                    <div className="md:flex gap-4 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Photo_URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="photo url...." className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">User Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" defaultValue={user?.email} placeholder="User Email...." className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* <div className="md:flex gap-4 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">User Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" defaultValue={user?.email} placeholder="User Email...." className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Job Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="title" placeholder="Job Title....." className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div> */}


                    {/* price and description */}
                    <div className="md:flex gap-4 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="Category...." className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Job Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="title" placeholder="Job Title....." className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* <div className="md:flex gap-4 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="Category...." className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Maximum Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="maxPrice" placeholder="Maximum Price...." className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div> */}



                    {/* rating and detials */}
                    <div className="md:flex gap-4 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Deadline</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="deadline" placeholder="Deadline....." className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Minimum Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="minPrice" placeholder="Minimum Price...." className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* <div className="md:flex gap-4 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Minimum Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="minPrice" placeholder="Minimum Price...." className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Deadline</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="deadline" placeholder="Deadline....." className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div> */}

                    {/* photo url */}
                    <div className="md:flex gap-4 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Maximum Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="maxPrice" placeholder="Maximum Price...." className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Description....." className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* <div className="md:flex gap-4 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Photo_URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="photo url...." className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Description....." className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div> */}

                    <input type="submit" value="Add Job" className=" btn btn-primary mt-8  w-full text-white" />
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddJob;