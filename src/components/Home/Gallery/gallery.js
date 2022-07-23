import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


function Gallery() {
    const [show, setShow] = useState(false)
    const [rating, setRating] = useState(0)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const handleRating = (rate) => {
        setRating(rate)
    }
    
    return (
        <>
        <Card className='movie' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="ogo192.png" />
            <Card.Body>
                <Card.Title>Movie Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the Movie title and make up the
                    bulk of the content here.
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>Rate This</Button>
            </Card.Body>
        </Card>
        
        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Movie Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Oat cake halvah sweet roll liquorice sweet jujubes. Dessert lemon drops ice cream jelly-o I love sweet sesame snaps. Chocolate cake toffee soufflé sugar plum biscuit. Macaroon donut lemon drops toffee sweet shortbread I love.</p>
                <p>I love apple pie donut jujubes topping. Halvah candy canes I love liquorice chocolate. Chocolate bar shortbread cookie lollipop tiramisu gummies brownie soufflé.</p>
                <p>Marshmallow apple pie chocolate chocolate cake tart halvah. Gummi bears I love I love tart bear claw croissant wafer. Marshmallow cake brownie I love liquorice powder bonbon. Powder powder topping jelly beans chupa chups croissant soufflé tart sweet.</p>
                <Form>
                    <Form.Group className="mb-3" controlId="Form.ControlInput">
                        <Form.Label>Rating</Form.Label>
                        <Rating onClick={handleRating} ratingValue={rating} />
                    </Form.Group>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Comments"
                        className="mb-3"
                    >
                    <Form.Control as="textarea" placeholder="Leave a comment here" />
                    </FloatingLabel>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Gallery