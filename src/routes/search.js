import React, { Component } from "react";
import SearchBar from "react-search-bar-semantic-ui";
import { Container, Loader } from "semantic-ui-react";
import PagiNation from "../components/Pagination";
import Header from "../components/header2";
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardLink
} from "reactstrap";
import Moment from "react-moment";
import "moment-timezone";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: this.props.location.state.searchValue,
      list: [],
      plist: [],
      change: "",
      total: ""
    };
    this.onResultSelect = this.onResultSelect.bind(this);
  }

  async onResultSelect(e, { result }) {
    this.setState({ searchValue: result.title });
    console.log("resultSelect:-", result);

    await this.setState({
      change: "true"
    });
    const data = {
      searchValue: this.state.searchValue
    };
    console.log("DAAATA", data);
    await fetch("http://localhost:9003/search", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        if (response) {
          this.setState({
            list: response.response.articles,
            total: response.response.totalResults
          });
        }
      });
  }

  componentDidMount() {
    fetch("http://localhost:9003/find", {
      method: "get",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        if (response) {
          this.setState({ plist: response.response.articles });
          console.log("Plist", response.response.articles);
        }
      });

    this.setState({
      change: "true"
    });
    const data = {
      searchValue: this.state.searchValue
    };
    console.log(data);
    fetch("http://localhost:9003/search", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        if (response) {
          this.setState({
            list: response.response.articles,
            total: response.response.totalResults
          });
        }
      });
  }
  render() {
    return (
      <div className="homebg">
        <Header />
        <div align="center">
          <br/>
          <h2>Search News</h2>  
          {this.state.plist.length !== 0 ? (
            <SearchBar
              data={this.state.plist}
              value={this.state.searchValue}
              onResultSelect={this.onResultSelect.bind(this)}
            />
          ) : null}
        </div>

        <div>
          <br />
          <br />
         
          <h3>Search Results</h3>

          {this.state.total > 1 ? (
            <Container fluid>
              <PagiNation details={this.state.list} />
            </Container>
          ) : null}




          {this.state.total === 1 ? (
            <div>
              {this.state.list.map((item, key) => {
                return (
                  <Col xs={4} md={4} sm={4}>
                    <Card className="card-size1">
                      <CardImg
                        className="card-img1"
                        width="100%"
                        src={item.urlToImage}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardText>
                          <small align="left">
                            <Moment fromNow>{item.publishedAt}</Moment>
                          </small>
                        </CardText>
                        <CardTitle id="dtext1">
                          <strong>{item.title}</strong>
                        </CardTitle>
                        <CardText id="dtext2">{item.description}</CardText>
                        <CardText align="right">__{item.author}</CardText>
                        <CardLink href={item.url} target="_blank">
                          MOre
                        </CardLink>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}{" "}
            </div>
          ) : (null)}

          {this.state.total === 0 ? (
            <h4 align="center">
              <br />
              <br /> Oops!,No Result Found
            </h4>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Search;
