import React, {Component} from 'react';

const footerModel = [
  {title: "Location"}
];

const currentYear = new Date().getFullYear();

class TextFooter extends Component {
  render() {
    const {title, content, other} = this.props;
    return(
      <div className="footer-col col-md-4">
        <h3>{title}</h3>
        <p>
          {content}
          <br/>
          {other}
        </p>
      </div>
    )
  }
}

class SocialMedia extends Component {
  render() {
    const {title} = this.props;
    return(
      <div className="footer-col col-md-4">
        <h3>{title}</h3>
      </div>
    )
  }
}

export default class Footer extends Component {
  render(){
    return(
      <footer className="text-center">
        <div className="footer-below">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                React Reusable Component {currentYear}
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
