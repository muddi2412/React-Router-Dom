import {useParams,useLocation,useHistory}  from 'react-router-dom';
const User = () => {
    const {uname} = useParams();
    const Location = useLocation();
    const history = useHistory();
    console.log(history);
    const handle = () =>{
        history.push('/')
    }
    return (
    <>
        <h1>Welcome {uname}....</h1>
        <p>My Current Location url is {Location.pathname}</p>
        {Location.pathname !== `/user/` ? 
        <button onClick={handle}>Go HomePage</button> : null }
        
        </>
        )
};



export default User;
