import React, { Component } from 'react';
import dictionary from '../data/dictionary'

class Speakers extends Component {
  render() {

    if(dictionary.speakers){
      var speaker = dictionary.speakers.map(function(speaker){
        var projectImage = './static/images/speakers/'+speaker.image;
        return <div key={speaker.name} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={speaker.url} title={speaker.name}>
               <img alt={speaker.name} src={projectImage} />
               <div className="overlay">
                <div className="portfolio-item-meta">
                 <h5>{speaker.designation}</h5>
                </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
          <h3>{speaker.name}</h3>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>KEYNOTE SPEAKERS</h1>

            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                {speaker}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Speakers;
