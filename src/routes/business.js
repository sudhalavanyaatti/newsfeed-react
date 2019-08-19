import React, {Component} from 'react';
import Header from '../components/header';
import PagiNation from '../components/Pagination';
import "../App.css";
import { Container } from 'semantic-ui-react';
import Bottom from '../components/bottom';


class Business extends Component {
 
  constructor (props) {
    super (props);
    this.state = {
  
      list:[]
      
    };
  }
  componentDidMount() {
    fetch('http://localhost:9003/business', {
      method: 'get',
      body: JSON.stringify(),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then (res => res.json ())
      .then (response => {
       console.log(response);
       if (response) {
        this.setState({list:response.articles});
       
      }
      
      });
  }
  render() {
    
    return(
       <div className="homebg">
       <Header/>
       <Container fluid>
       <PagiNation details={this.state.list}/>
       </Container>
       <Bottom/>
       </div>
      
    )
  }
}


export default Business;