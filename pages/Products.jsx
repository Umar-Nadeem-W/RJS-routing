import { useParams } from "react-router-dom"

export default function Products(){

    const {id} = useParams(); //This is hoow we can access the url parameter inside a dynamic route
    return <div>
        <h1>Products List</h1>
        <p>Showing product with product id {id} </p> 
        </div>
}