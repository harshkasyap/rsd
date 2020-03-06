import React, { Component } from 'react';
import dictionary from '../data/dictionary'

class Sponsors extends Component {

  render() {
    
    if(dictionary.bigSponsors){
      var sponsor = dictionary.bigSponsors.map(function(sponsor){
        var projectImage = './static/images/sponsors/'+sponsor.image;
        return <div key={sponsor.name} className="columns portfolio-item">
           <div className="item-wrap">
            <a target="_blank" href={sponsor.url} title={sponsor.name}>
               <img alt={sponsor.name} src={projectImage}/>
               <div className="overlay">
                <div className="portfolio-item-meta">
                 <h5>{sponsor.designation}</h5>
                </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">
      <div className="row">
          <div className="twelve columns collapsed">
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-quarters cf">
                {sponsor}
            </div>
          </div>
      </div>
      </section>
    );
  }
}


const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button
          onClick={handleClose}
        >
          Close
        </button>
      </section>
    </div>
  );
};


export default Sponsors;
