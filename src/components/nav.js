import React, {Component} from 'react';

const navModel = [
    {style:"hidden", link:"", title:""},
    {style:"page-scroll", link:"#portfolio", title:"Technology"},
    {style:"page-scroll", link:"#about", title:"About"},
    {style:"page-scroll", link:"#contact", title:"Contact"},
];

class NavItems extends Component {
  render() {
    return(
      <div className="collapse navbar-collapse nav-bar-text" id="bs-example-navbar-collapse-1">
      {navModel.map((item, index) => (
          <ul className="nav navbar-nav navbar-right" key={`navModel-${index}`}>
              <li className={item.style}>
                  <a href={item.link}>{item.title}</a>
              </li>
          </ul>
          ))}
      </div>
    )
  }
};

export default class Nav extends Component {
  render() {
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
              <div className="navbar-header page-scroll">
              <img className="img-responsive img-icon" src="img/icon.png" alt=""/>
                  <a className="navbar-brand navbar-brand-img" href="">React Components</a>
              </div>
              <NavItems />

          </div>
      </nav>
    )
  }
};

