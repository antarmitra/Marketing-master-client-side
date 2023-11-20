/* eslint-disable react/prop-types */

import { useState } from "react";


const MyBidRow = ({ bid }) => {
    const { _id, image, title, deadline, buyerEmail, status: previousStatus } = bid;
    const [showButton, setShowButton] = useState(true);



    const status = 'Complete';
    const updateStatus = { status }

    const handleComplete = (id) => {
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
                setShowButton(false)
                if (data.modifiedCount > 0) {
                    // update
                }
            })
    }

    return (
        <tr className="text-base font-medium">
            <td>
                <div className="avatar">
                    <div className="rounded lg:w-52 md:w-28 lg:h-32 md:h-28">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td className="lg:text-lg md:text-sm text-xs">{title}</td>
            <td className="lg:text-lg md:text-sm text-xs">{buyerEmail}</td>
            <td className="lg:text-lg md:text-sm text-xs">{deadline}</td>
            <td className="lg:text-xl md:text-lg text-base text-blue-600">{previousStatus}</td>
            {
                showButton && previousStatus === 'Progress' && (<button onClick={() => handleComplete(_id)} className="btn btn-primary lg:mt-14 md:mt-12 mt-4 text-white lg:text-base md:text-sm text-xs">Complete</button>)
            }

        </tr>
    );
};

export default MyBidRow;
