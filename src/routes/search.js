
import React from 'react';
import { Button, Label, Input } from 'reactstrap';
import Header from '../components/header';
import Cards from '../components/cards';
import {
  Row,
  Col
} from "reactstrap";
import { Container } from 'semantic-ui-react';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          searchValue: '',
          display:'',
          list:[]
        };
      }
      handleChange(event) {
        this.setState({
          searchValue: event.target.value
        });
      }


      async handleSubmit(data) {
        //  event.preventDefault();
    
        data = {
         searchValue:this.state.searchValue
        };
        console.log(data)
        await fetch('http://localhost:9003/search', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then (res => res.json ())
        .then (response => {
         console.log(response);
         if (response) {
          this.setState({list:response.response.articles,display:"yes"});
        }
        
        });
      }

  render() {
    let Cardssm=this.state.list.map((item,index)=>{
        return(
          
          <Col xs="6" md="6" sm="6">
          <Cards item={item} />
          </Col>
        )
   
       });

    return (
        
     <div className="homebg">
           <Header/>
          
         <div align="center" className="ContentItem" >
         <Input id="display" type="text" name="searchValue"  placeholder="enter keyword" value={this.state.searchValue} onChange={event => this.handleChange(event)} />&nbsp;
          <Button  type="submit" onClick={() => this.handleSubmit()}>Search</Button>
         </div>
     
      
       <div>
           {this.state.display==="yes"?(<Container fluid>
        <Row  className="ContentItem">
          {Cardssm}
        </Row>
      </Container>):(null)}
       </div>
     </div>
     
    );
  }
}