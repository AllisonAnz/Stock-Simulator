import React, {useState} from 'react'
import { useNavigate } from 'react-router';

import LoginForm from '../forms/LoginForm'
import SignupForm from '../forms/SignupForm'
import { Container, Row, Col } from 'react-bootstrap'
import './HomePage.css'



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
         <div className="center">
             <Container className="container"><br/>
                <Row>
                    <Col>
                        <div>                         
                            <img src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" ></img>
                        </div>
                    </Col>
                    <Col>
                       {newUser ?
                            (<SignupForm handleSuccessfulAuth={handleSuccessfulAuth} />) :
                            (<LoginForm handleNewUser={handleNewUser} handleSuccessfulAuth={handleSuccessfulAuth} />)
                        }
                    </Col>
                </Row>
              </Container>
            </div>
                
                
               
    
        )
}
export default Home;
