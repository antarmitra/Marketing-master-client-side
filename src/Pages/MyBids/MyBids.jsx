import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyBidRow from "./MyBidRow";
import { Helmet } from "react-helmet";


const MyBids = () => {
    const { user } = useContext(AuthContext);
    const [bids, setBids] = useState([]);


    const url = `http://localhost:5000/bid?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBids(data);
            })
    }, [url])



    return (
        <div className="mt-10">
            <Helmet>
                <title>MyBids</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg">
                            <th className="lg:text-lg md:text-base">Image</th>
                            <th className="lg:text-lg md:text-base">Job_Title</th>
                            <th className="lg:text-lg md:text-base">Email</th>
                            <th className="lg:text-lg md:text-base">Deadline</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bids.map(bid => <MyBidRow key={bid._id} bid={bid}></MyBidRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBids;