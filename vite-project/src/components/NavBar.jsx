import {  Link } from 'react-router-dom'
import account from '../Images/account.png'
import idea from '../Images/idea.png'
import skill from '../Images/skill.png'
import plane from '../Images/plane.png'
export const NavBar = () => {
  return (
    <>
         <header>
         <nav className='navbar' id='navbar'>
          <div className='navbar-brand'>
          <p className='title-ing'> Ing. Jorge Luis Pérez Canales</p>
          </div>
         <ul className=''>
         <li className='nav-item'>
             <Link to={'/AboutMe'}>
                <img src={account} className='icon'/>
                <a className='name'>About Me</a>
              </Link>
            </li>
            <li className='nav-item'>
             <Link to={'/Experience'}>
                <img src={idea} className='icon'/>
                <a className='name'>Experience</a>
              </Link>
            </li>
            <li className='nav-item'>
             <Link to={'/Skills'}>
                <img src={skill} className='icon'/>
                <a className='name'>Skills</a>
              </Link>
            </li>
            <li className='nav-item'>
             <Link to={'/ContactMe'}>
                <img src={plane} className='icon'/>
                <a className='name'>Contact Me</a>
              </Link>
            </li>
         </ul>
        </nav>
    </header>

    </>
  )
}

{/*
          <ul>
          <div className='Derecha'>
           
           
           
            
            </div>
</ul>*/}