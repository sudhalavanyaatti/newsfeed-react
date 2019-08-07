import React, {Component} from 'react';
import Header from '../components/header';
import Cards from '../components/cards';
import { Row,Col }  from "reactstrap";
import "../App.css";
import { Container } from 'semantic-ui-react';


class Home extends Component {
 
  constructor (props) {
    super (props);
    this.state = {
  
      list:[]
      
    };
  }
  componentDidMount() {
    fetch('http://localhost:9003/home', {
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
    let Cardssm=this.state.list.map((item,index)=>{
     return(

      <Col xs="6" md="6" sm="6">
       <Cards item={item} />
       </Col>
     )

    });
      
    return(
       <div className="homebg">
         <Header/>
         <Container fluid>
        <Row  >
          {Cardssm}
        </Row>
      </Container>
       </div>
      
    )
  }
}


export default Home;
