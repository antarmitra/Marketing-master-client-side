/* eslint-disable react/prop-types */

// import { space } from "postcss/lib/list";
// import { useState } from "react";


const BidRequestRow = ({ bid, handleRejected }) => {
    const { _id, image, title, deadline, email, maxPrice, minPrice } = bid;
    const status = 'Progress';
    const updateStatus = { status }

    const handleAccepted = (id) => {
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
            <td>{email}</td>
            <td>{deadline}</td>
            <td>{maxPrice}</td>
            <td>{minPrice}</td>
            <th>

                <button onClick={() => handleAccepted(_id)} className="btn btn-primary text-white mr-5">Accept</button>


                <button onClick={() => handleRejected(_id)} className="btn btn-primary text-white">Reject</button>
            </th>
        </tr>
    );
};

export default BidRequestRow;

