import React from 'react'
import './experience.css'

import {MdStars} from 'react-icons/md'

const Experience = () => {
  return (
    <section id='experiences'>
      <h5>Principais Skills</h5>
      <h2>Hard Skills</h2>

      <div className="container experience_container">

        {/* FRONT-END */}
        <div className="experience_frontend">
          <h3>Front-End</h3>

          <div className="experience_content">
            <article className='experience_details'>
              <MdStars className='experience_details-icon'/>
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>Experiente</small>
              </div>
            </article>

            <article className='experience_details'>
              <MdStars className='experience_details-icon'/>
              <div>
                <h4>CSS3</h4>
                <small className='text-light'>Experiente</small>
              </div>
            </article>

            <article className='experience_details'>
              <MdStars className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experiente</small>
              </div>
            </article>

            <article className='experience_details'>
              <MdStars className='experience_details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experience_details'>
              <MdStars className='experience_details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experience_details'>
              <MdStars className='experience_details-icon'/>
              <div>
                <h4>JQuery</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
          </div>
        </div>

        {/* DESIGN */}
        <div className="experience_design">
        <h3>Design</h3>

          <div className="experience_content">
            <article className='experience_details'>
              <MdStars className='experience_details-icon'/>
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experience_details'>
              <MdStars className='experience_details-icon'/>
              <div>
                <h4>Canva</h4>
                <small className='text-light'>Experiente</small>
              </div>
            </article>

            <article className='experience_details'>
              <MdStars className='experience_details-icon'/>
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experience_details'>
              <MdStars className='experience_details-icon'/>
              <div>
                <h4>UI/UX</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
          </div>
        </div>

        {/* BACK-END */}
        <div className="experience_backend">
          <h3>Back-End</h3>

            <div className="experience_content">
              <article className='experience_details'>
                <MdStars className='experience_details-icon'/>
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Intermediário</small>
                </div>
              </article>

              <article className='experience_details'>
                <MdStars className='experience_details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Intermediário</small>
                </div>
              </article>

              <article className='experience_details'>
                <MdStars className='experience_details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experiente</small>
                </div>
              </article>

              <article className='experience_details'>
                <MdStars className='experience_details-icon'/>
                <div>
                  <h4>C#</h4>
                  <small className='text-light'>Básico</small>
                </div>
              </article>
              
              <article className='experience_details'>
                <MdStars className='experience_details-icon'/>
                <div>
                  <h4>C++</h4>
                  <small className='text-light'>Básico</small>
                </div>
              </article>
            </div>
        </div>

        {/* BANCO DE DADOS */}
        <div className="experience_db">
          <h3>Banco de Dados</h3>

            <div className="experience_content">
              <article className='experience_details'>
                <MdStars className='experience_details-icon'/>
                <div>
                  <h4>SQL</h4>
                  <small className='text-light'>Intermediário</small>
                </div>
              </article>

              <article className='experience_details'>
                <MdStars className='experience_details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Intermediário</small>
                </div>
              </article>

              <article className='experience_details'>
                <MdStars className='experience_details-icon'/>
                <div>
                  <h4>NoSQL</h4>
                  <small className='text-light'>Básico</small>
                </div>
              </article>

              <article className='experience_details'>
                <MdStars className='experience_details-icon'/>
                <div>
                  <h4>Oracle</h4>
                  <small className='text-light'>Básico</small>
                </div>
              </article>
            </div>
        </div>        
      </div>
    </section>
  )
}

export default Experience