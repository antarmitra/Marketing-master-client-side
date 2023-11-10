/* eslint-disable react/prop-types */



const MyPostedJobCard = ({ post }) => {

    const { category_name, job_title, deadline, min_price, max_price, description } = post;

    // const url = `http://localhost:5000/category/?email=${user?.email}`

    // useEffect(() => {
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    // }, [])



    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl text-center">
                <div className="card-body">
                    <h2 className="text-2xl font-semibold">{job_title}</h2>
                    <p>Name: <span>{category_name}</span></p>
                    <p>Deadline: {deadline}</p>
                    <p>Maximum-Price: {max_price}</p>
                    <p>Minimum-Price: {min_price}</p>
                    <p>Description: {description}</p>
                    <div className=" flex justify-evenly">
                        <div>
                            <button className="btn btn-primary">Update Job</button>
                        </div>
                        <div>
                            <button className="btn btn-primary">Delete Job</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPostedJobCard;