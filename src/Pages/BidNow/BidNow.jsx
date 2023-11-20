import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";



const BidNow = () => {
    const bid = useLoaderData();
    const { job_title, max_price, min_price, image, email: buyerEmails } = bid;
    console.log(bid);
    const { user } = useContext(AuthContext)
    console.log(user?.email);

    const handleBidNow = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.photo.value;
        const email = form.email.value;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;
        const buyerEmail = form.buyerEmail.value;
        const status = "Pending"
        const bidNow = { image, email, title, deadline, minPrice, maxPrice, buyerEmail, status };
        console.log(bidNow);

        fetch('https://marketing-master-server.vercel.app/bid', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bidNow)
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
                <h2 className="text-4xl font-extrabold text-center text-black">Bid Jobs</h2>
                <form onSubmit={handleBidNow} >

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
                                <span className="label-text text-lg font-medium text-gray-600">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" defaultValue={user?.email} readOnly placeholder="Bider Email...." className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* deadline and price */}
                    <div className="md:flex gap-4 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Job Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="title" defaultValue={job_title} placeholder="Job Title....." className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Deadline</span>
                            </label>
                            <label className="input-group">
                                <input type="date" name="deadline" placeholder="Deadline....." className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* price */}
                    <div className="md:flex gap-4 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Minimum Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="minPrice" defaultValue={min_price} placeholder="Minimum Price...." className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Maximum Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="maxPrice" defaultValue={max_price} placeholder="Maximum Price....." className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* buyer email */}
                    <div className="md:flex gap-4 mt-5">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Buyer Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="buyerEmail" defaultValue={buyerEmails} readOnly placeholder="Buyer Email...." className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Bid On The Project" className=" btn btn-primary mt-8  w-full text-white" />
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default BidNow;