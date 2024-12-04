
import './Combined.css'

import Navbar from './components/home/Navbar'
import UserCard from './components/home/UserCard'
import Projects from './components/home/Projects'
import Pagevisits from './components/home/Pagevisits'
import Calender from './components/home/Calender'


const Combined = () => {
  return (
      <>
        
      <Navbar className="fixed" />
      
      <div id="about-me">
        <UserCard />
      </div>
      <Pagevisits />
      <div id="projects">
        <Projects />
      </div>
      <div id="calendar">
        <Calender />
      </div>
      </>
  )
}

export default Combined
