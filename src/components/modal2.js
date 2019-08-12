import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter } from 'react-router';



class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false,searchValue: ''};

    this.toggle = this.toggle.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChangeValue(event) {
    this.setState({searchValue: event.target.value});
  }
  

 async handleSubmit(event) {
    // event.preventDefault();

    this.props.history.push('/search', {
      searchValue: this.state.searchValue
    });

}

  render() {
    return (

        <div>
        <Button onClick={this.toggle}>Search</Button>
        <Modal isOpen={this.state.modal}>
        
          <ModalHeader>search modal</ModalHeader>
          <ModalBody>
          <div className="row">
            <div className="form-group col-md-4">
            <label>searchValue:</label>
            <input type="text" value={this.state.searchValue} onChange={this.handleChangeValue} className="form-control" />
              </div>
              </div>
           
          </ModalBody>
          <ModalFooter>
            <input type="submit" value="Submit" color="primary" onClick={this.handleSubmit} className="btn btn-primary" />
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          
        </Modal>
        </div>
      
    );
  }
}
export default withRouter(ModalComponent);