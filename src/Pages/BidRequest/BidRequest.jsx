
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BidRequestRow from "./BidRequestRow";
import { Helmet } from "react-helmet";


const BidRequest = () => {
    const { user } = useContext(AuthContext);
    const [bids, setBids] = useState([]);


    const url = `https://marketing-master-server.vercel.app/bid?email=${user.email}`;

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
        fetch(`https://marketing-master-server.vercel.app/bid/${id}`, {
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
            <Helmet>
                <title>BidRequest</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg">
                            <th  className="lg:text-lg md:text-base">Image</th>
                            <th  className="lg:text-lg md:text-base">Job_Title</th>
                            <th  className="lg:text-lg md:text-base">Email</th>
                            <th  className="lg:text-lg md:text-base">Deadline</th>
                            <th  className="lg:text-lg md:text-base">Maximum Price</th>
                            <th  className="lg:text-lg md:text-base">Minimum Price</th>
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
