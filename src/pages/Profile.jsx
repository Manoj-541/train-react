import React from 'react'
import { Link , Outlet} from "react-router-dom";


const Profile = () => {
  return (
    <div style={{width:"100%",height:"100vh",background:"bisque"}}>Profile
    <br/>
    <br/>
    <Link to = "/profile/myaccount">My Accounts</Link>
    <br/>
    <br/>
    <Link to = "/profile/mysetting">My Settings</Link>
    <Outlet/>
    </div>
  )
}

export default Profile