import React, {useState} from 'react'
import axios from "axios";
import {Modal, Form, Button} from 'react-bootstrap'


const BuyButton = ({price, stock_id}) => {
    const [shares, setShares] = useState(0)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault()
        buyStock()
    }

    const buyStock = () => {
        console.log("working")
        axios.patch(`http://localhost:3000/stocks/${stock_id}`, 
        {
            shares: shares,
            avg_cost: price,
            option: "Purchased"
        },

        { withCredentials: true })
            .then(()=> {
                window.location.reload()
            })
            .catch((errors) => {
                console.log(errors);
            })  
    }
    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Buy
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Buy Shares</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                <Modal.Body>
                        <Form.Group className="mb-3" >
                            <Form.Label>Shares</Form.Label>
                            <Form.Control type="integer" placeholder="Enter Amount" onChange={(e) => setShares(parseInt(e.target.value))} />
                            <Form.Text className="text-muted">
                               text here
                            </Form.Text>
                        </Form.Group>


                </Modal.Body>
                <Modal.Footer>
                    <Button  variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                        <Button type="submit" variant="primary" onClick={handleClose}>
                        Buy
                    </Button>
                </Modal.Footer>
                    </Form>
            </Modal>
        </>
    )
}

export default BuyButton
