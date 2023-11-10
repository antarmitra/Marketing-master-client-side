import { useLoaderData } from "react-router-dom";
import MyPostedJobCard from "./MyPostedJobCard";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const MyPostedJob = () => {
    const posted = useLoaderData();
    const {user} = useContext(AuthContext)
    
    const filterEmailData = posted.filter(data => data?.email === user?.email)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 max-w-7xl mx-auto">
            {
                filterEmailData.map(post => <MyPostedJobCard key={post.id} post={post}></MyPostedJobCard>)
            }
        </div>
    );
};

export default MyPostedJob;