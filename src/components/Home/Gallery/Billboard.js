import Card from 'react-bootstrap/Card';

function BillBoard() {
    return (
        <Card className="bg-dark text-white">
            <Card.Img src="logo512.png" alt="Card image" style={{ width: '150px'}} />
            <Card.ImgOverlay>
                <Card.Title>Movie Title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}
export default BillBoard