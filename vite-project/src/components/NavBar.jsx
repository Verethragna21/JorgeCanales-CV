import {  Link } from 'react-router-dom'
import account from '../Images/account.png'
import idea from '../Images/idea.png'
import skill from '../Images/skill.png'
import plane from '../Images/plane.png'
export const NavBar = () => {
  return (
    <>
         <header>
         <nav>
         <div className='header-name'>
        <p>Jorge Luis Perez Canales</p>
          <span>Sr Back-end Developer</span>
          </div>
        <section className="header-icon-container">
            <div className="icons">
            <Link to={'/AboutMe'}><a href="/"><img src={account}/></a> </Link> 
            <Link to={'/Experience'}>   <a href="/"><img src={idea}/></a> </Link> 
            <Link to={'/Skills'}> <a href="/"><img src={skill}/></a> </Link> 
            <Link to={'/ContactMe'}>    <a href="/"><img src={plane}/></a> </Link> 
            </div>
            <div className="header-span-container">
               <Link to={'/AboutMe'}> <span>About Me</span> </Link>
               <Link to={'/Experience'}> <span>Experience</span> </Link>
               <Link to={'/Skills'}> <span>skills</span> </Link>
               <Link to={'/ContactMe'}><span>Contact Me</span></Link> 
            </div>
        </section>    
        </nav>
    </header>

    </>
  )
}
