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
     <footer>
     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright ©2020 All Rights Reserved | Design by Design By RSDP Team</li>
           </ul>

        </div>
        <div id="go-top"><Link href="#home"><a className="smoothscroll" title="Back to Top"><i className="icon-up-open"></i></a></Link></div>
     </div>
    </footer>
    );
  }
}

export default Footer;
