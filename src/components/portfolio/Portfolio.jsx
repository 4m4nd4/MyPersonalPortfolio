import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
import IMG4 from '../../assets/project4.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Coffee Shop',
    github: 'https://github.com/4m4nd4/CoffeeShop',
    link: 'https://4m4nd4.github.io/CoffeeShop/index_CS.html'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Hora do Dia',
    github: 'https://github.com/4m4nd4/HoraDoDia',
    link: 'https://4m4nd4.github.io/HoraDoDia/horadodia.html'
  },
  {
    id: 3,
    image: IMG3,
    title: '+Design',
    github: 'https://github.com/4m4nd4/PlusDesign',
    link: 'https://4m4nd4.github.io/PlusDesign/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Organo Princess',
    github: 'https://github.com/4m4nd4/OrganoPrincess',
    link: 'https://organo-princess.vercel.app/'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus projetos</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio_container">

        {
          data.map(({id, image, title, github, link}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>GitHub</a>
                  <a href={link} className='btn btn-primary' target='_blank' rel='noreferrer'>Link</a>
                 </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio