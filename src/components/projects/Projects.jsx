import React from "react";
import "./projects.css";
import IMG1 from '../../assets/100.jpeg'
import IMG2 from '../../assets/101.jpeg'
import IMG3 from '../../assets/102.jpeg'

const ProjectsData =[
  {
    id:1,
    imge:IMG3,
    title:'Mini Social Media App',
    Github:'https://github.com/Eng-AhmedKamel1/Mini-Social-Media-App',
    demo :'https://eng-ahmedkamel1.github.io/Mini-Social-Media-App/'
  },{
    id:2,
    imge:IMG2,
    title:'Ecommerce Website',
    Github:'https://github.com/Eng-AhmedKamel1/E-Commerce-',
    demo :'https://eng-ahmedkamel1.github.io/E-Commerce-/'
  },
  {
    id:3,
    imge:IMG1,
    title:'To do List App',
    Github:'https://github.com/Eng-AhmedKamel1/To-do-List-App',
    demo :' https://eng-ahmedkamel1.github.io/To-do-List-App/'
  }
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="top-section">
        <h5>My Recent Works</h5>
        <h2>My Projects</h2>
      </div>
      <div className="container projects-container">
        {ProjectsData.map(({id,imge,title,Github,demo})=>(
          <article key={id} className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={imge} alt="" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio-item-btn">
            <a href={Github} target="_blank" rel="noreferrer"className="btn">
              Github
            </a>
            <a href={demo} target="_blank" rel="noreferrer"className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        ))}
        
      </div>
    </section>
  );
}

export default Projects;
