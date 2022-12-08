import React from 'react';
import './about.css';
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {FaUserGraduate} from 'react-icons/fa'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h3>Experience</h3>
              <h3>_______</h3>
              <small>2+ Years Developing</small>
            </article>

            <article className="about__card">
              <FaUserGraduate className="about__icon"/>
              <h3>Degree</h3>
              <h3>_______</h3>
              <small>Artificial Intelligence and Data Science (2024)</small>
            </article>

            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon"/>
              <h3>Projects</h3>
              <h3>_______</h3>
              <small>50+ End to End Projects</small>
            </article>
          </div>

          <p>I'm Andre Isaac Nazareth a third year engineering student pursuing Artificial Intelligence and Data Science. I have ever since venture deeper into this field and went onward to intern at several other companies as a Data Science or Machine Learning Intern. Really happy with the way my career has advanced into such an interesting field of study and research and I'm looking forward to more adventurous and exciting things to learn developing in this field!</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default about