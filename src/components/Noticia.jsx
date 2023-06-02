import { Row, Col, Card, Button} from "react-bootstrap"

const Noticia = ({noticia}) => {
    return (
        <Col sm={4} className="cardNoticia">
            <Card className="my-2 cardNoticia ">
                <Card.Img variant="top" src={noticia.urlToImage} className="" />
                <Card.Body  className="d-flex flex-column">
                    <p className="my-0 author">{noticia.author}</p>
                    <Card.Title className="">{noticia.title}</Card.Title>
                    <Card.Text className="">
                       {noticia.description}
                    </Card.Text>
                    <Button variant="primary" className="w-100 mt-auto" href={noticia.url}>Ver noticia completa</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Noticia;