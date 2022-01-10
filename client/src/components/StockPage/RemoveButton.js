import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router';
import { Modal, Form, Button } from 'react-bootstrap'


const RemoveButton = ({shares, stock_id}) => {
    
    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault()
        deleteStock()
        
    }

    const deleteStock = () => {
        console.log("working")
        axios.delete(`http://localhost:3000/stocks/${stock_id}`, {withCredentials: true})
        .then((response) => {
            console.log(response)
            navigate(`/dashboard`)
        })
        .then((errors) => {
            console.log(errors)
        })
    }

    
   return (
       <>
        <Button variant="danger" onClick={handleShow}>Delete Stock </Button>
       {shares > 0 ? (
               <Modal show={show} onHide={handleClose}>
                   <Modal.Header closeButton>
                       <Modal.Title>Cannot Delete!</Modal.Title>
                   </Modal.Header> 
                        <Modal.Body style={{color: "red"}}>
                            <h2 >You Must Sell Your Stock First!</h2>
                        </Modal.Body>
                     <Modal.Footer>
                         <Button variant="secondary" onClick={handleClose}>
                             Close
                         </Button>
                     </Modal.Footer>
                 
               </Modal>
       ): (
                   <Modal show={show} onHide={handleClose}>
                       <Modal.Header closeButton>
                           <Modal.Title>Remove Stock</Modal.Title>
                       </Modal.Header>
                       <Form onSubmit={handleSubmit}>
                           <Modal.Body style={{ color: "red" }}>
                               <h2 >Are You SURE?!</h2>
                           </Modal.Body>
                           <Modal.Footer>
                               <Button variant="secondary" onClick={handleClose}>
                                   Close
                               </Button>
                               <Button type="submit" variant="primary" >
                                   Yes
                               </Button>
                           </Modal.Footer>
                       </Form>
                   </Modal>
        )}
       
       </>
   )
}
   
   
export default RemoveButton
