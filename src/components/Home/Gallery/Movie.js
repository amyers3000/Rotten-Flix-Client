import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import {useLocation} from "react-router-dom"
import { SaveRating, SaveReview } from '../../../lib'

function Movie( props ) {
    const location = useLocation()
    const [show, setShow] = useState(false)
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState()
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const handleRating = (rating) => {
        setRating(rating / 20)
    }
    const [overAllRating, setOverallRating] = useState(0)
    const handleSave = async () => {
        if (rating > 0 && review) {
            const ratingResponse = await SaveRating({rating: rating, username: location.state.user.uid, movie: props.itemId._id})
            const reviewResponse = await SaveReview({review: review, username: location.state.user.uid, movie: props.itemId._id})
            console.log(ratingResponse)
            console.log(reviewResponse)
            return;
        }
        if (rating > 0) {
            const response = await SaveRating({rating: rating, username: location.state.user.uid, movie: props.itemId._id})
            console.log(response)
            return;
        }
        if (review) {
            const response = await SaveReview({review: review, username: location.state.user.uid, movie: props.itemId._id})
            console.log(response)
        }
    }
    useEffect(() => {
        let total = 0;
        props.itemId.ratings.forEach(rating => total += rating.rating)
        let overall = Math.floor(total / props.itemId.ratings.length);
        setOverallRating(overall)
    },[])
    return (
        <>
        <Card className='movie bg-dark text-white' style={{ width: '18rem' }} onClick={handleShow}>
            <Card.Img variant="top" src={props.itemId.image} style={{ width: '80%'}} />
            <Card.Body>
                <Card.Title>{props.itemId.title}</Card.Title>
            </Card.Body>
        </Card>
        
        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.itemId.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Genre: {props.itemId.genre}</p>
                <p>Running Time In Minutes: {props.itemId.runningTimeInMinutes}</p>
                {overAllRating > 0 ? 
                    <Form.Group className="mb-3" controlId="Form.ControlInput">
                        <Form.Label>Rating</Form.Label>
                        <Rating initialValue={overAllRating} readonly />
                    </Form.Group>
                    :
                    <p>No Ratings...</p>
                }
                <Form>
                    <Form.Group className="mb-3" controlId="Form.ControlInput">
                        <Form.Label>Add Rating</Form.Label>
                        <Rating onClick={handleRating} ratingValue={rating} />
                    </Form.Group>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Review"
                        className="mb-3"
                    >
                    <Form.Control as="textarea" placeholder="Leave a review here" onChange={(e) => setReview(e.target.value)} />
                    </FloatingLabel>
                </Form>
                {props.itemId.reviews.length ?
                    props.itemId.reviews.map(review => (
                        <p>{review.review}</p>
                    ))
                    :
                    <p>No Reviews...</p>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
export default Movie