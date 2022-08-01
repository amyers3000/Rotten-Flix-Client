import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import {useLocation} from "react-router-dom"
import { SaveRating, SaveReview } from '../../../lib'

const MovieItem = ({ movie }) => {
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
            const ratingResponse = await SaveRating({rating: rating, username: location.state.user.uid, movie: movie._id})
            const reviewResponse = await SaveReview({review: review, username: location.state.user.uid, movie: movie._id})
            console.log(ratingResponse)
            console.log(reviewResponse)
            return;
        }
        if (rating > 0) {
            const response = await SaveRating({rating: rating, username: location.state.user.uid, movie: movie._id})
            console.log(response)
            return;
        }
        if (review) {
            const response = await SaveReview({review: review, username: location.state.user.uid, movie: movie._id})
            console.log(response)
        }
    }
    useEffect(() => {
        let total = 0;
        movie.ratings.forEach(rating => total += rating.rating)
        let overall = Math.floor(total / movie.ratings.length);
        setOverallRating(overall)
    },[movie])
    return (
        <>
            <Card className='movie bg-dark text-white' onClick={handleShow}>
                <Card.Img variant="top" src={movie.image} style={{ width: '100%'}} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                </Card.Body>
            </Card>
            
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{movie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Genre: {movie.genre}</p>
                    <p>Running Time In Minutes: {movie.runningTimeInMinutes}</p>
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
                    {movie.reviews.length ?
                        movie.reviews.map( (review,key) => (
                            <p key={key}>{review.review}</p>
                        ))
                        :
                        <p>No Reviews...</p>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleSave}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MovieItem