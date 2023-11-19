import { useLoaderData } from "react-router-dom";
import MyPostedJobCard from "./MyPostedJobCard";
import { useContext,  useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet";


const MyPostedJob = () => {
    const posted = useLoaderData();
    const {user} = useContext(AuthContext)
    
    const filterEmailData = posted.filter(data => data?.email === user?.email)
    const [deletePost, setDeletePost] = useState(filterEmailData);

    const handleDeleteItem = (_id) => {
        const updatedData = deletePost.filter(item => item._id !== _id);
        setDeletePost(updatedData);
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 max-w-7xl mx-auto">
            <Helmet>
                <title>MyPostedJob</title>
            </Helmet>
            {
                deletePost.map(post => 
                <MyPostedJobCard key={post.id} post={post} handleDeleteItem={handleDeleteItem}></MyPostedJobCard>)
            }
        </div>
    );
};

export default MyPostedJob;