import React from 'react';

import 'mdbreact/dist/css/mdb.css';
//import {Row, Col} from 'react-flexbox-grid';




import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,MDBCardBody,
  MDBModalFooter,
} from 'mdbreact';

import '../App.css';

class SignIn extends React.Component {
  
  

  render () {
    return (
        <div className="col-md-6 col-md-offset-3" width="80%">
               <MDBContainer >
        <MDBRow>
           
          <MDBCol >
            <MDBCard>
                <MDBRow>
                    <MDBCol >
                        <img height="100%"  width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3DUIFsj-iN2h6Eoe2uzaLRZ0qu9JlELkLZ1w8SWrkWHsEzJUx "/>
                    </MDBCol>
                    <MDBCol >

                    
              <MDBCardBody>
                <form>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                      
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Confirm your email"
                      icon="exclamation-triangle"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="cyan" type="submit">
                      Register
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
              </MDBCol>
                </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
        </div>
        
      
    );
  }
}
export default SignIn;