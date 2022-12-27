import {  Link } from 'react-router-dom'
import account from '../Images/account.png'
import idea from '../Images/idea.png'
import skill from '../Images/skill.png'
import plane from '../Images/plane.png'
export const NavBar = () => {
  return (
    <>
          <nav className="navbar" id="nav">
              <div className="container-fluid">
                 
                      <a id="nav" className="navbar-brand mb-0 h1">Jorge L. Pérez Canales
                      <p/>
                      <span>Backend Developer Sr.</span>
                      </a>
                      
                      
                  <div className='contenedor'>   
                  <Link  to={'/AboutMe'} id='imgna'><a className="nav-link" aria-current="page" href="#"> 
                  <span><img src={account} className='icon'/></span>
                  About Me 
                  </a></Link>
                 
                  </div>
                  <div>
                  <Link to={'/Experience'}><a className="nav-link" href="#">
                  <span><img src={idea} className='icon'/></span>
                    Experience</a></Link>
                 
                  </div>
                  <div>
                  <Link to={'/Skills'}><a className="nav-link" href="#">
                  <span><img src={skill} className='icon'/></span>
                    Skills</a></Link>
                  
                  </div>
                  <div>
                  <Link to={'/ContactMe'}><a className="nav-link" href="#">
                  <span><img src={plane} className='icon'/></span>
                    Contact me</a></Link>
                  </div>

              </div>

          </nav>

    </>
  )
}
