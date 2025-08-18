import React,{useState,useEffect} from 'react'
import Userprofile from './userview/userprofile'
import Userrecipe from './userview/userrecipe'
import { useParams } from 'react-router-dom';
import axios from 'axios';
function userview() {
     
    const { username } = useParams();
const [profileData, setProfileData] = useState({
    user: "",
    recipes: [],
});

useEffect(() => {
    async function getUserRecipes() {
        try {
            // Make sure 'username' is defined in your component's scope
            const response = await axios.get(`http://127.0.0.1:8000/api/profile/${username}`);
            
            console.log("API Response:", response.data);
            
            setProfileData({
                user: {
                    username: response.data.username,
                    name: response.data.name,
                    user_bio: response.data.user_bio,
                    image_url: response.data.image_url
                },
                recipes: response.data.recipes || []
            });
            
        } catch (error) {
            console.log("Error fetching data", error.response);
        }
    }
    
    getUserRecipes();
}, [username]);
   


   

  return (
    <>
    <div className="container mt-3 justified">
      
       <Userprofile data={{username:profileData.user.username,Name:profileData.user.name,userbio:profileData.user.user_bio,userimage:profileData.user.image_url}} />
       <Userrecipe data={{userrecipe:profileData.recipes}} />
    </div>
     
    </>
  )
}

export default userview
