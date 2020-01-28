import React, { Component } from 'react';
import dictionary from '../data/dictionary'
import AnimatedModal from  './Modal'

class Speakers extends Component {

  render() {
    
    if(dictionary.speakers){
      var speaker = dictionary.speakers.map(function(speaker){
        var projectImage = './static/images/speakers/'+speaker.image;
        return <div key={speaker.name} className="columns portfolio-item">
           <div className="item-wrap">
            <a target="_blank" href={speaker.url} title={speaker.name}>
               <img alt={speaker.name} src={projectImage}/>
               <div className="overlay">
                <div className="portfolio-item-meta">
                 <h5>{speaker.designation}</h5>
                </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
          <h4>{speaker.name}</h4> 
          <AnimatedModal name={speaker.name} msg={speaker.msg} text='Read Message'/>
            
         {/*  <h3>{speaker.name}</h3> */}
           {/* <button type='button' onClick={this.showModal.bind(this)}>{speaker.name}</button> */}
        </div>
      })
    }

    return (
      <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-quarters cf">
                {speaker}
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


export default Speakers;
