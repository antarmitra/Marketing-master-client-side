

const MyBidRow = ({ bid }) => {
    const { image, email, title, deadline, maxPrice, minPrice, buyerEmail } = bid;
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
            <th>
                <button className="btn btn-primary text-white">Pending</button>
            </th>
        </tr>
    );
};

export default MyBidRow;