import React, { Component } from "react";
import "../App.css";
import Header from "../components/header";
import News from "./news";
import {
    Row,
    Col,
  
  } from "reactstrap";
  import {Button, Divider, Icon} from 'semantic-ui-react';
import Bottom from "../components/bottom";

class Example extends Component {
  
constructor (props) {
    super (props);
    this.state = {
      sources:[],
      displayContent: '',
    };
  }
  componentDidMount() {
    fetch("http://localhost:9003/sources", {
      method: "get",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRR",response);
        if (response) {
          this.setState({ sources: response.sources });
        }
      });
  }

  render() {
    return (
          <div className="homebg">
         
        <Header/>
          
        <Row>
         
            <Col lg={2} xs={12} sm={6} md={6}>
            <h4 align="center">News Sources:</h4><br/>
            <div align="center" className="scroller">   
            <Button.Group vertical>
              {this.state.sources.map((item,index)=>{
               
                return(<div><Button onClick={()=>this.setState({displayContent:item.name})} icon labelPosition="right" >{item.name} <Icon name="angle double right" /></Button><Divider fitted /></div>);
               
              })}
           </Button.Group>

            </div>
            </Col>
            <Col lg={10} xs={12} sm={6} md={6}>
              {this.state.displayContent!==""?(<div>{this.state.sources.map(item=>{
            return( <div>{this.state.displayContent===item.name?<News news={item} />:<div/> }</div>);
          })}
</div>):(<h1 align="center"> Click  the sources on the left side to view the news from that source</h1>)}
          
            
    

            </Col>
            
        </Row>
         <Bottom/>
          </div>
            );
  }
}

export default Example;