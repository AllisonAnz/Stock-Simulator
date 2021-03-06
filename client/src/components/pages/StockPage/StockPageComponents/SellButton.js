import React, { useState } from 'react'
import axios from "axios";
import { Modal, Form, Button } from 'react-bootstrap'


const SellButton = ({ price, stock_id, total_shares, searchStock }) => {
    const [shares, setShares] = useState(0)
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const checkAmount = () => {
            (total_shares - shares < 0) ? (
                setError(true)
                ) : (sellStock())
                
                return total_shares
            }
                checkAmount()
    }

    const sellStock = () => {
        axios.patch(`http://localhost:3000/stocks/${stock_id}`,
            {
                shares: shares,
                avg_cost: price,
                option: "Sold"
            },

            { withCredentials: true })
            .then(() => {
                searchStock()
            })
            .catch((errors) => {
                console.log(errors);
            })
    }
    
    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Sell
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sell Shares</Modal.Title>
                </Modal.Header>
                <Form className="sell" onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3" >
                            <Form.Label>Sell Shares</Form.Label>
                            <Form.Control type="integer" placeholder="Enter Amount" onChange={(e) => setShares(parseInt(e.target.value))} />
                            <Form.Text className="text-muted"><br/>
                               {error ? (
                                    <ul style={{ color: "red" }}>
                                        <li>You cannot sell more than you own</li>
                                    </ul>
                               ): ("")}
                            </Form.Text>
                        </Form.Group>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type="submit" variant="primary" onClick={handleClose} >
                            Sell
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default SellButton
