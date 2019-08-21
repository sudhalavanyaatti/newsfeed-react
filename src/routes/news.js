import React, { Component } from "react";
import "../App.css";

import { Container } from "semantic-ui-react";
import PagiNation from "../components/Pagination";
import Bottom from "../components/bottom";
import "../styles.css";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id:this.props.news.id,
      list: []
    };
  }
  componentDidMount() {
      console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS",this.state.id);
      const name=this.state.id;
    fetch("http://localhost:9003/news/"+name, {
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
          this.setState({ list: response.articles });
        }
      });
  }
  render() {
    return (
      <div className="homebg">
   
        <Container fluid>
            <h2>{this.props.news.name} </h2>
          <PagiNation details={this.state.list} />
        </Container>
        <Bottom />
      </div>
    );
  }
}

export default News;