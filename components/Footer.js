import React, { Component } from 'react';
import dictionary from '../data/dictionary';
import Link from "next/link";

class Footer extends Component {
  render() {

    if(dictionary.social){
      var networks= dictionary.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
     <footer-c>
     <div className="row">
{/*         <h3>Sponsors and Partners</h3>
        <div id="custom-link">
          <a target="_blank" href="https://drive.google.com/file/d/1x1ZDfvcWHQLJoWy3YTXWoQOPByt8iwwE/view?usp=sharing" title="SPONSORSHIP / EXHIBITOR PROSPECTUS"><i className="fa fa-download"></i></a>
        </div> */}
        {/* <SponsorSlider /> */}
        {/* <Sponsors /> */}
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li><h4>RSD Team: rsd@iitp.ac.in</h4></li>
              <br />
              <li><h4>Convener: rajgopal@iitp.ac.in</h4></li>
              <br />
              <li><h4>PGR: pgr_gymkhana@iitp.ac.in</h4></li>
              <br />
              <li><h4>EasyChair: rsd2020@easychair.org</h4></li>
              <br />
              <li>&copy; <h5 className="white">Copyright ©2020 All Rights Reserved | Design by Design By RSD Team</h5></li>
           </ul>

        </div>
        <div id="go-top"><Link href="#home"><a className="smoothscroll" title="Back to Top"><i className="fa fa-arrow-up"></i></a></Link></div>
     </div>
    </footer-c>
    );
  }
}

export default Footer;
