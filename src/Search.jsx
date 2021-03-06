import React,{useState} from 'react';
import Rsearch from './Rsearch';
const Search = () =>{
     const [img, setimg] = useState("");
const inputEvent = (event) =>{
        const data = event.target.value;
        console.log(data)
        setimg(data);
    };
    return (
    <>
    <div className="img_container">
        <h1>Image Search</h1>
        <input type="text" name="search" placeholder="Search Anything" value={img} onChange={inputEvent}/>
        {img === "" ? null : <Rsearch name={img}/>}
    </div>
    </>
    )  
};

export default Search;