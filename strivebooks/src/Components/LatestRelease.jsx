import horror from "../Data/horror.json";
import fantasy from "../Data/fantasy.json";
import scifi from "../Data/scifi.json";
import history from "../Data/history.json";
import romance from "../Data/romance.json";

import { Container, Row, Col, Card } from "react-bootstrap";

const LatestRelease = () => {
  return (
    <Container>
      <h2>Horror</h2>
      <Row>
        {horror.map((book) => (
          <Col xs={12} md={4} className="text-center" key={book.asin}>
            <Card className="bg-dark text-white">
              <Card.Img className="img-fluid" src={book.img} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Card.Text>{book.price}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
      <h2>Fantasy</h2>
      <Row>
        {fantasy.map((book) => (
          <Col xs={12} md={4} className="text-center" key={book.asin}>
            <Card className="bg-dark text-white">
              <Card.Img className="img-fluid" src={book.img} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Card.Text>{book.price}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
      <h2>Sci-Fi</h2>
      <Row>
        {scifi.map((book) => (
          <Col xs={12} md={4} className="text-center" key={book.asin}>
            <Card className="bg-dark text-white">
              <Card.Img className="img-fluid" src={book.img} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Card.Text>{book.price}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
      <h2>History</h2>
      <Row>
        {history.map((book) => (
          <Col xs={12} md={4} className="text-center" key={book.asin}>
            <Card className="bg-dark text-white">
              <Card.Img className="img-fluid" src={book.img} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Card.Text>{book.price}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
      <h2>Romance</h2>
      <Row>
        {romance.map((book) => (
          <Col xs={12} md={4} className="text-center" key={book.asin}>
            <Card className="bg-dark text-white">
              <Card.Img className="img-fluid" src={book.img} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Card.Text>{book.price}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LatestRelease;
