import React,{Component} from 'react';

export default class Header extends Component {
  render(){
    const {subtitle} = this.props;

    return(
      <header>
        <div className="container">
              <img className="img-responsive" src="img/MS.png" alt=""/>
              <div className="intro-text">
                <hr className="star-light"/>
                <span className="skills">
                  {subtitle}
                </span>
              </div>
        </div>
      </header>
    )
  }
}
