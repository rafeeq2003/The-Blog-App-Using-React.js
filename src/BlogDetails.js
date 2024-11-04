import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog , isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory()
    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/' + id,{
            method: 'DELETE'
        })
        .then(()=>{
            history.push('/')
        })
    }

    if (isPending) return <div>Loading...</div>;
    return ( 
        
        <div className="blog-details">
            { error && <div>Error: {error}</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Writtend by : { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )} 
        </div>
     );
}
 
export default BlogDetails;