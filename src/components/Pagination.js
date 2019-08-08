import React, { Component } from "react";
import Pagination from "react-js-pagination";
import{
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardLink
} from "reactstrap";
import "../styles.css";

class PagiNation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "1",
      noOfDetailsPerPage: "6"
    };
  }
  handlePageChange(pageNumber) {
    console.log("gh", pageNumber);
    this.setState({ activePage: pageNumber });
  }

  render() {
    const indexOfLast = this.state.activePage * this.state.noOfDetailsPerPage;
    const indexOfFirst = indexOfLast - this.state.noOfDetailsPerPage;

    const list = this.props.details.slice(indexOfFirst, indexOfLast);
    console.log("list", list);
    console.log("length", this.props.details.length);

    const renderPage = list.map((item, index) => {
      return (

            <Col xs={6} md={6} sm={6}>
                  <Card className="ContentItem">
                     <Row>
                     <Col md="4">
                        <CardImg
                          top
                          width="100%"
                          height="250px"
                          src={item.urlToImage}
                          alt="Card image cap"
                        />
                       </Col>
                        <Col md="8">
                        <CardBody>
                          <CardText>
                            <small align="left">{item.publishedAt}</small>
                          </CardText>
                          <CardTitle id="dtext1"><strong>{item.title}</strong></CardTitle>
                          <CardText  id="dtext2">{item.description}</CardText>
                          <CardText align="right">__{item.author}</CardText>
                          <CardLink href={item.url}>MOre</CardLink>
                        </CardBody>
                       </Col>
                       </Row>
                    </Card>
            </Col>
          
      
      );
    });

    return (
      <div>
        <Row className="ContentItem">
          {renderPage}{" "}
        </Row>

        <Pagination
          hideNavigation
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.noOfDetailsPerPage}
          totalItemsCount={this.props.details.length}
          pageRangeDisplayed={6}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}

export default PagiNation;
