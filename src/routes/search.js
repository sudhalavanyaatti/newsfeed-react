
import React from 'react';
import { Button, Input } from 'reactstrap';
import Header from '../components/header';
import Cards from '../components/cards';
import {
  Row,
  Col
} from "reactstrap";
import { Container } from 'semantic-ui-react';
import PagiNation from '../components/Pagination';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          searchValue: '',
          total:'',
          change:'',
          list:[]
        };
      }
      handleChange(event) {
        this.setState({
          searchValue: event.target.value,
         
        });
      }


      async handleSubmit(data) {
        //  event.preventDefault();
        this.setState({
          change:"true"
         
        });
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
          this.setState({list:response.response.articles,total:response.response.totalResults});
        }
        
        });
      }

  render() {

    return (
        
     <div className="homebg">
           <Header/>
          
         <div align="center" className="ContentItem" >
         <Input id="display" type="text" name="searchValue"  placeholder="enter keyword" value={this.state.searchValue} onChange={event => this.handleChange(event)} />&nbsp;
          <Button  type="submit" onClick={() => this.handleSubmit()}>Search</Button>
         </div>
     
      
       <div>
           {this.state.total>0?( <Container fluid>
       <PagiNation details={this.state.list}/>
       </Container>):(<div> 
                          {this.state.change==="true"?(<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>):(null) }
                    </div>
                      )}
       </div>
     </div>
     
    );
  }
}