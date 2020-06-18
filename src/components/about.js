import React, {Component} from 'react';
import Section from './section';

export default class About extends Component {
  render() {
    return( 
      <Section className="about-success" id="about" title="About">
        <div className="col-lg-4 col-lg-offset-2">
          <p><i>LTI (NSE: LTI) is a global technology consulting and digital solutions company helping 
            more than 420 clients succeed in a converging world. With operations in 32 countries, 
            we go the extra mile for our clients and accelerate their digital transformation with LTI’s
             Mosaic platform enabling their mobile, social, analytics, IoT and cloud journeys.
            </i></p>
        </div>
        <div className="col-lg-4">
          <p><i>Founded 20 years ago as the information technology arm of the Larsen & Toubro group, 
            our unique heritage gives us unrivaled real-world expertise 
            to solve the most complex challenges of enterprises across all industries.</i></p>
        </div>
      </Section>
    )
  }
}
