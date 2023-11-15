import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyBidRow from "./MyBidRow";


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
    }, [])


    return (
        <div className="mt-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg">
                            <th>Image</th>
                            <th>Job_Title</th>
                            <th>Email</th>
                            <th>Deadline</th>
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