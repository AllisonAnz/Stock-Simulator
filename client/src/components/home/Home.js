import React, {useState} from 'react'
import { useNavigate } from 'react-router';

import LoginForm from '../forms/LoginForm'
import SignupForm from '../forms/SignupForm'



const Home = ({user, handleLogin, loggedIn}) => {
     const navigate = useNavigate()
     const [newUser, setNewUser] = useState(false)

    
    const handleSuccessfulAuth = (data) => {
        //TODO update parent component 
        handleLogin(data)
        navigate('/dashboard')
        
    }

    const handleNewUser = () => {
        setNewUser(true)
    }

    
  
        return (
            <div>
                <h1>Home</h1>
                {newUser ? 
                    (<SignupForm handleSuccessfulAuth={handleSuccessfulAuth}/>) : 
                    (<LoginForm handleNewUser={handleNewUser} handleSuccessfulAuth={handleSuccessfulAuth}/> ) }
               
               
            </div>
        )
}
export default Home;
