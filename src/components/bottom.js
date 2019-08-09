import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';
import '../styles.css';


class Bottom extends Component {
  render() {
    return ( 
         
      <div className="btmnavbar">
      <div className="footer"> &copy; 2019 LIV NEWS.All Rights Reserved.</div>
       <div id="hdr">
       <SocialIcon url="https://www.facebook.com/Employee-HUB-779290129153493/?modal=admin_todo_tour" target="_blank" style={{  height: '20px', width: '20px' }} />&nbsp;&nbsp;&nbsp;
       <SocialIcon url="https://twitter.com/HubEmployee" target="_blank" style={{ height: 20, width: 20 }} />&nbsp;&nbsp;&nbsp;
       <SocialIcon url="https://aboutme.google.com/u/0/?referer=gplus" target="_blank" style={{ height: 20, width: 20 }} />&nbsp;&nbsp;&nbsp;
       <SocialIcon url="https://www.linkedin.com/in/employee-hub-672447190" target="_blank" style={{ height: 20, width: 20}} />&nbsp;&nbsp;&nbsp;
       </div>
      </div>
    

    );
  }
}

export default Bottom;
