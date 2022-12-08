import React from 'react';
import './experience.css';
import {MdVerified} from 'react-icons/md'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__machine_learning">
          <h3>Machine Learning</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>Computer Vision</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
            <div>
              <h4>Deep Learning</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>Generative AI</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>Reinforcement Learning</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>Natural Language Processing</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>


        <div className="experience__data_science">
          <h3>Data Science</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>Segmentation</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>Web Scraping</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>Data Visualization</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>Statistics</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>Data Structure and Algorithms</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience