
import React from 'react';
import Header from '../components/header2';
import { Container,Input,Button,Loader} from 'semantic-ui-react';
import PagiNation from '../components/Pagination';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          searchValue: this.props.location.state.searchValue,
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
    async  componentDidMount() {
    
        this.setState({
          change:"true"
         
        });
       const  data = {
         searchValue:this.state.searchValue,
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

      async handleSubmit(data) {
        //  event.preventDefault();
        this.setState({
          change:"true"
         
        });
        data = {
         searchValue:this.state.searchValue,
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
         <h2>Search News</h2>
          <Input action={<Button onClick={() => this.handleSubmit()}> search </Button> } placeholder='Search...' value={this.state.searchValue} onChange={event => this.handleChange(event)} />
         </div>
     
      
       <div>
         <br/><br/><br/><br/>
         <h3>Search Results</h3>
           {this.state.total>0? ( <Container fluid>
                                    <PagiNation details={this.state.list}/>
                                  </Container>
                                ):(<div> 
                                     {this.state.change==="true"?  (<div align="center"> <Loader active inline> Oops!,No Result Found</Loader></div>
                                                                  
                                                                  ):(null) }
                                   </div>)}
       </div>
     </div>
     
    );
  }
}
export default Search;