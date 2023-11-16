
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BidRequestRow from "./BidRequestRow";


const BidRequest = () => {
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

    const status = 'Canceled';
    const updateStatus = { status }

    const handleRejected = (id) => {
        fetch(`http://localhost:5000/bid/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
            .then(req => req.json())
            .then(data => {
                console.log(data);
            })
    }





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
                            <th>Maximum Price</th>
                            <th>Minimum Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bids.map(bid => <BidRequestRow key={bid._id} bid={bid} handleRejected={handleRejected}></BidRequestRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BidRequest;
