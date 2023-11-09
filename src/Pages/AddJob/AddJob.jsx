

const AddJob = () => {
    return (
        <div>
            <div className="bg-white p-5 mt-5 mb-5 rounded-lg max-w-screen-lg mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-gray-500">Add Jobs</h2>
                <form >
                    {/* product and brand name */}
                    <div className="md:flex gap-4 mt-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">User Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" placeholder="User Email...." className="input input-bordered w-full" />
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


                    {/* price and description */}
                    <div className="md:flex gap-4 mt-8">
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
                    </div>


                    {/* rating and detials */}
                    <div className="md:flex gap-4 mt-8">
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
                    </div>

                    {/* photo url */}
                    <div className="form-control md:w-full mt-8">
                        <label className="label">
                            <span className="label-text text-lg font-medium text-gray-600">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description....." className="input input-bordered w-full" />
                        </label>
                    </div>

                    <input type="submit" value="Add Job" className=" btn btn-primary mt-8  w-full text-white" />
                </form>
            </div>
        </div>
    );
};

export default AddJob;