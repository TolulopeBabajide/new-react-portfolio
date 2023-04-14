import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/FEM-Manage-landing-page.png'
import IMG2 from '../../assets/Logistics-Website.png'
import IMG3 from '../../assets/Parallax-Scroll Project.png'
import IMG4 from '../../assets/Weather-app.png'
import IMG5 from '../../assets/portfolio2.png'
import IMG6 from '../../assets/docplanner.png'
import IMG7 from '../../assets/portfolio3.png'
import IMG8 from '../../assets/calculator-app.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'FEM-Manage',
    github: 'https://github.com/',
    demo: 'http://'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Logistics Landing Page',
    github: 'https://github.com/',
    demo: 'http://'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Parallax-Scroll Page',
    github: 'https://github.com/',
    demo: 'http://'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Weather App',
    github: 'https://github.com/',
    demo: 'http://'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Result Summary User Interface',
    github: 'https://github.com/',
    demo: 'http://'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Docplanner Landing Page',
    github: 'https://github.com/',
    demo: 'http://'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Bootstrap Logistics Landing Page',
    github: 'https://github.com/',
    demo: 'http://'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Calculator-app',
    github: 'https://github.com/',
    demo: 'https://sprightly-sable-cd3bb7.netlify.app'
  },

]

const Portfolio = () => {
  return (
    <section id="portfolio">
    <h5>My Recent Word</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
    {
      data.map(({id, image, title, github, demo}) =>
      {
       return ( <article key={id} className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
      <div className="portfolio__item-cta">
      <a href={github} className='btn' target='_blank'>Github</a>
        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>
      </article> )
      })
    }
    </div>
  </section>
  )
}

export default Portfolio
