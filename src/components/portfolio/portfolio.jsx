import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/project1.webp'
import IMG2 from '../../assets/project2.webp'
import IMG3 from '../../assets/project3.webp'
import IMG4 from '../../assets/project4.webp'
import IMG5 from '../../assets/project5.webp'
import IMG6 from '../../assets/project6.webp'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Title 1',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Title 2',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Title 3',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Title 4',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Title 5',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Title 6',
    github: 'https://github.com',
    demo: 'https://google.com'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }


        
      </div>
    </section>
  )
}

export default portfolio