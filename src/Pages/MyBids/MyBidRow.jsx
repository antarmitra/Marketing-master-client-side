/* eslint-disable react/prop-types */

import { useState } from "react";


const MyBidRow = ({ bid }) => {
    const { _id, image, title, deadline, buyerEmail, status: previousStatus } = bid;
    const [showButton, setShowButton] = useState(true);
    const [biding, setBiding] = useState([]);


    const status = 'Complete';
    const updateStatus = { status }

    const handleComplete = (id) => {
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
                setShowButton(false)
                if (data.modifiedCount > 0) {
                    // update status
                    const remaining = biding.filter(bids => bids._id !== id);
                    const updated = biding.find(bids => bids.id === id); // Fix this line
                    updated.status = 'Complete'
                    const newBids = [updated, ...remaining]
                    setBiding(newBids)
                }
            })
    }


    // const handleComplete = (id) => {
    //     fetch(`http://localhost:5000/bid/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updateStatus)
    //     })
    //         .then(req => req.json())
    //         .then(data => {
    //             console.log(data);
    //             setShowButton(false)
    //             if(data.modifiedCount > 0){
    //                 // update status
    //                 const remaining = biding.filter(bids => bids._id !== id);
    //                 const updated = biding.find(bids => bids._id === id);
    //                 updated.status = 'Complete'
    //                 const newBids = [updated, ...remaining]
    //                 setBiding(newBids)
    //             }
    //         })
    // }



    return (
        <tr className="text-base font-medium">
            <td>
                <div className="avatar">
                    <div className="rounded w-52 h-32">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td>{buyerEmail}</td>
            <td>{deadline}</td>
            <td className="text-xl text-blue-600">{previousStatus}</td>
            {
                showButton && previousStatus === 'Progress' && (<button onClick={() => handleComplete(_id)} className="btn btn-primary mt-14 text-white">Complete</button>)
            }

        </tr>
    );
};

export default MyBidRow;