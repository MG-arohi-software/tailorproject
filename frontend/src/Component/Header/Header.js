import React from 'react'
import './Header.css'
import Nav from './logo.png'
import profile from './profile-user (1).png'
import log from './logout.png';
import home from './home.png'
import About from './id-card.png'
import invoice from './bill.png'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

export default function Header() {
  
  const navigate = useNavigate();

  const logout = () => {

  localStorage.clear();
    navigate("/")
  }

  return (
    <>
     

      {/* new */}

      <>



        <>
          <nav class="navbar HEADER fixed-top">
            <div class="container-fluid">
              <a class="navbar-brand" href="/home"><img src={Nav} className="nimg" /></a>

           

              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="offcanvas offcanvas-end HEADER" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header HEADER">
                  <a class="navbar-brand" href="/home"><img src={Nav} className="nimg" /></a>
                  {/* <img src={logo} className='navlogo' />    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Digital Library</h5> */}
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div class="offcanvas-body HEADER">

                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <a class="nav-link active co fs-4" aria-current="page" href="/profile"><img src={profile} className="proImg mx-3" />Profile </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active co fs-4" href="/home"><img src={home} className="proImg mx-3"></img> Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active co fs-4" href="/about"> <img src={About} className="proImg mx-3"></img>About</a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link active co fs-4" href="/invoice"><img src={invoice} className="proImg mx-3"></img>Invoice</a>
                    </li>

             
                    <li class="nav-item">
                      <a class="nav-link active co fs-4" href="/"><img src={log} onClick={logout} className="proImg mx-3" />Logout</a>
                    </li>
                 
                  </ul>
           
                </div>
              </div>

            </div>
          </nav>
        </>



      </>





    </>
  )
}
