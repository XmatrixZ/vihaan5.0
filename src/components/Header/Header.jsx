import React,{useEffect, useRef} from 'react'
import "./header.css"
import { Container } from 'reactstrap'
import {NavLink, Link} from "react-router-dom"
import logo from "../../assets/images/BlitBlockLogo.png";
import { HashLink } from 'react-router-hash-link';
const NAV__LINKS = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Influencers",
    url: "#Influencers",
  },
  {
    display: "Brands",
    url: "#Brands",
  },
  {
    display: "E-Sports",
    url: "#ESports",
  },
  {
    display: "Contact Us",
    url: "#ContactUS",
  },
  {
    display: "Team",
    url: "/team",
  },
];
const Header = () => {
  const headerRef = useRef(null);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add("header__shrink");
      }else{
        headerRef.current.classList.remove("header__shrink");
      }
    })
    return () =>{
      window.removeEventListener('scroll')
    }
  },[]);
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex gap-2 align-items-center">
              <img
                src="https://res.cloudinary.com/japnoor/image/upload/v1649685210/Echio_Logo_1_2_flvnak.png"
                alt=""
                className="logo__header"
              />
            </h2>
          </div>
          <div className="nav__menu">
            <ul className="nav__list">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.url}
                    className={(navClass) =>
                      navClass.isActive ? "active" : ""
                    }
                  >
                    <HashLink smooth to={item.url}>
                      {item.display}
                    </HashLink>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header