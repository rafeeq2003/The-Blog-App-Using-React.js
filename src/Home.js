import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs,isPending,error} = useFetch("http://localhost:8000/blogs")

    
    if (error) return <div>Error: {error} </div>
    if (isPending) return <div>Loading..</div>
    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;