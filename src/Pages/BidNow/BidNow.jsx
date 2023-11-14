import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";



const BidNow = () => {
    const { user } = useContext(AuthContext)
    console.log(user?.email);

    const handleBidNow = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const buyerEmail = form.buyerEmail.value;
        const deadline = form.deadline.value;
        const price = form.price.value;
        const bidNow = { email, deadline, price, buyerEmail };
        console.log(bidNow);
    }



    return (
        <div>
            <div className="bg-white shadow-lg p-5 mt-5 mb-5 rounded-lg max-w-screen-lg mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-black">Bid Jobs</h2>
                <form onSubmit={handleBidNow} >
                    {/* photo and email */}
                    <div className="md:flex gap-4 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="email" defaultValue={user?.email} placeholder="Email...." className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Buyer Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="buyerEmail" placeholder="Buyer Email...." className="input input-bordered w-full" />
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
                                <input type="text" name="deadline" placeholder="Deadline....." className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price...." className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Bid On The Project" className=" btn btn-primary mt-8  w-full text-white" />
                </form>
            </div>
        </div>
    );
};

export default BidNow;