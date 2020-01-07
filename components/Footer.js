import React, { Component } from 'react';
import dictionary from '../data/dictionary';
import Link from "next/link";
import SponsorSlider from "./slider/sponsorSlider"

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
        <h4>Sponsors and Partners</h4>
        <br />
        <SponsorSlider />
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; <h4>Copyright ©2020 All Rights Reserved | Design by Design By RSDP Team</h4></li>
           </ul>

        </div>
        <div id="go-top"><Link href="#home"><a className="smoothscroll" title="Back to Top"><i className="fa fa-arrow-up"></i></a></Link></div>
     </div>
    </footer-c>
    );
  }
}

export default Footer;
