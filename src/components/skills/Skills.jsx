import React from 'react'
import './skills.css'
import CSS from '../../assets/css3.svg'
import Figma from '../../assets/figma.svg'
import Javascript from '../../assets/javascript.svg'
import Nodejs from '../../assets/nodejs.svg'
import ReactJs from '../../assets/react.svg'
import Tailwind from '../../assets/tailwindcss.svg'
import BootStrap  from '../../assets/Bootstrap_logo.svg.png'
import Html from '../../assets/html1.png'

const SkillsData = [
  {
    id: 1,
    imge: CSS,
    title: "css",
    dis: "User Interface & Styling"
  },
  {
    id: 2,
    imge: Figma,
    title: "figma",
    dis: "Design Tools"
  },
  {
    id: 3,
    imge: Javascript,
    title: "javascript",
    dis: "Programming Language"
    },
    {
      id: 4,
      imge: Nodejs,
      title: "nodejs",
      dis: "Back-End"
    },
    {
      id: 5,
      imge: ReactJs,
      title: "react",
      dis: "FrameWork"
    },
    {
      id: 6,
      imge: Tailwind,
      title: "tailwind",
      dis: "CSS Framework"
    },
    {
      id: 7,
      imge: BootStrap,
      title: "bootstrap",
      dis: "CSS Framework"
    },{
      id: 8,
      imge: Html,
      title: "html",
      dis: " Structure of Web Pages "
    }

]

function Skills() {
  return (
    <section className="skills" id="skills" >
      <div className="top-section">
        <h5>What Skills I Have</h5>
        <h2>My Expreience</h2>
        
      </div>
      <div className="container container-skills">
        {SkillsData.map(({ id, imge, title, dis})=>(
          <article key={id} className='card-skill'>
          <div className="icon">
            <img src={imge} alt="" />
          </div>
          <div className="content">
            <h4>{title}</h4>
            <div className="text-light">{dis}</div>
          </div>
        </article>

        ))}
        
      </div>
    </section>
  )
}

export default Skills