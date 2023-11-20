/* eslint-disable react/prop-types */

// import { space } from "postcss/lib/list";
// import { useState } from "react";


const BidRequestRow = ({ bid, handleRejected }) => {
    const { _id, image, title, deadline, email, maxPrice, minPrice } = bid;
    const status = 'Progress';
    const updateStatus = { status }

    const handleAccepted = (id) => {
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
        <tr className="text-base font-medium">
            <td>
                <div className="avatar">
                    <div className="rounded lg:w-52 md:w-24 lg:h-32 md:h-24">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td className="lg:text-lg md:text-sm text-xs">{title}</td>
            <td className="lg:text-lg md:text-sm text-xs">{email}</td>
            <td className="lg:text-lg md:text-sm text-xs">{deadline}</td>
            <td className="lg:text-lg md:text-sm text-xs">{maxPrice}</td>
            <td className="lg:text-lg md:text-sm text-xs">{minPrice}</td>

            <div className="flex lg:mt-14 md:mt-10 mt-4">

                <button onClick={() => handleAccepted(_id)} className="btn btn-primary text-white lg:mr-5 md:mr-3 mr-1 lg:text-sm md:text-xs text-[10px]">Accept</button>


                <div>
                    <button onClick={() => handleRejected(_id)} className="btn btn-primary text-white lg:text-sm md:text-xs text-[10px]">Reject</button>
                </div>
            </div>
        </tr>
    );
};

export default BidRequestRow;

